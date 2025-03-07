import React from 'react'
import { motion } from "framer-motion";
const visionItems = [
    { icon: "fas fa-chart-line", text: "Becoming a global leader in industrial transformation." },
    { icon: "fas fa-rocket", text: "Leveraging cutting-edge technology for sustainable growth." },
    { icon: "fas fa-recycle", text: "Encouraging eco-friendly initiatives across all sectors." },
    { icon: "fas fa-handshake", text: "Expanding long-term collaborations for mutual success." }
  ];
  
  const MotionGridItem = ({ icon, text }) => (
    <motion.div
      className="flex flex-col items-center text-center p-6 bg-[#1b0e2a] border border-[#e8e8ea80] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.i className={`${icon} text-[#eca051] text-4xl mb-4`} whileHover={{ scale: 1.2 }}></motion.i>
      <p className="text-[#e8e8ea] text-base">{text}</p>
    </motion.div>
  );
  
const Vision = () => {
  return (
    <>
         {/* Vision Section */}
     <section className="w-full bg-gradient-to-b from-[#120620] to-[#a176d6] text-[#e8e8ea] px-6 md:px-12 lg:px-24 py-16">
     {/* <h3 className="text-[#e8e8ea] text-3xl font-bold text-center mb-6 uppercase tracking-wider">Our Vision</h3> */}
     <motion.h2
        className="text-[#e8e8ea] text-4xl font-bold text-center mb-10 uppercase tracking-wide"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Vision
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
       {visionItems.map((item, index) => (
         <MotionGridItem key={index} {...item} />
       ))}
     </div>
   </section>
</>
  )
}

export default Vision