import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section 
      className="relative py-20 flex justify-center overflow-hidden text-white bg-cover bg-center" 
      style={{ backgroundImage: "url('/images/878.jpg')" }} // Set your image path
    >
      
      {/* Animated Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#5825A6] to-[#3a1b6d] opacity-80"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <motion.div 
          className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Content Column (Moved Left) */}
          <motion.div 
            className="w-full md:w-2/3 px-4 text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            viewport={{ once: false, amount: 0.2 }}
            key={Math.random()}
          >
            <div className="relative">
              <div className="mb-6">
                <motion.div 
                  className="text-[#F8AB55] text-md font-semibold uppercase relative inline-block pb-2 tracking-wide"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  About Us
                  {/* <span className="absolute bottom-0 left-full w-6 h-0.5 bg-gray-400"></span> */}
                </motion.div>
                <motion.h2 
                  className="text-4xl md:text-5xl font-extrabold leading-tight tracking-wide text-white drop-shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false }}
                >
                  Excellence in Interior Solutions
                </motion.h2>
              </div>
              <motion.p 
                className="text-lg leading-relaxed mb-6 text-[#CDCED0] max-w-xl"
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
                className="inline-block mt-6 px-6 py-3 text-lg font-bold uppercase bg-[#F8AB55] text-[#5825A6] rounded-lg transition-all  hover:text-white hover:shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: false }}
              >
                Read More
              </motion.a>
            </div>
          </motion.div>

          {/* Image Column (Moved Right & No Tilt on Hover) */}
          <motion.div 
            className="w-full md:w-1/3 flex justify-center"
            whileHover={{ scale: 1.05 }} // Removed rotation effect
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img
              src="/images/9.png"
              alt="About Us"
              className="w-full max-w-[280px] rounded-xl "
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;