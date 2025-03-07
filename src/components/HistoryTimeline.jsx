import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const historyData = [
  { year: "2024", title: "Founded", description: "Company was established with a vision for innovation." },
  { year: "2025", title: "Expansion", description: "Expanded to multiple regions, growing our impact." },
  { year: "2026", title: "Global Recognition", description: "Recognized as a key player in the industry." },
  { year: "2027", title: "Future Growth", description: "Continuing to innovate and expand globally." },
];

const HistoryTimeline = () => {
  // 🔹 Create a ref to track visibility of the title
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section className="relative py-16 px-6 md:px-12 overflow-visible bg-cover bg-center">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 🔹 Animated Title with useInView */}
        <motion.h2
          ref={titleRef} // Attach ref to track visibility
          className="text-[#e8e8ea] text-4xl font-bold text-center mb-12 uppercase tracking-wide"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}} // Use isInView correctly
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Core Values
        </motion.h2>

        {/* Timeline Section */}
        <div className="relative flex flex-col space-y-10 mt-12">
          {/* Timeline Line */}
          <div className="absolute inset-y-0 left-1/2 w-1 bg-[#eca051] transform -translate-x-1/2"></div>

          {historyData.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center justify-between w-full max-w-4xl mx-auto gap-6 sm:gap-12 ${
                index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the item is in view
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              {/* Content Box */}
              <div className="bg-[#E8E8EA] p-6 shadow-lg rounded-lg w-full sm:w-80 md:w-96 relative">
                <div className="absolute -top-3 left-4 bg-[#eca051] text-white text-xs font-bold px-3 py-1 rounded-md">
                  {item.year}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mt-6">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>

              {/* Timeline Dot (Visible only on screens 768px and above) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#eca051] rounded-full border-4 border-white shadow-md hidden lg:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
