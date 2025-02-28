import React from "react";
import { FaBox, FaLeaf, FaCar, FaBuilding, FaIndustry, FaGlobe } from "react-icons/fa";

const companies = [
  {
    title: "Industrial Packaging",
    description: "Sustainable and innovative packaging solutions for global markets.",
    icon: <FaBox className="text-blue-400 text-6xl" />,
  },
  {
    title: "Agri & Food Solutions",
    description: "Supporting farmers with technology-driven solutions and global exports.",
    icon: <FaLeaf className="text-green-400 text-6xl" />,
  },
  {
    title: "Automotive Components",
    description: "High-quality automotive parts and sensors for the mobility industry.",
    icon: <FaCar className="text-red-400 text-6xl" />,
  },
  {
    title: "Real Estate & Development",
    description: "Innovative land and building development projects.",
    icon: <FaBuilding className="text-yellow-400 text-6xl" />,
  },
  {
    title: "Energy & Petroleum",
    description: "Reliable fuel and oil supply for major industries.",
    icon: <FaIndustry className="text-purple-400 text-6xl" />,
  },
  {
    title: "Global Trade & Expansion",
    description: "Expanding into international markets with quality products.",
    icon: <FaGlobe className="text-teal-400 text-6xl" />,
  },
];

const CompaniesSection = () => {
  return (
    <section className="bg-[#0F172A] py-16 px-8 flex justify-center">
      <div className="max-w-7xl w-full">
        {/* Title */}
        <h2 className="text-white text-4xl font-bold text-center mb-10">Our Services</h2>

        {/* Centered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-[#1E293B] w-80 h-80 p-8 rounded-2xl flex flex-col items-center justify-center text-center transition duration-300 ease-in-out transform hover:shadow-xl hover:shadow-purple-500/50 group relative overflow-hidden mx-auto"
            >
              {/* Icon */}
              <div className="text-6xl transition-all duration-300 transform group-hover:-translate-y-12 group-hover:scale-90 flex items-center justify-center">
                {company.icon}
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:translate-y-8">
                <h3 className="text-white text-2xl font-semibold mt-4">{company.title}</h3>
                <p className="text-gray-400 mt-3 text-lg">{company.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
