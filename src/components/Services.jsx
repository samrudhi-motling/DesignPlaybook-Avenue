import React from "react";
import { motion } from "framer-motion";
import { FaBox, FaLeaf, FaCar, FaBuilding, FaIndustry, FaGlobe } from "react-icons/fa";

const companies = [
  {
    title: "Industrial Packaging",
    description: "Sustainable and innovative packaging solutions for global markets.",
    icon: <FaBox className="text-blue-400 text-5xl" />,
  },
  {
    title: "Agri & Food Solutions",
    description: "Supporting farmers with technology-driven solutions and global exports.",
    icon: <FaLeaf className="text-green-400 text-5xl" />,
  },
  {
    title: "Automotive Components",
    description: "High-quality automotive parts and sensors for the mobility industry.",
    icon: <FaCar className="text-red-400 text-5xl" />,
  },
  {
    title: "Real Estate & Development",
    description: "Innovative land and building development projects.",
    icon: <FaBuilding className="text-yellow-400 text-5xl" />,
  },
  {
    title: "Energy & Petroleum",
    description: "Reliable fuel and oil supply for major industries.",
    icon: <FaIndustry className="text-purple-400 text-5xl" />,
  },
  {
    title: "Global Trade & Expansion",
    description: "Expanding into international markets with quality products.",
    icon: <FaGlobe className="text-teal-400 text-5xl" />,
  },
];

const Services = () => {
  return (
    <section className="bg-[#0F172A] py-12 px-8 md:px-16">
      <div className="max-w-screen-lg mx-auto">
        {/* Title with Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white text-3xl md:text-4xl font-bold text-center mb-8" // Reduced margin-bottom
        >
          Our Services
        </motion.h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Reduced gap between cards */}
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#1E293B] p-6 rounded-xl shadow-xl overflow-hidden 
              transition-all duration-300 ease-in-out h-[200px] hover:h-[250px] hover:shadow-2xl hover:shadow-purple-500/50"
            >
              {/* Icon and Title (Moves Up on Hover) */}
              <motion.div
                className="flex flex-col justify-center items-center text-center h-full transition-transform duration-300 group-hover:-translate-y-6" // Adjusted translate-y
              >
                <div className="text-5xl mb-2">{company.icon}</div>
                <h3 className="text-white text-xl md:text-2xl font-semibold">
                  {company.title}
                </h3>
              </motion.div>

              {/* Description (Appears on Hover) */}
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full px-4" // Adjusted bottom spacing
              >
                <p className="text-gray-300 text-sm md:text-base">
                  {company.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;