import React from "react";
import { motion } from "framer-motion";

const historyData = [
  { year: "2024", title: "Founded", description: "Company was established with a vision for innovation." },
  { year: "2025", title: "Expansion", description: "Expanded to multiple regions, growing our impact." },
  { year: "2026", title: "Global Recognition", description: "Recognized as a key player in the industry." },
  { year: "2027", title: "Future Growth", description: "Continuing to innovate and expand globally." },
];

const HistoryTimeline = () => {
  return (
    <section className="relative py-16 px-6 md:px-12 overflow-visible">
      {/* Background Image with Curved Overlay */}
      {/* Background Image with Curved Overlay (Hidden on screens ≤480px, visible on larger screens) */}
<div className="absolute top-[-50%] left-[20%] w-[80%] h-[150%] bg-[#807e7e57] 
    rounded-bl-[70%] rounded-tl-[90%] rounded-br-[80%] overflow-hidden 
    hidden sm:block">

  {/* <img
    src="/images/8.jpg"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover opacity-30"
  /> */}
</div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Title */}
  <h2 className="text-3xl sm:text-4xl font-bold text-white text-center sm:text-left">
    Our <span className="text-[#eca051]">History</span>
  </h2>
  <p className="text-gray-300 text-center sm:text-left mt-3 max-w-2xl mx-auto sm:mx-0">
    A journey of excellence and innovation over the years.
  </p>

  {/* Timeline Section */}
  <div className="relative flex flex-col space-y-10 mt-8">
    {historyData.map((item, index) => (
      <motion.div
        key={index}
        className={`relative flex flex-col sm:flex-row items-center gap-4 ${
          index % 2 === 0 ? "sm:ml-auto sm:text-right" : "sm:mr-auto sm:text-left"
        }`}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: index * 0.15 }}
      >
        {/* Year Box */}
        <div className="bg-white text-[#12061F] font-bold text-md px-4 py-2 rounded-lg shadow-lg">
          {item.year}
        </div>

        {/* Content Box */}
        <div className="bg-white p-4 shadow-lg rounded-lg w-full sm:w-80 md:w-96 text-center sm:text-left">
          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
</div>

    </section>
  );
};

export default HistoryTimeline;
