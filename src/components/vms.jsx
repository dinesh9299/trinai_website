// import React, { useState } from "react";
// import { ScrollTop } from "primereact/scrolltop";
// import {
//   Shield,
//   Eye,
//   Activity,
//   Settings,
//   Users,
//   Zap,
//   Monitor,
//   CheckCircle,
//   Camera,
//   Server,
//   Layers,
//   Globe,
//   ArrowRight,
//   Menu,
//   X,
//   Play,
//   Search,
//   Download,
//   AlertTriangle,
// } from "lucide-react";
// import Banner from "../images/Banner.jpg";
// import unified_video_monitoring from "../images/Unified Video Monitoring.jpg";
// import Intelligent_Camera_Health_Monitoring from "../images/Intelligent Camera Health Monitoring.jpg";
// import Seamless_Integration from "../images/Seamless Integration (1).jpg";
// import Scalable_Future_Ready_Architecture from "../images/Scalable & Future-Ready Architecture.jpg";
// import User_Friendly_Interface from "../images/User-Friendly Interface.jpg";

// function Vms() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const features = [
//     {
//       icon: <Monitor className="w-8 h-8" />,
//       title: "Unified Video Monitoring",
//       description: [
//         "Central dashboard for live view, playback, and camera control",
//         "Real-time situational awareness across all connected sites",
//         "Multi-camera timeline and instant playback tools",
//       ],
//       image: unified_video_monitoring,
//     },
//     {
//       icon: <Activity className="w-8 h-8" />,
//       title: "Intelligent Camera Health Monitoring",
//       description: [
//         "Real-time health status of all cameras",
//         "Visual indicators for active/inactive/faulty devices",
//         "Summarized view of operational camera count",
//       ],
//       image: Intelligent_Camera_Health_Monitoring,
//     },
//     {
//       icon: <Layers className="w-8 h-8" />,
//       title: "Seamless Integration",
//       description: [
//         "Supports all major IP camera brands (ONVIF compliant)",
//         "Compatible with existing servers and storage devices",
//         "Open architecture ensures flexibility and vendor independence",
//       ],
//       image: Seamless_Integration,
//     },
//     {
//       icon: <Zap className="w-8 h-8" />,
//       title: "Scalable & Future-Ready Architecture",
//       description: [
//         "Modular system supports easy expansion",
//         "Add more cameras or locations without reworking infrastructure",
//         "Ready for AI-based analytics modules and smart add-ons",
//       ],
//       image: Scalable_Future_Ready_Architecture,
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "User-Friendly Interface",
//       description: [
//         "Clean, intuitive UI for faster operator onboarding",
//         "Smart search filters and timeline navigation",
//         "Easy video export in standard formats",
//       ],
//       image: User_Friendly_Interface,
//     },
//   ];

//   const specifications = [
//     { label: "Architecture", value: "Client-Server or Web-based" },
//     { label: "Supported Cameras", value: "ONVIF-compliant, RTSP-streaming" },
//     { label: "Video Compression", value: "H.264 / H.265 / MJPEG" },
//     { label: "Storage Support", value: "NAS / SAN / Local HDD / Cloud-ready" },
//     { label: "User Access Control", value: "Role-based, multi-user login" },
//     { label: "Camera Health Alerts", value: "Real-time, color-coded alerts" },
//     {
//       label: "Search Capabilities",
//       value: "Date/time, motion, camera name, tags",
//     },
//     { label: "Export Formats", value: "MP4, AVI, JPEG snapshots" },
//     {
//       label: "Integration Support",
//       value: "3rd-party alarm systems, I/O triggers",
//     },
//     { label: "Scalability", value: "Up to 50,000+ cameras" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       {/* <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-0">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center">
//               <Shield className="w-8 h-8 text-[#27AAE1] mr-3" />
//               <span className="text-2xl font-bold text-gray-900">
//                 Trinai VMS
//               </span>
//             </div>
//           </div>
//         </div> */}

//       {/* Mobile Menu */}
//       {/* {isMenuOpen && (
//           <div className="md:hidden bg-white border-t">
//             <div className="px-4 py-2 space-y-2">
//               <a href="#features" className="block py-2 text-gray-700">
//                 Features
//               </a>
//               <a href="#specifications" className="block py-2 text-gray-700">
//                 Specifications
//               </a>
//               <a href="#support" className="block py-2 text-gray-700">
//                 Support
//               </a>
//               <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-2">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         )}
//       </nav> */}

//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-[#00ADE7] to-[#305292] text-white overflow-hidden">
//         <div className="absolute inset-0 bg-black/20"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <div className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium">
//                   <Zap className="w-4 h-4 mr-2" />
//                   Next-Generation Surveillance
//                 </div>
//                 <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
//                   Advanced Centralized
//                   <span className="text-[#27AAE1]"> Surveillance</span>{" "}
//                   Management
//                 </h1>
//                 <p className="text-xl text-blue-100 leading-relaxed">
//                   Trinai VMS empowers institutions and enterprises to monitor,
//                   manage, and secure their environments with complete confidence
//                   through scalable, intelligent video management.
//                 </p>
//               </div>

//               <div className="flex items-center space-x-8 pt-4">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold">50,000+</div>
//                   <div className="text-blue-200 text-sm">Max Cameras</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold">99.9%</div>
//                   <div className="text-blue-200 text-sm">Uptime</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold">24/7</div>
//                   <div className="text-blue-200 text-sm">Support</div>
//                 </div>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
//                 <img
//                   src={Banner}
//                   alt="Trinai VMS Dashboard"
//                   className="w-full rounded-lg lg:h-72 h-32 md:h-52 shadow-2xl"
//                 />
//                 <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
//                   <div className="flex items-center">
//                     <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
//                     Live Monitoring
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Key Features */}
//       <section id="features" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Powerful Features for Modern Surveillance
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Experience comprehensive video management with intelligent
//               monitoring, seamless integration, and scalable architecture
//               designed for enterprise needs.
//             </p>
//           </div>

//           {/* Enhanced Features Grid */}
//           <div className="grid lg:grid-cols-2 gap-8 mb-16">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={feature.image}
//                     alt={feature.title}
//                     className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                   <div className="absolute bottom-4 left-4">
//                     <div className="bg-[#27AAE1] text-white p-3 rounded-lg">
//                       {feature.icon}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                     {feature.title}
//                   </h3>
//                   <ul className="space-y-3">
//                     {feature.description.map((point, i) => (
//                       <li key={i} className="flex items-start text-gray-600">
//                         <CheckCircle className="w-5 h-5 text-[#27AAE1] mr-3 mt-0.5 flex-shrink-0" />
//                         <span className="leading-relaxed">{point}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Additional Feature Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-all">
//               <Eye className="w-12 h-12 text-blue-600 mb-4" />
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 Real-time Monitoring
//               </h3>
//               <p className="text-gray-600">
//                 Live view across all connected sites with instant alerts
//               </p>
//             </div>

//             <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-all">
//               <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 Health Monitoring
//               </h3>
//               <p className="text-gray-600">
//                 Intelligent camera status with visual indicators
//               </p>
//             </div>

//             <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition-all">
//               <Globe className="w-12 h-12 text-purple-600 mb-4" />
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 ONVIF Compatible
//               </h3>
//               <p className="text-gray-600">
//                 Works with all major IP camera brands
//               </p>
//             </div>

//             <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition-all">
//               <Users className="w-12 h-12 text-orange-600 mb-4" />
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 User Management
//               </h3>
//               <p className="text-gray-600">
//                 Role-based access control and multi-user support
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Technical Specifications */}
//       <section id="specifications" className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Technical Specifications
//             </h2>
//             <p className="text-xl text-gray-600">
//               Enterprise-grade architecture built for performance and
//               scalability
//             </p>
//           </div>

//           <div className="w-full min-h-screen flex justify-center items-center py-10 bg-gray-50">
//             <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
//               <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 flex items-center">
//                 <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-[#27AAE1] mr-3" />
//                 System Specifications
//               </h3>

//               <div className="space-y-4">
//                 {specifications.map((spec, index) => (
//                   <div
//                     key={index}
//                     className="flex flex-col md:flex-row md:justify-between md:items-center py-3 border-b border-gray-100 last:border-b-0"
//                   >
//                     <div className="text-gray-600 font-medium md:w-1/2">
//                       {spec.label}
//                     </div>
//                     <div className="text-gray-800 font-semibold md:w-1/2 md:text-right mt-1 md:mt-0">
//                       {spec.value}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Deployment & Support */}
//       <section
//         id="support"
//         className="py-20 bg-gradient-to-br from-[#00ADE7] to-[#305292] text-white"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Deployment & Support</h2>
//             <p className="text-xl text-blue-200">
//               Complete end-to-end service from setup to ongoing maintenance
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-12">
//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all cursor-pointer ease-out">
//               <Settings className="w-12 h-12 text-blue-700 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-4">Tailored Setup</h3>
//               <p className="text-blue-200">
//                 Custom deployment based on your existing infrastructure and
//                 specific requirements
//               </p>
//             </div>

//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all cursor-pointer ease-out">
//               <Users className="w-12 h-12 text-blue-700 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-4">
//                 Training & Documentation
//               </h3>
//               <p className="text-blue-200">
//                 Comprehensive operator training and full technical documentation
//                 for your team
//               </p>
//             </div>

//             <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all cursor-pointer ease-out">
//               <Shield className="w-12 h-12 text-blue-700 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-4">Ongoing Support</h3>
//               <p className="text-blue-200">
//                 24/7 technical support with remote diagnostics and proactive
//                 monitoring
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
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
//     </div>
//   );
// }

// export default Vms;

// src/pages/Vms.jsx
import React, { useState, useEffect } from "react";
import { ScrollTop } from "primereact/scrolltop";
import * as LucideIcons from "lucide-react";
import strapiApi from "../services/strapiApi";

// ✅ Dynamic Icon Component - Maps string names to Lucide icons
const Icon = ({ name, className, ...props }) => {
  const IconComponent = LucideIcons[name] || LucideIcons.Shield;
  return <IconComponent className={className} {...props} />;
};

function Vms() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cmsData, setCmsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadVmsData = async () => {
      try {
        const rawData = await strapiApi.fetchVmsPage();
        const transformed = strapiApi.transformVmsData(rawData);
        setCmsData(transformed);
      } catch (err) {
        console.error("Failed to load VMS data:", err);
        setError("Failed to load content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    loadVmsData();
  }, []);

  // ✅ Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#27AAE1] border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading VMS content...</p>
        </div>
      </div>
    );
  }

  // ✅ Error State
  if (error || !cmsData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center text-red-600">
          <p className="text-lg font-semibold">
            {error || "No content available"}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-[#27AAE1] text-white rounded-lg hover:bg-blue-600 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const { hero, features, specs, deployment } = cmsData;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00ADE7] to-[#305292] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                {hero.badge && (
                  <div className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                    <Icon name={hero.badgeIcon} className="w-4 h-4 mr-2" />
                    {hero.badge}
                  </div>
                )}
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  {hero.title?.split("Surveillance").map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="text-[#27AAE1]"> Surveillance</span>
                      )}
                    </React.Fragment>
                  ))}
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  {hero.description}
                </p>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8 pt-4">
                {hero.stats?.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                {hero.image && (
                  <img
                    src={hero.image}
                    alt="Trinai VMS Dashboard"
                    className="w-full rounded-lg lg:h-72 h-32 md:h-52 shadow-2xl object-cover"
                  />
                )}
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    Live Monitoring
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {features.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {features.subtitle}
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {features.mainFeatures?.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              >
                <div className="relative overflow-hidden">
                  {feature.image && (
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-[#27AAE1] text-white p-3 rounded-lg">
                      <Icon name={feature.iconName} className="w-8 h-8" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <ul className="space-y-3">
                    {feature.description?.map((point, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <LucideIcons.CheckCircle className="w-5 h-5 text-[#27AAE1] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.quickFeatures?.map((quick) => (
              <div
                key={quick.id}
                className={`bg-gradient-to-br ${quick.bgGradient} p-6 rounded-xl hover:shadow-lg transition-all`}
              >
                <Icon
                  name={quick.iconName}
                  className="w-12 h-12 text-blue-600 mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {quick.title}
                </h3>
                <p className="text-gray-600">{quick.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="specifications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {specs.title}
            </h2>
            <p className="text-xl text-gray-600">{specs.subtitle}</p>
          </div>

          <div className="w-full min-h-screen flex justify-center items-center py-10 bg-gray-50">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Icon
                  name="Settings"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#27AAE1] mr-3"
                />
                System Specifications
              </h3>

              <div className="space-y-4">
                {specs.items?.map((spec, index) => (
                  <div
                    key={spec.id || index}
                    className="flex flex-col md:flex-row md:justify-between md:items-center py-3 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="text-gray-600 font-medium md:w-1/2">
                      {spec.label}
                    </div>
                    <div className="text-gray-800 font-semibold md:w-1/2 md:text-right mt-1 md:mt-0">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment & Support */}
      <section
        id="support"
        className="py-20 bg-gradient-to-br from-[#00ADE7] to-[#305292] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{deployment.title}</h2>
            <p className="text-xl text-blue-200">{deployment.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {deployment.cards?.map((card) => (
              <div
                key={card.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all cursor-pointer ease-out"
              >
                <Icon
                  name={card.iconName}
                  className="w-12 h-12 text-blue-700 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                <p className="text-blue-200">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll to Top */}
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
}

export default Vms;
