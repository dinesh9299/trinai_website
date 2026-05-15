import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollTop } from "primereact/scrolltop";
import {
  Shield,
  Eye,
  Bell,
  ArrowRight,
  Globe,
  AlertTriangle,
  Activity,
  Scan,
  Database,
  Zap,
  CheckCircle,
  Car,
} from "lucide-react";

import banner from "../images/security-solutions-banners/AI License Plate Recognition.jpg";

const features = [
  {
    icon: Eye,
    title: "Automatic Vehicle Entry & Exit Logging",
    desc: "Automatically log all vehicle movements with timestamp and plate data for complete audit trails.",
  },
  {
    icon: Shield,
    title: "Seamless Gate Access",
    desc: "Enable contactless entry without RFID cards or manual verification for authorized vehicles.",
  },
  {
    icon: AlertTriangle,
    title: "Stolen & Suspect Vehicle Tracking",
    desc: "Instantly flag and alert security when blacklisted or suspicious vehicles are detected.",
  },
  {
    icon: Activity,
    title: "Traffic Flow Monitoring",
    desc: "Analyze vehicle patterns and peak hours to optimize traffic management and planning.",
  },
  {
    icon: Zap,
    title: "Smart Parking & Billing",
    desc: "Automate parking duration tracking and billing calculations for efficient operations.",
  },
];

const applications = [
  {
    icon: Car,
    title: "Residential & Gated Communities",
    desc: "Secure entrances and track resident/visitor vehicles automatically.",
  },
  {
    icon: Car,
    title: "Commercial Parking & Malls",
    desc: "Manage high-volume parking with automated entry/exit and billing.",
  },
  {
    icon: Car,
    title: "Toll Booths & Highways",
    desc: "Enable fast, contactless toll collection and traffic monitoring.",
  },
  {
    icon: Shield,
    title: "Police & Border Security",
    desc: "Identify stolen vehicles and track suspect movements in real-time.",
  },
  {
    icon: Database,
    title: "Logistics & Fleet Management",
    desc: "Monitor fleet vehicles and automate depot access control.",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Capture",
    desc: "HD cameras capture clear images of vehicle license plates in real-time, day or night",
    icon: Eye,
  },
  {
    step: "2",
    title: "Recognize",
    desc: "AI-powered OCR technology extracts and converts plate characters into digital text",
    icon: Scan,
  },
  {
    step: "3",
    title: "Verify",
    desc: "System cross-references plate data against authorized/blacklisted databases instantly",
    icon: Database,
  },
  {
    step: "4",
    title: "Act",
    desc: "Automated actions triggered: gate opens, alert sent, or record logged based on rules",
    icon: Zap,
  },
];

const benefits = [
  "99%+ Accuracy – Reliable plate recognition in all lighting and weather conditions",
  "Lightning Fast – Process vehicles in under 1 second for seamless flow",
  "24/7 Automation – Continuous monitoring without manual intervention",
  "Scalable Solution – Deploy from single gate to city-wide networks",
  "Privacy Compliant – GDPR-ready with secure data handling and retention policies",
  "Easy Integration – Works with existing CCTV, access control, and VMS platforms",
];

export default function Lpr() {
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
        <div className="absolute inset-0 bg-black/30"></div>

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
              <Car className="w-5 h-5 text-white mr-2" />
              <span className="text-sm font-semibold text-white">
                Smart Vehicle Access Control
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              License Plate{" "}
              <span className="bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
                Recognition
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              AI-Powered Vehicle Identification for Smarter Security & Traffic
              Management
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
              License Plate Recognition (LPR) systems are changing how we manage
              traffic, security, and access control every day. These smart
              cameras are capable of scanning and recording vehicle number
              plates automatically in real time, which allows for smooth entry,
              monitoring, and records to use. The remote access means users can
              track or manage vehicles from the convenience of a smartphone,
              tablet, or computer.
            </p>
          </div>
        </motion.section>

        {/* ================= WHAT IS LPR ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <Scan className="w-8 h-8 text-[#00ADE7] mr-3" />
              What is LPR?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              LPR, or License Plate Recognition, is a technology that uses CCTV
              cameras combined with AI to automatically read and identify
              vehicle license plates. It captures plate numbers in real-time and
              compares them with databases for access control, traffic
              monitoring, toll collection, or identifying blacklisted vehicles.
              It's widely used in parking lots, gated communities, toll booths,
              and law enforcement.
            </p>
          </div>
        </motion.section>

        {/* ================= WHY LPR MATTERS ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-[#00ADE7] mr-3" />
              Why is LPR Important?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              LPR adds a critical layer of security by identifying when vehicles
              have entered or exited a location. It is widely adopted wherever
              access control is needed such as gated communities, toll stations,
              parking lot management, logistics hubs, and secure zones.
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
              How LPR Works
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Using high-definition cameras combined with AI-based image
              processing, the system captures a vehicle's plate. Optical
              Character Recognition (OCR) technology then translates the image
              into readable alphanumeric data. The data can be stored, analyzed,
              or cross-referenced with databases for real-time alerts or access
              control.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
          className="mb-24" /* ✅ Added extra margin bottom for separation */
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
                <Car className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Trinai?
              </h2>
              <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
                TRINAI's LPR technology empowers smarter vehicle monitoring with
                high accuracy and real-time control, making roads, properties,
                and facilities safer and more efficient. Our AI-powered system
                delivers 99%+ recognition accuracy in all conditions, seamless
                integration with existing infrastructure, and scalable
                deployment from single gates to city-wide networks.
              </p>

              {/* <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-4 bg-white text-[#00ADE7] font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center mx-auto gap-2"
              >
                <span>Explore LPR Solutions</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button> */}
            </div>
          </div>
        </motion.section>
      </div>

      {/* ✅ EXTRA SPACING BEFORE FOOTER */}
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
