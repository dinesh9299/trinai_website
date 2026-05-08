// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Camera,
//   MapPin,
//   Wifi,
//   Monitor,
//   Mic,
//   Shield,
//   Flame,
//   Eye,
//   Navigation,
//   MessageSquare,
//   AlertTriangle,
//   Car,
//   ArrowRight,
//   Sparkles,
//   Users,
//   Building,
//   Zap,
//   Activity,
//   Bell,
//   Target,
//   Truck,
//   Radio,
//   Thermometer,
//   UserCheck,
//   Home,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// import logo1 from "../images/security-solutions-icons/1.jpg";
// import logo2 from "../images/security-solutions-icons/2.jpg";
// import logo3 from "../images/security-solutions-icons/3.jpg";
// import logo4 from "../images/security-solutions-icons/4.jpg";
// import logo5 from "../images/security-solutions-icons/5.jpg";
// import logo6 from "../images/security-solutions-icons/6.jpg";
// import logo7 from "../images/security-solutions-icons/7.jpg";
// import logo8 from "../images/security-solutions-icons/8.jpg";
// import logo9 from "../images/security-solutions-icons/9.jpg";
// import logo10 from "../images/security-solutions-icons/10.jpg";
// import logo11 from "../images/security-solutions-icons/11.jpg";
// import logo12 from "../images/security-solutions-icons/12.jpg";
// import logo13 from "../images/security-solutions-icons/13.jpg";
// import logo14 from "../images/security-solutions-icons/14.jpg";
// import logo15 from "../images/security-solutions-icons/15.jpg";
// import logo16 from "../images/security-solutions-icons/16.jpg";
// import logo17 from "../images/security-solutions-icons/17.jpg";
// import logo18 from "../images/security-solutions-icons/18.jpg";
// import logo19 from "../images/security-solutions-icons/19.jpg";

// export const securitySolutions = [
//   {
//     id: "motion-detection",
//     icon: logo1,
//     title: "Motion Detection",
//     category: "surveillance",
//     details: {
//       description: "Detects movement in restricted areas and triggers alerts.",
//       features: [
//         "Instant Alerts",
//         "Custom Sensitivity",
//         "Zone Selection",
//         "24/7 Monitoring",
//         "AI Analytics",
//         "Cloud Storage",
//         "Mobile Alerts",
//       ],
//       benefits: [
//         "Prevents Intrusion",
//         "Reduces False Alarms",
//         "Enhanced Security",
//         "Crime Prevention",
//         "Evidence Collection",
//         "Remote Access",
//       ],
//     },
//   },
//   {
//     id: "facial-recognition",
//     icon: logo2,
//     title: "Facial Recognition",
//     category: "surveillance",
//     details: {
//       description: "Identifies individuals using advanced AI algorithms.",
//       features: [
//         "Real-time Identification",
//         "Blacklist/Whitelist",
//         "Integration with Access Control",
//         "24/7 Monitoring",
//         "AI Analytics",
//         "Cloud Storage",
//         "Mobile Alerts",
//       ],
//       benefits: [
//         "Enhanced Security",
//         "Automated Entry",
//         "Accurate Records",
//         "Crime Prevention",
//         "Evidence Collection",
//         "Remote Access",
//       ],
//     },
//   },
//   {
//     id: "remote-monitoring",
//     icon: logo3,
//     title: "Remote Monitoring",
//     category: "surveillance",
//     details: {
//       description:
//         "Monitor your premises in real-time from anywhere in the world.",
//       features: [
//         "Live Video Feed",
//         "Motion Alerts",
//         "Two-way Audio",
//         "Night Vision",
//         "AI Analytics",
//         "Cloud Storage",
//         "Mobile Alerts",
//       ],
//       benefits: [
//         "Peace of Mind",
//         "Immediate Response",
//         "Deterrence of Crime",
//         "Remote Access",
//         "24/7 Surveillance",
//       ],
//     },
//   },
//   { id: "lpr", icon: logo4, title: "LPR", category: "surveillance" },
//   { id: "pid", icon: logo5, title: "PID", category: "surveillance" },
//   { id: "bac", icon: logo6, title: "BAC", category: "tracking" },
//   {
//     id: "rfid-entry",
//     icon: logo7,
//     title: "RFID _ Based Entry",
//     category: "tracking",
//   },

//   // Row 2
//   {
//     id: "public-event-security",
//     icon: logo8,
//     title: "Public Event Security",
//     category: "safety",
//   },
//   { id: "qms", icon: logo9, title: "QMS", category: "safety" },
//   {
//     id: "people-counting",
//     icon: logo10,
//     title: "People Counting",
//     category: "tracking",
//   },
//   {
//     id: "atm-security",
//     icon: logo11,
//     title: "ATM Security Cameras",
//     category: "surveillance",
//   },
//   {
//     id: "warehouse-surveillance",
//     icon: logo12,
//     title: "Ware house Surveillance",
//     category: "tracking",
//   },
//   {
//     id: "asset-tracking",
//     icon: logo13,
//     title: "High-value Asset Tracking",
//     category: "tracking",
//   },
//   {
//     id: "server-monitoring",
//     icon: logo14,
//     title: "Server Room Monitoring",
//     category: "surveillance",
//   },

//   // Row 3
//   {
//     id: "ppe-detection",
//     icon: logo15,
//     title: "PPE",
//     category: "safety",
//   },
//   {
//     id: "fire-smoke",
//     icon: logo16,
//     title: "Fire & Smoke Detection",
//     category: "safety",
//   },
//   {
//     id: "real-time-hazard",
//     icon: logo17,
//     title: "Real - Time Hazard",
//     category: "safety",
//   },
//   {
//     id: "emergency-response",
//     icon: logo18,
//     title: "AER",
//     category: "safety",
//   },
//   {
//     id: "crowd-monitoring",
//     icon: logo19,
//     title: "Crowd Monitoring",
//     category: "tracking",
//   },
//   {
//     id: "Crossline-detection",
//     icon: "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Untitled%20design%20(8).png",
//     title: "Crossline Detection",
//     category: "tracking",
//   },
// ];

// const categoryColors = {
//   surveillance: {
//     icon: "text-[#27AAE1]",
//     border: "border-blue-200",
//   },
//   tracking: {
//     icon: "text-[#27AAE1]",
//     border: "border-blue-200",
//   },
//   safety: {
//     icon: "text-[#27AAE1]",
//     border: "border-blue-200",
//   },
//   passenger: {
//     icon: "text-[#27AAE1]",
//     border: "border-blue-200",
//   },
//   other: {
//     icon: "text-[#27AAE1]",
//     border: "border-blue-200",
//   },
// };

// function SecurityCard({ solution, index, onClick }) {
//   const IconComponent = solution.icon;
//   const colors = categoryColors[solution.category];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20, scale: 0.9 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{
//         duration: 0.5,
//         delay: index * 0.05,
//         type: "spring",
//         stiffness: 100,
//       }}
//       whileHover={{
//         scale: 1.03,
//         y: -3,
//         transition: { duration: 0.2 },
//       }}
//       whileTap={{ scale: 0.98 }}
//       onClick={onClick}
//       className={`
//         group relative cursor-pointer
//         bg-white
//         border ${colors.border}
//         p-3 sm:p-4
//         shadow-lg hover:shadow-2xl
//         transition-all duration-300
//         flex flex-col items-center justify-center
//         min-h-[130px] sm:min-h-[140px] md:min-h-[150px]
//         overflow-hidden
//         rounded-[2rem]
//         hover:bg-gradient-to-br hover:from-[#00ADE7] hover:to-[#305292]
//       `}
//     >
//       {/* Background decoration */}
//       <div className="absolute top-0 right-0 w-12 h-12 bg-white/30 rounded-full -translate-y-6 translate-x-6 group-hover:scale-150 transition-transform duration-500" />

//       {/* Icon - Compact Size */}
//       <div
//         className={`
//         p-2 rounded-lg mb-2
//         bg-white/60 group-hover:bg-white
//         transition-all duration-300
//         group-hover:scale-110
//       `}
//       >
//         <img
//           className={`w-9 h-9 sm:w-10 sm:h-10 ${colors.icon}`}
//           src={IconComponent}
//           alt={solution.title}
//         />
//       </div>

//       {/* Title - Compact */}
//       <h3 className="text-[10px] sm:text-xs font-semibold text-gray-800 text-center leading-tight mb-1.5 group-hover:text-white transition-colors duration-300 line-clamp-2">
//         {solution.title}
//       </h3>

//       {/* View More Link - Compact */}
//       <div className="mt-1 flex flex-col justify-center items-center gap-0.5">
//         <div className="flex items-center gap-1">
//           <span className="text-gray-800 font-medium text-[9px] sm:text-[10px] group-hover:text-white transition-colors duration-300">
//             View More
//           </span>
//           <svg
//             className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-800 group-hover:text-white transition-colors duration-300"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M14 5l7 7m0 0l-7 7m7-7H3"
//             />
//           </svg>
//         </div>

//         {/* Animated WHITE Underline */}
//         <div className="h-0.5 w-0 group-hover:w-full bg-white rounded-full transition-all duration-300" />
//       </div>
//     </motion.div>
//   );
// }

// function DetailView({ solution, onBack }) {
//   const IconComponent = solution.icon;
//   const colors = categoryColors[solution.category];

//   function getDetailedContent() {
//     switch (solution.category) {
//       case "surveillance":
//         return {
//           description:
//             "Advanced surveillance technology with AI-powered analytics and real-time monitoring capabilities.",
//           features: [
//             "24/7 Monitoring",
//             "AI Analytics",
//             "Cloud Storage",
//             "Mobile Alerts",
//           ],
//           benefits: [
//             "Enhanced Security",
//             "Crime Prevention",
//             "Evidence Collection",
//             "Remote Access",
//           ],
//         };
//       case "tracking":
//         return {
//           description:
//             "Comprehensive tracking solutions with GPS integration and real-time location services.",
//           features: [
//             "Real-time GPS",
//             "Geofencing",
//             "Route Optimization",
//             "Asset Management",
//           ],
//           benefits: [
//             "Improved Efficiency",
//             "Cost Reduction",
//             "Better Planning",
//             "Asset Protection",
//           ],
//         };
//       case "safety":
//         return {
//           description:
//             "Critical safety systems designed to protect lives and prevent accidents through automated detection.",
//           features: [
//             "Automated Detection",
//             "Instant Alerts",
//             "Emergency Response",
//             "Compliance Monitoring",
//           ],
//           benefits: [
//             "Life Protection",
//             "Risk Mitigation",
//             "Regulatory Compliance",
//             "Peace of Mind",
//           ],
//         };
//       default:
//         return {
//           description:
//             "Innovative solution designed to meet your specific security and operational needs.",
//           features: [
//             "Custom Features",
//             "Scalable Design",
//             "Easy Integration",
//             "24/7 Support",
//           ],
//           benefits: [
//             "Tailored Solution",
//             "Future-Ready",
//             "Seamless Integration",
//             "Reliable Support",
//           ],
//         };
//     }
//   }

//   const content = getDetailedContent();

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 50 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: -50 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6"
//     >
//       <div className="max-w-4xl mx-auto">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={onBack}
//           className="mb-8 flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300"
//         >
//           <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
//           Back to Solutions
//         </motion.button>

//         <div
//           className={`bg-gradient-to-r ${colors.bg} rounded-3xl p-8 mb-8 border ${colors.border}`}
//         >
//           <div className="flex items-center mb-6">
//             <div className="p-4 bg-white rounded-2xl mr-6">
//               <IconComponent className={`w-12 h-12 ${colors.icon}`} />
//             </div>
//             <div>
//               <h1 className="text-4xl font-bold text-gray-800 mb-2">
//                 {solution.title}
//               </h1>
//               <span
//                 className={`px-4 py-2 rounded-full text-sm font-medium ${colors.icon} bg-white/60 capitalize`}
//               >
//                 {solution.category}
//               </span>
//             </div>
//           </div>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             {content.description}
//           </p>
//         </div>

//         <div>
//           {solution?.details?.features?.map((feature, index) => (
//             <div key={index}>{feature}</div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function Securitysolutions() {
//   const navigate = useNavigate();

//   const handleCardClick = (solution) => {
//     navigate(`/security/${solution.id}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-8 sm:py-12 px-4 sm:px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 lg:gap-6">
//           {securitySolutions.map((solution, index) => (
//             <SecurityCard
//               key={solution.id}
//               solution={solution}
//               index={index}
//               onClick={() => handleCardClick(solution)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Securitysolutions;

//2nd time commented code for reference

// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ScrollTop } from "primereact/scrolltop";
// import {
//   Eye, Shield, Bell, Zap, Monitor, Globe, AlertTriangle, Activity,
//   Layers, Cpu, CheckCircle, ArrowRight, Factory, Warehouse, HardHat,
//   Users, Camera, Settings, FileText, Flame, Construction
// } from "lucide-react";

// const STRAPI_URL = "http://localhost:1337"; // 🔧 Change to your production URL

// const getImageUrl = (media) => (media ? `${STRAPI_URL}${media.url}` : "");

// // Simple icon mapper (Strapi doesn't store React components)
// const getIcon = (title, type) => {
//   const t = title.toLowerCase();
//   if (type === "feature") {
//     if (t.includes("real-time") || t.includes("alert")) return Bell;
//     if (t.includes("proactive") || t.includes("prevention")) return Shield;
//     if (t.includes("integration")) return Settings;
//     if (t.includes("configurable")) return Layers;
//     if (t.includes("audit") || t.includes("report")) return FileText;
//     return Cpu;
//   }
//   if (type === "application") {
//     if (t.includes("manufacturing")) return Factory;
//     if (t.includes("warehouse")) return Warehouse;
//     if (t.includes("construction")) return Construction;
//     return Users;
//   }
//   return Monitor;
// };

// const SecuritySolutionPage = () => {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`${STRAPI_URL}/api/security-solutions?filters[slug][$eq]=${slug}&populate=*`);
//         const json = await res.json();
//         if (json.data?.length) setData(json.data[0]);
//         else setError("Solution not found");
//       } catch {
//         setError("Failed to load data");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [slug]);

//   if (loading) return <div className="min-h-screen flex items-center justify-center bg-gray-50 text-[#00ADE7] text-xl">Loading...</div>;
//   if (error) return <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">{error}</div>;

//   const d = data;
//   const splitFeature = (text) => {
//     const [title, desc] = text.split(" - ");
//     return { title: title?.trim() || text, desc: desc?.trim() || "" };
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
//       {/* HERO */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="relative overflow-hidden h-[500px] md:h-[600px] bg-cover bg-center"
//         style={{ backgroundImage: `url(${getImageUrl(d.bannerImage)})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-[#00ADE7]/90 via-[#305292]/80 to-[#00ADE7]/90" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//         <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

//         <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
//           <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center w-full">
//             <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring", stiffness: 200 }} className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-6 shadow-lg border border-white/30">
//               <AlertTriangle className="w-5 h-5 text-white mr-2" />
//               <span className="text-sm font-semibold text-white">{d.bannerTagline}</span>
//             </motion.div>
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
//               {d.bannerTitle.split(" ").map((word, i) => (
//                 <span key={i}>{word === "CCTV" || word === "Surveillance" ? (
//                   <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{word} </span>
//                 ) : `${word} `}</span>
//               ))}
//             </h1>
//             <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">{d.bannerSubtitle}</p>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* MAIN CONTENT */}
//       <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
//         {/* INTRO */}
//         <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
//           <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
//             <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
//               <Monitor className="w-8 h-8 text-[#00ADE7] mr-3" /> {d.introTitle}
//             </h2>
//             <p className="text-lg text-gray-700 leading-relaxed">{d.introContent}</p>
//           </div>
//         </motion.section>

//         {/* WHAT IS */}
//         <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
//           <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
//             <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
//               <Eye className="w-8 h-8 text-[#00ADE7] mr-3" /> {d.whatIsTitle}
//             </h2>
//             <p className="text-lg text-gray-700 leading-relaxed mb-8">{d.whatIsContent}</p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {d.whatIsBoxes?.map((box, i) => (
//                 <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-start bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:border-[#00ADE7]/30 transition-all duration-300 group">
//                   <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                     <Eye className="w-6 h-6 text-white" />
//                   </div>
//                   <div><h4 className="font-semibold text-gray-900 mb-1">{box.title}</h4><p className="text-sm text-gray-600">{box.description}</p></div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         {/* WHY MATTERS */}
//         <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
//           <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
//             <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
//               <Shield className="w-8 h-8 text-[#00ADE7] mr-3" /> {d.whyMattersTitle}
//             </h2>
//             <p className="text-lg text-gray-700 leading-relaxed mb-8">{d.whyMattersIntro}</p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {d.whyMattersPoints?.map((pt, i) => (
//                 <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:border-[#00ADE7]/30 hover:shadow-lg transition-all duration-300 group">
//                   <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
//                     <CheckCircle className="w-5 h-5 text-white" />
//                   </div>
//                   <span className="text-gray-700 font-medium">{pt.text}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>

//         {/* HOW IT WORKS */}
//         <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-4">{d.howItWorksTitle}</h2>
//             <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">{d.howItWorksDesc}</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {d.howItWorksSteps?.map((step, i) => {
//               const StepIcon = [Camera, Eye, Bell, Zap][i] || Cpu;
//               return (
//                 <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#00ADE7]/30 group">
//                   <div className="flex items-center mb-4">
//                     <div className="w-12 h-12 bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-full flex items-center justify-center text-white font-bold text-lg mr-3 group-hover:scale-110 transition-transform duration-300">{step.stepNumber}</div>
//                     <StepIcon className="w-6 h-6 text-[#00ADE7]" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#00ADE7] group-hover:to-[#305292] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{step.title}</h3>
//                   <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
//                   {i < d.howItWorksSteps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#00ADE7] to-[#305292]" />}
//                 </motion.div>
//               );
//             })}
//           </div>
//         </motion.section>

//         {/* FEATURES */}
//         <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-4">{d.featuresTitle}</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {d.features?.map((feat, i) => {
//               const { title, desc } = splitFeature(feat.text);
//               const FIcon = getIcon(title, "feature");
//               return (
//                 <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ADE7] to-[#305292] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
//                   <div className="relative z-10">
//                     <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-[#00ADE7] to-[#305292] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"><FIcon className="w-8 h-8 text-white" /></div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-[#00ADE7] group-hover:to-[#305292] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{title}</h3>
//                     <p className="text-gray-600 text-lg leading-relaxed">{desc}</p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </motion.section>

//         {/* APPLICATIONS */}
//         <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-4">{d.applicationsTitle}</h2>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {d.applicationsList?.map((app, i) => {
//               const AIcon = getIcon(app.title, "application");
//               return (
//                 <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.05, y: -5 }} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#00ADE7]/30 group">
//                   <div className="bg-gradient-to-br from-[#00ADE7] to-[#305292] rounded-xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"><AIcon className="w-8 h-8 text-white" /></div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#00ADE7] group-hover:to-[#305292] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{app.title}</h3>
//                   <p className="text-gray-600 leading-relaxed text-sm">{app.description}</p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </motion.section>

//         {/* WHY TRINAI */}
//         <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
//           <div className="bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
//             <div className="absolute inset-0 bg-black/10" />
//             <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
//             <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
//             <div className="relative z-10">
//               <motion.div initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }} className="inline-flex p-4 bg-white/20 backdrop-blur-md rounded-2xl mb-6 shadow-lg border border-white/30"><Shield className="w-12 h-12 text-white" /></motion.div>
//               <h2 className="text-4xl md:text-5xl font-bold mb-6">{d.whyTrinaiTitle}</h2>
//               <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md">{d.whyTrinaiContent}</p>
//               <motion.button initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8 px-8 py-4 bg-white text-[#00ADE7] font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center mx-auto gap-2"><span>Explore Solutions</span><ArrowRight className="w-5 h-5" /></motion.button>
//             </div>
//           </div>
//         </motion.section>
//       </div>

//       <ScrollTop target="window" threshold={100} className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center shadow-lg hover:scale-125 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer" icon={<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19V5M5 12l7-7 7 7" /></svg>} />
//     </div>
//   );
// };

// export default SecuritySolutionPage;

// src/components/Securitysolutions.jsx
// ✅ 100% Strapi-driven - Restored Old Styles & Fixed Icon Visibility
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fetchSecuritySolutions, getStrapiMedia } from "../services/strapiApi";

const categoryColors = {
  surveillance: { border: "border-blue-200" },
  tracking: { border: "border-green-200" },
  safety: { border: "border-orange-200" },
  passenger: { border: "border-purple-200" },
  other: { border: "border-gray-200" },
};

const SecurityCard = ({ solution, index, onClick }) => {
  const colors = categoryColors[solution.category] || categoryColors.other;
  const iconUrl = getStrapiMedia(solution.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.03,
        y: -3,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        group relative cursor-pointer
        bg-white
        border ${colors.border}
        p-3 sm:p-4
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        flex flex-col items-center justify-center
        min-h-[130px] sm:min-h-[140px] md:min-h-[150px]
        overflow-hidden
        rounded-[2rem]
        hover:bg-gradient-to-br hover:from-[#00ADE7] hover:to-[#305292]
      `}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-white/30 rounded-full -translate-y-6 translate-x-6 group-hover:scale-150 transition-transform duration-500" />

      {/* Icon Container: White/60 initially, Solid White on hover (Fixes icon visibility) */}
      <div
        className={`
        p-2 rounded-lg mb-2
        bg-white/60 group-hover:bg-white
        transition-all duration-300
        group-hover:scale-110
      `}
      >
        {iconUrl ? (
          <img
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
            src={iconUrl}
            alt={solution.title}
          />
        ) : (
          <span className="text-2xl">🔒</span>
        )}
      </div>

      {/* Title - Black initially, White after hover */}
      <h3 className="text-[10px] sm:text-xs font-semibold text-gray-800 text-center leading-tight mb-1.5 group-hover:text-white transition-colors duration-300 line-clamp-2">
        {solution.title}
      </h3>

      {/* View More Link - Gray initially, White after hover with animated underline */}
      <div className="mt-1 flex flex-col justify-center items-center gap-0.5">
        <div className="flex items-center gap-1">
          <span className="text-gray-800 font-medium text-[9px] sm:text-[10px] group-hover:text-white transition-colors duration-300">
            View More
          </span>
          <svg
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-800 group-hover:text-white transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>

        {/* Animated WHITE Underline */}
        <div className="h-0.5 w-0 group-hover:w-full bg-white rounded-full transition-all duration-300" />
      </div>
    </motion.div>
  );
};

const Securitysolutions = () => {
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchSecuritySolutions();
        setSolutions(data);
      } catch (error) {
        console.error("Failed to load solutions:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleCardClick = (solution) => {
    navigate(`/security/${solution.slug}`);
  };

  if (loading) {
    return (
      <div className="min-h-[300px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#00ADE7]"></div>
      </div>
    );
  }

  return (
    <div className="py-8 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
        {solutions.map((solution, index) => (
          <SecurityCard
            key={solution.id}
            solution={solution}
            index={index}
            onClick={() => handleCardClick(solution)}
          />
        ))}
      </div>
      {solutions.length === 0 && !loading && (
        <p className="text-center text-gray-500 py-8">
          No solutions found. Add data in Strapi admin.
        </p>
      )}
    </div>
  );
};

export default Securitysolutions;
