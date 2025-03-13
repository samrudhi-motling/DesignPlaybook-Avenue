"use client";
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom"; // Import the Link component

const Companies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  useEffect(() => {
    new Swiper(".swiper", {
      modules: [EffectCards, Autoplay],
      effect: "cards",
      grabCursor: true,
      initialSlide: 2,
      speed: 800,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }, []);

  const companies = [
    { name: "Avenue Packs", img: "/images/24.jpg" },
    { name: "Agrovan India", img: "/images/33.jpg" },
    { name: "Avenue Corporation", img: "/images/38.jpg" },
    { name: "La Ruche Food Stuffs", img: "/images/37.jpg" },
    { name: "Avenue Buildcon", img: "/images/17.jpg" },
    { name: "Agrovan Farm Producing Company", img: "/images/32.jpg" },
    { name: "Sarvesh Petroleum - Sarvesh Petro Hub", img: "/images/13.jpg" },
    { name: "Avenue Foundation", img: "/images/74.jpg" }
  ];
  
  return (
    <section 
      ref={ref} 
      className="relative flex flex-col items-center justify-center bg-gray-900 min-h-screen p-12 overflow-hidden"
    >
      {/* Section Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-white text-4xl font-extrabold mb-16 text-center uppercase tracking-wide" // Increased margin-bottom to mb-16
      >
        Avenue Group Subsidiaries
      </motion.h2>

      {/* Container for Cards and Content */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="bg-white/10 backdrop-blur-lg rounded-lg p-8 shadow-lg flex flex-col md:flex-row gap-12 w-full max-w-5xl min-h-[400px] relative z-10 justify-center items-center"
      >
        {/* Description Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-md text-center md:text-left flex flex-col justify-center order-2 md:order-1" // Content below cards for mobile, on left for desktop
        >
          <p className="text-white text-lg mb-6 leading-relaxed">
            Discover our diverse portfolio of <span className="text-purple-500 font-bold">Avenue Group Companies</span> spanning various industries. From hospitality and real estate to agriculture and security, our companies are committed to excellence, innovation, and delivering exceptional value to our clients and communities.
          </p>
          <Link to="/overview"> {/* Wrap the button with Link */}
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white w-full text-purple-600 px-6 py-3 rounded-lg font-bold shadow-md hover:bg-gray-200 transition"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>

        {/* Swiper Card Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="swiper w-48 h-[300px] md:w-64 md:h-[350px] order-1 md:order-2" // Cards on top for mobile, on right for desktop
        >
          <div className="swiper-wrapper">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="swiper-slide relative rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-300 hover:scale-105"
              >
                <img src={company.img} alt={company.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
                  <h2 className="text-white font-semibold text-lg">{company.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Companies;