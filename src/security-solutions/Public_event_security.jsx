import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollTop } from "primereact/scrolltop";
import {
  Users,
  Eye,
  Shield,
  Siren,
  ArrowRight,
  MapPin,
  Video,
  Search,
  CalendarCheck,
  Music,
  Star,
  Globe,
  AlertTriangle,
  Activity,
  Zap,
  CheckCircle,
  Radar,
  // ✅ REMOVED: 'Crowd' - not a valid lucide-react icon
  // Use 'Users' or 'UsersRound' instead
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Crowd Monitoring & Heatmap Analysis",
    desc: "Track crowd density and movement in real time with advanced AI analytics.",
  },
  {
    icon: Eye,
    title: "Real-Time Threat Detection & Alerts",
    desc: "Instantly identify suspicious activity and notify security teams with precision.",
  },
  {
    icon: Search,
    title: "Facial Recognition for Blacklisted Individuals",
    desc: "Detect flagged persons at entry points and within crowds automatically.",
  },
  {
    icon: Siren,
    title: "Emergency System Integration",
    desc: "Trigger sirens and announcements for rapid emergency response protocols.",
  },
  {
    icon: Video,
    title: "Remote Monitoring from Control Room",
    desc: "Centralized surveillance dashboard for quick decision-making and coordination.",
  },
  {
    icon: MapPin,
    title: "License Plate Recognition (LPR)",
    desc: "Monitor and track vehicle access at event entry points with high accuracy.",
  },
];

const applications = [
  {
    icon: CalendarCheck,
    title: "Political & Cultural Gatherings",
    desc: "Secure rallies, campaigns, and cultural events with comprehensive monitoring.",
  },
  {
    icon: Music,
    title: "Sports Arenas & Stadiums",
    desc: "Protect large-scale sporting events with intelligent crowd management systems.",
  },
  {
    icon: Music,
    title: "Concerts & Trade Fairs",
    desc: "Monitor entertainment venues and commercial gatherings effectively.",
  },
  {
    icon: Star,
    title: "Religious Festivals & Parades",
    desc: "Ensure safety during religious celebrations and public processions.",
  },
  {
    icon: Shield,
    title: "Marathons & Public Rallies",
    desc: "Secure outdoor events with dynamic crowd monitoring capabilities.",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Deployment",
    desc: "Strategic placement of AI-powered cameras at entry points and crowd zones",
    icon: Video,
  },
  {
    step: "2",
    title: "Monitoring",
    desc: "Continuous crowd density analysis and behavioral pattern recognition",
    icon: Radar,
  },
  {
    step: "3",
    title: "Detection",
    desc: "Real-time identification of suspicious activities and security threats",
    icon: Search,
  },
  {
    step: "4",
    title: "Response",
    desc: "Instant alerts and automated emergency system activation",
    icon: Siren,
  },
];

const benefits = [
  "Real-Time Crowd Analytics – Monitor density and movement patterns to prevent overcrowding",
  "Instant Threat Detection – AI identifies suspicious behavior and alerts security immediately",
  "Facial Recognition Integration – Flag blacklisted individuals automatically at entry points",
  "Emergency System Sync – Trigger sirens, announcements, and protocols instantly",
  "Centralized Control Room – Manage all cameras and alerts from a single intuitive dashboard",
  "Scalable Deployment – From small gatherings to massive public events with thousands of attendees",
];

export default function PublicEventSecurity() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* ================= HERO SECTION ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden h-[450px] md:h-[550px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506765515384-028b60a970df?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0')",
        }}
      >
        {/* Clean Dark Overlay - Subtle only */}
        {/* <div className="absolute inset-0 bg-black/30"></div> */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ADE7]/90 via-[#305292]/80 to-[#00ADE7]/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Subtle Decorative Blur */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00ADE7]/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
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
              {/* ✅ FIXED: Changed <Crowd> to <Users> */}
              <Users className="w-5 h-5 text-white mr-2" />
              <span className="text-sm font-semibold text-white">
                Smart Event Security Solutions
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Public Event{" "}
              <span className="bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
                Security
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              AI-Powered Safety Solutions for Crowds, Venues, and Every Moment
              That Matters
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* ================= INTRODUCTION ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <Globe className="w-8 h-8 text-[#00ADE7] mr-3" />
              Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Thousands of public events take place every year — from rallies
              and concerts to sports matches and festivals. With large crowds
              and open venues, safety is a top priority. TRINAI's advanced
              surveillance helps monitor and manage security with smart
              technologies that detect threats in real time.
            </p>
          </div>
        </motion.section>

        {/* ================= WHAT IS PUBLIC EVENT SECURITY ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <Shield className="w-8 h-8 text-[#00ADE7] mr-3" />
              What is Public Event Security?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Public Event Security means deploying surveillance, access
              control, and emergency response systems during large gatherings
              such as festivals, concerts, rallies, sports events, and
              exhibitions.
            </p>
          </div>
        </motion.section>

        {/* ================= WHY IT MATTERS ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-[#00ADE7] mr-3" />
              Why Is Public Event Security Important?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Crowded events are vulnerable to risks like stampedes,
              unauthorized entry, vandalism, and even terrorist threats. Strong
              surveillance prevents incidents, supports crowd control, and
              ensures rapid emergency response, keeping everyone safe.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:border-[#00ADE7]/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 mt-0.5">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ================= HOW IT WORKS ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              High-resolution CCTV cameras with PTZ, AI analytics, and facial
              recognition are placed at entry points, crowd zones, and
              perimeters. These systems detect unusual behavior, monitor crowd
              density, and instantly alert security teams to suspicious
              activity.
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

        {/* ================= KEY FEATURES ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 lg:p-20"
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
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Top Gradient Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ADE7] to-[#305292] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

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

                  {/* <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="mt-6 flex items-center text-[#00ADE7] font-semibold"
                  >
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ================= APPLICATIONS ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-4">
              Applications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* ================= WHY TRINAI ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-2"
        >
          <div className="bg-gradient-to-r from-[#00ADE7] to-[#305292] rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Subtle Decorative Elements */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="inline-flex p-4 bg-white/20 backdrop-blur-md rounded-2xl mb-6 shadow-lg border border-white/30"
              >
                <Users className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Trinai?
              </h2>
              <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
                TRINAI's public event security combines AI surveillance,
                real-time alerts, and smart crowd analytics for unmatched
                safety. From entry management to threat detection, every event
                remains under watchful, intelligent eyes. Our solutions deliver
                99%+ detection accuracy, seamless integration with emergency
                systems, and scalable deployment for events of any size.
              </p>
              {/* ✅ No "Explore" button as requested */}
            </div>
          </div>
        </motion.section>
      </div>

      {/* ✅ MINIMAL SPACING BEFORE FOOTER */}
      <div className="h-2"></div>
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
}
