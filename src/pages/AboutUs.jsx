import React from "react";
import { motion } from "framer-motion";
import HistoryTimeline from "../components/HistoryTimeline";
import Footer from "../components/Footer";

const missionItems = [
  { icon: "fas fa-hand-holding-heart", text: "Empower farmers & communities with sustainable solutions.", color: "text-[#eca051]" },
  { icon: "fas fa-industry", text: "Revolutionize industries through advanced technology.", color: "text-[#eca051]" },
  { icon: "fas fa-globe", text: "Promote environmental sustainability in all operations.", color: "text-[#eca051]" },
  { icon: "fas fa-users", text: "Foster strong partnerships worldwide.", color: "text-[#eca051]" }
];

const visionItems = [
  { icon: "fas fa-chart-line", text: "To be a global leader in industrial transformation.", color: "text-[#120620]" },
  { icon: "fas fa-rocket", text: "Leverage cutting-edge technology for sustainable growth.", color: "text-[#120620]" },
  { icon: "fas fa-recycle", text: "Encourage eco-friendly initiatives across all sectors.", color: "text-[#120620]" },
  { icon: "fas fa-handshake", text: "Expand long-term collaborations for mutual success.", color: "text-[#120620]" }
];

const MotionGridItem = ({ icon, text, color, textColor }) => (
  <motion.div
    className="flex flex-col items-center text-center p-4 rounded-lg transition duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <motion.i
      className={`${icon} ${color} text-4xl mb-2 transition-transform duration-300 hover:scale-125 hover:text-[#F8AB55]`}
      whileHover={{ scale: 1.2 }}
    ></motion.i>
    <p className={`${textColor} text-sm`}>{text}</p>
  </motion.div>
);

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-[#120620] to-[#12061F] text-white">
      {/* Hero Section */}
      <section className="relative py-24 flex justify-center text-center">
        {/* Animated Background Overlay */}
        <motion.div
          className="absolute inset-0 bg-[#12061F] opacity-80"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10 px-6 md:px-12 max-w-4xl">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-[#e8e8ea] leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Avenue Group
          </motion.h1>
          <motion.p
            className="text-lg mt-4 text-[#e8e8ea] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            We are transforming industries, empowering farmers, and driving innovation across multiple sectors worldwide.
          </motion.p>
        </div>
      </section>

      <HistoryTimeline />
      {/* Mission Section with Light Background */}
      {/* Mission Section - Light Background */}
      <section className="relative w-full bg-[#12061F] px-6 md:px-12 lg:px-24 py-20 overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-[#eca051] text-3xl font-bold text-center mb-6">Our Mission</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {missionItems.map((item, index) => (
              <MotionGridItem key={index} icon={item.icon} text={item.text} color={item.color} textColor="text-[#e8e8ea]" />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Vision Section - Light Background */}
      <section className="relative w-full bg-[#e8e8ea] text-[#12061F] px-6 md:px-12 lg:px-24 py-16 overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-[#120620] text-3xl font-bold text-center mb-6">Our Vision</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {visionItems.map((item, index) => (
              <MotionGridItem key={index} icon={item.icon} text={item.text} color={item.color} textColor="text-[#12061F]" />
            ))}
          </div>
        </motion.div>
      </section>
      {/* Core Values - Grid Layout */}
      <section className="py-16 px-8">
        <h2 className="text-[#eca051] text-3xl font-bold text-center mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: "🌿 Sustainability", desc: "Creating eco-friendly solutions for long-term impact." },
            { title: "🚀 Innovation", desc: "Driving progress through technology & investments." },
            { title: "🤝 Community", desc: "Empowering farmers, customers, & stakeholders." }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#5825A6] p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h4 className="text-[#eca051] font-semibold text-lg">{item.title}</h4>
              <p className="text-[#e8e8ea]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="text-center py-16">
                <motion.div
                    className="inline-block bg-[#eca051] text-[#5825A6] text-lg font-bold px-8 py-3 rounded-lg transition hover:bg-[#e89c4b] hover:text-white cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Contact Us
                </motion.div>
            </section> */}

    </div>

  );
};

export default AboutUs;
