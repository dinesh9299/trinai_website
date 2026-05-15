import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollTop } from "primereact/scrolltop";
import {
  Video,
  Shield,
  Bell,
  Activity,
  Map,
  Camera,
  Monitor,
  Eye,
  ScanLine,
} from "lucide-react";

const Crossline_detection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Hero Image URL
  const heroImage =
    "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Untitled%20design%20(8).png?tr=w-1920,q-90";

  // ✅ Custom Icon Image - REPLACES ShieldCheck
  const trinaiIcon =
    "https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Untitled%20design%20(8).png?tr=w-200,q-90";

  return (
    <div className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden h-[450px] md:h-[550px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#1e3a8a]/60 to-[#00ADE7]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ADE7]/10 to-[#305292]/20"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          {/* Top Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 shadow-lg border border-white/20"
          >
            <Shield className="w-5 h-5 text-white mr-2" />
            <span className="text-sm font-semibold text-white">
              Advanced Perimeter Security
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            <span className="bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
              Cross Line Detection
            </span>{" "}
            <span className="text-white">in Smart Surveillance</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md"
          >
            24/7 AI-powered boundary monitoring for enhanced perimeter
            protection and real-time intrusion alerts.
          </motion.p>
        </div>
      </motion.div>

      {/* ================= MAIN CONTENT WRAPPER ================= */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* ================= Introduction ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-10 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <Monitor className="w-8 h-8 text-[#00ADE7] mr-3" />
              Introduction
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Crossline Detection is an advanced video analytics feature
              included in modern CCTV and PTZ cameras. It allows surveillance
              systems to automatically detect and alert you when an object —
              typically a person or vehicle — crosses a virtual line created
              within the camera's field of view.
            </p>
          </div>
        </motion.section>

        {/* ================= What is Crossline Detection ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-10 shadow-lg border border-[#00ADE7]/20">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <Eye className="w-8 h-8 text-[#00ADE7] mr-3" />
              What is Crossline Detection?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Crossline Detection is an AI-powered surveillance capability that
              monitors a predefined virtual boundary within a camera's coverage
              area. When a person, vehicle, or object crosses this digital line,
              the system instantly detects the event and triggers automated
              responses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:border-[#00ADE7]/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center mr-3 flex-shrink-0">
                  <ScanLine className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Virtual Boundary Creation
                  </h4>
                  <p className="text-sm text-gray-600">
                    Define invisible monitoring lines inside camera view.
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:border-[#00ADE7]/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center mr-3 flex-shrink-0">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Real-Time Detection
                  </h4>
                  <p className="text-sm text-gray-600">
                    AI continuously analyzes movement and detects crossings
                    instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ================= Why Important ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-10 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-10 flex items-center">
              <Shield className="w-8 h-8 text-[#00ADE7] mr-3" />
              Why is Crossline Detection Important?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Bell,
                  title: "Instant Alerts",
                  desc: "Get notified immediately when boundaries are crossed.",
                },
                {
                  icon: Shield,
                  title: "Perimeter Security",
                  desc: "Protect entrances, exits, and restricted areas.",
                },
                {
                  icon: Activity,
                  title: "Traffic Monitoring",
                  desc: "Detect illegal movement and wrong-way driving.",
                },
                {
                  icon: Eye,
                  title: "Reduced Monitoring",
                  desc: "Minimize manual surveillance with automation.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#00ADE7]/30 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7]/10 to-[#305292]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-[#00ADE7]" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-[#00ADE7] group-hover:to-[#305292] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ================= HOW IT WORKS ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-10 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-10 flex items-center">
              <Camera className="w-8 h-8 text-[#00ADE7] mr-3" />
              How does it work with CCTV & PTZ Cameras?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: ScanLine,
                  title: "Configure a Virtual Line",
                  desc: 'Security creates a virtual "line" on live camera feed (entrance gate, hallway, road).',
                },
                {
                  icon: Activity,
                  title: "Live Analysis",
                  desc: "AI-based video analytics monitor movement and direction in real time.",
                },
                {
                  icon: Bell,
                  title: "Triggering Alerts",
                  desc: "Alerts are generated via SMS, push notifications, or displayed on the control panel.",
                },
                {
                  icon: Camera,
                  title: "Using PTZ Cameras",
                  desc: "PTZ cameras auto-track, zoom, and capture clear images like faces and license plates across wide areas.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#00ADE7]/30"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7]/10 to-[#305292]/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#00ADE7]" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ================= USE CASES ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-10 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-10 flex items-center">
              <Map className="w-8 h-8 text-[#00ADE7] mr-3" />
              Use Cases
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Apartment Main Gates",
                "Storefront Entries After Hours",
                "Factory Perimeters",
                "Vehicle Lanes & Pedestrian Crossings",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#00ADE7]/30 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7]/10 to-[#305292]/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-[#00ADE7]" />
                  </div>
                  <p className="font-medium text-gray-800 group-hover:bg-gradient-to-r group-hover:from-[#00ADE7] group-hover:to-[#305292] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ================= WHY TRINAI ================= */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="bg-gradient-to-r from-[#00ADE7] to-[#305292] py-24 px-6 text-center text-white relative">
            {/* Decorative blur background */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
            <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10">
              {/* ✅ CUSTOM ICON IMAGE - REPLACES ShieldCheck */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
                className="inline-flex items-center justify-center p-4 bg-white/20 backdrop-blur-md rounded-2xl mb-6 shadow-lg border border-white/30"
              >
                <img
                  src={trinaiIcon}
                  alt="Trinai Crossline Detection"
                  className="w-16 h-16 object-contain"
                />
              </motion.div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Trinai?
              </h2>

              {/* Description */}
              <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
                Crossline Detection is a fully featured solution designed to add
                intelligence and automation to any modern surveillance system.
                By mapping invisible trip wires, Crossline Detection allows your
                CCTV or PTZ camera installation to proactively monitor speed or
                react to intrusions without a human being involved.
                <br />
                <br />
                Whether you're protecting an apartment entrance, traffic
                speeding on a busy road, or a high-risk area, Crossline
                Detection improves security and operational efficiency by
                ensuring potential intrusions are handled in real time. It's not
                just smart security — it is smart protection.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
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

export default Crossline_detection;
