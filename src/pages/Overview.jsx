import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const companies = [
  {
    name: "Avenue Packs",
    description: "Innovative packaging solutions designed for global markets.",
    logo: "/images/packs-logo.png",
    link: "/pack",
  },
  {
    name: "Avenue Buildcon",
    description: "Leading real estate and infrastructure development.",
    logo: "/images/buildcon-logo.png",
    link: "",
  },
  {
    name: "Agrovan India",
    description: "Exports and agribusiness, supporting farmers globally.",
    logo: "/images/agrovan-logo.png",
    link: "/agrovan",
  },
  {
    name: "Agrovan Farm Producing Company",
    description: "Enhancing agricultural productivity and sustainability.",
    logo: "/images/agrovan-logo.png",
    link: "",
  },
  {
    name: "Avenue Corporation",
    description: "Trusted supplier of automotive components and solutions.",
    logo: "/images/corporation-logo.png",
    link: "/corp",
  },
  {
    name: "Sarvesh Petroleum",
    description: "Reliable fuel and petroleum supplier for industries.",
    logo: "/images/petroleum-logo.png",
    link: "",
  },
  {
    name: "La Ruche Food Stuffs",
    description: "Dubai-based supplier of premium frozen food products.",
    logo: "/images/lrf-logo.png",
    link: "",
  },
  {
    name: "Avenue Foundation",
    description: "Driving social initiatives and community support programs.",
    logo: "/images/foundation-logo.png",
    link: "",
  },
];

const Overview = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 🔹 Title Section with Background Image & Purplish Overlay */}
      <div
        className="absolute min-h-[40vh] flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: "url('images/back_5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          opacity: 60,
        }}
      >
        {/* Purplish Overlay */}
        <div className="absolute inset-0 bg-[#4c0082a1] opacity-50"></div>

        {/* Text Content (Above Overlay) */}
        <motion.h2
          className="text-[#eca051] text-4xl font-bold uppercase tracking-wide relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Companies
        </motion.h2>
        <h3 className="text-[#e8e8ea] text-xl mt-4 relative z-10">
          Discover our diverse business ventures
        </h3>
      </div>

        {/* 🔹 Companies Grid Section */}
        <div className="bg-gradient-to-b from-[#120620] to-[#664384] py-10 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {companies.map((company, index) =>
            company.link ? (
              <Link
                key={index}
                to={company.link}
                className="bg-white/10 rounded-lg p-5 transition-all transform hover:scale-105 hover:shadow-lg hover:bg-[#2a1f4e] hover:border-[#eca051] border-2 border-transparent hover:border-opacity-60 relative overflow-hidden"
              >
                <motion.div
                  className="w-32 h-28 mx-auto mb-4 flex justify-center items-center transition-all"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </motion.div>
                <h4 className="text-[#eca051] text-lg font-semibold text-center transition-all transform hover:text-[#e8e8ea]">
                  {company.name}
                </h4>
                <p className="text-[#e8e8ea] text-sm text-center mt-2 transition-all transform hover:text-[#d3d3d3]">
                  {company.description}
                </p>
              </Link>
            ) : (
              <div
                key={index}
                className="bg-white/10 rounded-lg p-5 opacity-60 cursor-not-allowed"
              >
                <motion.div
                  className="w-32 h-28 mx-auto mb-4 flex justify-center items-center transition-all"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </motion.div>
                <h4 className="text-[#eca051] text-lg font-semibold text-center">
                  {company.name}
                </h4>
                <p className="text-[#e8e8ea] text-sm text-center mt-2">
                  {company.description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Overview;