// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import sollutionbanner from "../images/cctv-security-online-camera-indoor (2).jpg";
// import solutionsByIndustry from "../components/sollutionbyindustry";
// import { Image } from "antd";
// import Senario from "../components/Secondsollution";
// import Solutionfunction from "../components/Thirdsollution";
// import { ScrollTop } from "primereact/scrolltop";
// import Vms from "../components/Vms"; // ✅ Ensure PascalCase import
// import SmartBusPage from "../components/Smartbus";
// import Smartbus from "../components/Smartbuspage";
// import BusFeatureInteractive from "../components/clickable";
// import Whatweoffer from "../components/whatweoffer";
// import Transport from "../components/Transport";
// import Whychooseus from "../components/Whychooseus";
// import Securitysolutions from "../components/Securitysolutions";
// import SolutionsByScenario1 from "../components/SolutionsByScenario1";

// function Solutions() {
//   const [selectedIndustry, setSelectedIndustry] = useState(null);
//   const [showCardView, setShowCardView] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // ✅ Single gradient for all cards
//   const UNIFIED_GRADIENT = "from-blue-500 to-cyan-400";

//   // Card data for each industry - all using same gradient
//   const industryCards = [
//     {
//       id: 1,
//       industry: "Transport",
//       title: "Smart Bus Solutions",
//       description:
//         "Specialized smart bus solutions for luxury bus transportation – AI-driven safety, real-time tracking, premium comfort. Revolutionize your fleet!",
//       image:
//         "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Untitled%20design%20(2)%20(1).jpg",
//       gradient: UNIFIED_GRADIENT, // ✅ Same for all
//       navigateTo: "/smartbus",
//     },
//     {
//       id: 2,
//       industry: "Trinai VMS",
//       title: "Trinai VMS",
//       description:
//         "Discover top VMS companies powering video management systems – advanced VMS solutions for seamless surveillance, AI analytics, real-time monitoring.",
//       image:
//         "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20Solution%20Page/Solutions%20by%20industry/VMS.png  ",
//       gradient: UNIFIED_GRADIENT, // ✅ Same for all
//       navigateTo: "/vms",
//     },
//     {
//       id: 3,
//       industry: "Residential Security",
//       title: "Residential Security",
//       description:
//         "Secure residences with best security cameras for residential use – SimpliSafe, ADT, Lorex lead home surveillance systems in 2026 for AI smarts, reliability.",
//       image:
//         "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20Solution%20Page/Solutions%20by%20industry/Residential.png  ",
//       gradient: UNIFIED_GRADIENT, // ✅ Same for all
//     },
//     {
//       id: 4,
//       industry: "Commercial Security",
//       title: "Commercial Security",
//       description:
//         "Leading commercial security solutions with advanced CCTV solutions – AI surveillance, 24/7 monitoring, scalable systems for businesses in 2026.",
//       image:
//         "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20Solution%20Page/Solutions%20by%20industry/Commercial.png  ",
//       gradient: UNIFIED_GRADIENT, // ✅ Same for all
//     },
//     {
//       id: 5,
//       industry: "Industrial & Manufacturing",
//       title: "Industrial & Manufacturing",
//       description:
//         "Robust security solutions for industrial & manufacturing surveillance – AI cameras, real-time monitoring, threat detection for factories and warehouses.",
//       image:
//         "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20Solution%20Page/Solutions%20by%20industry/Industries%20&%20Manufacturing.png  ",
//       gradient: UNIFIED_GRADIENT, // ✅ Same for all
//     },
//     {
//       id: 6,
//       industry: "Healthcare Security",
//       title: "Healthcare Security",
//       description:
//         "Advanced healthcare surveillance with hospital surveillance solutions – AI monitoring, patient safety, HIPAA-compliant CCTV for secure medical facilities.",
//       image:
//         "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20Solution%20Page/Solutions%20by%20industry/Health%20care.png  ",
//       gradient: UNIFIED_GRADIENT, // ✅ Same for all
//     },
//     {
//       id: 7,
//       industry: "Education Security",
//       title: "Education Security",
//       description:
//         "Advanced classroom monitoring systems enhance education security – real-time video analytics, AI threat detection for safer learning environments.",
//       image:
//         "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20Solution%20Page/Solutions%20by%20industry/Education.png  ",
//       gradient: UNIFIED_GRADIENT, // ✅ Same for all
//     },
//   ];

//   const handleCardClick = (card) => {
//     if (card.navigateTo) {
//       navigate(card.navigateTo);
//       return;
//     }

//     const industry = solutionsByIndustry.find(
//       (ind) => ind.industry === card.industry,
//     );
//     if (industry) {
//       setSelectedIndustry(industry);
//       setShowCardView(false);
//     }
//   };

//   const handleBackToCards = () => {
//     setShowCardView(true);
//     setSelectedIndustry(null);
//   };

//   return (
//     <div className="sollution_maincontainer text-gray-500">
//       {/* ================= BANNER SECTION WITH GRADIENT ================= */}
//       <div className="relative w-full bg-gradient-to-br from-[#00ADE7] via-[#305292] to-[#00ADE7]">
//         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png  ')]"></div>

//         <div className="relative z-10 flex flex-col items-center justify-center text-center py-32 md:py-48 lg:py-60 px-4">
//           <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
//             Our Solutions
//           </h1>
//           <p className="text-white/90 text-lg md:text-2xl lg:text-3xl max-w-3xl drop-shadow-md">
//             Comprehensive surveillance solutions for all applications
//           </p>
//         </div>
//       </div>

//       {/* ================= SOLUTIONS BY INDUSTRY ================= */}
//       <div className="Solution_by_insustry bg-slate-50 min-h-screen">
//         <div className="main_heading text-center py-12">
//           <h1 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-4">
//             Solutions by Industry
//           </h1>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto px-4">
//             Explore our comprehensive range of industry-specific security
//             solutions
//           </p>
//         </div>

//         <div className="container mx-auto px-6 pb-12">
//           {/* CARD VIEW */}
//           {showCardView && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {industryCards.map((card) => (
//                 <div
//                   key={card.id}
//                   onClick={() => handleCardClick(card)}
//                   className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
//                 >
//                   {/* Card Image Container */}
//                   <div className="relative h-64 overflow-hidden">
//                     {/* ✅ Unified gradient for all cards */}
//                     <div
//                       className={`absolute inset-0 bg-gradient-to-br ${UNIFIED_GRADIENT} opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10`}
//                     ></div>
//                     <img
//                       src={card.image}
//                       alt={card.title}
//                       className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                     />
//                     {/* Overlay Gradient */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
//                   </div>

//                   {/* Card Content */}
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#00ADE7] transition-colors duration-300">
//                       {card.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                       {card.description}
//                     </p>

//                     {/* 🔷 Button - ALL Show "Explore Now" with Same Gradient */}
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         if (card.navigateTo) {
//                           window.location.href = card.navigateTo;
//                         } else {
//                           // Optional: Show message for cards without navigation
//                           // alert("Detailed solutions coming soon!");
//                         }
//                       }}
//                       className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg text-white bg-gradient-to-r from-[#00ADE7] to-[#305292] hover:from-[#305292] hover:to-[#00ADE7] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00ADE7] focus:ring-offset-2 group-hover:gap-3"
//                       aria-label={`Explore ${card.title}`}
//                     >
//                       <span>Explore Now</span>
//                       <svg
//                         className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M9 5l7 7-7 7"
//                         />
//                       </svg>
//                     </button>
//                   </div>

//                   {/* ✅ Bottom Border Accent - Unified gradient */}
//                   <div
//                     className={`h-1 bg-gradient-to-r ${UNIFIED_GRADIENT} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
//                   ></div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* DETAILED VIEW */}
//           {!showCardView && selectedIndustry && (
//             <div className="animate-fadeIn">
//               {/* Back Button */}
//               <div className="mb-8">
//                 <button
//                   onClick={handleBackToCards}
//                   className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
//                 >
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M10 19l-7-7m0 0l7-7m-7 7h18"
//                     />
//                   </svg>
//                   Back to Industries
//                 </button>
//               </div>

//               {/* Industry Header */}
//               <div className="bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-2xl p-8 mb-8 text-white shadow-xl">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-3">
//                   {selectedIndustry.industry}
//                 </h2>
//                 <p className="text-white/90 text-lg leading-relaxed max-w-4xl">
//                   {selectedIndustry.description}
//                 </p>
//               </div>

//               {/* Conditional VMS Component - Will be removed when VMS navigates */}
//               {selectedIndustry.industry === "Trinai VMS" && (
//                 <div className="my-6">
//                   <Vms />
//                 </div>
//               )}

//               {selectedIndustry.industry === "Transport" && (
//                 <div className="my-6">
//                   <Transport />
//                 </div>
//               )}

//               {selectedIndustry.industry !== "Trinai VMS" &&
//                 selectedIndustry.industry !== "Transport" && (
//                   <div className="bg-white rounded-xl shadow-lg p-6">
//                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       {selectedIndustry.solutions.map((solution, i) => (
//                         <li
//                           key={i}
//                           className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 p-5 border border-gray-200 rounded-xl shadow-sm bg-gray-50 hover:shadow-md hover:border-[#00ADE7]/50 transition-all duration-300"
//                         >
//                           <div className="w-full md:w-1/2 h-[250px] overflow-hidden rounded-lg">
//                             <Image
//                               src={solution.image}
//                               alt={solution.name}
//                               preview
//                               width="100%"
//                               height="100%"
//                               style={{ objectFit: "cover" }}
//                               className="hover:scale-105 transition-transform duration-300"
//                             />
//                           </div>
//                           <div className="w-full md:w-1/2">
//                             <h3 className="text-lg font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-3">
//                               {solution.name}
//                             </h3>
//                             <p className="text-sm text-gray-600 leading-relaxed">
//                               {solution.description}
//                             </p>
//                           </div>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ================= SOLUTIONS BY SCENARIO ================= */}
//       <div className="bg-gray-100">
//         <SolutionsByScenario1 />
//       </div>

//       {/* ================= SECURITY SOLUTIONS ================= */}
//       <div className="Solution_by_scenario bg-slate-200 h-full p-6">
//         <div className="main_heading text-center mb-8">
//           <h1 className="font-bold text-4xl bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
//             Security Solutions
//           </h1>
//         </div>

//         <Securitysolutions />
//       </div>

//       {/* ================= SCROLL TOP ================= */}
//       <div>
//         <ScrollTop
//           target="window"
//           threshold={100}
//           className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center shadow-lg hover:scale-125 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer"
//           icon={
//             <svg
//               className="w-5 h-5 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M12 19V5M5 12l7-7 7 7" />
//             </svg>
//           }
//         />
//       </div>
//       {/* <div>
//         <ScrollTop
//           target="window"
//           threshold={100}
//           className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center shadow-lg hover:from-[#305292] hover:to-[#00ADE7] transition-all duration-300"
//         >
//           <span className="text-white text-xl font-sans">↑</span>
//         </ScrollTop>
//       </div> */}
//     </div>
//   );
// }

// export default Solutions;

// src/pages/Solutions.jsx
// ✅ PRODUCTION MODE - Strict Strapi data only

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScrollTop } from "primereact/scrolltop";
import {
  fetchSolutionsPage,
  transformSolutionsData,
} from "../services/strapiApi";
import Vms from "../components/vms";
import Transport from "../components/Transport";
import Securitysolutions from "../components/Securitysolutions";
import SolutionsByScenario1 from "../components/SolutionsByScenario1";

// Safe Image Component
const SafeImage = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  if (!src || error) {
    return (
      <div
        className={`${className} bg-gray-200 flex items-center justify-center text-gray-400 text-xs`}
      >
        No Image
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
};

function Solutions() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [showCardView, setShowCardView] = useState(true);
  const [solutionsData, setSolutionsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    loadSolutionsData();
  }, []);

  const loadSolutionsData = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("🔄 Loading solutions from Strapi...");

      const rawData = await fetchSolutionsPage();
      console.log("✅ Raw data received, transforming...");

      const transformed = transformSolutionsData(rawData);
      console.log("✅ Transformed industries:", transformed.industries.length);

      // Debug: Log each industry's solution count
      transformed.industries.forEach((ind) => {
        console.log(`- ${ind.industry}: ${ind.solutions.length} solutions`);
      });

      setSolutionsData(transformed);
    } catch (err) {
      console.error("❌ Failed to load solutions:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (card) => {
    if (card.navigateTo) {
      navigate(card.navigateTo);
      return;
    }
    if (card.showDetailedView !== false) {
      console.log(
        "📂 Opening:",
        card.industry,
        "| Solutions:",
        card.solutions.length,
      );
      setSelectedIndustry(card);
      setShowCardView(false);
    }
  };

  const handleBackToCards = () => {
    setShowCardView(true);
    setSelectedIndustry(null);
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#00ADE7] border-t-transparent"></div>
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 p-8 text-center">
        <h2 className="text-2xl font-bold">Error Loading Solutions</h2>
        <p className="mt-4">{error}</p>
        <button
          onClick={loadSolutionsData}
          className="mt-6 px-6 py-2 bg-[#00ADE7] text-white rounded-lg"
        >
          Retry
        </button>
      </div>
    );

  const { banner, industries } = solutionsData || {
    banner: {},
    industries: [],
  };

  return (
    <div className="sollution_maincontainer text-gray-500">
      {/* Banner */}
      <div className="relative w-full bg-gradient-to-br from-[#00ADE7] via-[#305292] to-[#00ADE7]">
        <div className="relative z-10 flex flex-col items-center justify-center text-center py-32 px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            {banner.title || "Our Solutions"}
          </h1>
          <p className="text-white/90 text-lg md:text-2xl max-w-3xl">
            {banner.description || "Comprehensive surveillance solutions"}
          </p>
        </div>
      </div>

      {/* Solutions by Industry */}
      <div className="Solution_by_insustry bg-slate-50 min-h-screen py-12">
        <div className="text-center mb-12">
          <h2 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-4">
            Solutions by Industry
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto px-4">
            Explore our comprehensive range of industry-specific security
            solutions
          </p>
        </div>

        <div className="container mx-auto px-6">
          {showCardView && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((card) => (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(card)}
                  className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 transition-opacity z-10`}
                    ></div>
                    <SafeImage
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#00ADE7] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {card.description}
                    </p>
                    <button className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg text-white bg-gradient-to-r from-[#00ADE7] to-[#305292] hover:from-[#305292] hover:to-[#00ADE7] transition-all">
                      <span>Explore Now</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!showCardView && selectedIndustry && (
            <div className="animate-fadeIn">
              <button
                onClick={handleBackToCards}
                className="mb-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Industries
              </button>

              <div className="bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-2xl p-8 mb-8 text-white shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  {selectedIndustry.industry}
                </h2>
                <p className="text-white/90 text-lg">
                  {selectedIndustry.description}
                </p>
              </div>

              {selectedIndustry.industry === "Trinai VMS" && <Vms />}
              {selectedIndustry.industry === "Transport" && <Transport />}

              {selectedIndustry.industry !== "Trinai VMS" &&
                selectedIndustry.industry !== "Transport" && (
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">
                      Solutions ({selectedIndustry.solutions.length})
                    </h3>
                    {selectedIndustry.solutions.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {selectedIndustry.solutions.map((sol) => (
                          <div
                            key={sol.id}
                            className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 p-5 border border-gray-200 rounded-xl shadow-sm bg-gray-50 hover:shadow-md hover:border-[#00ADE7]/50 transition-all duration-300"
                          >
                            <div className="w-full md:w-1/2 h-[200px] overflow-hidden rounded-lg bg-gray-200">
                              <SafeImage
                                src={sol.image}
                                alt={sol.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="w-full md:w-1/2">
                              <h4 className="text-lg font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-2">
                                {sol.name}
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {sol.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        <p>No solutions configured for this industry yet.</p>
                        <p className="text-sm mt-2">
                          Check console logs or Strapi admin.
                        </p>
                      </div>
                    )}
                  </div>
                )}
            </div>
          )}
        </div>
      </div>

      {/* Other Sections */}
      <div className="bg-gray-100 py-12">
        <SolutionsByScenario1 />
      </div>
      <div className="Solution_by_scenario bg-slate-200 p-6">
        <div className="text-center mb-8">
          <h2 className="font-bold text-4xl bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
            Security Solutions
          </h2>
        </div>
        <Securitysolutions />
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
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19V5M5 12l7-7 7 7"
            />
          </svg>
        }
      />
    </div>
  );
}

export default Solutions;
