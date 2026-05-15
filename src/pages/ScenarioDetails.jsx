import { useParams } from "react-router-dom";
import { scenarios } from "../data/scenariosData";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function ScenarioDetails() {
  const { id } = useParams();
  const scenario = scenarios.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll-to-top button logic
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!scenario) {
    return <div className="p-10 text-center">Scenario Not Found</div>;
  }

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${scenario.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#00ADE7]/20 to-[#305292]/30"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            {scenario.title}
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
            {scenario.shortDesc}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* INTRODUCTION */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6">
            Introduction
          </h2>

          <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
            {scenario.introduction}
          </p>

          {/* Integrated System Covers */}
          {scenario.systemCovers && (
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-8">
                Our Integrated System Covers
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {scenario.systemCovers.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white hover:shadow-lg transition-all duration-300 p-5 rounded-xl border border-gray-100 group hover:border-[#00ADE7]/30"
                  >
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] shadow-md group-hover:scale-110 transition-transform duration-300"></div>
                    <p className="text-gray-800 font-semibold text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* INDUSTRIAL COVERAGE */}
        {scenario.coverage && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6">
              {scenario.coverageHeading}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {scenario.coverage.map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-[#00ADE7]/10 to-[#305292]/10 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#00ADE7]/20 hover:border-[#00ADE7]/40"
                >
                  <p className="text-lg font-semibold text-gray-800">{item}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTIONS */}
        {scenario.sections &&
          scenario.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6">
                {section.title}
              </h3>

              <p className="mb-3 text-gray-800">
                <span className="font-semibold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
                  Challenge:{" "}
                </span>
                {section.challenge}
              </p>

              <p className="mb-4 text-gray-800">
                <span className="font-semibold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
                  Our Solution:{" "}
                </span>
                {section.solution}
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {section.advantages.map((adv, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] flex-shrink-0"></span>
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        {/* KEY ADVANTAGES */}
        {scenario.keyAdvantages && (
          <section>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-8">
              Key Advantages
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {scenario.keyAdvantages.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#00ADE7]/30 group"
                >
                  <p className="text-gray-800 font-medium text-base group-hover:text-[#00ADE7] transition-colors duration-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PARKING ECOSYSTEM */}
        {scenario.ecosystem && (
          <section>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-8">
              The Trinai Parking Ecosystem
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {scenario.ecosystem.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-gradient-to-r from-[#00ADE7]/10 to-[#305292]/10 border-l-4 border-[#00ADE7] p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-3 h-3 mt-2 rounded-full bg-gradient-to-r from-[#00ADE7] to-[#305292] shadow-md"></div>
                  <p className="text-gray-800 font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Applications */}
        {scenario.applications && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-8">
              Applications of Trinai Monitor Centers
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {scenario.applications.map((app, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#00ADE7]/30"
                >
                  <p className="text-gray-800 font-medium">{app}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* WHERE SOLUTIONS EXCEL */}
        {scenario.excelAreas && (
          <section>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-8">
              Where Trinai Parking Solutions Excel
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {scenario.excelAreas.map((area, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <p className="text-lg font-semibold text-gray-800 group-hover:bg-gradient-to-r group-hover:from-[#00ADE7] group-hover:to-[#305292] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {area}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* BENEFITS */}
        {scenario.benefits && (
          <section>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-8">
              Benefits for Office Management
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {scenario.benefits.map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-[#00ADE7]/10 to-[#305292]/10 border-l-4 border-[#00ADE7] p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <p className="text-gray-800 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* BEST PRACTICES */}
        {scenario.bestPractices && (
          <section className="mt-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-10">
              Best Practices Enhanced by Trinai
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {scenario.bestPractices.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#00ADE7]/30"
                >
                  <p className="text-gray-800 text-lg font-semibold leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECURITY CHALLENGES */}
        {scenario.securityChallenges && (
          <section className="mt-20">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-10">
              Security Challenges Solved by Trinai
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {scenario.securityChallenges.map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-[#00ADE7]/5 to-[#305292]/5 border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <p className="text-gray-900 text-lg font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FUTURE INNOVATIONS */}
        {scenario.futureInnovations && (
          <section className="mt-20">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6">
              The Future of Office Security with Trinai
            </h2>

            <p className="text-gray-700 text-lg mb-10">
              As workplaces evolve into smart offices, Trinai leads with
              innovations:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {scenario.futureInnovations.map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <p className="text-lg font-semibold leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* DETAILED INDUSTRIAL SECTIONS */}
        {scenario.detailedSections &&
          scenario.detailedSections.map((section, index) => (
            <section key={index} className="mt-20">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-10 border-l-4 border-[#00ADE7] pl-4">
                {section.title}
              </h2>

              {section.content.map((block, i) => (
                <div key={i} className="mb-12">
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6">
                    {block.subHeading}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    {block.points.map((point, j) => (
                      <div
                        key={j}
                        className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#00ADE7]/30"
                      >
                        <p className="text-gray-800 leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          ))}

        {/* Empowerment Section */}
        {scenario.empowermentSection && (
          <section className="mt-20">
            <div className="bg-gradient-to-r from-[#00ADE7]/10 to-[#305292]/10 p-12 rounded-3xl shadow-lg text-center border border-[#00ADE7]/20">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-6">
                {scenario.empowermentSection.heading}
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto whitespace-pre-line">
                {scenario.empowermentSection.content}
              </p>
            </div>
          </section>
        )}

        {/* Urban Roadways Special Advantages */}
        {scenario.urbanAdvantages && (
          <section className="mt-20">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent mb-10 text-center">
              {scenario.urbanAdvantagesHeading}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {scenario.urbanAdvantages.map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-[#00ADE7]/10 to-[#305292]/10 p-6 rounded-2xl shadow-sm border border-[#00ADE7]/20"
                >
                  <p className="text-gray-800 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* WHY CHOOSE */}
        {(scenario.whyChoose || scenario.whyPoints) && (
          <section className="bg-gradient-to-r from-[#00ADE7] to-[#305292] text-white p-14 rounded-3xl space-y-8 shadow-xl">
            <h2 className="text-4xl font-bold text-center">
              Why Choose TRINAI?
            </h2>

            {scenario.whyPoints && (
              <ul className="max-w-4xl mx-auto space-y-4 text-lg">
                {scenario.whyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-white flex-shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {scenario.whyChoose && !scenario.whyPoints && (
              <p className="max-w-4xl mx-auto text-lg leading-relaxed whitespace-pre-line text-center">
                {scenario.whyChoose}
              </p>
            )}

            {scenario.closingStatement && (
              <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-md max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-[#00ADE7] to-[#305292] bg-clip-text text-transparent">
                  Secure Your Apartment with Trinai
                </h3>
                <p className="leading-relaxed whitespace-pre-line text-center">
                  {scenario.closingStatement}
                </p>
              </div>
            )}
          </section>
        )}
      </div>

      {/* SCROLL TO TOP BUTTON */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-8 right-8
            w-12 h-12
            rounded-full
            bg-gradient-to-r from-[#00ADE7] to-[#305292]
            hover:from-[#305292] hover:to-[#00ADE7]
            text-white
            shadow-lg hover:shadow-xl
            flex items-center justify-center
            transition-all duration-300
            transform hover:-translate-y-1 hover:scale-105
            z-50
          "
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default ScenarioDetails;
