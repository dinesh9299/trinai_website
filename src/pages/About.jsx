// src/pages/About.jsx - PRODUCTION READY (FIXED NAVIGATION)
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Image, Button, ConfigProvider, Carousel, Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { GiCctvCamera } from "react-icons/gi";
import { BsHddNetworkFill } from "react-icons/bs";
import { BsPcDisplay } from "react-icons/bs";
import { SlCamrecorder } from "react-icons/sl";
import { LuRouter } from "react-icons/lu";
import { TiTick } from "react-icons/ti";
import { motion } from "framer-motion";
import { ScrollTop } from "primereact/scrolltop";
import WhyChooseUs from "../components/who_we_are";

// API Configuration
const API_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

// Helper function to get media URL from Strapi
const getMediaUrl = (media) => {
  if (!media) return null;
  const mediaItem = media?.data || media;
  if (!mediaItem?.url) return null;
  return mediaItem.url.startsWith("http")
    ? mediaItem.url
    : `${API_URL}${mediaItem.url}`;
};

// Helper to parse rich text from Strapi
const parseRichText = (richText) => {
  if (!richText || !Array.isArray(richText)) return "";
  return richText
    .filter((block) => block.type === "paragraph")
    .map((block) => {
      const text = block.children
        .filter((child) => child.type === "text")
        .map((child) => child.text)
        .join("");
      return text.trim();
    })
    .filter((text) => text.length > 0)
    .join("\n\n");
};

// Icon mapping for features carousel
const featureIconMap = {
  GiCctvCamera: <GiCctvCamera size={40} />,
  LuRouter: <LuRouter size={40} />,
  BsHddNetworkFill: <BsHddNetworkFill size={40} />,
  BsPcDisplay: <BsPcDisplay size={40} />,
};

const About = () => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔥 FETCH ABOUT PAGE DATA FROM STRAPI
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchAboutData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${API_URL}/api/about-page?populate=*`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ About Data from Strapi:", data.data);
        setAboutData(data.data);
      } catch (err) {
        console.error("❌ Error fetching about data:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  // 🔴 LOADING STATE
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-20">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#00ADE7] border-t-transparent"></div>
      </div>
    );
  }

  // 🔴 ERROR STATE
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-20">
        <div className="text-center text-red-600">
          <p className="text-xl font-bold mb-2">Error Loading Content</p>
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-[#00ADE7] text-white rounded-lg hover:opacity-90"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Fallback data if Strapi returns empty
  const fallbackData = {
    banner_images: [],
    make_in_india_title: "Make in India",
    make_in_india_heading: "Indian Innovation. Global Impact.",
    make_in_india_description: [],
    make_in_india_image: null,
    vision_title: "Vision",
    vision_content:
      "To be a global leader in surveillance and security solutions, made in India for the world.",
    mission_title: "Mission",
    missionitems: [
      { text: "Build OEM / ODM global partnerships" },
      { text: "Manufacture 2M+ units in India" },
      { text: "Deliver scalable & affordable solutions" },
      { text: "Empower Indian technology & jobs" },
    ],
    security_heading: "Advanced Security and Surveillance Solutions",
    trinai_card_title: "Trinai Industries",
    trinai_card_heading: "Innovative Security Solutions by Trinai",
    trinai_card_badge_text: "100% Make in India",
    trinai_card_badge_subtext: "Trusted Nationwide",
    tinaicardimage: null,
    advancedsecuritytext1: "",
    surveillanceheadding1: "Intelligent Surveillance Solutions",
    surveillanceheadding2:
      "Six pillars that differentiate TRINAI from the rest",
    serveillancepart: [],
    welcome_title: "Welcome to Trinai",
    welcome_description:
      "We are leaders in advanced surveillance solutions, ensuring security and peace of mind.",
    welcome_image: null,
    welcome_page_products: [],
    welcome_cta_text: "View Products",
    welcome_cta_link: "/products", // ✅ FIXED: Changed from "/viewproducts" to "/products"
    features_carousel: [],
    manufacturing_title: "In House Manufacturing",
    manufacturing_description:
      "Our CCTV cameras are meticulously crafted through in-house manufacturing with an eye for detail by the best engineers, enabling complete control over quality, innovation, and precision.",
    manufacturing_image: null,
  };

  // Merge Strapi data with fallbacks
  const data = { ...fallbackData, ...aboutData };

  // Parse rich text description
  const makeInIndiaDescription = parseRichText(data.make_in_india_description);

  // Prepare features for carousel
  const features = (data.features_carousel || []).map((item) => ({
    picture: null,
    heading: item.heading,
    description: item.description,
    icon: item.icon_name ? (
      featureIconMap[item.icon_name]
    ) : (
      <GiCctvCamera size={40} />
    ),
  }));

  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);
  };

  const groupedFeatures = chunkArray(features, 4);

  // Banner images - DIRECT from Strapi array
  const bannerImages = (data.banner_images || []).map((img) =>
    getMediaUrl(img),
  );

  return (
    <div className="w-full bg-white text-black pt-20">
      {/* Banner Section - FROM STRAPI */}
      {bannerImages.length > 0 ? (
        <div
          className="w-full relative overflow-hidden group"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 pointer-events-none" />

          <Carousel
            ref={carouselRef}
            autoplay={!isHovering}
            autoplaySpeed={data.banner_autoplay_speed || 2000}
            infinite
            dots={false}
            beforeChange={(_, next) => setActiveSlide(next)}
            adaptiveHeight
            swipeToSlide
            draggable={false}
          >
            {bannerImages.map((img, index) => (
              <div key={index} className="w-full">
                <motion.img
                  src={img}
                  alt={`About Slide ${index + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-auto block select-none"
                  draggable={false}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </Carousel>

          {/* Indicator Dots */}
          <div className="absolute bottom-6 left-0 w-full z-20 px-4">
            <div className="flex justify-center items-center gap-3">
              {bannerImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => carouselRef.current?.goTo(index)}
                  className={`relative transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00ADE7] focus:ring-offset-2 focus:ring-offset-black/50 rounded-full ${
                    activeSlide === index
                      ? "w-10 h-1.5 bg-[#00ADE7] shadow-lg shadow-[#00ADE7]/50"
                      : "w-2.5 h-2.5 bg-white/90 hover:bg-white hover:scale-125 shadow-lg shadow-black/30"
                  }`}
                >
                  {activeSlide === index && (
                    <span className="absolute inset-0 rounded-full bg-[#00ADE7] animate-ping opacity-40" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">Banner images not loaded from Strapi</p>
        </div>
      )}

      {/* MAKE IN INDIA SECTION - FROM STRAPI */}
      <div className="p-5">
        <div className="lg:grid grid-cols-2 gap-10 border rounded-xl shadow-md p-8 items-center">
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="flex justify-center"
          >
            <img
              src={
                getMediaUrl(data.make_in_india_image) ||
                "https://via.placeholder.com/400x300?text=Make+in+India"
              }
              alt="Make in India - Trinai"
              loading="lazy"
              className="rounded-xl max-w-md w-full"
            />
          </motion.div>

          <motion.div
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <div className="text-xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
              {data.make_in_india_title}
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {data.make_in_india_heading}
            </h2>

            <div className="text-gray-600 text-lg leading-relaxed mb-4 space-y-4">
              {makeInIndiaDescription.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Vision & Mission - FROM STRAPI */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="group rounded-xl p-[2px] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] hover:-translate-y-1">
                <div className="bg-white rounded-xl p-5 h-full transition-all duration-300 group-hover:shadow-xl">
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">
                    {data.vision_title}
                  </h3>
                  <p className="text-gray-600">{data.vision_content}</p>
                </div>
              </div>
              <div className="group rounded-xl p-[2px] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] hover:-translate-y-1">
                <div className="bg-white rounded-xl p-5 h-full transition-all duration-300 group-hover:shadow-xl">
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">
                    {data.mission_title}
                  </h3>
                  <ul className="text-gray-600 space-y-1 list-disc list-inside">
                    {(data.missionitems || []).map((item, index) => (
                      <li key={index}>{item.text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* SECURITY HEADING - FROM STRAPI */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-4 lg:mb-6 px-4"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
          {data.security_heading}
        </h2>
      </motion.div>

      {/* TRINAI INDUSTRIES CARD - FROM STRAPI */}
      <div className="lg:p-6">
        <div className="py-4 px-5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            {/* LEFT IMAGE - FROM STRAPI */}
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg">
                <div className="relative p-[3px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#00ADE7] to-[#305292] shadow-2xl">
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white">
                    <img
                      src={
                        getMediaUrl(data.tinaicardimage) ||
                        "https://via.placeholder.com/400x300?text=Trinai+Industries"
                      }
                      alt="Innovative Security Solutions by Trinai"
                      className="w-full h-auto max-h-[240px] sm:max-h-[280px] lg:max-h-[320px] object-contain p-3 sm:p-4 transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white shadow-xl rounded-xl sm:rounded-2xl px-4 py-2 sm:px-5 sm:py-3 hidden md:block z-10">
                  <p className="text-xs sm:text-sm font-semibold text-gray-700">
                    {data.trinai_card_badge_text}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    {data.trinai_card_badge_subtext}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT CONTENT - FROM STRAPI */}
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <svg width="0" height="0">
                <defs>
                  <linearGradient
                    id="tickGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#00ADE7" />
                    <stop offset="100%" stopColor="#305292" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-wider bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-3 sm:mb-4">
                {data.trinai_card_title}
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                {data.trinai_card_heading}
              </h3>

              <div className="mt-6 space-y-5 text-gray-600 text-base sm:text-lg">
                {data.advancedsecuritytext1.split("\n\n").map((text, index) => {
                  const parts = text.split(" – ");
                  if (parts.length === 2) {
                    return (
                      <div key={index} className="flex items-start gap-4 group">
                        <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00ADE7]/15 to-[#305292]/15 group-hover:scale-110 transition-transform duration-300">
                          <TiTick
                            size={18}
                            style={{ fill: "url(#tickGradient)" }}
                          />
                        </div>
                        <p>
                          <span className="font-semibold text-gray-800">
                            {parts[0]} –
                          </span>{" "}
                          {parts[1]}
                        </p>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* WELCOME TO TRINAI - FROM STRAPI */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md md:max-w-lg rounded-2xl overflow-hidden">
            <img
              src={
                getMediaUrl(data.welcome_image) ||
                "https://via.placeholder.com/400x300?text=Welcome+to+Trinai"
              }
              alt="Trinai Security"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="p-3 md:p-4 flex flex-col justify-center text-center md:text-left max-w-lg">
          <h1 className="text-2xl md:text-4xl font-bold">
            {data.welcome_title}
          </h1>
          <p className="text-sm md:text-base leading-relaxed mt-3">
            {data.welcome_description}
          </p>
          <div className="mt-5">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(data.welcome_page_products || []).map((product, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-[#00ADE7] transition-colors duration-300 bg-gray-100 rounded-lg p-3 shadow-sm"
                >
                  <span className="w-3 h-3 bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-full inline-block"></span>
                  {product.name}
                </li>
              ))}
            </ul>
            <div className="mt-5">
              {/* ✅ FIXED: Navigate to /products instead of /viewproducts */}
              <Link to="/products">
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#00ADE7",
                    },
                  }}
                >
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    className="font-semibold shadow-md border-0 hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(90deg, #00ADE7 0%, #305292 50%, #27AAE1 100%)",
                      borderRadius: "10px",
                    }}
                  >
                    <span className="text-white">{data.welcome_cta_text}</span>
                  </Button>
                </ConfigProvider>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES CAROUSEL - FROM STRAPI */}
      {groupedFeatures.length > 0 && (
        <div className="container mx-auto p-4 mb-16">
          <div className="p-6 bg-slate-200">
            <Carousel autoplay dots>
              {groupedFeatures.map((group, index) => (
                <div key={index} className="p-5">
                  <Row gutter={[16, 16]} justify="center">
                    {group.map((feature, idx) => (
                      <Col key={idx} xs={24} sm={12} md={6} lg={6}>
                        <div className="relative w-full h-72 bg-white shadow-md rounded-lg p-5 text-center flex flex-col items-center transition-all duration-300 hover:bg-gradient-to-r hover:from-[#00ADE7] hover:to-[#305292] hover:text-white group cursor-pointer">
                          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#00ADE7]/15 to-[#305292]/15 mb-5 group-hover:scale-110 transition-transform duration-500">
                            {feature.icon}
                          </div>
                          <h2 className="mt-3 text-lg font-bold">
                            {feature.heading}
                          </h2>
                          <p className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
                            {feature.description}
                          </p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}

      {/* IN HOUSE MANUFACTURING - FROM STRAPI */}
      <div className="w-full px-4 sm:px-6 lg:px-16 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={
                getMediaUrl(data.manufacturing_image) ||
                "https://via.placeholder.com/1200x600?text=In+House+Manufacturing"
              }
              alt="In House Manufacturing"
              className="w-full h-auto object-cover"
              style={{ aspectRatio: "16/9", minHeight: "300px" }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
              <div className="max-w-3xl">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                  {data.manufacturing_title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                  {data.manufacturing_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Top */}
      <div>
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
    </div>
  );
};

export default About;
