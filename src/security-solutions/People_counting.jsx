import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollTop } from "primereact/scrolltop";
import {
  Users,
  Eye,
  BarChart2,
  Building,
  Store,
  CalendarCheck,
  ArrowRight,
  Activity,
  Globe,
  AlertTriangle,
  TrendingUp,
  Zap,
  CheckCircle,
  Scan,
  Radar,
  ChartBar,
} from "lucide-react";

import banner from "../images/security-solutions-banners/AI People Counting.jpg";

const features = [
  {
    icon: Activity,
    title: "Real-Time Foot Traffic Tracking",
    desc: "Monitor people movement and occupancy levels with instant updates and live analytics.",
  },
  {
    icon: BarChart2,
    title: "Peak Hours & Flow Analysis",
    desc: "Analyze traffic patterns, identify busy periods, and optimize resource allocation.",
  },
  {
    icon: Users,
    title: "Resource Optimization",
    desc: "Optimize staffing, cleaning schedules, and facility management based on occupancy data.",
  },
  {
    icon: Eye,
    title: "Occupancy Compliance",
    desc: "Ensure safety regulations and capacity limits are maintained automatically.",
  },
  {
    icon: Building,
    title: "Smart Building Integration",
    desc: "Connect with HVAC, lighting, and energy systems for intelligent facility management.",
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics & Reporting",
    desc: "Generate detailed reports and insights for data-driven decision making.",
  },
];

const applications = [
  {
    icon: Store,
    title: "Retail Stores & Shopping Centers",
    desc: "Understand customer journey patterns and improve conversion rates.",
  },
  {
    icon: CalendarCheck,
    title: "Airports & Transit Stations",
    desc: "Manage passenger flow, reduce queues, and enhance travel experience.",
  },
  {
    icon: Building,
    title: "Offices & Manufacturing",
    desc: "Track employee movement, optimize space usage, and improve productivity.",
  },
  {
    icon: Users,
    title: "Events & Sports Venues",
    desc: "Manage crowd flow, ensure safety, and plan for emergency situations.",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Detection",
    desc: "HD cameras identify and track human shapes at entry/exit points",
    icon: Eye,
  },
  {
    step: "2",
    title: "Analysis",
    desc: "AI algorithms filter objects, remove shadows, and prevent duplicate counts",
    icon: Scan,
  },
  {
    step: "3",
    title: "Tracking",
    desc: "System monitors movement patterns and occupancy levels in real-time",
    icon: Radar,
  },
  {
    step: "4",
    title: "Insights",
    desc: "Generate actionable reports and alerts for optimal space management",
    icon: ChartBar,
  },
];

const benefits = [
  "99%+ Accuracy – Advanced AI ensures reliable people counting in all lighting conditions",
  "Real-Time Analytics – Monitor foot traffic and occupancy levels with instant updates",
  "Privacy Compliant – Anonymous counting without facial recognition or personal data storage",
  "Scalable Deployment – From single entrances to multi-location enterprise networks",
  "Smart Integration – Works with existing CCTV, BMS, and analytics platforms",
  "Actionable Insights – Data-driven decisions for staffing, layout, and operational improvements",
];

export default function People_counting() {
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
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Clean Dark Overlay - Subtle only */}
        {/* <div className="absolute inset-0 bg-black/0"></div> */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ADE7]/90 via-[#305292]/20 to-[#00ADE7]/30"></div>
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
              <Users className="w-5 h-5 text-white mr-2" />
              <span className="text-sm font-semibold text-white">
                AI-Powered People Analytics
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              People{" "}
              <span className="bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
                Counting
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Real-Time Insights for Smarter Crowd Management and Operational
              Optimization
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
              People counting uses AI and video analytics to count the number of
              people entering, exiting, and moving through a defined area in
              real-time. This technology transforms raw foot traffic data into
              actionable insights for better business decisions and operational
              efficiency.
            </p>
          </div>
        </motion.section>

        {/* ================= WHAT IS PEOPLE COUNTING ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <Eye className="w-8 h-8 text-[#00ADE7] mr-3" />
              What is People Counting?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              People counting uses AI-enabled CCTV cameras to detect and count
              individuals entering, exiting, or moving through a defined area.
              It provides accurate data on human movement patterns without
              manual effort, enabling businesses to make informed decisions
              about space utilization and resource allocation.
            </p>
          </div>
        </motion.section>

        {/* ================= WHY PEOPLE COUNTING MATTERS ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-[#00ADE7] mr-3" />
              Why People Counting?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              People counting helps manage crowds, improve operations and
              safety, and enables data-driven decisions in malls, offices,
              events, airports, and public transit. It provides crucial insights
              for optimizing customer experience, ensuring compliance with
              capacity limits, and maximizing operational efficiency.
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
              TRINAI's people counting uses high-definition cameras mounted
              above entry points to identify human shapes and track movements.
              Advanced algorithms filter non-human objects, remove shadows, and
              prevent duplicate counts for maximum accuracy.
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
              Key Benefits
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
                <BarChart2 className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Trinai?
              </h2>
              <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
                TRINAI People Counting provides actionable insights to optimize
                space, increase efficiency, and improve visitor experiences
                using intelligent automation—all while enhancing security and
                operational intelligence. Our AI-powered system delivers 99%+
                counting accuracy, seamless integration with existing
                infrastructure, and scalable deployment for any organization
                size.
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
