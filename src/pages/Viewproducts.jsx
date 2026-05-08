// src/pages/Viewproducts.jsx - PRODUCTION READY
import React, { useEffect } from "react";
import mainproducts from "../components/Mainproducts";
import { useNavigate } from "react-router-dom";
import { slugify } from "../utils/slugify";

function Viewproducts() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-12 bg-white">
      <div className="main_container mt-11">
        <div className="p-6 bg-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Available Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mainproducts.map((product, index) => {
              // ✅ SAFETY CHECK: Skip invalid products
              if (!product || !product.id) return null;

              // ✅ SAFETY CHECK: Get image URL safely
              const imageUrl = product.picture
                ? `${import.meta.env.BASE_URL}${product.picture.replace(/^\/+/, "")}`
                : "https://via.placeholder.com/300x300/f3f4f6/9ca3af?text=No+Image";

              // ✅ Generate slugs for navigation
              const categorySlug = slugify(product.cameraType || "products");
              const productSlug = slugify(
                product.name || product.model || "product",
              );

              // ✅ UNIQUE KEY: Combine id + model to ensure uniqueness
              const uniqueKey = `${product.id}-${product.model || product.name || ""}-${index}`;

              return (
                <div
                  key={uniqueKey}
                  className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition duration-300"
                >
                  <div className="image_container w-60 h-40 mx-auto overflow-hidden flex justify-center items-center mb-4">
                    <img
                      src={imageUrl}
                      alt={product.model || product.name || "Product"}
                      className="w-60 h-30 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105 cursor-pointer"
                      onClick={() =>
                        // ✅ Navigate with query params for SEO
                        navigate(
                          `/products/${categorySlug}/${productSlug}?model=${product.model}&id=${product.id}`,
                        )
                      }
                    />
                  </div>
                  <div className="second_container">
                    <h3 className="text-lg text-gray-500 font-semibold mt-2">
                      {product.model || product.name || "Unknown Product"}
                    </h3>
                    <p className="text-gray-600">{product.brand || ""}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewproducts;
