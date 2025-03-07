import { useState } from "react";
import { motion } from "framer-motion";

const businessDivisions = [
  {
    name: "Avenue Packs",
    desc: "Innovative and sustainable packaging solutions with zero carbon footprint. Features EcoGauge for carbon emission tracking.",
    img: "/images/24.jpg"
  },
  {
    name: "Agrovan India",
    desc: "Empowering 6,000+ farmers with high-quality produce, state-of-the-art processing, and global exports to 36+ countries.",
    img: "/images/35.jpg"
  },
  {
    name: "Avenue Corporation",
    desc: "A trusted trading partner in automotive components, ensuring top-notch quality and reliability for the industry.",
    img: "/images/14.jpg"
  },
  {
    name: "Avenue Buildcon",
    desc: "A leading real estate developer in Pune, delivering high-quality, sustainable, and innovative infrastructure projects.",
    img: "https://www.avenuegroup.co/Projects/14.%20Avenue%20Promenade/Photos/1.jpg"
  },
  {
    name: "Agrovan Farm Producing Co.",
    desc: "Supporting farmers with direct collaboration, offering resources to boost productivity and drive sustainable growth.",
    img: "/images/36.jpg"
  },
  {
    name: "Sarvesh Petro Hub",
    desc: "A leading supplier of fuel and oil, ensuring reliable energy solutions for industries with a commitment to quality.",
    img: "/images/petroleum.webp"
  },
  {
    name: "La Ruche Food Stuffs",
    desc: "Dubai-based frozen food distribution chain, delivering high-quality products efficiently across the region.",
    img: "/images/laruche.webp"
  },
  {
    name: "Avenue Foundation",
    desc: "A social initiative dedicated to providing education and resources for underprivileged children, fostering equal opportunities.",
    img: "/images/41.jpg"
  }
];

const BusinessSection = () => {
  const [visibleCount, setVisibleCount] = useState(4); // Show 6 initially

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Load 3 more each time
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-l from-[#120620] to-[#6b548d]">
      <motion.h2
        className="text-[#e8e8ea] text-4xl font-bold text-center mb-10 uppercase tracking-wide"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Businesses
      </motion.h2>

      {/* Business Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {businessDivisions.slice(0, visibleCount).map((biz, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden hover:scale-[1.02] transition-transform duration-300 bg-transparent"
          >
            <img 
              src={biz.img} 
              alt={biz.name} 
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-bold text-[#eca051]">{biz.name}</h3>
              <p className="text-white text-sm mt-2 text-center leading-relaxed">{biz.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* "Load More" Button */}
      {visibleCount < businessDivisions.length && (
        <div className="flex justify-center mt-10">
          <button 
            onClick={loadMore}
            className="bg-[#eca051] text-[#120620] font-bold px-6 py-3 rounded-lg text-lg transition-all duration-300 hover:bg-[#d68f48] hover:scale-105"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default BusinessSection;
