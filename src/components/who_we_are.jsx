// import { motion } from "framer-motion";
// import {
//   Brain,
//   ShieldCheck,
//   Zap,
//   Users,
//   Settings2,
//   MonitorSmartphone,
//   Cpu,
//   Layers,
// } from "lucide-react";

// import aboutwhychooseimage from "./aboutwhychooseimage.jpeg";

// // ─── DATA ─────────────────────────────────────────
// const whyChooseData = [
//   {
//     id: 1,
//     icon: ShieldCheck,
//     title: "Local Roots, Global Vision",
//     description:
//       "TRINAI is a 100% Indian-manufactured company. Designed and built locally — no import delays, no excessive costs. Innovation powered at home.",
//   },
//   {
//     id: 2,
//     icon: Users,
//     title: "Real People, Real Service",
//     description:
//       "From engineers to support teams — we treat every customer like family. Personal attention, not corporate coldness.",
//   },
//   {
//     id: 3,
//     icon: Settings2,
//     title: "Smart Security, Your Way",
//     description:
//       "Flexible solutions for homes, schools, factories, and enterprises. Security tailored exactly to your lifestyle.",
//   },
//   {
//     id: 4,
//     icon: MonitorSmartphone,
//     title: "Always in Control",
//     description:
//       "Live monitoring, attendance automation, visitor interaction, multi-location management — all in your hands.",
//   },
//   {
//     id: 5,
//     icon: Cpu,
//     title: "Technology with Purpose",
//     description:
//       "Facial recognition, RFID access, motion alerts — every feature solves a real-world challenge seamlessly.",
//   },
//   {
//     id: 6,
//     icon: Layers,
//     title: "Scalable & Future-Ready",
//     description:
//       "Modular infrastructure built to grow with your expansion. Future-proof security architecture.",
//   },
// ];

// // ─── FEATURE CARD ─────────────────────────────────────────
// const FeatureCard = ({ item, index }) => {
//   const Icon = item.icon;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.08 }}
//       viewport={{ once: true }}
//       whileHover={{ y: -8 }}
//       className="relative group bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
//     >
//       {/* Glow Effect */}
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#00ADE7]/5 to-[#305292]/5" />

//       {/* Icon */}
//       <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#00ADE7]/15 to-[#305292]/15 mb-5 group-hover:scale-110 transition-transform duration-500">
//         <Icon className="w-7 h-7 text-[#00ADE7]" strokeWidth={1.6} />
//       </div>

//       <h3 className="text-lg font-bold text-gray-800 mb-3 tracking-wide">
//         {item.title}
//       </h3>

//       <p className="text-gray-500 text-sm leading-relaxed">
//         {item.description}
//       </p>
//     </motion.div>
//   );
// };

// // ─── MAIN COMPONENT ─────────────────────────────────────────
// const WhyChooseUs = () => {
//   return (
//     <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
//       {/* Background Decorative Blur */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-[#00ADE7]/10 rounded-full blur-3xl -z-10" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#305292]/10 rounded-full blur-3xl -z-10" />

//       {/* ─── HERO SECTION ───────────────────────── */}
//       <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-24">
//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ x: -60, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="order-2 lg:order-1"
//         >
//           <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
//             Why Choose TRINAI
//           </span>

//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 sm:mt-4 leading-tight">
//             Security Built on{" "}
//             <span className="bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
//               Trust & Intelligence
//             </span>
//           </h2>

//           <p className="text-gray-500 text-base sm:text-lg mt-4 sm:mt-6 leading-relaxed max-w-xl">
//             We combine cutting-edge Indian engineering with genuine human care
//             to deliver security solutions that feel personal, powerful, and
//             future-ready.
//           </p>

//           {/* Icon Row */}
//           <div className="flex gap-4 sm:gap-6 mt-6 sm:mt-8">
//             {[Brain, ShieldCheck, Zap, Cpu].map((Icon, i) => (
//               <Icon
//                 key={i}
//                 className="w-8 h-8 sm:w-10 sm:h-10 text-[#00ADE7] hover:scale-125 hover:text-[#305292] transition-all duration-500 cursor-pointer"
//               />
//             ))}
//           </div>
//         </motion.div>

//         {/* RIGHT IMAGE - SMALLER & RESPONSIVE */}
//         <motion.div
//           initial={{ x: 60, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="relative flex justify-center order-1 lg:order-2"
//         >
//           {/* Gradient Border Wrapper - Compact Size */}
//           <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] p-[2px] sm:p-[3px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#00ADE7] to-[#305292] shadow-2xl">
//             <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white">
//               <img
//                 src={aboutwhychooseimage}
//                 alt="Why Choose Trinai"
//                 className="w-full h-auto max-h-[200px] sm:max-h-[260px] lg:max-h-[320px] object-contain p-3 sm:p-4 transition-transform duration-700 hover:scale-105"
//                 loading="lazy"
//               />
//             </div>
//           </div>

//           {/* Floating Accent Card - Repositioned for smaller image */}
//           <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white shadow-xl rounded-xl sm:rounded-2xl px-4 py-2 sm:px-5 sm:py-3 hidden md:block">
//             <p className="text-xs sm:text-sm font-semibold text-gray-700">
//               100% Indian Engineered
//             </p>
//             <p className="text-[10px] sm:text-xs text-gray-400">
//               Trusted Nationwide
//             </p>
//           </div>
//         </motion.div>
//       </div>

//       {/* ─── SECTION TITLE ───────────────────────── */}
//       <motion.div
//         initial={{ y: 30, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//         className="text-center mb-12 sm:mb-14"
//       >
//         <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
//           Intelligent Surveillance Solutions
//         </h3>
//         <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base">
//           Six pillars that differentiate TRINAI from the rest
//         </p>
//       </motion.div>

//       {/* ─── CARDS GRID ───────────────────────── */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//         {whyChooseData.map((item, index) => (
//           <FeatureCard key={item.id} item={item} index={index} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Settings2,
  MonitorSmartphone,
  Cpu,
  Layers,
} from "lucide-react";

const API_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

// ✅ MEDIA URL (FINAL)
const getMediaUrl = (media) => {
  if (!media) return null;
  return media.url
    ? media.url.startsWith("http")
      ? media.url
      : `${API_URL}${media.url}`
    : null;
};

// icon map
const iconMap = {
  ShieldCheck,
  Users,
  Settings2,
  MonitorSmartphone,
  Cpu,
  Layers,
};

const WhyChooseUs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `${API_URL}/api/about-page?populate[whychooseus][populate]=*&populate=serveillancepart`,
    )
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const why = data?.whychooseus?.[0];
  const cards = data?.serveillancepart || [];
  const imageUrl = getMediaUrl(why?.whyimage);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <span className="text-sm font-semibold text-blue-500 uppercase">
            Why Choose Us
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2 mb-4">
            {why?.why_chooseus_title || "Why Choose TRINAI"}
          </h2>

          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            {why?.description}
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((item, index) => {
              const Icon = iconMap[item.icons] || ShieldCheck;

              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <div className="p-2 bg-blue-50 rounded-md">
                    <Icon className="w-5 h-5 text-blue-500" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT IMAGE (SMALL LIKE OLD UI) */}
        <div className="flex justify-center lg:justify-end">
          {imageUrl && (
            <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[350px]">
              <div className="rounded-xl overflow-hidden shadow-lg border">
                <img
                  src={imageUrl}
                  alt="Why Choose Trinai"
                  className="w-full h-auto object-contain p-3 hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
