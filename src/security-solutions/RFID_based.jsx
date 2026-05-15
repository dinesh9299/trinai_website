import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollTop } from "primereact/scrolltop";
import {
  Key,
  CreditCard,
  Users,
  Building,
  Home,
  BookOpen,
  Warehouse,
  ParkingMeter,
  CalendarCheck,
  ArrowRight,
  Monitor,
  Globe,
  AlertTriangle,
  Activity,
  Layers,
  Cpu,
  Lock,
  Zap,
  Shield,
  Wifi,
  Database,
  CheckCircle,
  Radio,
  Scan,
} from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Contactless Card-Based Access",
    desc: "Fast, touch-free entry using RFID cards or tags with advanced encryption protocols.",
  },
  {
    icon: Zap,
    title: "High-Speed Identification",
    desc: "Instant recognition for authorized users with sub-second response times.",
  },
  {
    icon: Monitor,
    title: "Centralized Access Control",
    desc: "Manage permissions and access levels remotely through intuitive dashboards.",
  },
  {
    icon: Activity,
    title: "Real-Time Access Logs",
    desc: "Track every entry and exit with detailed timestamps and user identification.",
  },
  {
    icon: Layers,
    title: "Security System Integration",
    desc: "Seamless connection with attendance tracking and surveillance systems.",
  },
  {
    icon: Users,
    title: "Custom Access Levels",
    desc: "Flexible permission settings for staff, guests, contractors, and residents.",
  },
];

const applications = [
  {
    icon: Building,
    title: "Office Buildings",
    desc: "Streamline employee access and visitor management with precision control.",
  },
  {
    icon: Home,
    title: "Apartments & Communities",
    desc: "Secure residential access with resident convenience and easy management.",
  },
  {
    icon: BookOpen,
    title: "Schools & Libraries",
    desc: "Control access to educational facilities and resources efficiently.",
  },
  {
    icon: Warehouse,
    title: "Industrial Plants",
    desc: "Secure manufacturing and storage facilities with reliable access control.",
  },
  {
    icon: ParkingMeter,
    title: "Parking & Toll Systems",
    desc: "Automated vehicle access and payment processing for seamless operations.",
  },
  {
    icon: CalendarCheck,
    title: "Hotels & Event Venues",
    desc: "Guest access management and event security with flexible permissions.",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Card Registration",
    desc: "RFID cards are programmed with unique identifiers and user permissions",
    icon: CreditCard,
  },
  {
    step: "2",
    title: "Proximity Detection",
    desc: "RFID reader detects the card when brought within scanning range",
    icon: Radio,
  },
  {
    step: "3",
    title: "Authentication",
    desc: "System verifies card credentials against secure database",
    icon: Database,
  },
  {
    step: "4",
    title: "Access Grant",
    desc: "Authorized users gain instant access with complete activity logging",
    icon: Lock,
  },
];

const benefits = [
  "Lightning Fast – Access granted in under 1 second for seamless user experience",
  "Contactless & Hygienic – No physical contact required, perfect for health-conscious environments",
  "Encrypted Security – Advanced encryption protocols protect card data from cloning",
  "Scalable Deployment – From single doors to enterprise-wide access control networks",
  "Complete Audit Trail – Detailed logs of every access attempt with timestamp and user identity",
  "Easy Integration – Works with existing CCTV, attendance, and VMS platforms",
];

export default function RFIDBased() {
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
        {/* <div className="absolute inset-0 bg-black/20"></div> */}
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
              <CreditCard className="w-5 h-5 text-white mr-2" />
              <span className="text-sm font-semibold text-white">
                Smart Access Technology
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              RFID-Based{" "}
              <span className="bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
                Entry System
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Fast, Secure, and Contactless Access for Modern Spaces
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
              Smart access is essential for managing security in workplaces,
              residential complexes, and institutions. RFID technology enables
              fast, contactless entry using ID cards or tags, making access
              simple, secure, and efficient. Track movement and manage
              permissions remotely, all in real-time with comprehensive
              analytics and reporting.
            </p>
          </div>
        </motion.section>

        {/* ================= WHAT IS RFID ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <CreditCard className="w-8 h-8 text-[#00ADE7] mr-3" />
              What is RFID-Based Entry?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              RFID-Based Entry uses contactless technology to grant access
              through radio frequency identification. Authorized users carry
              RFID tags or cards that, when scanned, allow entry to restricted
              areas. It's fast, secure, and ideal for offices, buildings, and
              gated premises with high traffic volumes.
            </p>
          </div>
        </motion.section>

        {/* ================= WHY RFID MATTERS ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-[#00ADE7] mr-3" />
              Why is RFID Important?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Unlike traditional keys or manual registers, RFID ensures quick
              identification without physical contact. It reduces human error,
              increases security, and streamlines foot traffic in busy
              environments—especially where large groups enter and exit
              regularly.
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
              How RFID Works
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              RFID systems consist of a tag (card or key fob) and a reader. When
              the tag nears the reader, it sends a signal with the user's ID.
              The system checks this ID against a database—if it matches, access
              is instantly granted. The process is quick, touch-free, and
              trackable with complete audit trails.
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
          className="mb-2" /* ✅ Minimal spacing before footer */
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
                <Shield className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Trinai?
              </h2>
              <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
                TRINAI's RFID-based entry solutions make managing access easier,
                faster, and smarter. With secure card authentication and
                real-time tracking, you control who enters your space—and keep a
                detailed log of every movement, all without lifting a finger.
                Our systems deliver 99.9% recognition accuracy, seamless
                integration with existing infrastructure, and scalable
                deployment for any organization size.
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
