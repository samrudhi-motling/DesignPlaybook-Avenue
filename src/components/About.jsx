import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#5825A6] to-[#3a1b6d] text-white flex justify-center overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8">
          
          {/* Image Column */}
          <motion.div 
            className="w-full md:w-1/3 flex justify-center"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img
              src="/images/9.png"
              alt="About Us"
              className="w-full max-w-[260px] rounded-lg shadow-xl"
            />
          </motion.div>

          {/* Content Column */}
          <motion.div 
            className="w-full md:w-2/3 px-4 text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            viewport={{ once: false, amount: 0.2 }} // Allows repeat animation
            key={Math.random()} // Forces re-render on revisit
          >
            <div className="relative">
              <div className="mb-6">
                <motion.div 
                  className="text-yellow-400 text-md font-semibold uppercase relative inline-block pb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  About Us
                  <span className="absolute bottom-0 left-full w-6 h-0.5 bg-gray-400"></span>
                </motion.div>
                <motion.h2 
                  className="text-4xl md:text-5xl font-extrabold leading-snug tracking-wide"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false }}
                >
                  Excellence in Interior Solutions
                </motion.h2>
              </div>
              <motion.p 
                className="text-lg leading-relaxed mb-6 text-gray-200 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: false }}
              >
                Avenue Group specializes in delivering cutting-edge interior solutions, 
                transforming spaces with innovative designs and high-quality materials.
              </motion.p>
              <motion.a
                href="about.html"
                className="inline-block px-6 py-3 text-md font-bold uppercase bg-yellow-400 text-[#5825A6] border-2 border-yellow-400 rounded-full transition-all hover:bg-white hover:text-yellow-400 hover:shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: false }}
              >
                Read More
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
