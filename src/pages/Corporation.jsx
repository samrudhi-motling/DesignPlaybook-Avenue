import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaBox, FaLeaf, FaCar, FaBuilding, FaIndustry, FaGlobe } from "react-icons/fa";

const AvenueCorporation = () => {
  const heroSlides = [
    { image: "/images/14.jpg", subtitle: "Building the Future, Today." },
    { image: "/images/15.jpg", subtitle: "Innovating for a Better Tomorrow." },
    { image: "/images/18.jpg", subtitle: "Your Partner in Progress." },
    { image: "/images/20.jpg", subtitle: "Sustainable Solutions for a Brighter Future." },
    { image: "/images/25.jpg", subtitle: "Empowering Communities Worldwide." },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Services data from the original component
  const services = [
    { title: "Automotive Sensors", description: "Enhancing safety and efficiency in modern vehicles." },
    { title: "Sourcing & Distribution", description: "Official distributors in India for global automotive components." },
    { title: "Sustainable Packaging", description: "Eco-friendly solutions for reducing carbon footprint." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#120620] to-[#664384] text-white">
      {/* Hero Section */}
      <div className="relative h-[700px] overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="w-full h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center"
                  >
                    <h1 className="text-6xl font-bold text-[#e8e8ea] mb-4">Avenue Corporation</h1>
                    <p className="text-2xl text-[#eca051] font-semibold">{slide.subtitle}</p>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* About Us Section */}
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12"
      >
        <div
          className="relative rounded-lg shadow-lg overflow-hidden"
          style={{
            backgroundImage: `url('/images/879.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "400px",
          }}
        >
          <div className="absolute inset-0 bg-[#120620] bg-opacity-60"></div>
          <div className="relative z-10 bg-[#664384] bg-opacity-80 rounded-lg m-8 p-8">
            <h2 className="text-4xl font-bold text-[#eca051] mb-6 text-center">About Us</h2>
            <p className="text-[#e8e8ea] text-lg mb-4 text-justify">
              At <span className="font-semibold">Avenue Corporation</span>, we are committed to providing high-quality, sustainable packaging solutions. Our goal is to offer integrated services that deliver value while reducing our carbon footprint. We focus on collaboration over competition, aiming to create long-term value for all stakeholders.
            </p>
            <p className="text-[#e8e8ea] text-lg mb-4 text-justify">
              As an industrial packaging manufacturer, we specialize in customized solutions for global markets. Our expertise in the automotive supply chain allows us to offer strategic packaging technologies that meet the needs of today’s dynamic industry.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Core Services Section */}
      <motion.section
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gradient-to-b from-[#120620] to-[#a176d6] py-12 px-8 md:px-16"
      >
        <div className="max-w-screen-lg mx-auto">
          {/* Title with Animation */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[#eca051] text-3xl md:text-4xl font-bold text-center mb-8"
          >
            Our Services
          </motion.h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-[#120620] p-6 rounded-xl shadow-xl overflow-hidden 
                transition-all duration-300 ease-in-out h-[200px] hover:h-[250px] hover:shadow-2xl hover:shadow-purple-500/50"
              >
                {/* Icon and Title (Moves Up on Hover) */}
                <motion.div
                  className="flex flex-col justify-center items-center text-center h-full transition-transform duration-300 group-hover:-translate-y-6"
                >
                  <div className="text-5xl mb-2">
                    {/* You can add icons here if needed */}
                    {index === 0 && <FaCar className="text-red-400 text-5xl" />}
                    {index === 1 && <FaGlobe className="text-teal-400 text-5xl" />}
                    {index === 2 && <FaLeaf className="text-green-400 text-5xl" />}
                  </div>
                  <h3 className="text-white text-xl md:text-2xl font-semibold">
                    {service.title}
                  </h3>
                </motion.div>

                {/* Description (Appears on Hover) */}
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full px-4"
                >
                  <p className="text-gray-300 text-sm md:text-base">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Sustainability & Innovation Section */}
      <motion.section
  variants={fadeInVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="container mx-auto px-6 py-16"
>
  {/* Title */}
  <h2 className="text-3xl font-bold text-[#eca051] mb-8 text-center">
    Sustainability & Innovation
  </h2>

  {/* Content with Image and Data */}
  <div className="flex flex-col md:flex-row items-center gap-6">
    {/* Image Section with Zoom Animation */}
    <motion.div
      className="w-full md:w-[40%]"
      whileHover={{ scale: 1.05 }} // Zoom effect on hover
      whileTap={{ scale: 0.95 }} // Slight shrink on tap (for mobile)
      transition={{ type: "spring", stiffness: 300 }} // Smooth spring animation
    >
      <img
        src="/images/sus-corp.webp" // Replace with your image path
        alt="Sustainability"
        className="rounded-xl shadow-lg w-full h-auto max-h-[300px] object-fill" // Adjusted width and object-fit
      />
    </motion.div>

    {/* Data Section */}
    <motion.div
      className="w-full md:w-[55%] text-justify"
      // whileHover={{ scale: 1.02 }} 
      transition={{ type: "spring", stiffness: 300 }}
    >
      <p className="text-[#e8e8ea] text-lg mb-4">
        At Avenue Corporation, sustainability is at the core of everything we do. We are committed to reducing our environmental footprint and driving innovation in every aspect of our business.
      </p>
      <p className="text-[#e8e8ea] text-lg mb-4">
        Our <strong>EcoGauge</strong> initiative focuses on cost-effective, carbon-conscious packaging solutions that align with global sustainability goals.
      </p>
      <p className="text-[#e8e8ea] text-lg">
        Through continuous innovation, we aim to create a positive impact on the environment and empower communities worldwide.
      </p>
    </motion.div>
  </div>
</motion.section>

      {/* Visit Original Site Button */}
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center pb-16"
      >
        <a
          href="https://avenuecorporation.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#eca051] text-[#120620] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#e8e8ea] hover:text-[#664384] transition-all duration-300"
        >
          Visit Official Website
        </a>
      </motion.div>
    </div>
  );
};

export default AvenueCorporation;