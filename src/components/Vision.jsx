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
      className="flex flex-col items-center text-center p-6 bg-[#1b0e2a] border border-[#664384] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
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
     <section className="w-full bg[#664384] text-[#12061F] px-6 md:px-12 lg:px-24 py-16">
     <h3 className="text-[#120620] text-3xl font-bold text-center mb-6 uppercase tracking-wider">Our Vision</h3>
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