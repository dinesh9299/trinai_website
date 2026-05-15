import React from "react";
import solutionsByFunction from "../components/Solutionbyfunction";
import { Image } from "antd";

const Solutionfunction = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">
        Security Solutions
      </h1>
      <div className="space-y-8">
        {solutionsByFunction.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{category.function}</h2>
            <p className="text-gray-700 mb-4">{category.description}</p>
            <img
              src={category.image}
              alt={category.function}
              className="w-[600px] mx-auto h-60 object-cover rounded-md"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {category.solutions.map((solution, solIndex) => (
                <div
                  key={solIndex}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  <Image
                    src={solution.image}
                    alt={solution.name}
                    className="w-full h-40 object-cover rounded-lg mb-2"
                  />
                  <h3 className="text-lg font-medium">{solution.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutionfunction;
