import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollTop } from "primereact/scrolltop";
import {
  Shield,
  Bell,
  Eye,
  Zap,
  Building,
  Plane,
  Users,
  MapPin,
  Monitor,
  AlertTriangle,
  Activity,
  Layers,
  Cpu,
  Camera,
  Settings,
  CheckCircle,
  FileText,
  TrendingUp,
  Navigation,
  BarChart3,
  Clock,
} from "lucide-react";

import banner from "../images/security-solutions-banners/AI Crowd Detection System.jpg";

const features = [
  {
    icon: Bell,
    title: "Real-Time Alerts",
    desc: "Instant notifications when crowd density reaches dangerous thresholds or congestion occurs.",
  },
  {
    icon: Shield,
    title: "Proactive Safety",
    desc: "Prevent overcrowding incidents before they escalate into dangerous situations.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    desc: "Comprehensive insights and analytics for better planning and operational improvements.",
  },
  {
    icon: Layers,
    title: "Scalable Monitoring",
    desc: "Adaptable solution for small venues to massive public areas and events.",
  },
  {
    icon: TrendingUp,
    title: "Enhanced Visitor Experience",
    desc: "Ensure safer and smoother people movement for better overall experience.",
  },
  {
    icon: Cpu,
    title: "AI-Powered Analytics",
    desc: "Advanced algorithms analyze crowd patterns and predict potential issues.",
  },
];

const applications = [
  {
    icon: Users,
    title: "Public Events & Festivals",
    desc: "Monitor massive gatherings and prevent crowd-related accidents",
  },
  {
    icon: Plane,
    title: "Transportation Hubs",
    desc: "Control crowd flow at airports, bus stations, and train terminals",
  },
  {
    icon: Building,
    title: "Shopping Centers & Malls",
    desc: "Manage visitor flow during peak hours and special events",
  },
  {
    icon: Activity,
    title: "Sports & Entertainment",
    desc: "Enhance spectator safety at stadiums, concerts, and venues",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Detection",
    desc: "AI cameras continuously analyze crowd density and movement patterns in real-time",
    icon: Camera,
  },
  {
    step: "2",
    title: "Analysis",
    desc: "Advanced algorithms process crowd data and identify potential congestion points",
    icon: Cpu,
  },
  {
    step: "3",
    title: "Alert",
    desc: "Instant notifications sent when crowd thresholds are exceeded or risks detected",
    icon: Bell,
  },
  {
    step: "4",
    title: "Response",
    desc: "Automated crowd management protocols activated to ensure safety and flow",
    icon: Zap,
  },
];

const monitoringCapabilities = [
  {
    icon: Navigation,
    title: "Movement Patterns",
    desc: "Track crowd movement patterns and flow directions",
  },
  {
    icon: AlertTriangle,
    title: "Congestion Detection",
    desc: "Identify bottlenecks and potential crowd buildup areas",
  },
  {
    icon: Bell,
    title: "Threshold Alerts",
    desc: "Notify security when crowd density reaches critical levels",
  },
  {
    icon: MapPin,
    title: "Zone Density",
    desc: "Calculate and monitor crowd density in specific areas",
  },
];

const benefits = [
  "Early Warnings – Alerts when zones approach dangerous capacity levels",
  "Efficient Crowd Management – Facilitates smoother people flow and movement",
  "Safety & Compliance – Helps organizations meet safety regulations and standards",
  "Incident Prevention – Reduces risk of accidents in crowded environments",
  "Operational Insights – Provides data for future planning and improvements",
];

export default function Crowd_monitoring() {
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
        style={{ backgroundImage: `url(${banner})` }}
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
              <Users className="w-5 h-5 text-white mr-2" />
              <span className="text-sm font-semibold text-white">
                AI-Powered Crowd Analytics
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Crowd Monitoring
              </span>
            </h1>
            <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Advanced AI-powered surveillance that provides real-time insights
              into crowd density, movement patterns, and safety management
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
              <Monitor className="w-8 h-8 text-[#00ADE7] mr-3" />
              Introduction
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Large crowd management, either in public areas or private
              functions, has its own set of safety and security issues. Crowd
              Monitoring technology in CCTV surveillance gives live information
              about crowd volume, density, and movement behavior. Through the
              fusion of AI-based analytics and high-definition video, it allows
              authorities and organizations to detect risks in advance, avoid
              over-densification, and maintain smooth operations in crowded
              settings.
            </p>
          </div>
        </motion.section>

        {/* What is Crowd Monitoring */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <Eye className="w-8 h-8 text-[#00ADE7] mr-3" />
              What is Crowd Monitoring?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Crowd Monitoring is an intelligent surveillance capability that
              provides comprehensive insights into crowd behavior and safety.
              The system continuously analyzes crowd dynamics to:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {monitoringCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:border-[#00ADE7]/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:bg-gradient-to-r group-hover:from-[#00ADE7] group-hover:to-[#305292] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {capability.title}
                    </h4>
                    <p className="text-sm text-gray-600">{capability.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why it Matters */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <Shield className="w-8 h-8 text-[#00ADE7] mr-3" />
              Why Does Crowd Monitoring Matter?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Overcrowding, stampedes, and bottlenecks can get out of hand in no
              time and risk lives. Conventional human monitoring is tardy and
              responsive, but AI-driven Crowd Monitoring provides:
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

        {/* How It Works */}
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
              Trinai's Crowd Monitoring systems use advanced AI analytics to
              continuously assess crowd behavior, density, and movement
              patterns. The system provides real-time insights and automated
              responses to ensure safety and optimal crowd management.
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
                <Users className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Trinai?
              </h2>
              <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
                Trinai's Crowd Monitoring solutions blend AI smarts with
                real-time precision to provide organizations with complete
                visibility and control over crowd behavior. Instant alerts,
                trustworthy analytics, and easy integration with existing
                systems - Trinai makes crowd management safer, more organized,
                and effective. Whether it's an open public celebration, a
                corporate event, or a transport station, Trinai enables you to
                protect people and ensure order with confidence.
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
}
