// import React, { useEffect } from "react";
// import Whatweoffer from "../components/whatweoffer";
// import SmartBusPage from "../components/Smartbuspage";
// import Whychooseus from "../components/Whychooseus";

// const Smartbus = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   });

//   return (
//     <div>
//       <SmartBusPage />
//       {/* <Whatweoffer /> */}
//       <Whychooseus />
//     </div>
//   );
// };

// export default Smartbus;

// src/pages/Smartbus.jsx - UPDATED WITH UNIQUE ICONS
import React, { useState, useEffect } from "react";
import { ScrollTop } from "primereact/scrolltop";
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  Wifi,
  Cctv,
  MapPin,
  Zap,
  Shield,
  Volume2,
  BarChart3,
  Users,
  Award,
  Leaf,
  Star,
  Building2,
  Wrench,
  ScanFace,
  ShieldCheck,
  TrendingUp,
  MonitorCheck,
  BookKey,
  Smile,
  ArrowRight,
  Camera,
  Activity,
  Monitor,
  Mic,
  AlertTriangle,
  Flame,
  Brain,
  Car,
  Video,
  Radar,
  Eye,
  DoorOpen,
  Wind,
  Navigation,
  Tv,
} from "lucide-react";
import { GiSteeringWheel } from "react-icons/gi";
import { GrAnalytics } from "react-icons/gr";
import {
  fetchSmartbusPage,
  transformSmartbusData,
} from "../services/strapiApi";
import BusFeatureInteractive from "../components/clickable";

const SafeImage = ({ src, alt, className, ...props }) => {
  const [error, setError] = useState(false);
  if (!src || error) {
    return (
      <div
        className={`${className} bg-gray-200 dark:bg-gray-700 flex items-center justify-center`}
      >
        <span className="text-gray-400 text-xs">No Image</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt || ""}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
};

function Smartbus() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(mediaQuery.matches);
    const handler = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "overview",
        "solutions",
        "features",
        "analytics",
        "detailed-sections",
        "why-choose-us",
        "future",
        "why-choose",
      ];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log("🔄 [Smartbus Page] Loading from Strapi...");
      setLoading(true);
      setError(null);
      const raw = await fetchSmartbusPage();
      const transformed = transformSmartbusData(raw);

      console.log(
        "📊 Detailed Sections:",
        transformed?.detailedSections?.map((ds) => ({
          title: ds.section_title,
          hasItems: !!ds.items,
          itemCount: ds.items?.length,
        })),
      );

      if (transformed?.banner?.title) {
        console.log("✅ [Smartbus] Data loaded successfully");
        setData(transformed);
      } else {
        throw new Error("Invalid data from Strapi");
      }
    } catch (err) {
      console.error("❌ [Smartbus] Failed:", err);
      setError("Unable to connect to Strapi backend.");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#00ADE7] mx-auto mb-4"></div>
          <p className="text-gray-400">Loading Smart Bus from Strapi...</p>
        </div>
      </div>
    );

  if (error || !data)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
        <div className="max-w-md text-center bg-gray-800 rounded-2xl shadow-xl p-8 border border-red-800">
          <div className="text-red-500 mb-4">
            <svg
              className="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Connection Error
          </h2>
          <p className="text-gray-400 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#00ADE7] text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );

  const {
    banner,
    highlights,
    solutions,
    techFeatures,
    innovations,
    benefits,
    busComponents,
    gallery,
    detailedSections,
  } = data;

  // ✅ Filter out "Big Data & Analytics" from Core Technology Features
  const coreFeatures = techFeatures.filter(
    (f) => !f.title.toLowerCase().includes("big data"),
  );

  const features = coreFeatures.map((feat, index) => ({
    icon: [Cctv, MapPin, MonitorCheck, Wifi, Volume2, Shield][index % 6],
    title: feat.title,
    description: feat.description,
    des: feat.description,
    bullets: feat.bullets || [],
  }));

  const solutionsList = solutions.map((sol, idx) => ({
    text: sol.title,
    image: sol.image || `https://picsum.photos/800/400?random=${idx}`,
  }));

  const innovationsList = innovations.map((inn, index) => ({
    title: inn.title,
    description: inn.description,
    icon: [GiSteeringWheel, ScanFace, Wrench, Building2, MapPin][index % 5],
  }));

  const benefitsList = benefits.map((ben) => ({
    title: ben.title,
    description: ben.description,
    icon: <ShieldCheck className="w-8 h-8" />,
  }));

  // Icon mapping for detailed sections
  const getSectionIcon = (sectionType) => {
    const icons = {
      surveillance: Camera,
      tracking: MapPin,
      "passenger-info": Monitor,
      safety: Shield,
    };
    return icons[sectionType] || Activity;
  };

  // Section colors (matching Image 36)
  const getSectionColor = (sectionType) => {
    const colors = {
      surveillance: {
        text: "text-purple-500",
        border: "border-purple-500",
        bg: "bg-purple-500",
      },
      tracking: {
        text: "text-teal-500",
        border: "border-teal-500",
        bg: "bg-teal-500",
      },
      "passenger-info": {
        text: "text-purple-500",
        border: "border-purple-500",
        bg: "bg-purple-500",
      },
      safety: {
        text: "text-orange-500",
        border: "border-orange-500",
        bg: "bg-orange-500",
      },
    };
    return (
      colors[sectionType] || {
        text: "text-blue-500",
        border: "border-blue-500",
        bg: "bg-blue-500",
      }
    );
  };

  // ✅ UPDATED: Unique icon mapping for each item
  const getItemIcon = (itemTitle) => {
    const title = itemTitle.toLowerCase();

    // === Surveillance & Safety ===
    if (title.includes("entry")) return DoorOpen;
    if (title.includes("blind spot")) return Radar;
    if (title.includes("front") || title.includes("road")) return Car;
    if (title.includes("driver") || title.includes("fatigue")) return Brain;
    if (title.includes("cabin")) return Video;

    // === Tracking & Connectivity ===
    if (title.includes("gps") || title.includes("tracking")) return Navigation;
    if (title.includes("wifi") || title.includes("internet")) return Wifi;

    // === Passenger Information Systems ===
    if (
      title.includes("led") ||
      title.includes("signage") ||
      title.includes("display")
    )
      return Tv;
    if (title.includes("pa") || title.includes("system")) return Mic;

    // === Safety Enhancements ===
    if (title.includes("breath")) return Wind;
    if (title.includes("fire") || title.includes("suppression")) return Flame;

    // Fallback
    return Activity;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          {banner?.image && (
            <SafeImage
              src={banner.image}
              alt="Smart city with modern buses"
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {banner?.title || "Smart Bus Solution"}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mt-2">
                {banner?.subtitle || "Revolutionising Public Transport"}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              {banner?.description ||
                "As cities grow and urban mobility challenges intensify, public transport must evolve to be smarter, safer, and more efficient"}
            </p>
            {highlights?.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {highlights.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("overview")}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Solutions
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-lg transition-colors duration-300 border border-white/30"
              >
                View Features
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </section>

      {/* ================= OVERVIEW SECTION ================= */}
      <section id="overview" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Intelligent Public Transport
              </h2>
              <p className="text-lg text-gray-300">
                Smart Bus Solutions represent the next generation of intelligent
                public transport systems, reducing dependency on private
                vehicles, easing congestion, enhancing passenger safety, and
                improving operational productivity.
              </p>
              <p className="text-lg text-gray-300">
                Every day, buses move millions of passengers across cities and
                towns worldwide — smart technology ensures they do so more
                safely, sustainably, and efficiently.
              </p>
            </div>
            <div className="relative">
              {banner?.image && (
                <SafeImage
                  src={banner.image}
                  alt="Modern city buses with AI technology"
                  className="rounded-2xl shadow-2xl w-full"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BUS COMPONENTS INTERACTIVE ================= */}
      {busComponents?.length > 0 && (
        <BusFeatureInteractive busComponents={busComponents} />
      )}

      {/* ================= SMART TRANSIT SOLUTIONS ================= */}
      {solutions?.length > 0 && (
        <section id="solutions" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Smart Transit Bus Solution
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                A Smart Transit Bus Solution is an IoT-enabled, AI-powered
                transportation ecosystem designed to optimise safety,
                efficiency, and passenger experience.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 space-y-6">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <SafeImage
                    src={solutionsList[activeIndex]?.image}
                    alt={solutionsList[activeIndex]?.text}
                    className="w-full h-auto object-cover transform transition duration-500 ease-in-out"
                  />
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  These innovations deliver{" "}
                  <span className="font-semibold text-blue-400">
                    higher route efficiency
                  </span>
                  , improved passenger satisfaction, and greater operational
                  control.
                </p>
              </div>
              <div className="space-y-4">
                {solutionsList.map((feature, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`flex items-start gap-4 p-5 rounded-xl cursor-pointer transition duration-300 group ${
                      activeIndex === index
                        ? "bg-blue-900 shadow-lg"
                        : "bg-gray-800 hover:shadow-lg"
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition ${
                        activeIndex === index
                          ? "bg-blue-600 text-white"
                          : "bg-gray-700 text-blue-400"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <p
                      className={`leading-snug ${
                        activeIndex === index
                          ? "text-blue-200 font-semibold"
                          : "text-gray-300"
                      }`}
                    >
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= CORE TECHNOLOGY FEATURES (Without Big Data) ================= */}
      {features?.length > 0 && (
        <section id="features" className="py-24 bg-[#0B1120]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Core Technology <span className="text-[#4FACFE]">Features</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Discover the advanced technologies that power our smart bus
                solution, from AI-driven systems to cutting-edge safety
                protocols.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                // Helper to extract text from string or object
                const getText = (item) => {
                  if (!item) return null;
                  if (typeof item === "string") return item.trim();
                  if (typeof item === "object") {
                    return (
                      item.text?.trim() ||
                      item.name?.trim() ||
                      item.title?.trim() ||
                      item.description?.trim() ||
                      null
                    );
                  }
                  return null;
                };

                // Collect ALL items from both description and bullets
                const allItems = [];

                // Add descriptions
                if (feature.description && Array.isArray(feature.description)) {
                  feature.description.forEach((desc) => {
                    const text = getText(desc);
                    if (text) allItems.push(text);
                  });
                }

                // Add bullets
                if (feature.bullets && Array.isArray(feature.bullets)) {
                  feature.bullets.forEach((bullet) => {
                    const text = getText(bullet);
                    if (text) allItems.push(text);
                  });
                }

                return (
                  <div
                    key={index}
                    className="bg-[#131B2C] p-8 rounded-3xl border border-gray-800 hover:border-[#00ADE7]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                  >
                    {/* Card Header */}
                    <div className="flex items-start gap-4 mb-8">
                      <div className="w-12 h-12 flex items-center justify-center bg-[#1A253A] rounded-xl text-[#00ADE7] flex-shrink-0">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-white leading-snug">
                        {feature.title}
                      </h3>
                    </div>

                    {/* List of "Boxed" Points */}
                    <div className="space-y-4 flex-grow">
                      {allItems.length > 0 ? (
                        allItems.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-4 bg-[#1A253A] p-5 rounded-xl border border-gray-700/50"
                          >
                            {/* Blue Checkmark Icon */}
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mt-0.5 shadow-lg shadow-blue-900/50">
                              <svg
                                className="w-4 h-4 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M5 13l4 4L19 7" />
                              </svg>
                            </div>

                            {/* Text Content - Shows with or without dash */}
                            <div className="flex-1 text-sm text-gray-300 leading-relaxed">
                              {item.includes(" – ") || item.includes(" - ") ? (
                                <>
                                  <span className="text-white font-semibold block mb-1">
                                    {item.split(/ – | - /)[0]}
                                  </span>
                                  <span className="text-gray-400">
                                    {item
                                      .split(/ – | - /)
                                      .slice(1)
                                      .join(" - ")}
                                  </span>
                                </>
                              ) : (
                                // Show plain text if no dash
                                <span>{item}</span>
                              )}
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500 text-sm">
                          No features listed
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ================= BIG DATA & ANALYTICS (Separate Section) ================= */}
      <section id="analytics" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Big Data & <span className="text-blue-400">Analytics</span>
              </h2>
              <p className="text-lg text-gray-300">
                Analyse passenger patterns and route performance.
              </p>
              <p className="text-lg text-gray-300">
                Optimise schedules, reduce costs, and enhance safety strategies.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                  <span className="text-gray-300">transit data analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-teal-400" />
                  <span className="text-gray-300">
                    AI-powered fleet management
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-orange-400" />
                  <span className="text-gray-300">
                    predictive maintenance for buses
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* ✅ Use Bigdataanalyticsimage from Strapi instead of gallery */}
              {data?.bigDataImage ? (
                <SafeImage
                  src={data.bigDataImage}
                  alt="Big Data Analytics dashboard"
                  className="rounded-2xl shadow-2xl w-full"
                />
              ) : gallery?.[0] ? (
                <SafeImage
                  src={gallery[0]}
                  alt="Analytics dashboard"
                  className="rounded-2xl shadow-2xl w-full"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FUTURE-READY INNOVATIONS ================= */}
      {innovations?.length > 0 && (
        <section id="future" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Future-Ready Smart Bus Innovations
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Smart city integration, AI-powered safety, and advanced
                passenger solutions — paving the way for the next generation of
                public transport.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {innovationsList.map((innovation, index) => {
                const Icon = innovation.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {innovation.title}
                    </h3>
                    <p className="text-gray-400">{innovation.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ================= WHY CHOOSE US (Dark with gradients) ================= */}
      <section
        id="why-choose-us"
        className="py-20 bg-black relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-600/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <svg
                className="w-10 h-10 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <span className="text-gray-400 text-lg">Solutions</span>
              <svg
                className="w-10 h-10 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Why Choose <span className="text-blue-500">US</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Revolutionary surveillance, safety, and connectivity solutions
              that transform modern transportation with cutting-edge technology
              and uncompromising safety standards.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {highlights?.map((tag, idx) => (
              <div
                key={idx}
                className="px-6 py-3 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700 flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300 font-medium">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DETAILED SECTIONS - FULL WIDTH WITH COLORED BACKGROUNDS ================= */}
      {detailedSections?.length > 0 && (
        <section id="detailed-sections">
          {detailedSections.map((section, sectionIndex) => {
            const SectionIcon = getSectionIcon(section.section_type);
            const colors = getSectionColor(section.section_type);

            // Full-width background colors for each section
            const bgColors = {
              surveillance: "bg-purple-950/40",
              tracking: "bg-teal-950/40",
              "passenger-info": "bg-purple-950/40",
              safety: "bg-orange-950/40",
            };

            const getBgColor = (type) => bgColors[type] || "bg-gray-900";

            // Image layout alternates
            const isImageRight = sectionIndex === 0 || sectionIndex === 2;

            return (
              <div
                key={section.id}
                className={`${getBgColor(section.section_type)} py-20 px-4`}
              >
                <div className="max-w-7xl mx-auto">
                  {/* Section Header with Color */}
                  <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      {SectionIcon && (
                        <SectionIcon className={`w-10 h-10 ${colors.text}`} />
                      )}
                      <h2
                        className={`text-4xl md:text-5xl font-bold ${colors.text}`}
                      >
                        {section.section_title}
                      </h2>
                    </div>
                    {section.description && (
                      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        {section.description}
                      </p>
                    )}
                    {/* Colored underline */}
                    <div
                      className={`w-24 h-1 ${colors.bg} mx-auto mt-6 rounded-full`}
                    ></div>
                  </div>

                  {/* Content Layout */}
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Cards Side */}
                    <div
                      className={`space-y-6 ${!isImageRight ? "lg:order-2" : ""}`}
                    >
                      {section.items?.map((item, idx) => {
                        const ItemIcon = getItemIcon(item.title);
                        return (
                          <div
                            key={item.id || idx}
                            className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
                          >
                            <div className="flex items-start gap-4">
                              <div
                                className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg ${colors.text.includes("purple") ? "bg-purple-500/20" : colors.text.includes("teal") ? "bg-teal-500/20" : colors.text.includes("orange") ? "bg-orange-500/20" : "bg-blue-500/20"}`}
                              >
                                <ItemIcon
                                  className={`w-6 h-6 ${colors.text}`}
                                />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                  {item.title}
                                </h3>
                                {item.description && (
                                  <p className="text-base text-gray-300 leading-relaxed">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Image Side */}
                    {section.image && (
                      <div className={`${isImageRight ? "lg:order-2" : ""}`}>
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                          <SafeImage
                            src={section.image}
                            alt={section.section_title}
                            className="rounded-xl shadow-2xl w-full"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      )}
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

export default Smartbus;
