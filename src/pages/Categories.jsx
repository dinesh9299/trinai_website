// // src/pages/Categories.jsx - PRODUCTION READY (FIXED MATCHING)
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { ScrollTop } from "primereact/scrolltop";
// import { ChevronRight } from "lucide-react";
// import trinai5 from "../images/trinai-5.jpg";

// const API_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

// // 🔥 GLOBAL CONSTANTS - EXACT MATCH TO YOUR STRAPI cameraType VALUES
// const CAMERA_TYPE_MAP = {
//   "mobile-dvr": "Mobile",
//   "bullet-cameras": "Bullet",
//   "eyeball-cameras": "Eyeball",
//   "dome-cameras": "Dome",
//   "ptz-cameras": "Ptz",
//   "network-video-recorder": "Network",
//   server: "Server",
//   "ai-based-face-recognition": "Ai",
//   "trinai-facial-biostand": "Ai",
//   display: "Display",
//   "smart-gpu-with-ai-camera": "Smart GPU",
//   "thermal-cameras": "Thermal",
// };

// const slugify = (text) => {
//   return text
//     .toString()
//     .toLowerCase()
//     .trim()
//     .replace(/[/]+/g, "-") // Replace slashes with dashes FIRST
//     .replace(/[^\w\s-]/g, "") // Then remove other special chars
//     .replace(/[\s_-]+/g, "-") // Then normalize dashes
//     .replace(/^-+|-+$/g, "");
// };

// // 🔥 Convert product type slug to multiple possible name formats for matching
// const getProductTypeMatchers = (slug) => {
//   const words = slug.split("-");

//   // Format 1: Title Case with spaces (e.g., "16 32 Channel Input Nvr")
//   const titleCaseWithSpaces = words
//     .map((word) => {
//       if (word.match(/^\d+mp$/i)) return word.toUpperCase();
//       if (word.match(/^\d+ch$/i)) return word.toUpperCase();
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join(" ");

//   // Format 2: Title Case with dashes (e.g., "16-32-Channel-Input-Nvr")
//   const titleCaseWithDashes = words
//     .map((word) => {
//       if (word.match(/^\d+mp$/i)) return word.toUpperCase();
//       if (word.match(/^\d+ch$/i)) return word.toUpperCase();
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join("-");

//   // Format 3: Lowercase with spaces
//   const lowerCaseWithSpaces = slug.replace(/-/g, " ");

//   // Format 4: Lowercase with dashes
//   const lowerCaseWithDashes = slug;

//   // Format 5: Compact (no separators)
//   const compact = words.join("");

//   // Format 6: WITH SLASHES for patterns like "16/32-Channel"
//   // Convert "16-32-channel-input-nvr" → "16/32/Channel/Input/Nvr"
//   let withSlashes = slug;
//   // Check if it starts with pattern like "16-32" and convert to "16/32"
//   if (slug.match(/^\d+-\d+/)) {
//     withSlashes = slug.replace(/^(\d+)-(\d+)/, "$1/$2");
//   }
//   const slashMatcher = withSlashes
//     .split("-")
//     .map((word, index) => {
//       if (index === 0) return word; // Keep "16/32" as is
//       if (word.match(/^\d+mp$/i)) return word.toUpperCase();
//       if (word.match(/^\d+ch$/i)) return word.toUpperCase();
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join("/");

//   return [
//     titleCaseWithSpaces,
//     titleCaseWithDashes,
//     lowerCaseWithSpaces,
//     lowerCaseWithDashes,
//     compact,
//     slashMatcher,
//   ];
// };

// const Categories = () => {
//   const { category, productType, model, id } = useParams();
//   const [products, setProducts] = useState([]);
//   const [categoryData, setCategoryData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [fetchError, setFetchError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     const loadProducts = async () => {
//       if (!category) {
//         setFetchError("No category specified");
//         setLoading(false);
//         return;
//       }

//       try {
//         setLoading(true);
//         setFetchError(null);

//         console.log("🔍 Loading products for:", {
//           category,
//           productType,
//           model,
//           id,
//         });

//         // ✅ Use GLOBAL constant with EXACT Strapi cameraType values
//         const categoryKeyword = CAMERA_TYPE_MAP[category];

//         if (!categoryKeyword) {
//           console.error("❌ No cameraType mapping for category:", category);
//           setFetchError(`Unknown category: ${category}`);
//           setLoading(false);
//           return;
//         }

//         console.log("🎯 Using cameraType filter:", categoryKeyword);

//         let products = [];

//         // Step 1: Fetch by cameraType only (EXACT match)
//         let apiUrl = `${API_URL}/api/products?populate=*&filters[cameraType][$eq]=${categoryKeyword}`;
//         console.log("🔗 Step 1 - Base API URL:", apiUrl);

//         let response = await fetch(apiUrl);
//         if (!response.ok) throw new Error(`Strapi error ${response.status}`);
//         let data = await response.json();
//         let baseProducts = data.data || [];
//         console.log(
//           `✅ Step 1 - Found ${baseProducts.length} products with cameraType=${categoryKeyword}`,
//         );

//         // Step 2: Filter by productType if provided
//         if (productType) {
//           const matchers = getProductTypeMatchers(productType);
//           console.log("🎯 Product type matchers:", matchers);

//           products = baseProducts.filter((product) => {
//             const productName = (product.name || "").toLowerCase();

//             // Check if ANY matcher is contained in the product name
//             return matchers.some((matcher) => {
//               const normalizedMatcher = matcher.toLowerCase();
//               return productName.includes(normalizedMatcher);
//             });
//           });

//           console.log(
//             `✅ Step 2 - Filtered to ${products.length} products matching "${productType}"`,
//           );
//         } else {
//           products = baseProducts;
//         }

//         // Step 3: Filter by exact model if provided
//         if (model) {
//           console.log("🎯 Filtering by model:", model);
//           products = products.filter((p) => p.model === model);
//           console.log(
//             `✅ Step 3 - Filtered to ${products.length} products with model="${model}"`,
//           );
//         }

//         // Step 4: Filter by ID if provided
//         if (id) {
//           console.log("🎯 Filtering by ID:", id);
//           products = products.filter(
//             (p) =>
//               String(p.id) === String(id) ||
//               String(p.documentId) === String(id),
//           );
//           console.log(
//             `✅ Step 4 - Filtered to ${products.length} products with id="${id}"`,
//           );
//         }

//         // 🔥 FALLBACK: If no results, try case-insensitive cameraType
//         if (products.length === 0 && !id) {
//           console.log("⚠️ No results, trying case-insensitive fallback...");

//           const fallbackUrl = `${API_URL}/api/products?populate=*&filters[cameraType][$containsi]=${categoryKeyword.toLowerCase()}`;
//           console.log("🔄 Fallback API URL:", fallbackUrl);

//           const fallbackResponse = await fetch(fallbackUrl);
//           if (fallbackResponse.ok) {
//             const fallbackData = await fallbackResponse.json();
//             let fallbackProducts = fallbackData.data || [];

//             if (productType) {
//               const matchers = getProductTypeMatchers(productType);
//               fallbackProducts = fallbackProducts.filter((product) => {
//                 const productName = (product.name || "").toLowerCase();
//                 return matchers.some((matcher) => {
//                   const normalizedMatcher = matcher.toLowerCase();
//                   return productName.includes(normalizedMatcher);
//                 });
//               });
//             }

//             if (fallbackProducts.length > 0) {
//               products = fallbackProducts;
//               console.log(
//                 `🎉 Fallback succeeded! Using ${products.length} products`,
//               );
//             }
//           }
//         }

//         // Log sample for debugging
//         if (products[0]) {
//           console.log("📦 Sample product:", {
//             id: products[0].id,
//             name: products[0].name,
//             model: products[0].model,
//             cameraType: products[0].cameraType,
//           });
//         }

//         setProducts(products);

//         // Fetch category info for page title
//         const catResponse = await fetch(
//           `${API_URL}/api/categories?filters[slug][$eq]=${category}&populate=*`,
//         );
//         if (catResponse.ok) {
//           const catData = await catResponse.json();
//           if (catData.data?.[0]) {
//             setCategoryData(catData.data[0]);
//             console.log("📁 Category loaded:", catData.data[0].name);
//           }
//         }
//       } catch (error) {
//         console.error("❌ Error loading products:", error);
//         setFetchError(error.message);
//         setProducts([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadProducts();
//   }, [category, productType, model, id]);

//   // 🔴 LOADING STATE
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#00ADE7] border-t-transparent mx-auto mb-4"></div>
//           <p className="text-gray-700 font-semibold">Loading products...</p>
//         </div>
//       </div>
//     );
//   }

//   // 🔴 ERROR STATE
//   if (fetchError) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-gray-100">
//         <div className="text-center max-w-lg p-8 bg-white rounded-2xl shadow-2xl">
//           <div className="text-red-500 text-6xl mb-4">🚫</div>
//           <h2 className="text-2xl font-bold text-gray-800 mb-3">
//             Error Loading Products
//           </h2>
//           <p className="text-red-600 mb-4">{fetchError}</p>

//           <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 text-left mb-6 rounded">
//             <p className="text-yellow-700 text-sm font-medium mb-2">
//               🔍 Debug Info:
//             </p>
//             <ul className="text-yellow-600 text-xs space-y-1">
//               <li>
//                 • Category: <strong>{category || "undefined"}</strong>
//               </li>
//               <li>
//                 • Expected cameraType:{" "}
//                 <strong>{CAMERA_TYPE_MAP[category] || "N/A"}</strong>
//               </li>
//               <li>• API: {API_URL}</li>
//             </ul>
//           </div>

//           <div className="flex gap-3 justify-center flex-wrap">
//             <button
//               onClick={() => navigate("/products")}
//               className="px-6 py-3 bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white rounded-full font-semibold hover:opacity-90"
//             >
//               Back to Products
//             </button>
//             <button
//               onClick={() => window.location.reload()}
//               className="px-6 py-3 bg-blue-100 text-blue-700 rounded-full font-semibold hover:bg-blue-200"
//             >
//               🔄 Retry
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const getPageTitle = () => {
//     if (id) {
//       return products[0]?.name || "Product Details";
//     } else if (model) {
//       return `${model} Models`;
//     } else if (productType) {
//       return productType
//         .split("-")
//         .map((word) => {
//           if (word.match(/^\d+mp$/i)) return word.toUpperCase();
//           if (word.match(/^\d+ch$/i)) return word.toUpperCase();
//           return word.charAt(0).toUpperCase() + word.slice(1);
//         })
//         .join(" ");
//     }
//     return (
//       categoryData?.name ||
//       category
//         ?.split("-")
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ")
//     );
//   };

//   const getPageDescription = () => {
//     if (id) {
//       return products[0]?.productType || "";
//     } else if (model) {
//       return `Browse all ${model} variants`;
//     } else if (productType) {
//       return `Browse all ${productType.split("-").join(" ")} models`;
//     }
//     return categoryData?.description || "";
//   };

//   return (
//     <div>
//       {/* Banner */}
//       <div className="relative h-[50vh] w-full overflow-hidden">
//         <div
//           className="absolute inset-0 bg-fixed bg-center bg-cover"
//           style={{ backgroundImage: `url(${trinai5})` }}
//         ></div>
//         <div className="absolute inset-0 bg-black bg-opacity-60"></div>
//         <div className="relative z-10 flex items-center justify-center h-full">
//           <div className="text-center px-4">
//             <h1 className="text-white text-3xl sm:text-4xl font-bold tracking-wide mb-2">
//               {getPageTitle()}
//             </h1>
//             {getPageDescription() && (
//               <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
//                 {getPageDescription()}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div className="bg-white grid lg:grid-cols-4 md:grid-cols-2 gap-8 p-10">
//         {products.length > 0 ? (
//           products.map((product) => {
//             const mediaObj = product.picture;
//             let productImage =
//               "https://via.placeholder.com/300x300/f3f4f6/9ca3af?text=No+Image";

//             if (mediaObj) {
//               if (Array.isArray(mediaObj) && mediaObj[0]?.url) {
//                 productImage = `${API_URL}${mediaObj[0].url}`;
//               } else if (typeof mediaObj === "object" && mediaObj.url) {
//                 productImage = `${API_URL}${mediaObj.url}`;
//               }
//             }

//             const productId = product.id || product.documentId;
//             const productSlug = slugify(product.name || "product");
//             const productModel = product.model;

//             return (
//               <div
//                 key={productId}
//                 onClick={() => {
//                   if (productId) {
//                     navigate(
//                       `/products/${category}/${productSlug}/${productModel}/${productId}`,
//                     );
//                   }
//                 }}
//                 className="group border rounded-xl p-4 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105 bg-white"
//               >
//                 <div className="min-h-52 flex justify-center items-center overflow-hidden">
//                   <img
//                     src={productImage}
//                     alt={product.model || product.name}
//                     className="h-40 object-contain transition-transform duration-300 group-hover:scale-110"
//                     onError={(e) => {
//                       e.target.src =
//                         "https://via.placeholder.com/300x300/f3f4f6/9ca3af?text=No+Image";
//                     }}
//                   />
//                 </div>
//                 <hr className="my-3" />
//                 <div className="text-gray-800 font-semibold text-center">
//                   {product.model || "N/A"}
//                 </div>
//                 <div className="text-center space-y-2">
//                   <div className="text-gray-600 font-medium text-sm">
//                     {product.productType || "Product"}
//                   </div>
//                   <div className="flex justify-center pt-2">
//                     <div className="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] shadow-md transition-all duration-300 group-hover:scale-110">
//                       View More
//                       <ChevronRight className="w-4 h-4" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           <div className="col-span-full text-center py-10">
//             <p className="text-gray-500 text-lg">
//               No products found in this category.
//             </p>
//             <p className="text-sm text-gray-400 mt-2">
//               Category:{" "}
//               <code className="bg-gray-100 px-2 py-1 rounded">{category}</code>
//               {productType && ` / ${productType}`}
//               {model && ` / ${model}`}
//             </p>
//             <p className="text-xs text-gray-300 mt-1">
//               Expected cameraType:{" "}
//               <strong>{CAMERA_TYPE_MAP[category] || "N/A"}</strong>
//             </p>
//             {(productType || model) && (
//               <button
//                 onClick={() => navigate(`/products/${category}`)}
//                 className="mt-4 px-6 py-2 bg-[#00ADE7] text-white rounded-full hover:opacity-90"
//               >
//                 View All {category?.split("-").join(" ")} Products
//               </button>
//             )}
//           </div>
//         )}
//       </div>

//       <ScrollTop
//         target="window"
//         threshold={100}
//         className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center shadow-lg hover:scale-125 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer"
//         icon={
//           <svg
//             className="w-5 h-5 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             strokeWidth="2.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M12 19V5M5 12l7-7 7 7" />
//           </svg>
//         }
//       />
//     </div>
//   );
// };

// export default Categories;

// src/pages/Categories.jsx - PRODUCTION READY (SMART GPU + STRAPI IMAGES WORKING)
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Download, Eye, FileText } from "lucide-react";
import { ScrollTop } from "primereact/scrolltop";
import { ChevronRight } from "lucide-react";
import trinai5 from "../images/trinai-5.jpg";
import { slugify } from "../utils/slugify";
// ✅ Import Smart GPU image from local folder
import smartGpuImage from "../images/smartgpu.png";

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

// 🔥 Helper: Get PDF path for Smart GPU (local file in public folder)
const getSmartGPUPdfPath = () => {
  return "/smartgpu.pdf"; // File in public folder - accessible via /smartgpu.pdf
};

// 🔥 Helper: Get media URL - handles Strapi, local public, and imported images
const getMediaUrl = (url) => {
  if (!url) return null;

  // 1. If it's an imported image (starts with /src/ or is a webpack bundle URL), return as-is
  if (url.startsWith("/src/") || url.includes("static/media/")) {
    return url;
  }

  // 2. If it's a local public file (starts with / but NOT /uploads/), return as-is
  if (url.startsWith("/") && !url.startsWith("/uploads/")) {
    return url;
  }

  // 3. If it's already an absolute URL (http/https), return as-is
  if (url.startsWith("http")) {
    return url;
  }

  // 4. Otherwise, it's a Strapi relative path - prepend API_URL
  return `${API_URL}${url}`;
};

// 🔥 Force PDF download using fetch + blob (handles local & remote URLs)
const downloadPDF = async (pdfUrl, filename) => {
  try {
    // Don't prepend API_URL for local paths
    const originalUrl =
      pdfUrl.startsWith("/src/") ||
      pdfUrl.includes("static/media/") ||
      (pdfUrl.startsWith("/") && !pdfUrl.startsWith("/uploads/"))
        ? pdfUrl
        : pdfUrl.startsWith("http")
          ? pdfUrl
          : `${API_URL}${pdfUrl}`;

    const response = await fetch(originalUrl);
    if (!response.ok)
      throw new Error(`Failed to fetch PDF: ${response.status}`);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("❌ Error downloading PDF:", error);
    // Fallback: open in new tab
    const fallbackUrl =
      pdfUrl.startsWith("/src/") ||
      pdfUrl.includes("static/media/") ||
      (pdfUrl.startsWith("/") && !pdfUrl.startsWith("/uploads/"))
        ? pdfUrl
        : pdfUrl.startsWith("http")
          ? pdfUrl
          : `${API_URL}${pdfUrl}`;
    window.open(fallbackUrl, "_blank");
  }
};

// 🔥 Convert product type slug to multiple possible name formats for matching
const getProductTypeMatchers = (slug) => {
  const words = slug.split("-");

  // Format 1: Title Case with spaces (handles acronyms like GPU, AI, NVR)
  const titleCaseWithSpaces = words
    .map((word) => {
      if (word.match(/^\d+mp$/i)) return word.toUpperCase();
      if (word.match(/^\d+ch$/i)) return word.toUpperCase();
      if (word.toLowerCase() === "gpu") return "GPU";
      if (word.toLowerCase() === "ai") return "AI";
      if (word.toLowerCase() === "nvr") return "NVR";
      if (word.toLowerCase() === "mdvr") return "MDVR";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  // Format 2: Title Case with dashes
  const titleCaseWithDashes = words
    .map((word) => {
      if (word.match(/^\d+mp$/i)) return word.toUpperCase();
      if (word.match(/^\d+ch$/i)) return word.toUpperCase();
      if (word.toLowerCase() === "gpu") return "GPU";
      if (word.toLowerCase() === "ai") return "AI";
      if (word.toLowerCase() === "nvr") return "NVR";
      if (word.toLowerCase() === "mdvr") return "MDVR";
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
  let withSlashes = slug;
  if (slug.match(/^\d+-\d+/)) {
    withSlashes = slug.replace(/^(\d+)-(\d+)/, "$1/$2");
  }
  const slashMatcher = withSlashes
    .split("-")
    .map((word, index) => {
      if (index === 0) return word;
      if (word.match(/^\d+mp$/i)) return word.toUpperCase();
      if (word.match(/^\d+ch$/i)) return word.toUpperCase();
      if (word.toLowerCase() === "gpu") return "GPU";
      if (word.toLowerCase() === "ai") return "AI";
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
  const { category, productType } = useParams();
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [preview, setPreview] = useState(true);
  const [download, setDownload] = useState(false);
  const navigate = useNavigate();

  const modelParam = searchParams.get("model");
  const idParam = searchParams.get("id");

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

        const categoryKeyword =
          CAMERA_TYPE_MAP[category.toLowerCase()] ||
          CAMERA_TYPE_MAP[category] ||
          category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

        if (!categoryKeyword) {
          setFetchError(`Unknown category: ${category}`);
          setLoading(false);
          return;
        }

        const apiUrl = `${API_URL}/api/products?populate=*&filters[cameraType][$eq]=${categoryKeyword}`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Strapi error ${response.status}`);
        const data = await response.json();
        let products = data.data || [];

        // 🔥 KEY FIX: If Smart GPU and no products found, use fallback
        const isSmartGPU = category === "smart-gpu-with-ai-camera";
        if (isSmartGPU && products.length === 0) {
          console.log(
            "⚠️ Smart GPU: No products from Strapi, using fallback data",
          );
          products = [
            {
              id: "smart-gpu-fallback",
              documentId: "smart-gpu-fallback",
              name: "Smart GPU With AI Camera",
              model: "AI-SMARTGPU-16CH",
              cameraType: "Smart GPU",
              productType: "16-Channel Hybrid Video Recorder with AI Analytics",
              keyFeatures: [
                "Support Ultra H.265/H.265/H.264 video formats",
                "16/32-channel hybrid input (AHD + IP cameras)",
                "AI-powered video analytics and smart search",
                "Supports mainstream cameras with ONVIF (Profile S/G/T) and RTSP",
                "2-ch HDMI, 1-ch VGA outputs up to 4K (3840x2160)",
                "Up to 12 Megapixel recording resolution",
                "Support RAID 0, 1, 5, 6, 10",
                "8 SATA HDDs, up to 10TB per HDD",
                "Smart GPU acceleration for AI face recognition and people counting",
                "Various fisheye dewarping modes for live view and playback",
                "Support N+1 Hot spare for redundancy",
                "ANR technology for offline network storage reliability",
                "Cloud upgrade and remote management support",
                "12V power output for accessories",
              ],
              // ✅ Use imported local image
              picture: { url: smartGpuImage },
              // ✅ Use local PDF path (starts with /)
              document: { url: getSmartGPUPdfPath() },
            },
          ];
          console.log("✅ Fallback product created for Smart GPU");
        }

        if (productType && productType !== category) {
          const matchers = getProductTypeMatchers(productType);
          products = products.filter((product) => {
            const productName = (product.name || "").toLowerCase();
            return matchers.some((matcher) =>
              productName.includes(matcher.toLowerCase()),
            );
          });
        }

        if (modelParam) {
          products = products.filter((p) => p.model === modelParam);
        }

        if (idParam) {
          products = products.filter(
            (p) =>
              String(p.id) === String(idParam) ||
              String(p.documentId) === String(idParam),
          );
        }

        setProducts(products);

        const catResponse = await fetch(
          `${API_URL}/api/categories?filters[slug][$eq]=${category}&populate=*`,
        );
        if (catResponse.ok) {
          const catData = await catResponse.json();
          if (catData.data?.[0]) setCategoryData(catData.data[0]);
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
  }, [category, productType, modelParam, idParam]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#00ADE7] border-t-transparent mx-auto mb-4"></div>
        <p className="text-gray-700 font-semibold">Loading products...</p>
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-gray-100">
        <div className="text-center max-w-lg p-8 bg-white rounded-2xl shadow-2xl">
          <div className="text-red-500 text-6xl mb-4">🚫</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Error Loading Products
          </h2>
          <p className="text-red-600 mb-4">{fetchError}</p>
          <button
            onClick={() => navigate("/products")}
            className="px-6 py-3 bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white rounded-full font-semibold hover:opacity-90"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  // 🔥 Show product details if ID is in query params AND only 1 product
  if (idParam && products.length === 1) {
    const product = products[0];
    const pdfPath = product.document?.url;
    const imagePath = product.picture?.url;

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section - Image + Key Features */}
          <div className="lg:grid grid-cols-2 gap-10">
            <div className="flex justify-center items-center">
              <img
                // ✅ Use getMediaUrl for proper path handling
                src={getMediaUrl(imagePath)}
                alt={product.model}
                className="w-full md:w-1/2 mx-auto rounded-lg shadow-lg mt-4 object-contain"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/400x400?text=No+Image")
                }
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black mb-4">
                {product.model} - {product.name}
              </h1>
              <h2 className="text-xl font-semibold mt-4 text-black">
                Key Features:
              </h2>
              <ul className="list-disc ml-6 mt-5 space-y-2">
                {product.keyFeatures?.map((feature, index) => (
                  <li
                    key={index}
                    className="text-gray-600 flex items-start gap-2"
                  >
                    <span className="text-[#00ADE7] mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ✅ PDF Details Section - BELOW Key Features */}
          {pdfPath && (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mt-8">
              <div className="bg-gradient-to-r from-[#00ADE7] to-[#305292] px-8 py-6">
                <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                  <FileText className="w-8 h-8" /> Product Details
                </h3>
              </div>

              <div className="bg-slate-100 px-4 sm:px-8 py-4 sm:py-6">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <button
                    className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      preview
                        ? "bg-white text-[#07518a] shadow-md"
                        : "text-gray-600 hover:bg-white/50"
                    }`}
                    onClick={() => {
                      setDownload(false);
                      setPreview(true);
                    }}
                  >
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-[#07518a]" />{" "}
                    Show Preview
                  </button>
                  <button
                    className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      download
                        ? "bg-white text-[#07518a] shadow-md"
                        : "text-gray-600 hover:bg-white/50"
                    }`}
                    onClick={() => {
                      setPreview(false);
                      setDownload(true);
                    }}
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" /> Download
                  </button>
                </div>
              </div>

              <div className="py-6 sm:py-8 px-4 sm:px-8 lg:px-12">
                {preview && !download && pdfPath && (
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden shadow-inner">
                    <div className="w-full min-h-[600px]">
                      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
                        <Viewer
                          // ✅ Use getMediaUrl for proper PDF path handling
                          fileUrl={getMediaUrl(pdfPath)}
                        />
                      </Worker>
                    </div>
                  </div>
                )}

                {download && !preview && pdfPath && (
                  <div className="text-center py-8 sm:py-12">
                    <div className="max-w-md mx-auto space-y-6 sm:space-y-8">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#07518a] to-[#0ea5e9] rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <Download className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                          Ready to Download
                        </h4>
                        <p className="text-sm sm:text-base text-gray-600 px-2">
                          Click the button below to download the product
                          documentation for{" "}
                          <span className="font-semibold text-[#07518a]">
                            {product.model}
                          </span>
                          .
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          downloadPDF(
                            pdfPath,
                            `trinai-${slugify(product.model)}.pdf`,
                          )
                        }
                        className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#07518a] to-[#0ea5e9] hover:from-[#0565b0] hover:to-[#07518a] text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl cursor-pointer"
                      >
                        <Download className="w-5 h-5 sm:w-6 sm:h-6" /> Download
                        Documentation
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate(`/products/${category}`)}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-full font-semibold hover:bg-gray-300"
            >
              ← Back to {category?.split("-").join(" ")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 🔥 Otherwise show product grid
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
              {categoryData?.name ||
                category
                  ?.split("-")
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join(" ")}
            </h1>
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
              // Extract URL from media object (handle array or object)
              let mediaUrl = null;
              if (Array.isArray(mediaObj) && mediaObj[0]?.url) {
                mediaUrl = mediaObj[0].url;
              } else if (typeof mediaObj === "object" && mediaObj.url) {
                mediaUrl = mediaObj.url;
              } else if (typeof mediaObj === "string") {
                mediaUrl = mediaObj;
              }

              // Use getMediaUrl for proper path handling
              productImage = getMediaUrl(mediaUrl);
            }

            const productId = product.id || product.documentId;
            const productSlug = slugify(product.name || "product");
            const productModel = product.model;
            const uniqueKey = `${productId}-${productModel || ""}-${product.id || ""}`;

            return (
              <div
                key={uniqueKey}
                onClick={() => {
                  if (productId)
                    navigate(
                      `/products/${category}/${productSlug}?model=${encodeURIComponent(productModel)}&id=${productId}`,
                    );
                }}
                className="group border rounded-xl p-4 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105 bg-white"
              >
                <div className="min-h-52 flex justify-center items-center overflow-hidden">
                  <img
                    src={productImage}
                    alt={product.model}
                    className="h-40 object-contain transition-transform duration-300 group-hover:scale-110"
                    onError={(e) =>
                      (e.target.src =
                        "https://via.placeholder.com/300x300/f3f4f6/9ca3af?text=No+Image")
                    }
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
                      View More <ChevronRight className="w-4 h-4" />
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
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        }
      />
    </div>
  );
};

export default Categories;
