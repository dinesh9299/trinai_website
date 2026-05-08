// // src/components/SolutionsByScenario1.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { scenarios } from "../data/scenariosData";

// function SolutionsByScenario1() {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-gray-50 py-16 px-4">
//       <div className="text-center mb-14">
//         <h1 className="font-bold text-4xl bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
//           Solutions by Scenario
//         </h1>
//       </div>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {scenarios.map((item, index) => (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.6,
//               delay: index * 0.05,
//               ease: "easeOut",
//             }}
//             viewport={{ once: false, amount: 0.2 }}
//             whileHover={{ y: -8 }}
//             onClick={() => navigate(`/solutions/${item.id}`)}
//             className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
//           >
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-48 object-cover"
//             />

//             <div className="p-5 flex flex-col flex-grow">
//               <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
//                 {item.shortDesc}
//               </p>

//               {/* Explore Now Button */}
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   navigate(`/solutions/${item.id}`);
//                 }}
//                 className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white font-semibold text-sm shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] mt-auto"
//               >
//                 Explore Now →
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SolutionsByScenario1;

// src/components/SolutionsByScenario1.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

function SolutionsByScenario1() {
  const navigate = useNavigate();
  const [scenarios, setScenarios] = useState([]);
  const [sectionTitle, setSectionTitle] = useState("Solutions by Scenario");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScenarios = async () => {
      try {
        setLoading(true);
        // ✅ Exact working URL from your Postman test
        const query = "populate[scenarios][populate]=*";
        const res = await fetch(
          `${API_URL}/api/solutions-by-scenario?${query}`,
        );

        if (!res.ok) throw new Error(`Strapi returned ${res.status}`);

        const json = await res.json();

        if (json?.data?.scenarios) {
          // ✅ Sort by order field (converts string "1","2" to numbers)
          const sorted = json.data.scenarios.sort(
            (a, b) => Number(a.order) - Number(b.order),
          );

          setScenarios(sorted);
          setSectionTitle(json.data.section_title || "Solutions by Scenario");
        } else {
          throw new Error("No scenarios found in Strapi");
        }
      } catch (err) {
        setError(err.message);
        console.error("❌ Error fetching scenarios:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchScenarios();
  }, []);

  // 🔹 Loading State
  if (loading) {
    return (
      <div className="bg-gray-50 py-16 px-4 flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#00ADE7] border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-500">Loading scenarios...</p>
        </div>
      </div>
    );
  }

  // 🔹 Error State
  if (error) {
    return (
      <div className="bg-gray-50 py-16 px-4 text-center">
        <p className="text-red-500 font-semibold mb-2">
          Failed to load scenarios
        </p>
        <p className="text-gray-500 text-sm">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-[#00ADE7] text-white rounded-lg text-sm hover:bg-blue-600 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  // 🔹 Success State
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="text-center mb-14">
        <h1 className="font-bold text-4xl bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
          {sectionTitle}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {scenarios.map((item, index) => (
          <motion.div
            key={item.id || item.scenario_id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -8 }}
            onClick={() => navigate(`/solutions/${item.scenario_id}`)}
            className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
          >
            {/* ✅ Image with fallback */}
            <div className="w-full h-48 overflow-hidden bg-gray-200">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x200?text=Image+Not+Found";
                }}
              />
            </div>

            <div className="p-5 flex flex-col flex-grow">
              {/* ✅ Line clamp prevents tall cards from breaking grid */}
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                {item.short_description}
              </p>

              {/* ✅ Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/solutions/${item.scenario_id}`);
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white font-semibold text-sm shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] mt-auto"
              >
                Explore Now →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SolutionsByScenario1;
