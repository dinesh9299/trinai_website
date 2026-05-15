import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollTop } from "primereact/scrolltop";
import {
  Eye,
  Shield,
  Video,
  UserCheck,
  Bell,
  Cloud,
  Building,
  Store,
  MapPin,
  Monitor,
  Globe,
  AlertTriangle,
  Activity,
  Layers,
  Cpu,
} from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "HD Night Vision",
    desc: "24/7 clarity for all lighting conditions with advanced infrared technology.",
  },
  {
    icon: UserCheck,
    title: "Facial Recognition & Loitering Detection",
    desc: "AI-powered identification and suspicious behavior detection with high accuracy.",
  },
  {
    icon: Video,
    title: "Audio & Video Recording",
    desc: "High-definition recording capabilities for comprehensive evidence collection.",
  },
  {
    icon: Shield,
    title: "Tamper-Proof & Weather-Resistant",
    desc: "Durable housing designed for reliable protection in all weather conditions.",
  },
  {
    icon: Bell,
    title: "Real-Time Remote Access & Alerts",
    desc: "Instant notifications and remote monitoring capabilities for security teams.",
  },
  {
    icon: Cloud,
    title: "Integration with Central Security",
    desc: "Seamless connectivity with existing bank security and monitoring systems.",
  },
];

const applications = [
  {
    icon: Building,
    title: "Bank-Operated ATM Kiosks",
    desc: "Comprehensive security for bank-owned ATM installations",
  },
  {
    icon: Store,
    title: "Standalone ATMs at Retail Locations",
    desc: "Protection for ATMs at petrol pumps, malls, and retail outlets",
  },
  {
    icon: MapPin,
    title: "ATM Centers in Remote Areas",
    desc: "Enhanced security for isolated and rural ATM installations",
  },
  {
    icon: Shield,
    title: "High-Traffic Areas",
    desc: "Advanced monitoring for busy locations requiring stronger security",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Detection",
    desc: "HD cameras monitor ATM areas and detect suspicious activities or tampering attempts",
    icon: Eye,
  },
  {
    step: "2",
    title: "Analysis",
    desc: "AI algorithms analyze behavior patterns and identify potential security threats",
    icon: Cpu,
  },
  {
    step: "3",
    title: "Alert",
    desc: "Real-time notifications sent to security teams with precise incident details",
    icon: Bell,
  },
  {
    step: "4",
    title: "Response",
    desc: "Automated systems trigger alarms and emergency protocols for immediate action",
    icon: Shield,
  },
];

const ATM_services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden h-[400px] md:h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506765515384-028b60a970df?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFubmVyfGVufDB8fDB8fHww')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ADE7]/90 via-[#305292]/85 to-[#00ADE7]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-6 shadow-lg border border-white/30"
            >
              <Shield className="w-5 h-5 text-white mr-2" />
              <span className="text-sm font-semibold text-white">
                Advanced ATM Security
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                ATM Security Cameras in Smart Surveillance
              </span>
            </h1>
            <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              24/7 protection for customers and financial institutions with
              AI-powered monitoring
            </p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <Globe className="w-8 h-8 text-[#00ADE7] mr-3" />
              Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every day, thousands rely on ATMs for secure banking. ATM security
              cameras play a crucial role in public safety and fraud prevention.
              With 24/7 monitoring and AI features, modern surveillance
              safeguards both customers and banks from theft, fraud, and
              vandalism.
            </p>
          </div>
        </motion.section>

        {/* What is ATM Surveillance */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <Eye className="w-8 h-8 text-[#00ADE7] mr-3" />
              What is ATM Surveillance?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              ATM surveillance is continuous video monitoring of ATM kiosks,
              bank lobbies, and surrounding areas using high-definition CCTV
              cameras. These systems detect tampering, suspicious behavior, and
              potential theft with advanced AI analytics.
            </p>
          </div>
        </motion.section>

        {/* Why ATM Security is Important */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-[#00ADE7] mr-3" />
              Why Are ATM Security Cameras Important?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              ATMs are targeted for theft, skimming, vandalism, and suspicious
              behavior. Cameras provide real-time evidence, deter crime, and
              support investigations—ensuring secure transactions, especially in
              remote or high-risk locations.
            </p>
          </div>
        </motion.section>

        {/* How They Work */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-4">
              How ATM Security Works
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              High-definition cameras are installed inside and outside ATM
              enclosures. AI analytics detect loitering, unauthorized access, or
              forced entry and send instant alerts to control rooms or law
              enforcement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workingProcess.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#00ADE7]/30 group"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-full flex items-center justify-center text-white font-bold text-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <process.icon className="w-6 h-6 text-[#00ADE7]" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#00ADE7] group-hover:to-[#305292] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {process.desc}
                </p>

                {/* Connector Line */}
                {index < workingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#00ADE7] to-[#305292]"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Key Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:p-20 p-5"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-4">
              Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Gradient Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ADE7] to-[#305292] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <div className="relative z-10">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-[#00ADE7] to-[#305292] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-[#00ADE7] group-hover:to-[#305292] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Applications Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:p-20 p-5"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-4">
              Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#00ADE7]/30 group"
              >
                <div className="bg-gradient-to-br from-[#00ADE7] to-[#305292] rounded-xl p-4 w-fit mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <app.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-[#00ADE7] group-hover:to-[#305292] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {app.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {app.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Trinai Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Decorative Elements */}
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
                Why Trinai?
              </h2>
              <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
                TRINAI's advanced ATM surveillance cameras ensure peace of mind
                for banks and customers. With intelligent monitoring and instant
                alerts, you protect financial assets and maintain public trust
                around the clock with unparalleled precision.
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* 🔥 Scroll to Top Button - PLACE THIS AT THE END OF MAIN DIV */}
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

export default ATM_services;
