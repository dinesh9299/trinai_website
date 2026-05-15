// // src/pages/Cameraproductdetails.jsx - PRODUCTION READY (FIXED STRAPI V4 + PDF DOWNLOAD)
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate, useSearchParams } from "react-router-dom";
// import { Viewer, Worker } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import { Download, ArrowUp, Eye, Camera, FileText } from "lucide-react";
// import { slugify } from "../utils/slugify";

// const API_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

// const getStrapiMedia = (url) => {
//   if (!url) return null;
//   return url.startsWith("http") ? url : `${API_URL}${url}`;
// };

// // 🔥 NEW: Force PDF download using fetch + blob (works cross-origin)
// const downloadPDF = async (pdfUrl, filename) => {
//   try {
//     const originalUrl = getStrapiMedia(pdfUrl);

//     // Fetch the PDF as a blob
//     const response = await fetch(originalUrl);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch PDF: ${response.status}`);
//     }

//     const blob = await response.blob();

//     // Create a temporary download link
//     const blobUrl = window.URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = blobUrl;
//     link.download = filename;

//     // Trigger download
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);

//     // Clean up
//     window.URL.revokeObjectURL(blobUrl);
//   } catch (error) {
//     console.error("❌ Error downloading PDF:", error);
//     // Fallback: open in new tab if download fails
//     window.open(getStrapiMedia(pdfUrl), "_blank");
//   }
// };

// function Cameraproductdetails() {
//   const {
//     category,
//     productType,
//     model: modelFromUrl,
//     id: idFromUrl,
//   } = useParams();
//   const [searchParams] = useSearchParams();

//   // ✅ Get model/id from URL params OR query params (fallback)
//   const model = modelFromUrl || searchParams.get("model");
//   const id = idFromUrl || searchParams.get("id");

//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [preview, setPreview] = useState(true);
//   const [download, setDownload] = useState(false);
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadProduct = async () => {
//       if (!id) {
//         setError("No product ID specified in URL");
//         setLoading(false);
//         return;
//       }

//       try {
//         setLoading(true);
//         setError(null);

//         console.log("🔍 Fetching product - ID:", id);

//         // ✅ STRAPI V4: Use collection endpoint with filter (NOT /api/products/:id)
//         const apiUrl = `${API_URL}/api/products?populate=*&filters[id][$eq]=${id}`;
//         console.log("📡 API URL:", apiUrl);

//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//           throw new Error(`Strapi error ${response.status}`);
//         }

//         const data = await response.json();
//         console.log("✅ Product response:", data);

//         if (data.data && data.data.length > 0) {
//           setProduct(data.data[0]);
//           console.log(
//             "📦 Product loaded:",
//             data.data[0].name,
//             "ID:",
//             data.data[0].id,
//           );
//           document.title = `${data.data[0].model} - ${data.data[0].name} | Trinai`;
//           window.scrollTo(0, 0);
//         } else {
//           throw new Error(`Product with ID "${id}" not found`);
//         }
//       } catch (error) {
//         console.error("❌ Error loading product:", error);
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadProduct();
//   }, [id]);

//   // 🔥 SEO: Add meta tags when product loads
//   useEffect(() => {
//     if (product) {
//       // 1. Set canonical URL (clean version without query params)
//       const cleanUrl = `${window.location.origin}/products/${category}/${productType}`;
//       let canonical = document.querySelector("link[rel='canonical']");
//       if (!canonical) {
//         canonical = document.createElement("link");
//         canonical.rel = "canonical";
//         document.head.appendChild(canonical);
//       }
//       canonical.href = cleanUrl;

//       // 2. Set page title
//       document.title = `${product.model} - ${product.name} | Trinai Security Solutions`;

//       // 3. Set meta description
//       let metaDesc = document.querySelector("meta[name='description']");
//       if (!metaDesc) {
//         metaDesc = document.createElement("meta");
//         metaDesc.name = "description";
//         document.head.appendChild(metaDesc);
//       }
//       metaDesc.content = `Professional ${product.productType || product.name} - ${product.model}. ${product.keyFeatures?.[0] || "High-quality surveillance solution"}`;

//       // 4. Open Graph tags (for social sharing)
//       let ogTitle = document.querySelector("meta[property='og:title']");
//       if (!ogTitle) {
//         ogTitle = document.createElement("meta");
//         ogTitle.setAttribute("property", "og:title");
//         document.head.appendChild(ogTitle);
//       }
//       ogTitle.content = `${product.model} - ${product.name}`;

//       let ogDesc = document.querySelector("meta[property='og:description']");
//       if (!ogDesc) {
//         ogDesc = document.createElement("meta");
//         ogDesc.setAttribute("property", "og:description");
//         document.head.appendChild(ogDesc);
//       }
//       ogDesc.content = metaDesc.content;
//     }
//   }, [product, category, productType]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 100);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#00ADE7] border-t-transparent mx-auto mb-4"></div>
//           <p className="text-gray-700 font-semibold">Loading product...</p>
//           <p className="text-gray-500 text-sm mt-2">ID: {id || "undefined"}</p>
//         </div>
//       </div>
//     );
//   }

//   if (error || !product) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
//         <div className="text-center px-4 max-w-lg">
//           <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">
//             Product Not Found
//           </h2>
//           <p className="text-gray-600 mb-4">
//             {error || "The requested product could not be found."}
//           </p>
//           <div className="flex gap-3 justify-center flex-wrap">
//             <button
//               onClick={() => navigate(-1)}
//               className="px-5 py-2.5 bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white font-semibold rounded-full hover:opacity-90"
//             >
//               ← Go Back
//             </button>
//             <button
//               onClick={() => navigate("/products")}
//               className="px-5 py-2.5 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300"
//             >
//               View All Products
//             </button>
//             <button
//               onClick={() => window.location.reload()}
//               className="px-5 py-2.5 bg-blue-100 text-blue-700 font-semibold rounded-full hover:bg-blue-200"
//             >
//               🔄 Retry
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const pdfPath = product.document?.url;
//   const imagePath = product.picture?.url;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
//         {/* Header Section */}
//         <div className="lg:grid grid-cols-2 gap-10">
//           <div className="flex justify-center items-center">
//             <img
//               src={getStrapiMedia(imagePath)}
//               alt={product.model || product.name}
//               className="w-full md:w-1/2 mx-auto rounded-lg shadow-lg mt-4 object-contain"
//               onError={(e) => {
//                 e.target.src =
//                   "https://via.placeholder.com/400x400/f3f4f6/9ca3af?text=No+Image";
//               }}
//             />
//           </div>
//           <div>
//             <h1 className="text-2xl font-bold text-black mb-4">
//               {product.model} - {product.name}
//             </h1>
//             <h2 className="text-xl font-semibold mt-4 text-black">
//               Key Features:
//             </h2>
//             <ul className="list-disc ml-6 mt-5 space-y-2">
//               {product.keyFeatures?.map((feature, index) => (
//                 <li
//                   key={index}
//                   className="text-gray-600 flex items-start gap-2"
//                 >
//                   <span className="text-[#00ADE7] mt-1">•</span>
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Details Section */}
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden mt-8">
//           <div className="bg-gradient-to-r from-[#00ADE7] to-[#305292] px-8 py-6">
//             <h3 className="text-3xl font-bold text-white flex items-center gap-3">
//               <FileText className="w-8 h-8" /> Product Details
//             </h3>
//           </div>

//           <div className="bg-slate-100 px-4 sm:px-8 py-4 sm:py-6">
//             <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
//               <button
//                 className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
//                   preview
//                     ? "bg-white text-[#07518a] shadow-md"
//                     : "text-gray-600 hover:bg-white/50"
//                 }`}
//                 onClick={() => {
//                   setDownload(false);
//                   setPreview(true);
//                 }}
//               >
//                 <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-[#07518a]" /> Show
//                 Preview
//               </button>
//               <button
//                 className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
//                   download
//                     ? "bg-white text-[#07518a] shadow-md"
//                     : "text-gray-600 hover:bg-white/50"
//                 }`}
//                 onClick={() => {
//                   setPreview(false);
//                   setDownload(true);
//                 }}
//               >
//                 <Download className="w-4 h-4 sm:w-5 sm:h-5" /> Download
//               </button>
//             </div>
//           </div>

//           <div className="py-6 sm:py-8 px-4 sm:px-8 lg:px-12">
//             {preview && !download && pdfPath && (
//               <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden shadow-inner">
//                 <div className="w-full min-h-[600px]">
//                   <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js">
//                     <Viewer fileUrl={getStrapiMedia(pdfPath)} />
//                   </Worker>
//                 </div>
//               </div>
//             )}

//             {download && !preview && pdfPath && (
//               <div className="text-center py-8 sm:py-12">
//                 <div className="max-w-md mx-auto space-y-6 sm:space-y-8">
//                   <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#07518a] to-[#0ea5e9] rounded-full flex items-center justify-center mx-auto shadow-lg">
//                     <Download className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
//                   </div>
//                   <div>
//                     <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
//                       Ready to Download
//                     </h4>
//                     <p className="text-sm sm:text-base text-gray-600 px-2">
//                       Click the button below to download the product
//                       documentation for{" "}
//                       <span className="font-semibold text-[#07518a]">
//                         {product.model}
//                       </span>
//                       .
//                     </p>
//                   </div>
//                   {/* ✅ FIXED: Use downloadPDF function instead of direct link */}
//                   <button
//                     onClick={() =>
//                       downloadPDF(
//                         pdfPath,
//                         `trinai-${slugify(product.model)}.pdf`,
//                       )
//                     }
//                     className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#07518a] to-[#0ea5e9] hover:from-[#0565b0] hover:to-[#07518a] text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl cursor-pointer"
//                   >
//                     <Download className="w-5 h-5 sm:w-6 sm:h-6" /> Download
//                     Documentation
//                   </button>
//                 </div>
//               </div>
//             )}

//             {!pdfPath && (
//               <div className="text-center py-12">
//                 <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//                 <p className="text-gray-600">
//                   No PDF document available for this product.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         {showScrollTop && (
//           <button
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//             className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] hover:from-[#305292] hover:to-[#00ADE7] text-white shadow-lg flex items-center justify-center transition-all duration-300 z-50"
//           >
//             <ArrowUp className="w-5 h-5" />
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Cameraproductdetails;

// src/pages/Cameraproductdetails.jsx - PRODUCTION READY (SEO + STRAPI + PDF DOWNLOAD)
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Download, ArrowUp, Eye, Camera, FileText } from "lucide-react";
import { slugify } from "../utils/slugify";

const API_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

const getStrapiMedia = (url) => {
  if (!url) return null;
  return url.startsWith("http") ? url : `${API_URL}${url}`;
};

// 🔥 Force PDF download using fetch + blob (works cross-origin)
const downloadPDF = async (pdfUrl, filename) => {
  try {
    const originalUrl = getStrapiMedia(pdfUrl);
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
    window.open(getStrapiMedia(pdfUrl), "_blank");
  }
};

function Cameraproductdetails() {
  const { category, productType } = useParams();
  const [searchParams] = useSearchParams();

  // ✅ Get model/id from query params (primary source)
  const model = searchParams.get("model");
  const id = searchParams.get("id");

  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [preview, setPreview] = useState(true);
  const [download, setDownload] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) {
        setError("No product ID specified");
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError(null);
        // ✅ STRAPI V4: Use collection endpoint with filter
        const apiUrl = `${API_URL}/api/products?populate=*&filters[id][$eq]=${id}`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Strapi error ${response.status}`);
        const data = await response.json();
        if (data.data && data.data.length > 0) {
          setProduct(data.data[0]);
          document.title = `${data.data[0].model} - ${data.data[0].name} | Trinai`;
          window.scrollTo(0, 0);
        } else {
          throw new Error(`Product with ID "${id}" not found`);
        }
      } catch (error) {
        console.error("❌ Error loading product:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  // 🔥 SEO: Add meta tags when product loads
  useEffect(() => {
    if (product) {
      // 1. Set canonical URL (clean version without query params)
      const cleanUrl = `${window.location.origin}/products/${category}/${productType}`;
      let canonical = document.querySelector("link[rel='canonical']");
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = cleanUrl;

      // 2. Set page title
      document.title = `${product.model} - ${product.name} | Trinai Security Solutions`;

      // 3. Set meta description
      let metaDesc = document.querySelector("meta[name='description']");
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = `Professional ${product.productType || product.name} - ${product.model}. ${product.keyFeatures?.[0] || "High-quality surveillance solution"}`;

      // 4. Open Graph tags
      let ogTitle = document.querySelector("meta[property='og:title']");
      if (!ogTitle) {
        ogTitle = document.createElement("meta");
        ogTitle.setAttribute("property", "og:title");
        document.head.appendChild(ogTitle);
      }
      ogTitle.content = `${product.model} - ${product.name}`;

      let ogDesc = document.querySelector("meta[property='og:description']");
      if (!ogDesc) {
        ogDesc = document.createElement("meta");
        ogDesc.setAttribute("property", "og:description");
        document.head.appendChild(ogDesc);
      }
      ogDesc.content = metaDesc.content;
    }
  }, [product, category, productType]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#00ADE7] border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-700 font-semibold">Loading product...</p>
          <p className="text-gray-500 text-sm mt-2">ID: {id || "undefined"}</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center px-4 max-w-lg">
          <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            {error || "The requested product could not be found."}
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-2.5 bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white font-semibold rounded-full hover:opacity-90"
            >
              ← Go Back
            </button>
            <button
              onClick={() => navigate("/products")}
              className="px-5 py-2.5 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300"
            >
              View All Products
            </button>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 bg-blue-100 text-blue-700 font-semibold rounded-full hover:bg-blue-200"
            >
              🔄 Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  const pdfPath = product.document?.url;
  const imagePath = product.picture?.url;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        {/* Header Section */}
        <div className="lg:grid grid-cols-2 gap-10">
          <div className="flex justify-center items-center">
            <img
              src={getStrapiMedia(imagePath)}
              alt={product.model || product.name}
              className="w-full md:w-1/2 mx-auto rounded-lg shadow-lg mt-4 object-contain"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/400x400/f3f4f6/9ca3af?text=No+Image";
              }}
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

        {/* Details Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mt-8">
          <div className="bg-gradient-to-r from-[#00ADE7] to-[#305292] px-8 py-6">
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <FileText className="w-8 h-8" /> Product Details
            </h3>
          </div>

          <div className="bg-slate-100 px-4 sm:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button
                className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${preview ? "bg-white text-[#07518a] shadow-md" : "text-gray-600 hover:bg-white/50"}`}
                onClick={() => {
                  setDownload(false);
                  setPreview(true);
                }}
              >
                <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-[#07518a]" /> Show
                Preview
              </button>
              <button
                className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${download ? "bg-white text-[#07518a] shadow-md" : "text-gray-600 hover:bg-white/50"}`}
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
                    <Viewer fileUrl={getStrapiMedia(pdfPath)} />
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

            {!pdfPath && (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  No PDF document available for this product.
                </p>
              </div>
            )}
          </div>
        </div>

        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] hover:from-[#305292] hover:to-[#00ADE7] text-white shadow-lg flex items-center justify-center transition-all duration-300 z-50"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Cameraproductdetails;
