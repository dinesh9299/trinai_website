import React, { useState } from "react";
import sollutionbanner from "../images/cctv-security-online-camera-indoor (2).jpg";
import solutionsByScenario from "../components/Solutionbysenario";
import { Image } from "antd";

function Senario() {
  const [selectedScenario, setSelectedScenario] = useState(
    solutionsByScenario[0],
  );

  return (
    <div className="sollution_maincontainer ">
      {/* Solutions By Scenario */}
      <div className="Solution_by_scenario bg-slate-200 h-full p-6">
        <div className="main_heading text-center mb-5">
          <h1 className="font-bold text-4xl">Solutions by Scenario</h1>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {solutionsByScenario.map((scenario, index) => (
            <button
              key={index}
              onClick={() => setSelectedScenario(scenario)}
              className={`px-4 py-2 border rounded-md transition-all duration-300 ${
                selectedScenario.scenario === scenario.scenario
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {scenario.scenario}
            </button>
          ))}
        </div>

        {/* Display Selected Scenario Solutions */}
        <div className="p-6 border rounded-lg shadow-lg bg-white">
          <img
            src={selectedScenario.image}
            alt={selectedScenario.scenario}
            className="w-[600px] mx-auto h-60 object-cover rounded-md"
          />
          <h2 className="text-2xl font-semibold mt-4 text-center">
            {selectedScenario.scenario}
          </h2>
          <p className="text-gray-600 text-center">
            {selectedScenario.description}
          </p>

          {/* Solutions List */}
          <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedScenario.solutions.map((solution, i) => (
              <li
                key={i}
                className="flex items-center space-x-3 p-3 border rounded-md shadow-sm bg-gray-100"
              >
                <Image
                  src={solution.image}
                  alt={solution.name}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{solution.name}</h3>
                  <p className="text-sm text-gray-500">
                    {solution.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Senario;
