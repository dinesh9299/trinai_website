// src/pages/Products.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScrollTop } from "primereact/scrolltop";
import { motion } from "framer-motion";

// ✅ LOCAL BANNER IMAGE (Keep your original camera image)
import bgpng from "../images/acam.png";

// ✅ API Service - Strapi ONLY (STRICT MODE)
const API_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

// Placeholder for missing category images (only for broken URLs)
const PLACEHOLDER_IMAGE =
  "https://via.placeholder.com/300x300/f3f4f6/9ca3af?text=No+Image";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🔥 STRICT MODE: Fetch categories from Strapi ONLY
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setFetchError(null);

        console.log("🔄 Fetching categories from Strapi...");

        // Fetch ONLY active categories, populated with image, sorted by order
        const response = await fetch(
          `${API_URL}/api/categories?filters[is_active][$eq]=true&populate=image&sort=order:asc`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          },
        );

        if (!response.ok) {
          throw new Error(
            `Strapi server error: ${response.status}. Is Strapi running?`,
          );
        }

        const data = await response.json();

        if (!data.data || data.data.length === 0) {
          throw new Error(
            "No categories found in Strapi. Please add categories in Strapi Admin.",
          );
        }

        setCategories(data.data);
        console.log(
          "✅ Categories loaded from Strapi:",
          data.data.length,
          "categories",
        );
      } catch (error) {
        console.error("❌ STRAPI FETCH FAILED:", error);
        setFetchError(error.message);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // 🔴 LOADING STATE
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#00ADE7] border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-700 font-semibold text-lg">
            Loading from Strapi...
          </p>
          <p className="text-gray-500 text-sm mt-2">API: {API_URL}</p>
        </div>
      </div>
    );
  }

  // 🔴 STRICT ERROR STATE - NO RENDER IF STRAPI DOWN
  if (fetchError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-gray-100">
        <div className="text-center max-w-lg p-8 bg-white rounded-2xl shadow-2xl">
          <div className="text-red-500 text-6xl mb-4">🚫</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            Strapi Connection Required
          </h1>
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 text-left">
            <p className="text-red-700 font-medium mb-2">Error:</p>
            <p className="text-red-600 text-sm">{fetchError}</p>
          </div>
          <p className="text-gray-600 mb-6">
            Please start Strapi server at:{" "}
            <code className="bg-gray-100 px-2 py-1 rounded">{API_URL}</code>
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            🔄 Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-100">
      {/* ================= BANNER SECTION ================= */}
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0f172a]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* LEFT SIDE: CAMERA IMAGE - USING YOUR ORIGINAL LOCAL IMAGE */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-lg lg:max-w-xl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#00ADE7]/20 blur-3xl rounded-full"></div>
                <img
                  src={bgpng}
                  alt="Security Camera"
                  className="relative w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* RIGHT SIDE: TEXT CONTENT */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-full mx-auto lg:mx-0 mb-6" />
              <span className="text-sm lg:text-base font-semibold uppercase tracking-widest text-white/90 block mb-3">
                Explore
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
                <span className="bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
                  Our
                </span>{" "}
                <span className="text-white">Products</span>
              </h1>
              <p className="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Discover cutting-edge surveillance solutions engineered for
                security, performance, and peace of mind.
              </p>
              <div className="w-12 lg:w-20 h-0.5 bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-full mx-auto lg:mx-0" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= PRODUCTS GRID - FROM STRAPI ================= */}
      <div className="relative z-2 -mt-20 sm:-mt-32 lg:-mt-44 lg:p-20 md:p-10 p-5">
        <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 p-5 bg-white lg:p-20 rounded-2xl shadow-xl">
          {categories.map((category, index) => {
            const imageUrl = category.image?.url
              ? `${API_URL}${category.image.url}`
              : PLACEHOLDER_IMAGE;

            return (
              <motion.div
                key={category.id || category.documentId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* ✅ UNIFORM CARD SIZE - All cards same height */}
                <div
                  className="shadow-lg hover:shadow-2xl hover:scale-105 p-6 cursor-pointer transition-all duration-300 rounded-xl bg-gradient-to-br from-gray-50 to-white group h-full flex flex-col"
                  onClick={() => navigate(`/products/${category.slug}`)}
                >
                  {/* Icon Container - Fixed Size for All Cards */}
                  <div className="flex justify-center items-center mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#00ADE7]/10 to-[#305292]/10 group-hover:scale-110 transition-transform duration-300">
                      <img
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                        src={imageUrl}
                        alt={category.name}
                        onError={(e) => {
                          e.target.src = PLACEHOLDER_IMAGE;
                        }}
                      />
                    </div>
                  </div>

                  {/* Content Container - Flex to fill remaining space */}
                  <div className="text-center flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category Name - From Strapi */}
                      <h3 className="text-gray-700 font-semibold text-sm sm:text-base group-hover:text-[#00ADE7] transition-colors min-h-[1.25rem]">
                        {category.name}
                      </h3>

                      {/* Category Description - From Strapi */}
                      {category.description && (
                        <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed min-h-[2.5rem] line-clamp-2">
                          {category.description}
                        </p>
                      )}
                    </div>

                    {/* View More Button - HARDCODED (Not from Strapi) */}
                    <div className="mt-4 flex justify-center items-center gap-1.5">
                      <span className="text-[#00ADE7] font-medium text-xs sm:text-sm group-hover:underline transition-all">
                        View More
                      </span>
                      <svg
                        className="w-4 h-4 text-[#00ADE7] transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Scroll Top */}
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

export default Products;
