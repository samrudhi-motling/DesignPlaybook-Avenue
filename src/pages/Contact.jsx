import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div 
      key={Math.random()} // Ensures animation triggers on refresh
      className="min-h-screen bg-gradient-to-r from-[#2a0e56] to-[#7a4fd3] p-8 relative overflow-hidden flex items-center justify-center"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.2 }}
        className="max-w-6xl w-full flex flex-wrap items-center justify-between relative z-10"
      >
        {/* Left Side (Contact Details) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 p-6 flex flex-col justify-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Have Some Questions?
          </motion.h2>
          <p className="text-white mb-6 text-lg">
            Thank you for your interest in our services. Please fill out the form below
            or email us at <span className="text-yellow-300 font-semibold">hello@demomail.com</span>
            and we will get back to you promptly.
          </p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5 }}
            className="space-y-4 text-white"
          >
            <div className="flex items-center space-x-4">
              <span className="text-yellow-300 text-xl">📞</span>
              <p>+1-760-284-3410</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-yellow-300 text-xl">📧</span>
              <p>hello@demomail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-yellow-300 text-xl">📍</span>
              <p>931 Abia Martin Drive, PA, Pennsylvania - 18104</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Form inside box */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 p-6 flex justify-center mt-10"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
          >
            <form className="bg-gray-100 p-6 rounded-xl shadow-md">
              <div className="mb-4">
                <input type="text" placeholder="First Name *" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              </div>
              <div className="mb-4">
                <input type="text" placeholder="Last Name *" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              </div>
              <div className="mb-4">
                <input type="tel" placeholder="Phone *" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Email *" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
              </div>
              <div className="mb-4">
                <textarea placeholder="Message" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" rows="4"></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#28a745" }} 
                whileTap={{ scale: 0.95 }} 
                className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all"
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Lower Wave - Black */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-0 w-full"
      >
        <svg viewBox="0 0 1440 320" className="w-full">
          <path fill="#000000" d="M0,128L60,160C120,192,240,256,360,261.3C480,267,600,213,720,181.3C840,149,960,139,1080,138.7C1200,139,1320,149,1380,154.7L1440,160V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"></path>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
