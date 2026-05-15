import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ScrollTop } from "primereact/scrolltop";
import {
  Users,
  Ticket,
  Monitor,
  Smartphone,
  Bell,
  Eye,
  ArrowRight,
  Building,
  Hospital,
  Banknote,
  CalendarCheck,
  Store,
  Globe,
  AlertTriangle,
  Activity,
  Zap,
  CheckCircle,
  Clock,
  List,
} from "lucide-react";

const features = [
  {
    icon: Ticket,
    title: "Token-Based or Virtual Queue",
    desc: "Organize queues with physical tokens or virtual tickets for seamless customer flow.",
  },
  {
    icon: Monitor,
    title: "Real-Time Queue Status",
    desc: "Live updates on digital displays or mobile apps with instant notifications.",
  },
  {
    icon: Eye,
    title: "Facial Recognition",
    desc: "Identify registered or repeat visitors for personalized service experiences.",
  },
  {
    icon: Users,
    title: "AI-Based Crowd Density Analysis",
    desc: "Monitor and predict crowding patterns for better flow management.",
  },
  {
    icon: Bell,
    title: "Voice/Text Announcements",
    desc: "Guide customers with automated announcements and clear directions.",
  },
  {
    icon: Smartphone,
    title: "Appointment & Feedback Integration",
    desc: "Connects with booking and feedback systems for seamless customer experience.",
  },
];

const applications = [
  {
    icon: Banknote,
    title: "Banks & Financial Institutions",
    desc: "Streamline banking services with efficient queue management.",
  },
  {
    icon: Hospital,
    title: "Hospitals & Clinics",
    desc: "Organize patient flow and reduce waiting times in healthcare.",
  },
  {
    icon: Building,
    title: "Government Service Centers",
    desc: "Improve citizen services with organized queue systems.",
  },
  {
    icon: CalendarCheck,
    title: "Airports & Ticket Counters",
    desc: "Manage passenger flow and reduce congestion at checkpoints.",
  },
  {
    icon: Store,
    title: "Retail & Service Outlets",
    desc: "Enhance customer experience in retail and service environments.",
  },
];

const workingProcess = [
  {
    step: "1",
    title: "Registration",
    desc: "Customers receive tokens or virtual tickets upon arrival",
    icon: Ticket,
  },
  {
    step: "2",
    title: "Monitoring",
    desc: "AI cameras track queue length, movement, and waiting patterns",
    icon: Eye,
  },
  {
    step: "3",
    title: "Analysis",
    desc: "System predicts wait times and optimizes counter assignments",
    icon: Activity,
  },
  {
    step: "4",
    title: "Notification",
    desc: "Automated announcements guide customers to available counters",
    icon: Bell,
  },
];

const benefits = [
  "Reduced Wait Times – AI optimizes queue flow to minimize customer waiting",
  "Improved Customer Experience – Organized queues reduce frustration and confusion",
  "Real-Time Analytics – Monitor peak hours and staff allocation with detailed insights",
  "Fair Service Delivery – First-come-first-served system ensures equitable service",
  "Scalable Deployment – From single counters to multi-branch enterprise solutions",
  "Seamless Integration – Works with existing appointment, CRM, and feedback systems",
];

export default function QMS() {
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
            "url('https://ik.imagekit.io/e7pijyscb/Trinai%20home%20banner/Trinai%20Solution%20Page/Security%20Solutions/queue%20management%20system.jpg')",
        }}
      >
        {/* Clean Dark Overlay - Subtle only */}
        {/* <div className="absolute inset-0 bg-black/20"></div> */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ADE7]/90 via-[#305292]/40 to-[#00ADE7]/50"></div>
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
              <Ticket className="w-5 h-5 text-white mr-2" />
              <span className="text-sm font-semibold text-white">
                Smart Queue Management Solutions
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Queue Management{" "}
              <span className="bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
                System
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
              Organized, Efficient Service Flow Powered by Intelligent
              Surveillance
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
              Every day, countless people stand in queues—at banks, hospitals,
              government offices, and airports. Managing these queues
              efficiently is crucial for better customer experience and
              operational flow. A Queue Management System (QMS) powered by smart
              surveillance ensures organized service, reduced wait times, and
              improved crowd control through intelligent tracking and analytics.
            </p>
          </div>
        </motion.section>

        {/* ================= WHAT IS QMS ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <Monitor className="w-8 h-8 text-[#00ADE7] mr-3" />
              What is a Queue Management System?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A Queue Management System is a digital solution that organizes,
              monitors, and controls customer queues in real-time. It provides
              ticketing, display systems, and announcements to guide customers
              to service counters efficiently.
            </p>
          </div>
        </motion.section>

        {/* ================= WHY QMS MATTERS ================= */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#00ADE7]/5 to-[#305292]/5 rounded-3xl p-8 md:p-12 shadow-xl border border-[#00ADE7]/20">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-[#00ADE7] mr-3" />
              Why Is QMS Important?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Long, unmanaged queues lead to frustration, miscommunication, and
              inefficiency. With QMS, you streamline foot traffic, reduce
              crowding, and enhance service delivery. It helps institutions
              provide fair and fast service, especially during peak hours or
              high-demand situations.
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
              Surveillance cameras and sensors monitor queue length, movement,
              and waiting time. The system assigns token numbers, directs
              individuals to available counters, and provides real-time updates
              via digital displays. Advanced AI can predict wait times and
              redirect overflow to alternate counters or branches.
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
                <Monitor className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Trinai?
              </h2>
              <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
                TRINAI's Queue Management System transforms waiting lines into
                well-managed service flows. With AI-powered analytics and
                real-time updates, it ensures faster, safer, and more satisfying
                customer experiences — reducing frustration and optimizing
                operational efficiency. Our solutions deliver 99%+ accuracy,
                seamless integration with existing systems, and scalable
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
