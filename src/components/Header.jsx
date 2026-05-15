// // src/components/Header.jsx
// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import {
//   FiPhoneCall,
//   FiArrowRight,
//   FiMenu,
//   FiX,
//   FiPlus,
//   FiMinus,
//   FiArrowLeft,
// } from "react-icons/fi";

// // ========== LOGOS ==========
// import logoDark from "../images/logo/logo7.png";
// import logoLight from "../images/logo/logo6.png";

// // ========== MEGA MENU IMAGES ==========
// import logo3 from "../images/logo/logo3.png";
// import logo4 from "../images/logo/logo5.png";
// import gpu from "../images/gpu.png";
// import bullet from "../images/AI02B030L67-28(40)F-NS.png";
// import dome from "../images/AI02D040L67-05MV.png";
// import eyeball from "../images/AI08ID030L67-28(40)F-LS.png";
// import ptz from "../images/AI02P150L66-33MV-148F-LS.png";
// import server from "../images/Trinai Server.png";
// import nvr from "../images/nvr.png";
// import thermal from "../images/thermal-camera.png";
// import aifacerecognition from "../images/TrinAI-TN50 (1).png";
// import display from "../images/display1.png";

// // ✅ IMPORT PRODUCTS DATA FOR ID LOOKUP
// import productsall from "./Mainproducts";

// // ========== CATEGORIES DATA ==========
// const categories = [
//   "Bullet Cameras",
//   "Eyeball Cameras",
//   "Dome Cameras",
//   "PTZ Cameras",
//   "Thermal Cameras",
//   "Network Video Recorder",
//   "Server",
//   "Smart GPU with AI Camera",
//   "Trinai Facial BioStand",
//   "Display",
// ];

// // ========== PRODUCTS BY CATEGORY (STATIC FOR MEGA MENU) ==========
// const productsByCategory = {
//   "Thermal Cameras": [{ name: "Thermal Cameras", image: thermal }],
//   "Bullet Cameras": [
//     { name: "2MP HD Bullet Camera", image: bullet },
//     { name: "3MP HD Bullet Camera", image: bullet },
//     { name: "4MP HD Bullet Camera", image: bullet },
//     { name: "5MP HD Bullet Camera", image: bullet },
//     { name: "8MP HD Bullet Camera", image: bullet },
//   ],
//   "Eyeball Cameras": [
//     { name: "4MP EyeBall Camera", image: eyeball },
//     { name: "8MP EyeBall Camera", image: eyeball },
//     { name: "5MP EyeBall Camera", image: eyeball },
//     { name: "2MP EyeBall Camera", image: eyeball },
//   ],
//   "Dome Cameras": [
//     { name: "2MP Dome Camera", image: dome },
//     { name: "Mini Dome-Internal Camera (720P)", image: dome },
//   ],
//   "PTZ Cameras": [
//     { name: "2MP PTZ Camera", image: ptz },
//     { name: "4MP PTZ Camera", image: ptz },
//   ],
//   "Network Video Recorder": [
//     { name: "16/32-Channel Input NVR", image: nvr },
//     { name: "16/32/64-channel input NVR", image: nvr },
//     { name: "MDVR", image: nvr },
//   ],
//   Server: [{ name: "Server", image: server }],
//   "Smart GPU with AI Camera": [
//     { name: "Smart GPU with AI Camera", image: gpu },
//   ],
//   "Trinai Facial BioStand": [
//     { name: "Trinai Facial BioStand", image: aifacerecognition },
//   ],
//   Display: [{ name: "Display", image: display }],
// };

// // ========== CATEGORY IMAGES MAPPING ==========
// const categoryImages = {
//   "Bullet Cameras": bullet,
//   "Eyeball Cameras": eyeball,
//   "Dome Cameras": dome,
//   "PTZ Cameras": ptz,
//   Server: server,
//   "Thermal Cameras": thermal,
//   "Network Video Recorder": nvr,
//   "Smart GPU with AI Camera": gpu,
//   "Trinai Facial BioStand": aifacerecognition,
//   Display: display,
// };

// // 🔥 HELPER: Find product in productsall by name and category
// const findProductInDatabase = (productName, category) => {
//   return productsall.find((p) => {
//     const nameMatch = p.name === productName;
//     const categoryMatch =
//       p.cameraType
//         ?.toLowerCase()
//         .includes(category.split(" ")[0].toLowerCase()) ||
//       p.productType?.toLowerCase().includes(category.toLowerCase());
//     return nameMatch && categoryMatch;
//   });
// };

// const Header = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
//   const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
//   const [mobileSelectedCategory, setMobileSelectedCategory] = useState(
//     categories[0],
//   );
//   const [selectedCategory, setSelectedCategory] = useState(categories[0]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [closeTimeout, setCloseTimeout] = useState(null);

//   // 🔥 Check current page type
//   const pathParts = location.pathname.split("/").filter(Boolean);

//   // ✅ Check if it's a PRODUCT DETAIL page: /products/:category/:product/:id
//   const isProductDetailPage =
//     pathParts[0] === "products" && pathParts.length === 4;

//   // ✅ Check if it's a CATEGORY page: /products/:category
//   const isCategoryPage = pathParts[0] === "products" && pathParts.length === 2;

//   // ✅ Check for old Cemara Details PDF page
//   const isCemaraDetailsPage = location.pathname === "/cemaradetails";

//   useEffect(() => {
//     const onScroll = () => {
//       // ✅ DIFFERENT BEHAVIOR:
//       // - Product detail pages: Always show white header
//       // - Category pages: Show white header only after scrolling
//       if (isProductDetailPage) {
//         setIsScrolled(true);
//       } else if (isCategoryPage) {
//         setIsScrolled(window.scrollY > 50);
//       } else {
//         setIsScrolled(window.scrollY > 10);
//       }
//     };

//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       if (closeTimeout) clearTimeout(closeTimeout);
//     };
//   }, [isProductDetailPage, isCategoryPage]);

//   // 🔥 Extract product name from URL to persist selection
//   useEffect(() => {
//     if (pathParts[0] === "products" && pathParts.length === 4) {
//       const productId = pathParts[3];
//       const foundProduct = productsall.find(
//         (p) => String(p.id) === String(productId),
//       );

//       if (foundProduct) {
//         setSelectedProduct(foundProduct.name);
//       }
//     }
//   }, [location.pathname, pathParts]);

//   useEffect(() => {
//     setIsCategoriesOpen(false);
//   }, [location.pathname]);

//   // ✅ FORCE WHITE HEADER on these pages:
//   const forceWhiteHeader =
//     location.pathname === "/about" ||
//     location.pathname === "/viewproducts" ||
//     isCemaraDetailsPage ||
//     isProductDetailPage;

//   // ✅ Show white header when:
//   const showWhiteHeader = isScrolled || forceWhiteHeader || isCategoriesOpen;

//   // 🔥 Slugify function
//   const slugify = (text) => {
//     return text
//       .toString()
//       .toLowerCase()
//       .trim()
//       .replace(/[^\w\s-]/g, "")
//       .replace(/[\s_-]+/g, "-")
//       .replace(/^-+|-+$/g, "");
//   };

//   // 🔥 Navigation handler for desktop - ✅ FIXED: Always use selectedCategory for slug
//   const handleProductClick = (product, isSeeMore = false) => {
//     if (isSeeMore || !product?.name) {
//       const categorySlug = slugify(selectedCategory);
//       navigate(`/products/${categorySlug}`);
//       setSelectedProduct(null);
//     } else {
//       // ✅ Find the real product in database to get its ID
//       const realProduct = findProductInDatabase(product.name, selectedCategory);

//       if (realProduct?.id) {
//         // ✅ KEY FIX: ALWAYS use selectedCategory (full name) for category slug
//         // This ensures: "Eyeball Cameras" → "eyeball-cameras" (not "eyeball")
//         const categorySlug = slugify(selectedCategory);
//         const productSlug = slugify(product.name);
//         navigate(`/products/${categorySlug}/${productSlug}/${realProduct.id}`);
//         setSelectedProduct(product.name);
//       } else {
//         // Fallback: navigate to category page if product not found
//         const categorySlug = slugify(selectedCategory);
//         navigate(`/products/${categorySlug}`);
//       }
//     }
//     setIsCategoriesOpen(false);
//   };

//   // 🔥 Navigation handler for mobile - ✅ FIXED: Always use mobileSelectedCategory for slug
//   const handleMobileProductClick = (product, isSeeMore = false) => {
//     if (isSeeMore || !product?.name) {
//       const categorySlug = slugify(mobileSelectedCategory);
//       navigate(`/products/${categorySlug}`);
//       setSelectedProduct(null);
//     } else {
//       // ✅ Find the real product in database to get its ID
//       const realProduct = findProductInDatabase(
//         product.name,
//         mobileSelectedCategory,
//       );

//       if (realProduct?.id) {
//         // ✅ KEY FIX: ALWAYS use mobileSelectedCategory (full name) for category slug
//         const categorySlug = slugify(mobileSelectedCategory);
//         const productSlug = slugify(product.name);
//         navigate(`/products/${categorySlug}/${productSlug}/${realProduct.id}`);
//         setSelectedProduct(product.name);
//       } else {
//         // Fallback: navigate to category page if product not found
//         const categorySlug = slugify(mobileSelectedCategory);
//         navigate(`/products/${categorySlug}`);
//       }
//     }
//     setIsMobileProductsOpen(false);
//     setIsMenuOpen(false);
//   };

//   const handleMenuEnter = () => {
//     if (closeTimeout) clearTimeout(closeTimeout);
//     setIsCategoriesOpen(true);
//   };

//   const handleMenuLeave = () => {
//     const timeout = setTimeout(() => {
//       setIsCategoriesOpen(false);
//     }, 200);
//     setCloseTimeout(timeout);
//   };

//   const handleNavClick = (path) => {
//     navigate(path);
//     setIsMenuOpen(false);
//     setIsCategoriesOpen(false);
//     setIsMobileProductsOpen(false);
//   };

//   const toggleMobileProducts = () => {
//     setIsMobileProductsOpen(!isMobileProductsOpen);
//   };

//   const handleMobileProductsNavClick = () => {
//     navigate("/products");
//     setIsMenuOpen(false);
//     setIsMobileProductsOpen(false);
//   };

//   const handleMobileCategoryClick = (category) => {
//     setMobileSelectedCategory(category);
//   };

//   // 🔥 Smart Back Button Handler
//   const handleBackClick = () => {
//     if (isCemaraDetailsPage) {
//       if (window.history.length > 1) {
//         navigate(-1);
//       } else {
//         navigate("/products");
//       }
//       return;
//     }

//     if (isProductDetailPage) {
//       // Go back to category page
//       const categorySlug = pathParts[1];
//       navigate(`/products/${categorySlug}`);
//     } else if (isCategoryPage) {
//       navigate("/products");
//     } else {
//       navigate("/");
//     }
//   };

//   // 🔥 Get Back Button Label
//   const getBackButtonLabel = () => {
//     if (isCemaraDetailsPage || isProductDetailPage) {
//       return "Back to Products";
//     }
//     if (isCategoryPage) {
//       return "Back to All Products";
//     }
//     return "Back";
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
//         ${showWhiteHeader ? "bg-white shadow-md" : "bg-transparent"}
//       `}
//     >
//       {/* ========== 🔥 MEGA MENU (Desktop) ========== */}
//       {isCategoriesOpen && (
//         <div
//           className="absolute left-0 top-full w-full bg-white shadow-2xl border-t pt-6 pb-8 px-8 z-50 hidden lg:block"
//           onMouseEnter={handleMenuEnter}
//           onMouseLeave={handleMenuLeave}
//         >
//           <div className="flex gap-8">
//             {/* Left: Category Navigation */}
//             <div className="w-1/4 border-r pr-6">
//               <div className="space-y-1 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
//                 {categories.map((category) => (
//                   <button
//                     key={category}
//                     onClick={() => setSelectedCategory(category)}
//                     className={`block text-left w-full font-semibold transition-all duration-300 rounded-lg px-3 py-2 text-sm ${
//                       selectedCategory === category
//                         ? "bg-[#f0f7ff]"
//                         : "hover:bg-[#f0f7ff]"
//                     }`}
//                   >
//                     <span
//                       className={
//                         selectedCategory === category
//                           ? "bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent"
//                           : "text-gray-700 hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] hover:bg-clip-text hover:text-transparent"
//                       }
//                     >
//                       {category}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Right: Product Grid + Banner */}
//             <div className="w-3/4">
//               {/* Product Grid */}
//               <div className="min-h-24 grid grid-cols-3 gap-10">
//                 {productsByCategory[selectedCategory]?.map((product, index) => (
//                   <div key={index}>
//                     <div
//                       className={`cursor-pointer transition-all duration-300 font-semibold ${
//                         selectedProduct === product.name
//                           ? "bg-[#f0f7ff] rounded-lg px-2 py-1"
//                           : ""
//                       }`}
//                       onClick={() => handleProductClick(product)}
//                     >
//                       <span
//                         className={
//                           selectedProduct === product.name
//                             ? "bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent"
//                             : "text-gray-700 hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] hover:bg-clip-text hover:text-transparent"
//                         }
//                       >
//                         {product.name}
//                       </span>
//                     </div>
//                   </div>
//                 ))}

//                 {/* See More Button */}
//                 <div
//                   onClick={() => handleProductClick(null, true)}
//                   className="bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent font-bold cursor-pointer hover:opacity-80 transition-opacity"
//                 >
//                   See More Products →
//                 </div>
//               </div>

//               {/* Bottom Banner */}
//               <div className="mt-10 text-black">
//                 <hr />
//                 <div className="flex justify-between py-10 pe-10">
//                   <div>
//                     <div className="text-xl font-bold mb-3 bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
//                       Trinai Security Solutions
//                     </div>
//                     <div className="mt-5 text-xl text-gray-500">
//                       Experience next-level protection with advanced AI
//                       technology.
//                     </div>
//                   </div>
//                   <div>
//                     <img
//                       src={categoryImages[selectedCategory]}
//                       alt={selectedCategory}
//                       className={`${
//                         selectedCategory === "Trinai Facial BioStand"
//                           ? "h-36"
//                           : "w-32 h-auto"
//                       }`}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="flex items-center justify-between w-full px-4 lg:px-10 h-20">
//         {/* ================= LEFT: LOGO + NAV ================= */}
//         <div className="flex items-center gap-4 lg:gap-8">
//           <Link
//             to="/"
//             className="flex-shrink-0"
//             onClick={() => {
//               setIsCategoriesOpen(false);
//               setIsMobileProductsOpen(false);
//             }}
//           >
//             <img
//               src={showWhiteHeader ? logoDark : logoLight}
//               alt="Trinai Logo"
//               className="h-9 lg:h-10 w-auto transition-all duration-300"
//             />
//           </Link>

//           <nav
//             className={`hidden lg:flex items-center gap-2 font-semibold transition-colors
//               ${showWhiteHeader ? "text-black" : "text-white"}
//             `}
//           >
//             {/* Home */}
//             <Link
//               to="/"
//               onClick={() => setIsCategoriesOpen(false)}
//               className={`transition-all duration-300 rounded-full px-4 py-2 ${
//                 location.pathname === "/"
//                   ? showWhiteHeader
//                     ? "bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent"
//                     : "bg-white shadow-md"
//                   : showWhiteHeader
//                     ? "text-black hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] hover:bg-clip-text hover:text-transparent"
//                     : "text-white hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] hover:bg-clip-text hover:text-transparent"
//               }`}
//             >
//               <span
//                 className={
//                   location.pathname === "/" && !showWhiteHeader
//                     ? "bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent"
//                     : ""
//                 }
//               >
//                 Home
//               </span>
//             </Link>

//             {/* About */}
//             <Link
//               to="/about"
//               onClick={() => setIsCategoriesOpen(false)}
//               className={`transition-all duration-300 rounded-full px-4 py-2 ${
//                 location.pathname === "/about"
//                   ? "bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent"
//                   : showWhiteHeader
//                     ? "text-black hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] hover:bg-clip-text hover:text-transparent"
//                     : "text-white hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] hover:bg-clip-text hover:text-transparent"
//               }`}
//             >
//               About
//             </Link>

//             {/* Products with Mega Menu */}
//             <div
//               className="relative"
//               onMouseEnter={handleMenuEnter}
//               onMouseLeave={handleMenuLeave}
//             >
//               <div
//                 className={`cursor-pointer transition-all duration-300 rounded-full px-4 py-2 ${
//                   location.pathname.startsWith("/products") ||
//                   location.pathname.startsWith("/categories")
//                     ? showWhiteHeader
//                       ? "bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent"
//                       : "bg-white shadow-md"
//                     : showWhiteHeader
//                       ? "text-black hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] hover:bg-clip-text hover:text-transparent"
//                       : "text-white hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] hover:bg-clip-text hover:text-transparent"
//                 }`}
//                 onClick={() => handleNavClick("/products")}
//               >
//                 <span
//                   className={
//                     (location.pathname.startsWith("/products") ||
//                       location.pathname.startsWith("/categories")) &&
//                     !showWhiteHeader
//                       ? "bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent"
//                       : ""
//                   }
//                 >
//                   Products
//                 </span>
//               </div>
//             </div>

//             {/* Solutions */}
//             <Link
//               to="/solutions"
//               onClick={() => setIsCategoriesOpen(false)}
//               className={`transition-all duration-300 rounded-full px-4 py-2 ${
//                 location.pathname === "/solutions"
//                   ? showWhiteHeader
//                     ? "bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent"
//                     : "bg-white shadow-md"
//                   : showWhiteHeader
//                     ? "text-black hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] hover:bg-clip-text hover:text-transparent"
//                     : "text-white hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] hover:bg-clip-text hover:text-transparent"
//               }`}
//             >
//               <span
//                 className={
//                   location.pathname === "/solutions" && !showWhiteHeader
//                     ? "bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent"
//                     : ""
//                 }
//               >
//                 Solutions
//               </span>
//             </Link>

//             {/* Contact */}
//             <Link
//               to="/contact"
//               onClick={() => setIsCategoriesOpen(false)}
//               className={`transition-all duration-300 rounded-full px-4 py-2 ${
//                 location.pathname === "/contact"
//                   ? showWhiteHeader
//                     ? "bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent"
//                     : "bg-white shadow-md"
//                   : showWhiteHeader
//                     ? "text-black hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] hover:bg-clip-text hover:text-transparent"
//                     : "text-white hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] hover:bg-clip-text hover:text-transparent"
//               }`}
//             >
//               <span
//                 className={
//                   location.pathname === "/contact" && !showWhiteHeader
//                     ? "bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent"
//                     : ""
//                 }
//               >
//                 Contact
//               </span>
//             </Link>
//           </nav>
//         </div>

//         {/* ================= RIGHT: PHONE + CTA ================= */}
//         <div className="hidden md:flex items-center gap-4">
//           {/* PHONE */}
//           <div
//             className={`hidden lg:flex items-center gap-2 font-semibold whitespace-nowrap
//               ${showWhiteHeader ? "text-black" : "text-white"}
//             `}
//           >
//             <FiPhoneCall />
//             <span>+91 98858 88835</span>
//           </div>

//           {/* CTA BUTTON */}
//           <button
//             onClick={() => handleNavClick("/contact")}
//             className={`
//               flex items-center gap-2
//               bg-gradient-to-r
//               from-[#00ADE7]
//               via-[#305292]
//               to-[#27AAE1]
//               font-bold px-5 py-2
//               rounded-[10px]
//               whitespace-nowrap
//               transition-all duration-300
//               hover:opacity-90 hover:scale-105
//               active:scale-95
//               text-white
//             `}
//           >
//             Get a Quote <FiArrowRight />
//           </button>
//         </div>

//         {/* ================= MOBILE MENU BUTTON ================= */}
//         <button
//           onClick={() => setIsMenuOpen(true)}
//           className={`lg:hidden text-2xl ${
//             showWhiteHeader ? "text-black" : "text-white"
//           }`}
//         >
//           <FiMenu />
//         </button>
//       </div>

//       {/* ================= MOBILE DRAWER ================= */}
//       <div
//         className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white text-black z-50
//           transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
//           transition-transform duration-300 overflow-y-auto`}
//       >
//         <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
//           <span className="font-bold text-lg">Menu</span>
//           <button
//             onClick={() => {
//               setIsMenuOpen(false);
//               setIsMobileProductsOpen(false);
//             }}
//           >
//             <FiX size={24} />
//           </button>
//         </div>

//         <nav className="flex flex-col px-6 py-6 font-semibold">
//           {/* Home */}
//           <Link
//             to="/"
//             onClick={() => {
//               setIsMenuOpen(false);
//               setIsMobileProductsOpen(false);
//             }}
//             className={`py-3 px-4 rounded-lg mb-2 transition-all duration-200 ${
//               location.pathname === "/"
//                 ? "bg-[#f0f7ff] bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent font-bold"
//                 : "text-black hover:bg-[#f0f7ff]"
//             }`}
//           >
//             Home
//           </Link>

//           {/* About */}
//           <Link
//             to="/about"
//             onClick={() => {
//               setIsMenuOpen(false);
//               setIsMobileProductsOpen(false);
//             }}
//             className={`py-3 px-4 rounded-lg mb-2 transition-all duration-200 ${
//               location.pathname === "/about"
//                 ? "bg-[#f0f7ff] bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent font-bold"
//                 : "text-black hover:bg-[#f0f7ff]"
//             }`}
//           >
//             About
//           </Link>

//           {/* 🔥 Products with SPLIT Click Behavior (Mobile) */}
//           <div className="mb-2">
//             <div
//               className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-200 ${
//                 location.pathname.startsWith("/products") ||
//                 location.pathname.startsWith("/categories") ||
//                 isMobileProductsOpen
//                   ? "bg-[#f0f7ff]"
//                   : "hover:bg-[#f0f7ff]"
//               }`}
//             >
//               {/* 🔥 LEFT: Products Text - Navigates to /products */}
//               <button
//                 onClick={handleMobileProductsNavClick}
//                 className="flex-1 text-left"
//               >
//                 <span
//                   className={`${
//                     location.pathname.startsWith("/products") ||
//                     location.pathname.startsWith("/categories") ||
//                     isMobileProductsOpen
//                       ? "bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent font-bold"
//                       : "text-black"
//                   }`}
//                 >
//                   Products
//                 </span>
//               </button>

//               {/* 🔥 RIGHT: + Icon - Toggles mega menu dropdown */}
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   toggleMobileProducts();
//                 }}
//                 className={`text-2xl transition-all duration-300 p-2 rounded-full ${
//                   location.pathname.startsWith("/products") ||
//                   location.pathname.startsWith("/categories") ||
//                   isMobileProductsOpen
//                     ? "text-[#00ADE7] hover:bg-[#e0f2fe]"
//                     : "text-gray-600 hover:bg-[#f0f7ff]"
//                 }`}
//                 aria-label={
//                   isMobileProductsOpen
//                     ? "Close products menu"
//                     : "Open products menu"
//                 }
//               >
//                 {isMobileProductsOpen ? <FiMinus /> : <FiPlus />}
//               </button>
//             </div>

//             {/* Mobile Mega Menu Content */}
//             {isMobileProductsOpen && (
//               <div className="mt-2 ml-4 pl-4 border-l-2 border-[#f0f7ff]">
//                 {/* Categories */}
//                 <div className="mb-4">
//                   <div className="text-sm font-bold text-gray-500 mb-2 px-2">
//                     Categories
//                   </div>
//                   <div className="space-y-1 max-h-[200px] overflow-y-auto custom-scrollbar">
//                     {categories.map((category) => (
//                       <button
//                         key={category}
//                         onClick={() => handleMobileCategoryClick(category)}
//                         className={`block text-left w-full text-sm transition-all duration-200 rounded-lg px-3 py-2 ${
//                           mobileSelectedCategory === category
//                             ? "bg-[#f0f7ff] text-[#00ADE7] font-semibold"
//                             : "text-gray-700 hover:bg-[#f0f7ff]"
//                         }`}
//                       >
//                         {category}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Products */}
//                 <div className="mb-4">
//                   <div className="text-sm font-bold text-gray-500 mb-2 px-2">
//                     {mobileSelectedCategory}
//                   </div>
//                   <div className="grid grid-cols-1 gap-2">
//                     {productsByCategory[mobileSelectedCategory]?.map(
//                       (product, index) => (
//                         <button
//                           key={index}
//                           onClick={() => handleMobileProductClick(product)}
//                           className={`text-left text-sm transition-all duration-200 rounded-lg px-3 py-2 ${
//                             selectedProduct === product.name
//                               ? "bg-[#f0f7ff] text-[#00ADE7] font-semibold"
//                               : "text-gray-700 hover:bg-[#f0f7ff]"
//                           }`}
//                         >
//                           {product.name}
//                         </button>
//                       ),
//                     )}
//                     <button
//                       onClick={() => handleMobileProductClick(null, true)}
//                       className="text-left text-sm font-bold text-[#00ADE7] hover:opacity-80 transition-opacity px-3 py-2"
//                     >
//                       See More Products →
//                     </button>
//                   </div>
//                 </div>

//                 {/* Banner */}
//                 <div className="border-t pt-4 mt-4">
//                   <div className="text-lg font-bold mb-2 bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
//                     Trinai Security Solutions
//                   </div>
//                   <div className="text-sm text-gray-500 mb-3">
//                     Experience next-level protection with advanced AI
//                     technology.
//                   </div>
//                   <img
//                     src={categoryImages[mobileSelectedCategory]}
//                     alt={mobileSelectedCategory}
//                     className={`w-full max-w-[150px] ${
//                       mobileSelectedCategory === "AI-Based Face Recognition"
//                         ? "h-24"
//                         : "h-auto"
//                     }`}
//                   />
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Solutions */}
//           <Link
//             to="/solutions"
//             onClick={() => {
//               setIsMenuOpen(false);
//               setIsMobileProductsOpen(false);
//             }}
//             className={`py-3 px-4 rounded-lg mb-2 transition-all duration-200 ${
//               location.pathname === "/solutions"
//                 ? "bg-[#f0f7ff] bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent font-bold"
//                 : "text-black hover:bg-[#f0f7ff]"
//             }`}
//           >
//             Solutions
//           </Link>

//           {/* Contact */}
//           <Link
//             to="/contact"
//             onClick={() => {
//               setIsMenuOpen(false);
//               setIsMobileProductsOpen(false);
//             }}
//             className={`py-3 px-4 rounded-lg mb-2 transition-all duration-200 ${
//               location.pathname === "/contact"
//                 ? "bg-[#f0f7ff] bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent font-bold"
//                 : "text-black hover:bg-[#f0f7ff]"
//             }`}
//           >
//             Contact
//           </Link>

//           {/* Phone and CTA */}
//           <div className="mt-6 border-t pt-6 space-y-4">
//             <div className="flex items-center gap-2 text-gray-700">
//               <FiPhoneCall className="text-[#00ADE7]" />
//               <span className="font-semibold">+91 98858 88835</span>
//             </div>
//             <button
//               onClick={() => {
//                 setIsMenuOpen(false);
//                 setIsMobileProductsOpen(false);
//                 navigate("/contact");
//               }}
//               className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#00ADE7] via-[#305292] to-[#27AAE1] text-white font-bold px-5 py-3 rounded-[10px] transition-all duration-300 hover:opacity-90 hover:scale-105 active:scale-95"
//             >
//               Get a Quote <FiArrowRight />
//             </button>
//           </div>
//         </nav>
//       </div>

//       {/* Custom Scrollbar Styles */}
//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 6px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: #f1f1f1;
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #888;
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: #555;
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Header;

// src/components/Header.jsx - PRODUCTION READY (FIXED SCROLL BEHAVIOR)
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiPhoneCall,
  FiArrowRight,
  FiMenu,
  FiX,
  FiPlus,
  FiMinus,
} from "react-icons/fi";

// ========== LOGOS ==========
import logoDarkFallback from "../images/logo/logo7.png";
import logoLightFallback from "../images/logo/logo6.png";

// ========== MEGA MENU IMAGES ==========
import bullet from "../images/AI02B030L67-28(40)F-NS.png";
import dome from "../images/AI02D040L67-05MV.png";
import eyeball from "../images/AI08ID030L67-28(40)F-LS.png";
import ptz from "../images/AI02P150L66-33MV-148F-LS.png";
import server from "../images/Trinai Server.png";
import nvr from "../images/nvr.png";
import thermal from "../images/thermal-camera.png";
import aifacerecognition from "../images/TrinAI-TN50 (1).png";
import display from "../images/display1.png";
import gpu from "../images/gpu.png";

// ✅ IMPORT PRODUCTS DATA FROM STRAPI (via Mainproducts)
import productsall from "./Mainproducts";

// ========== CATEGORIES - MUST MATCH STRAPI EXACTLY ==========
const categories = [
  "Bullet Cameras",
  "Eyeball Cameras",
  "Dome Cameras",
  "PTZ Cameras",
  "Thermal Cameras",
  "Network Video Recorder",
  "Server",
  "Smart GPU with AI Camera",
  "AI Based Face Recognition",
  "Mobile DVR",
];

// ========== PRODUCTS BY CATEGORY ==========
const productsByCategory = {
  "Bullet Cameras": [
    { name: "2MP HD Bullet Camera", type: "2mp-hd-bullet-camera" },
    { name: "3MP HD Bullet Camera", type: "3mp-hd-bullet-camera" },
    { name: "4MP HD Bullet Camera", type: "4mp-hd-bullet-camera" },
    { name: "5MP HD Bullet Camera", type: "5mp-hd-bullet-camera" },
    { name: "8MP HD Bullet Camera", type: "8mp-hd-bullet-camera" },
  ],
  "Eyeball Cameras": [
    { name: "2MP EyeBall Camera", type: "2mp-eyeball-camera" },
    { name: "4MP EyeBall Camera", type: "4mp-eyeball-camera" },
    { name: "5MP EyeBall Camera", type: "5mp-eyeball-camera" },
    { name: "8MP EyeBall Camera", type: "8mp-eyeball-camera" },
  ],
  "Dome Cameras": [
    { name: "2MP Dome Camera", type: "2mp-dome-camera" },
    { name: "Mini Dome-Internal Camera", type: "mini-dome-internal" },
  ],
  "PTZ Cameras": [
    { name: "2MP PTZ Camera", type: "2mp-ptz-camera" },
    { name: "4MP PTZ Camera", type: "4mp-ptz-camera" },
  ],
  "Thermal Cameras": [{ name: "Thermal Cameras", type: "thermal-cameras" }],
  "Network Video Recorder": [
    { name: "16 32 Channel Input NVR", type: "16-32-channel-input-nvr" },
    { name: "16 32 64 Channel Input NVR", type: "16-32-64-channel-input-nvr" },
    { name: "Mobile DVR", type: "mobile-dvr" },
  ],
  Server: [{ name: "Server", type: "server" }],
  "Smart GPU with AI Camera": [
    { name: "Smart GPU with AI Camera", type: "smart-gpu-with-ai-camera" },
  ],
  "AI Based Face Recognition": [
    {
      name: "Facial Recognition Terminal",
      type: "facial-recognition-terminal",
    },
  ],
  "Mobile DVR": [{ name: "MDVR Control Panel", type: "mdvr-control-panel" }],
};

// ========== CATEGORY IMAGES ==========
const categoryImages = {
  "Bullet Cameras": bullet,
  "Eyeball Cameras": eyeball,
  "Dome Cameras": dome,
  "PTZ Cameras": ptz,
  Server: server,
  "Thermal Cameras": thermal,
  "Network Video Recorder": nvr,
  "Smart GPU with AI Camera": gpu,
  "AI Based Face Recognition": aifacerecognition,
  Display: display,
  "Mobile DVR": display,
};

// 🔥 Slugify function for SEO-friendly URLs
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Strapi state
  const [headerData, setHeaderData] = useState(null);
  const [loading, setLoading] = useState(true);

  // UI state
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [mobileSelectedCategory, setMobileSelectedCategory] = useState(
    categories[0],
  );
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [closeTimeout, setCloseTimeout] = useState(null);

  // Fetch header from Strapi
  useEffect(() => {
    const fetchHeader = async () => {
      try {
        const API_URL =
          import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
        const response = await fetch(`${API_URL}/api/header?populate=*`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const json = await response.json();
        if (json.data) setHeaderData(json.data);
      } catch (error) {
        console.error("Header fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHeader();
  }, []);

  // Get Strapi values with fallbacks
  const getStrapiValue = (key, fallback) => {
    return headerData?.[key] ?? fallback;
  };

  const ctaText = getStrapiValue("cta_text", "Get a Quote");
  const ctaLink = getStrapiValue("cta_link", "/contact");
  const phoneNumber = getStrapiValue("phone_number", "+91 98858 88835");
  const siteName = getStrapiValue("site_name", "Trinai Security Solutions");
  const tagline = getStrapiValue(
    "tagline",
    "Experience next-level protection with advanced AI technology.",
  );

  // Logo URLs
  const getLogoUrl = (strapiLogo, fallback) => {
    if (strapiLogo?.url) {
      const baseUrl =
        import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
      return `${baseUrl}${strapiLogo.url}`;
    }
    return fallback;
  };

  const logoDark = headerData?.logo_dark
    ? getLogoUrl(headerData.logo_dark, logoDarkFallback)
    : logoDarkFallback;
  const logoLight = headerData?.logo_light
    ? getLogoUrl(headerData.logo_light, logoLightFallback)
    : logoLightFallback;

  // 🔥 PAGE DETECTION
  const pathParts = location.pathname.split("/").filter(Boolean);
  const isCategoryPage = pathParts[0] === "products" && pathParts.length === 2;
  const isProductTypePage =
    pathParts[0] === "products" && pathParts.length === 3;

  // ✅ Check for query params to determine if it's a product detail page
  const hasProductParams =
    location.search.includes("model=") || location.search.includes("id=");

  // ✅ Product detail page = has query params (model or id)
  const isProductDetailPage = isProductTypePage && hasProductParams;

  const isAboutPage = location.pathname === "/about";

  // ✅ KEY FIX: Only force white header on About page OR product detail pages (with query params)
  const forceWhiteHeader = isAboutPage || isProductDetailPage;

  // ✅ Show white header when: scrolled OR forced OR mega menu open
  const showWhiteHeader = isScrolled || forceWhiteHeader || isCategoriesOpen;

  // Scroll effect
  useEffect(() => {
    const onScroll = () => {
      // ✅ DIFFERENT BEHAVIOR:
      // - About page: Always show white header
      // - Product detail pages (with query params): Always show white header
      // - Product type pages (no query params): Show white header only after scrolling
      // - Category pages: Show white header after scrolling
      // - Home/other: Show white header after minimal scroll
      if (forceWhiteHeader) {
        setIsScrolled(true);
      } else if (isCategoryPage || isProductTypePage) {
        // ✅ Product/Category pages: White header after 50px scroll
        setIsScrolled(window.scrollY > 50);
      } else {
        // ✅ Home/other: White header after 10px scroll
        setIsScrolled(window.scrollY > 10);
      }
    };

    // Run once on mount
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (closeTimeout) clearTimeout(closeTimeout);
    };
  }, [forceWhiteHeader, isCategoryPage, isProductTypePage]);

  // Close mega menu on route change
  useEffect(() => {
    setIsCategoriesOpen(false);
  }, [location.pathname]);

  // ✅ ACTIVE STATE CHECKER
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // 🔥 MEGA MENU HANDLERS
  const handleMenuEnter = () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setIsCategoriesOpen(true);
  };

  const handleMenuLeave = () => {
    const timeout = setTimeout(() => setIsCategoriesOpen(false), 200);
    setCloseTimeout(timeout);
  };

  // 🔥 KEY NAVIGATION FUNCTION - DESKTOP (SEO-FRIENDLY WITH QUERY PARAMS)
  const handleProductClick = (product) => {
    if (!product) {
      // "See More" clicked - go to category page
      const categorySlug = slugify(selectedCategory);
      console.log("📍 See More clicked →", `/products/${categorySlug}`);
      navigate(`/products/${categorySlug}`);
    } else {
      // Product type clicked - find FIRST matching product to get ID and model
      const categorySlug = slugify(selectedCategory);
      const productTypeSlug = product.type || slugify(product.name);

      // ✅ Find the first product in this category/type from productsall
      const realProduct = productsall.find((p) => {
        const categoryMatch = p.cameraType
          ?.toLowerCase()
          .includes(selectedCategory.toLowerCase());
        const typeMatch = p.productType
          ?.toLowerCase()
          .includes(productTypeSlug.replace(/-/g, " "));
        return categoryMatch && typeMatch;
      });

      if (realProduct?.id) {
        // ✅ Navigate with query params for SEO + reliable product matching
        console.log(
          "✅ Product found:",
          realProduct.name,
          "→",
          `/products/${categorySlug}/${productTypeSlug}?model=${encodeURIComponent(realProduct.model)}&id=${realProduct.id}`,
        );
        navigate(
          `/products/${categorySlug}/${productTypeSlug}?model=${encodeURIComponent(realProduct.model)}&id=${realProduct.id}`,
        );
      } else {
        // Fallback: navigate to product type page without ID (will show grid)
        console.log(
          "⚠️ Product not found in productsall, navigating to:",
          `/products/${categorySlug}/${productTypeSlug}`,
        );
        navigate(`/products/${categorySlug}/${productTypeSlug}`);
      }
    }
    setIsCategoriesOpen(false);
  };

  // 🔥 KEY NAVIGATION FUNCTION - MOBILE (SEO-FRIENDLY WITH QUERY PARAMS)
  const handleMobileProductClick = (product) => {
    if (!product) {
      const categorySlug = slugify(mobileSelectedCategory);
      navigate(`/products/${categorySlug}`);
    } else {
      const categorySlug = slugify(mobileSelectedCategory);
      const productTypeSlug = product.type || slugify(product.name);

      // ✅ Find the first product in this category/type
      const realProduct = productsall.find((p) => {
        const categoryMatch = p.cameraType
          ?.toLowerCase()
          .includes(mobileSelectedCategory.toLowerCase());
        const typeMatch = p.productType
          ?.toLowerCase()
          .includes(productTypeSlug.replace(/-/g, " "));
        return categoryMatch && typeMatch;
      });

      if (realProduct?.id) {
        // ✅ Navigate with query params for SEO
        navigate(
          `/products/${categorySlug}/${productTypeSlug}?model=${encodeURIComponent(realProduct.model)}&id=${realProduct.id}`,
        );
      } else {
        navigate(`/products/${categorySlug}/${productTypeSlug}`);
      }
    }
    setIsMobileProductsOpen(false);
    setIsMenuOpen(false);
  };

  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setIsCategoriesOpen(false);
    setIsMobileProductsOpen(false);
  };

  const toggleMobileProducts = () =>
    setIsMobileProductsOpen(!isMobileProductsOpen);

  const handleMobileProductsNavClick = () => {
    navigate("/products");
    setIsMenuOpen(false);
    setIsMobileProductsOpen(false);
  };

  const handleMobileCategoryClick = (category) => {
    setMobileSelectedCategory(category);
  };

  // Loading state
  if (loading) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent h-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
      </header>
    );
  }

  // Error state
  if (!headerData) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-red-900/90 h-20 flex items-center justify-center">
        <p className="text-white text-sm">⚠️ Header loading...</p>
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showWhiteHeader ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* ========== MEGA MENU ========== */}
      {isCategoriesOpen && (
        <div
          className="absolute left-0 top-full w-full bg-white shadow-2xl border-t pt-6 pb-8 px-8 z-50 hidden lg:block"
          onMouseEnter={handleMenuEnter}
          onMouseLeave={handleMenuLeave}
        >
          <div className="flex gap-8">
            {/* Left: Categories - CLICK TO SELECT (not navigate) */}
            <div className="w-1/4 border-r pr-6">
              <div className="space-y-1 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block text-left w-full font-semibold rounded-lg px-3 py-2 text-sm transition-colors ${
                      selectedCategory === category
                        ? "bg-[#f0f7ff] text-[#00ADE7]"
                        : "text-gray-700 hover:bg-[#f0f7ff]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Types + Banner */}
            <div className="w-3/4">
              {/* Product Types Grid */}
              <div className="min-h-24 grid grid-cols-3 gap-10">
                {productsByCategory[selectedCategory]?.map((product, index) => (
                  <div
                    key={index}
                    onClick={() => handleProductClick(product)}
                    className="cursor-pointer px-2 py-1 text-gray-700 hover:text-[#00ADE7] transition-colors font-semibold"
                  >
                    {product.name}
                  </div>
                ))}
                <div
                  onClick={() => handleProductClick(null)}
                  className="text-[#00ADE7] font-bold cursor-pointer hover:opacity-80"
                >
                  See More Products →
                </div>
              </div>

              {/* Bottom Banner */}
              <div className="mt-10 text-black">
                <hr />
                <div className="flex justify-between py-10 pe-10">
                  <div>
                    <div className="text-xl font-bold mb-3 text-[#00ADE7]">
                      {siteName}
                    </div>
                    <div className="text-xl text-gray-500">{tagline}</div>
                  </div>
                  <img
                    src={categoryImages[selectedCategory]}
                    alt={selectedCategory}
                    className={
                      selectedCategory === "Trinai Facial BioStand"
                        ? "h-36"
                        : "w-32 h-auto"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========== MAIN HEADER ========== */}
      <div className="flex items-center justify-between w-full px-6 lg:px-12 h-20">
        {/* LEFT: Logo + Navigation */}
        <div className="flex items-center gap-1 lg:gap-2">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0"
            onClick={() => {
              setIsCategoriesOpen(false);
              setIsMobileProductsOpen(false);
            }}
          >
            <img
              src={showWhiteHeader ? logoDark : logoLight}
              alt={siteName}
              className="h-7 lg:h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden lg:flex items-center gap-0.5 font-semibold ${
              showWhiteHeader ? "text-black" : "text-white"
            }`}
          >
            {/* Home */}
            <Link
              to="/"
              onClick={() => setIsCategoriesOpen(false)}
              className={`px-3 py-1.5 rounded-full transition-all duration-300 text-sm ${
                isActive("/") && !showWhiteHeader
                  ? "bg-white text-[#00ADE7] shadow-lg"
                  : showWhiteHeader
                    ? "text-black hover:text-[#00ADE7]"
                    : "text-white hover:text-[#00ADE7]"
              }`}
            >
              Home
            </Link>

            {/* About */}
            <Link
              to="/about"
              onClick={() => setIsCategoriesOpen(false)}
              className={`px-3 py-1.5 rounded-full transition-all duration-300 text-sm ${
                showWhiteHeader
                  ? "text-black hover:text-[#00ADE7]"
                  : "text-white hover:text-[#00ADE7]"
              }`}
            >
              About
            </Link>

            {/* Products with Mega Menu */}
            <div
              className="relative"
              onMouseEnter={handleMenuEnter}
              onMouseLeave={handleMenuLeave}
            >
              <Link
                to="/products"
                onClick={() => setIsCategoriesOpen(false)}
                className={`px-3 py-1.5 rounded-full transition-all duration-300 block text-sm ${
                  isActive("/products") && !showWhiteHeader
                    ? "bg-white text-[#00ADE7] shadow-lg"
                    : showWhiteHeader
                      ? "text-black hover:text-[#00ADE7]"
                      : "text-white hover:text-[#00ADE7]"
                }`}
              >
                Products
              </Link>
            </div>

            {/* Solutions */}
            <Link
              to="/solutions"
              onClick={() => setIsCategoriesOpen(false)}
              className={`px-3 py-1.5 rounded-full transition-all duration-300 text-sm ${
                isActive("/solutions") && !showWhiteHeader
                  ? "bg-white text-[#00ADE7] shadow-lg"
                  : showWhiteHeader
                    ? "text-black hover:text-[#00ADE7]"
                    : "text-white hover:text-[#00ADE7]"
              }`}
            >
              Solutions
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => setIsCategoriesOpen(false)}
              className={`px-3 py-1.5 rounded-full transition-all duration-300 text-sm ${
                isActive("/contact") && !showWhiteHeader
                  ? "bg-white text-[#00ADE7] shadow-lg"
                  : showWhiteHeader
                    ? "text-black hover:text-[#00ADE7]"
                    : "text-white hover:text-[#00ADE7]"
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* RIGHT: Phone + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div
            className={`flex items-center gap-1.5 font-medium text-sm ${
              showWhiteHeader ? "text-black" : "text-white"
            }`}
          >
            <FiPhoneCall className="text-base" />
            <span>{phoneNumber}</span>
          </div>
          <button
            onClick={() => handleNavClick(ctaLink)}
            className="flex items-center gap-1.5 bg-gradient-to-r from-[#00ADE7] via-[#305292] to-[#27AAE1] text-white font-medium text-sm px-4 py-1.5 rounded-[10px] hover:opacity-90 transition-opacity"
          >
            {ctaText} <FiArrowRight className="text-sm" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className={`lg:hidden text-xl ${
            showWhiteHeader ? "text-black" : "text-white"
          }`}
        >
          <FiMenu />
        </button>
      </div>

      {/* ========== MOBILE DRAWER ========== */}
      {isMenuOpen && (
        <div
          className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white text-black z-50 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 overflow-y-auto`}
        >
          <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
            <span className="font-bold text-lg">Menu</span>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsMobileProductsOpen(false);
              }}
            >
              <FiX size={24} />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-6 font-semibold">
            {/* Home */}
            <Link
              to="/"
              onClick={() => {
                setIsMenuOpen(false);
                setIsMobileProductsOpen(false);
              }}
              className={`py-3 px-4 rounded-lg mb-2 transition-all ${
                isActive("/")
                  ? "bg-white text-[#00ADE7] shadow-md font-bold"
                  : "text-black hover:bg-[#f0f7ff]"
              }`}
            >
              Home
            </Link>

            {/* About */}
            <Link
              to="/about"
              onClick={() => {
                setIsMenuOpen(false);
                setIsMobileProductsOpen(false);
              }}
              className={`py-3 px-4 rounded-lg mb-2 transition-all text-black hover:bg-[#f0f7ff]`}
            >
              About
            </Link>

            {/* Products */}
            <div className="mb-2">
              <div
                className={`flex items-center justify-between py-3 px-4 rounded-lg ${
                  isActive("/products") || isMobileProductsOpen
                    ? "bg-[#f0f7ff]"
                    : "hover:bg-[#f0f7ff]"
                }`}
              >
                <button
                  onClick={handleMobileProductsNavClick}
                  className="flex-1 text-left"
                >
                  <span
                    className={
                      isActive("/products") || isMobileProductsOpen
                        ? "text-[#00ADE7] font-bold"
                        : "text-black"
                    }
                  >
                    Products
                  </span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMobileProducts();
                  }}
                  className="text-2xl text-[#00ADE7]"
                >
                  {isMobileProductsOpen ? <FiMinus /> : <FiPlus />}
                </button>
              </div>

              {isMobileProductsOpen && (
                <div className="mt-2 ml-4 pl-4 border-l-2 border-[#f0f7ff]">
                  {/* Categories */}
                  <div className="mb-4">
                    <div className="text-sm font-bold text-gray-500 mb-2 px-2">
                      Categories
                    </div>
                    <div className="space-y-1 max-h-[200px] overflow-y-auto custom-scrollbar">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => handleMobileCategoryClick(category)}
                          className={`block text-left w-full text-sm rounded-lg px-3 py-2 ${
                            mobileSelectedCategory === category
                              ? "bg-[#f0f7ff] text-[#00ADE7] font-semibold"
                              : "text-gray-700 hover:bg-[#f0f7ff]"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Products */}
                  <div>
                    <div className="text-sm font-bold text-gray-500 mb-2 px-2">
                      {mobileSelectedCategory}
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {productsByCategory[mobileSelectedCategory]?.map(
                        (product, index) => (
                          <button
                            key={index}
                            onClick={() => handleMobileProductClick(product)}
                            className="text-left text-sm text-gray-700 hover:bg-[#f0f7ff] rounded-lg px-3 py-2"
                          >
                            {product.name}
                          </button>
                        ),
                      )}
                      <button
                        onClick={() => handleMobileProductClick(null)}
                        className="text-left text-sm font-bold text-[#00ADE7] hover:opacity-80 transition-opacity px-3 py-2"
                      >
                        See More Products →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions */}
            <Link
              to="/solutions"
              onClick={() => {
                setIsMenuOpen(false);
                setIsMobileProductsOpen(false);
              }}
              className={`py-3 px-4 rounded-lg mb-2 transition-all ${
                isActive("/solutions")
                  ? "bg-white text-[#00ADE7] shadow-md font-bold"
                  : "text-black hover:bg-[#f0f7ff]"
              }`}
            >
              Solutions
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => {
                setIsMenuOpen(false);
                setIsMobileProductsOpen(false);
              }}
              className={`py-3 px-4 rounded-lg mb-2 transition-all ${
                isActive("/contact")
                  ? "bg-white text-[#00ADE7] shadow-md font-bold"
                  : "text-black hover:bg-[#f0f7ff]"
              }`}
            >
              Contact
            </Link>

            {/* Phone + CTA */}
            <div className="mt-6 border-t pt-6 space-y-4">
              <div className="flex items-center gap-2 text-gray-700">
                <FiPhoneCall className="text-[#00ADE7]" />
                <span className="font-semibold">{phoneNumber}</span>
              </div>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsMobileProductsOpen(false);
                  navigate(ctaLink);
                }}
                className="w-full bg-gradient-to-r from-[#00ADE7] via-[#305292] to-[#27AAE1] text-white font-bold px-5 py-3 rounded-[10px]"
              >
                {ctaText} <FiArrowRight />
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </header>
  );
};

export default Header;
