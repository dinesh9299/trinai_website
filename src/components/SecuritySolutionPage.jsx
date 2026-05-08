// src/components/SecuritySolutionPage.jsx
// ✅ Restored old styling with varied icons and View More effects
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ScrollTop } from "primereact/scrolltop";
import {
  Eye,
  Shield,
  Bell,
  Zap,
  Monitor,
  AlertTriangle,
  Layers,
  Cpu,
  CheckCircle,
  ArrowRight,
  Factory,
  Warehouse,
  Users,
  Camera,
  Settings,
  FileText,
  Construction,
  Flame,
  HardHat,
} from "lucide-react";
import {
  fetchSecuritySolutionBySlug,
  getStrapiMedia,
} from "../services/strapiApi";

const SecuritySolutionPage = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const params = new URLSearchParams({ populate: "*" });
        params.append("filters[slug][$eq]", slug);

        const response = await fetch(
          `http://localhost:1337/api/security-solutions?${params.toString()}`,
        );
        const json = await response.json();
        if (json.data?.length) setData(json.data[0]);
        else setError("Solution not found");
      } catch {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-[#00ADE7] text-xl">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        {error}
      </div>
    );
  if (!data) return null;

  const d = data;
  const splitFeature = (text) => {
    const parts = text?.split(" - ") || [];
    return { title: parts[0]?.trim() || text, desc: parts[1]?.trim() || "" };
  };

  // Icon mapper for features
  const getFeatureIcon = (title, type) => {
    const t = title?.toLowerCase() || "";
    if (type === "feature") {
      if (t.includes("real-time") || t.includes("alert")) return Bell;
      if (t.includes("proactive") || t.includes("prevention")) return Shield;
      if (t.includes("integration")) return Settings;
      if (t.includes("configurable")) return Layers;
      if (t.includes("audit") || t.includes("report")) return FileText;
      return Cpu;
    }
    if (type === "application") {
      if (t.includes("manufacturing")) return Factory;
      if (t.includes("warehouse")) return Warehouse;
      if (t.includes("construction")) return Construction;
      return Users;
    }
    return Monitor;
  };

  // Icon mapper for "What is" boxes - VARIED ICONS
  const getWhatIsIcon = (title, index) => {
    const icons = [
      AlertTriangle,
      Shield,
      Flame,
      HardHat,
      Eye,
      Bell,
      Zap,
      Camera,
    ];
    return icons[index % icons.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden h-[500px] md:h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${getStrapiMedia(d.bannerImage)})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ADE7]/90 via-[#305292]/80 to-[#00ADE7]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center w-full"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-6 shadow-lg border border-white/30"
            >
              <AlertTriangle className="w-5 h-5 text-white mr-2" />
              <span className="text-sm font-semibold text-white">
                {d.bannerTagline}
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              {d.bannerTitle.split(" ").map((word, i) => (
                <span key={i}>
                  {word === "CCTV" || word === "Surveillance" ? (
                    <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                      {word}{" "}
                    </span>
                  ) : (
                    `${word} `
                  )}
                </span>
              ))}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              {d.bannerSubtitle}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* INTRO */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <Monitor className="w-8 h-8 text-[#00ADE7] mr-3" /> {d.introTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {d.introContent}
            </p>
          </div>
        </motion.section>

        {/* WHAT IS - WITH VARIED ICONS */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <Eye className="w-8 h-8 text-[#00ADE7] mr-3" /> {d.whatIsTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {d.whatIsContent}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {d.whatIsBoxes?.map((box, i) => {
                const BoxIcon = getWhatIsIcon(box.title, i);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:border-[#00ADE7]/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <BoxIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 group-hover:bg-gradient-to-r group-hover:from-[#00ADE7] group-hover:to-[#305292] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {box.title}
                      </h4>
                      <p className="text-sm text-gray-600">{box.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* WHY MATTERS */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <Shield className="w-8 h-8 text-[#00ADE7] mr-3" />{" "}
              {d.whyMattersTitle}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {d.whyMattersIntro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {d.whyMattersPoints?.map((pt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:border-[#00ADE7]/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{pt.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* HOW IT WORKS */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-4">
              {d.howItWorksTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {d.howItWorksDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.howItWorksSteps?.map((step, i) => {
              const StepIcon = [Camera, Eye, Bell, Zap][i] || Cpu;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#00ADE7]/30 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-full flex items-center justify-center text-white font-bold text-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      {step.stepNumber}
                    </div>
                    <StepIcon className="w-6 h-6 text-[#00ADE7]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#00ADE7] group-hover:to-[#305292] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* FEATURES - WITH VIEW MORE HOVER EFFECT */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-4">
              {d.featuresTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {d.features?.map((feat, i) => {
              const { title, desc } = splitFeature(feat.text);
              const FIcon = getFeatureIcon(title, "feature");
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Top Gradient Border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ADE7] to-[#305292] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                  <div className="relative z-10">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-[#00ADE7] to-[#305292] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <FIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-[#00ADE7] group-hover:to-[#305292] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {desc}
                    </p>

                    {/* View More Link with Animated Underline */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="mt-6 flex flex-col justify-center items-start gap-1"
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-[#00ADE7] font-medium text-sm group-hover:text-[#305292] transition-colors duration-300">
                          View More
                        </span>
                        <svg
                          className="w-4 h-4 text-[#00ADE7] group-hover:text-[#305292] transition-colors duration-300"
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
                      </div>
                      {/* Animated Underline */}
                      <div className="h-0.5 w-0 group-hover:w-full bg-[#00ADE7] rounded-full transition-all duration-300" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* APPLICATIONS - WITH VIEW MORE HOVER EFFECT */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-4">
              {d.applicationsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.applicationsList?.map((app, i) => {
              const AIcon = getFeatureIcon(app.title, "application");
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#00ADE7]/30 group"
                >
                  <div className="bg-gradient-to-br from-[#00ADE7] to-[#305292] rounded-xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <AIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#00ADE7] group-hover:to-[#305292] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {app.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {app.description}
                  </p>

                  {/* View More Link */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="mt-4 flex flex-col justify-center items-start gap-0.5"
                  >
                    <div className="flex items-center gap-1">
                      <span className="text-[#00ADE7] font-medium text-xs group-hover:text-[#305292] transition-colors duration-300">
                        View More
                      </span>
                      <svg
                        className="w-3 h-3 text-[#00ADE7] group-hover:text-[#305292] transition-colors duration-300"
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
                    </div>
                    <div className="h-0.5 w-0 group-hover:w-full bg-[#00ADE7] rounded-full transition-all duration-300" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* WHY TRINAI */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="inline-flex p-4 bg-white/20 backdrop-blur-md rounded-2xl mb-6 shadow-lg border border-white/30"
              >
                <Shield className="w-12 h-12 text-white" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {d.whyTrinaiTitle}
              </h2>
              <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
                {d.whyTrinaiContent}
              </p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-4 bg-white text-[#00ADE7] font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center mx-auto gap-2"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.section>
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
              strokeWidth="2.5"
              d="M12 19V5M5 12l7-7 7 7"
            />
          </svg>
        }
      />
    </div>
  );
};

export default SecuritySolutionPage;
