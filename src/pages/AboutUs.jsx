import React from "react";
import { motion } from "framer-motion";
import HistoryTimeline from "../components/HistoryTimeline";

const missionItems = [
  { icon: "fas fa-hand-holding-heart", text: "Empowering farmers & communities with sustainable solutions.", color: "text-[#eca051]" },
  { icon: "fas fa-industry", text: "Revolutionizing industries through advanced technology.", color: "text-[#eca051]" },
  { icon: "fas fa-globe", text: "Promoting environmental sustainability in all operations.", color: "text-[#eca051]" },
  { icon: "fas fa-users", text: "Fostering strong partnerships worldwide.", color: "text-[#eca051]" }
];

const visionItems = [
  { icon: "fas fa-chart-line", text: "Becoming a global leader in industrial transformation.", color: "text-[#120620]" },
  { icon: "fas fa-rocket", text: "Leveraging cutting-edge technology for sustainable growth.", color: "text-[#120620]" },
  { icon: "fas fa-recycle", text: "Encouraging eco-friendly initiatives across all sectors.", color: "text-[#120620]" },
  { icon: "fas fa-handshake", text: "Expanding long-term collaborations for mutual success.", color: "text-[#120620]" }
];

const businessDivisions = [
  { name: "Avenue Packs", desc: "Sustainable packaging solutions with zero carbon footprint.", img: "/images/24.jpg" },
  { name: "Agrovan India", desc: "Supporting 6,000+ farmers & exporting globally.", img: "/images/35.jpg" },
  { name: "Avenue Corporation", desc: "Your Automotive Components Trading Partner", img: "/images/14.jpg" },
  { name: "Avenue Buildcon", desc: "Prominent land and building developer", img: "https://www.avenuegroup.co/Projects/14.%20Avenue%20Promenade/Photos/1.jpg" }
];

const MotionGridItem = ({ icon, text, color, textColor }) => (
  <motion.div
    className="flex flex-col items-center text-center p-4 rounded-lg transition duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <motion.i className={`${icon} ${color} text-4xl mb-2 hover:scale-125 transition-transform`} whileHover={{ scale: 1.2 }}></motion.i>
    <p className={`${textColor} text-sm`}>{text}</p>
  </motion.div>
);

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-[#120620] to-[#12061F] text-white">
      {/* Hero Section */}
      <section className="relative py-24 flex justify-center text-center">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10 px-6 md:px-12 max-w-4xl">
          <motion.h1 className="text-5xl md:text-6xl font-bold text-[#e8e8ea] leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            About Avenue Group
          </motion.h1>
          <motion.p className="text-lg mt-4 text-[#e8e8ea] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}>
            Transforming industries, empowering 6,000+ farmers, and serving 10,000+ customers across 36 countries.
          </motion.p>
        </div>
      </section>

      <HistoryTimeline />

            {/* Business Divisions */}
            <section className="py-16 px-8">
        <h2 className="text-[#eca051] text-3xl font-bold text-center mb-8">Our Businesses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {businessDivisions.map((biz, index) => (
            <motion.div key={index} className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={biz.img} alt={biz.name} className="w-full h-60 object-cover"/>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6">
                <h3 className="text-xl font-bold text-[#eca051]">{biz.name}</h3>
                <p className="text-white text-sm mt-2">{biz.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Vision Section */}
      <section className="relative w-full bg-[#e8e8ea] text-[#12061F] px-6 md:px-12 lg:px-24 py-16">
        <h3 className="text-[#120620] text-3xl font-bold text-center mb-6">Our Vision</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {visionItems.map((item, index) => (
            <MotionGridItem key={index} {...item} textColor="text-[#12061F]" />
          ))}
        </div>
      </section>

            {/* Mission Section */}
            <section className="relative w-full bg-[#12061F] px-6 md:px-12 lg:px-24 py-20">
        <h3 className="text-[#eca051] text-3xl font-bold text-center mb-6">Our Mission</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {missionItems.map((item, index) => (
            <MotionGridItem key={index} {...item} textColor="text-[#e8e8ea]" />
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-8 bg-[#e8e8ea] text-[#12061F]">
  <h2 className="text-[#eca051] text-3xl font-bold text-center mb-8">Our Core Values</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {[
      { 
        title: "Sustainability", 
        desc: "Committed to eco-friendly solutions, reducing carbon footprints, and fostering long-term environmental impact.", 
        img: "/images/30.png" 
      },
      { 
        title: "Innovation", 
        desc: "Leading industrial transformation through advanced technology and smart investments.", 
        img: "/images/30.png"  
      },
      { 
        title: "Community", 
        desc: "Empowering farmers, consumers, and stakeholders by fostering meaningful relationships and sustainable growth.", 
        img: "/images/30.png" 
      }
    ].map((item, index) => (
      <motion.div
        key={index}
        className="relative overflow-hidden hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
      >
        {/* Background Image (NO BORDERS, NO SHADOWS) */}
        <img src={item.img} alt={item.title} className="w-full h-100 object-cover block"/>

        {/* Text Overlay (PERFECTLY CENTERED) */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-12 bottom-5">
          <h3 className="text-[#eca051] text-lg font-semibold">{item.title}</h3>
          <p className="text-white text-sm mt-2 text-center">{item.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* Call to Action */}
      {/* <section className="text-center py-16">
        <motion.a
          href="/contact"
          className="bg-[#eca051] text-[#5825A6] text-lg font-bold px-8 py-3 rounded-lg transition hover:bg-[#e89c4b] hover:text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}>
          Contact Us
        </motion.a>
      </section> */}
    </div>
  );
};

export default AboutUs;
