import React from "react";
// import New_Hero from "../components/New_Hero.jsx";
import { motion } from "framer-motion"; // Import motion

const companies = [
  {
    name: "Avenue Packs",
    description: "Innovative packaging solutions designed for global markets.",
    logo: "/images/packs-logo.png",
    link: "",
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
    link: "",
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
    link: "",
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
      <div className="min-h-screen bg-gradient-to-b from-[#120620] to-[#664384] py-24 px-6 relative overflow-hidden">
        {/* Background SVG */}
        <svg
          className="absolute top-0 left-0 w-full h-full z-0 opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.1"
            d="M0,128L1440,192L1440,320L0,320Z"
          ></path>
        </svg>

        <h2 className="text-[#eca051] text-3xl font-bold text-center mb-4 relative z-10">Our Companies</h2>
        <h3 className="text-[#e8e8ea] text-xl text-center mb-10 relative z-10">Discover our diverse business ventures</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10">
          {companies.map((company, index) => (
            <a
              key={index}
              href={company.link}
              className="bg-white/10 rounded-lg p-5 transition-all transform hover:scale-105 hover:shadow-lg hover:bg-[#2a1f4e] hover:border-[#eca051] border-2 border-transparent hover:border-opacity-60 relative overflow-hidden"
            >
              <motion.div
                className="w-32 h-28 mx-auto mb-4 flex justify-center items-center transition-all"
                whileHover={{ scale: 1.2 }} // Scale up on hover
                transition={{ type: "spring", stiffness: 300, damping: 20 }} // Smooth animation
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
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Overview;
