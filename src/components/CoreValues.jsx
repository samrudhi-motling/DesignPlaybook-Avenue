"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const coreValues = [
  {
    title: "Sustainability",
    desc: "Committed to eco-friendly solutions, reducing carbon footprints, and fostering long-term environmental impact.",
    img: "/images/sustainability.webp"
  },
  {
    title: "Innovation",
    desc: "Leading industrial transformation through advanced technology and smart investments.",
    img: "/images/innovation.webp"
  },
  {
    title: "Community",
    desc: "Empowering farmers, consumers, and stakeholders by fostering meaningful relationships and sustainable growth.",
    img: "/images/community.webp"
  }
];

export default function CoreValues() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-20 px-8 bg-gradient-to-t from-[#120620] to-[#1b152294] text-[#12061F] overflow-hidden">
      {/* Decorative Feather Shapes */}
      <div className="absolute left-[-50px] top-10 md:left-[-100px] md:top-[-50px] z-[-1] opacity-20">
        <svg width="180" height="280" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M150 0C80 50 20 100 0 200C50 250 100 280 150 400C200 280 250 250 300 200C280 100 220 50 150 0Z" fill="#664384" />
        </svg>
      </div>

      <div className="absolute right-[-50px] bottom-10 md:right-[-100px] md:bottom-[-50px] z-[-1] opacity-20">
        <svg width="180" height="280" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M150 0C80 50 20 100 0 200C50 250 100 280 150 400C200 280 250 250 300 200C280 100 220 50 150 0Z" fill="#eca051" />
        </svg>
      </div>

      {/* Section Title */}
      <motion.h2
        className="text-[#e8e8ea] text-4xl font-bold text-center mb-12 uppercase tracking-wide"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Core Values
      </motion.h2>

      {/* Core Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {coreValues.map((item, index) => (
          <motion.div
            key={index}
            className="relative rounded-xl bg-[#a176d694] shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
          >
            {/* Image */}
            <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${item.img})` }}></div>

            {/* Text Section */}
            <div className="p-6 text-center">
              <h3 className="text-[#eca051] text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-[#e8e8ea] text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
