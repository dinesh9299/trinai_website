// src/pages/Categories.jsx - PRODUCTION READY (FIXED MATCHING)
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ScrollTop } from "primereact/scrolltop";
import { ChevronRight } from "lucide-react";
import trinai5 from "../images/trinai-5.jpg";

const API_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

// 🔥 GLOBAL CONSTANTS - EXACT MATCH TO YOUR STRAPI cameraType VALUES
const CAMERA_TYPE_MAP = {
  "mobile-dvr": "Mobile",
  "bullet-cameras": "Bullet",
  "eyeball-cameras": "Eyeball",
  "dome-cameras": "Dome",
  "ptz-cameras": "Ptz",
  "network-video-recorder": "Network",
  server: "Server",
  "ai-based-face-recognition": "Ai",
  "trinai-facial-biostand": "Ai",
  display: "Display",
  "smart-gpu-with-ai-camera": "Smart GPU",
  "thermal-cameras": "Thermal",
};

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[/]+/g, "-") // Replace slashes with dashes FIRST
    .replace(/[^\w\s-]/g, "") // Then remove other special chars
    .replace(/[\s_-]+/g, "-") // Then normalize dashes
    .replace(/^-+|-+$/g, "");
};

// 🔥 Convert product type slug to multiple possible name formats for matching
const getProductTypeMatchers = (slug) => {
  const words = slug.split("-");

  // Format 1: Title Case with spaces (e.g., "16 32 Channel Input Nvr")
  const titleCaseWithSpaces = words
    .map((word) => {
      if (word.match(/^\d+mp$/i)) return word.toUpperCase();
      if (word.match(/^\d+ch$/i)) return word.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  // Format 2: Title Case with dashes (e.g., "16-32-Channel-Input-Nvr")
  const titleCaseWithDashes = words
    .map((word) => {
      if (word.match(/^\d+mp$/i)) return word.toUpperCase();
      if (word.match(/^\d+ch$/i)) return word.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("-");

  // Format 3: Lowercase with spaces
  const lowerCaseWithSpaces = slug.replace(/-/g, " ");

  // Format 4: Lowercase with dashes
  const lowerCaseWithDashes = slug;

  // Format 5: Compact (no separators)
  const compact = words.join("");

  // Format 6: WITH SLASHES for patterns like "16/32-Channel"
  // Convert "16-32-channel-input-nvr" → "16/32/Channel/Input/Nvr"
  let withSlashes = slug;
  // Check if it starts with pattern like "16-32" and convert to "16/32"
  if (slug.match(/^\d+-\d+/)) {
    withSlashes = slug.replace(/^(\d+)-(\d+)/, "$1/$2");
  }
  const slashMatcher = withSlashes
    .split("-")
    .map((word, index) => {
      if (index === 0) return word; // Keep "16/32" as is
      if (word.match(/^\d+mp$/i)) return word.toUpperCase();
      if (word.match(/^\d+ch$/i)) return word.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("/");

  return [
    titleCaseWithSpaces,
    titleCaseWithDashes,
    lowerCaseWithSpaces,
    lowerCaseWithDashes,
    compact,
    slashMatcher,
  ];
};

const Categories = () => {
  const { category, productType, model, id } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      if (!category) {
        setFetchError("No category specified");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setFetchError(null);

        console.log("🔍 Loading products for:", {
          category,
          productType,
          model,
          id,
        });

        // ✅ Use GLOBAL constant with EXACT Strapi cameraType values
        const categoryKeyword = CAMERA_TYPE_MAP[category];

        if (!categoryKeyword) {
          console.error("❌ No cameraType mapping for category:", category);
          setFetchError(`Unknown category: ${category}`);
          setLoading(false);
          return;
        }

        console.log("🎯 Using cameraType filter:", categoryKeyword);

        let products = [];

        // Step 1: Fetch by cameraType only (EXACT match)
        let apiUrl = `${API_URL}/api/products?populate=*&filters[cameraType][$eq]=${categoryKeyword}`;
        console.log("🔗 Step 1 - Base API URL:", apiUrl);

        let response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Strapi error ${response.status}`);
        let data = await response.json();
        let baseProducts = data.data || [];
        console.log(
          `✅ Step 1 - Found ${baseProducts.length} products with cameraType=${categoryKeyword}`,
        );

        // Step 2: Filter by productType if provided
        if (productType) {
          const matchers = getProductTypeMatchers(productType);
          console.log("🎯 Product type matchers:", matchers);

          products = baseProducts.filter((product) => {
            const productName = (product.name || "").toLowerCase();

            // Check if ANY matcher is contained in the product name
            return matchers.some((matcher) => {
              const normalizedMatcher = matcher.toLowerCase();
              return productName.includes(normalizedMatcher);
            });
          });

          console.log(
            `✅ Step 2 - Filtered to ${products.length} products matching "${productType}"`,
          );
        } else {
          products = baseProducts;
        }

        // Step 3: Filter by exact model if provided
        if (model) {
          console.log("🎯 Filtering by model:", model);
          products = products.filter((p) => p.model === model);
          console.log(
            `✅ Step 3 - Filtered to ${products.length} products with model="${model}"`,
          );
        }

        // Step 4: Filter by ID if provided
        if (id) {
          console.log("🎯 Filtering by ID:", id);
          products = products.filter(
            (p) =>
              String(p.id) === String(id) ||
              String(p.documentId) === String(id),
          );
          console.log(
            `✅ Step 4 - Filtered to ${products.length} products with id="${id}"`,
          );
        }

        // 🔥 FALLBACK: If no results, try case-insensitive cameraType
        if (products.length === 0 && !id) {
          console.log("⚠️ No results, trying case-insensitive fallback...");

          const fallbackUrl = `${API_URL}/api/products?populate=*&filters[cameraType][$containsi]=${categoryKeyword.toLowerCase()}`;
          console.log("🔄 Fallback API URL:", fallbackUrl);

          const fallbackResponse = await fetch(fallbackUrl);
          if (fallbackResponse.ok) {
            const fallbackData = await fallbackResponse.json();
            let fallbackProducts = fallbackData.data || [];

            if (productType) {
              const matchers = getProductTypeMatchers(productType);
              fallbackProducts = fallbackProducts.filter((product) => {
                const productName = (product.name || "").toLowerCase();
                return matchers.some((matcher) => {
                  const normalizedMatcher = matcher.toLowerCase();
                  return productName.includes(normalizedMatcher);
                });
              });
            }

            if (fallbackProducts.length > 0) {
              products = fallbackProducts;
              console.log(
                `🎉 Fallback succeeded! Using ${products.length} products`,
              );
            }
          }
        }

        // Log sample for debugging
        if (products[0]) {
          console.log("📦 Sample product:", {
            id: products[0].id,
            name: products[0].name,
            model: products[0].model,
            cameraType: products[0].cameraType,
          });
        }

        setProducts(products);

        // Fetch category info for page title
        const catResponse = await fetch(
          `${API_URL}/api/categories?filters[slug][$eq]=${category}&populate=*`,
        );
        if (catResponse.ok) {
          const catData = await catResponse.json();
          if (catData.data?.[0]) {
            setCategoryData(catData.data[0]);
            console.log("📁 Category loaded:", catData.data[0].name);
          }
        }
      } catch (error) {
        console.error("❌ Error loading products:", error);
        setFetchError(error.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [category, productType, model, id]);

  // 🔴 LOADING STATE
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#00ADE7] border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-700 font-semibold">Loading products...</p>
        </div>
      </div>
    );
  }

  // 🔴 ERROR STATE
  if (fetchError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-gray-100">
        <div className="text-center max-w-lg p-8 bg-white rounded-2xl shadow-2xl">
          <div className="text-red-500 text-6xl mb-4">🚫</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Error Loading Products
          </h2>
          <p className="text-red-600 mb-4">{fetchError}</p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 text-left mb-6 rounded">
            <p className="text-yellow-700 text-sm font-medium mb-2">
              🔍 Debug Info:
            </p>
            <ul className="text-yellow-600 text-xs space-y-1">
              <li>
                • Category: <strong>{category || "undefined"}</strong>
              </li>
              <li>
                • Expected cameraType:{" "}
                <strong>{CAMERA_TYPE_MAP[category] || "N/A"}</strong>
              </li>
              <li>• API: {API_URL}</li>
            </ul>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={() => navigate("/products")}
              className="px-6 py-3 bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white rounded-full font-semibold hover:opacity-90"
            >
              Back to Products
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-100 text-blue-700 rounded-full font-semibold hover:bg-blue-200"
            >
              🔄 Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  const getPageTitle = () => {
    if (id) {
      return products[0]?.name || "Product Details";
    } else if (model) {
      return `${model} Models`;
    } else if (productType) {
      return productType
        .split("-")
        .map((word) => {
          if (word.match(/^\d+mp$/i)) return word.toUpperCase();
          if (word.match(/^\d+ch$/i)) return word.toUpperCase();
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
    }
    return (
      categoryData?.name ||
      category
        ?.split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  };

  const getPageDescription = () => {
    if (id) {
      return products[0]?.productType || "";
    } else if (model) {
      return `Browse all ${model} variants`;
    } else if (productType) {
      return `Browse all ${productType.split("-").join(" ")} models`;
    }
    return categoryData?.description || "";
  };

  return (
    <div>
      {/* Banner */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${trinai5})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-white text-3xl sm:text-4xl font-bold tracking-wide mb-2">
              {getPageTitle()}
            </h1>
            {getPageDescription() && (
              <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
                {getPageDescription()}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="bg-white grid lg:grid-cols-4 md:grid-cols-2 gap-8 p-10">
        {products.length > 0 ? (
          products.map((product) => {
            const mediaObj = product.picture;
            let productImage =
              "https://via.placeholder.com/300x300/f3f4f6/9ca3af?text=No+Image";

            if (mediaObj) {
              if (Array.isArray(mediaObj) && mediaObj[0]?.url) {
                productImage = `${API_URL}${mediaObj[0].url}`;
              } else if (typeof mediaObj === "object" && mediaObj.url) {
                productImage = `${API_URL}${mediaObj.url}`;
              }
            }

            const productId = product.id || product.documentId;
            const productSlug = slugify(product.name || "product");
            const productModel = product.model;

            return (
              <div
                key={productId}
                onClick={() => {
                  if (productId) {
                    navigate(
                      `/products/${category}/${productSlug}/${productModel}/${productId}`,
                    );
                  }
                }}
                className="group border rounded-xl p-4 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105 bg-white"
              >
                <div className="min-h-52 flex justify-center items-center overflow-hidden">
                  <img
                    src={productImage}
                    alt={product.model || product.name}
                    className="h-40 object-contain transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/300x300/f3f4f6/9ca3af?text=No+Image";
                    }}
                  />
                </div>
                <hr className="my-3" />
                <div className="text-gray-800 font-semibold text-center">
                  {product.model || "N/A"}
                </div>
                <div className="text-center space-y-2">
                  <div className="text-gray-600 font-medium text-sm">
                    {product.productType || "Product"}
                  </div>
                  <div className="flex justify-center pt-2">
                    <div className="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] shadow-md transition-all duration-300 group-hover:scale-110">
                      View More
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500 text-lg">
              No products found in this category.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Category:{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">{category}</code>
              {productType && ` / ${productType}`}
              {model && ` / ${model}`}
            </p>
            <p className="text-xs text-gray-300 mt-1">
              Expected cameraType:{" "}
              <strong>{CAMERA_TYPE_MAP[category] || "N/A"}</strong>
            </p>
            {(productType || model) && (
              <button
                onClick={() => navigate(`/products/${category}`)}
                className="mt-4 px-6 py-2 bg-[#00ADE7] text-white rounded-full hover:opacity-90"
              >
                View All {category?.split("-").join(" ")} Products
              </button>
            )}
          </div>
        )}
      </div>

      <ScrollTop
        target="window"
        threshold={100}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center shadow-lg hover:scale-125 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer"
        icon={
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        }
      />
    </div>
  );
};

export default Categories;
