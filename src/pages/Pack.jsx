import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';

const Pack = () => {
  const images = [
    '/images/330.jpg',
    '/images/331.jpg',
    '/images/332.jpg',
    '/images/333.jpg',
    '/images/22.jpg',
  ];

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.max(0.8, 1 - scrollY / 1000);
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#120620] to-[#664384] text-white">
      {/* Hero Section */}
      <div
        className="h-screen flex items-center justify-center text-center relative overflow-hidden"
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Carousel */}
        <div className="absolute inset-0 z-0">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Pack ${index + 1}`}
                  className="w-full h-screen object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 px-4">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 text-[#eca051] animate-fade-in">
            Avenue Packs
          </h1>
          <p className="text-xl sm:text-2xl md:text-4xl text-[#e8e8ea] mb-8 animate-fade-in">
            Best-in-class Industrial Packaging
          </p>
        </div>
      </div>

      {/* Introducing Eco-Guage Section */}
      <div className="bg-gradient-to-b from-[#120620] to-[#664384] py-12 px-4 sm:px-10">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#eca051] text-center mb-8">
          EcoGauge Carbon Insights
        </h2>

        {/* Cards Container */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          {[
            { title: "Raw Material", desc: "Sourcing eco-friendly materials while analyzing their carbon footprint for a sustainable future.", img: "/images/010.jpg" },
            { title: "Recycling", desc: "Reusing and repurposing materials to reduce waste and contribute to a circular economy.", img: "/images/020.jpg" },
            { title: "Consumption", desc: "Monitoring and optimizing resource usage to improve efficiency and minimize waste.", img: "/images/030.jpg" },
            { title: "Operations", desc: "Streamlining business processes to significantly reduce carbon emissions and energy usage.", img: "/images/040.jpg" },
            { title: "Logistics", desc: "Enhancing transportation and delivery strategies to lower environmental impact and carbon output.", img: "/images/050.jpg" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative w-full sm:w-72 h-96 bg-[#664384] rounded-lg shadow-lg overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Image */}
              <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-30" />

              {/* Hover Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#664384] bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-[#eca051] mb-2">{item.title}</h3>
                <p className="text-sm sm:text-lg text-[#e8e8ea] font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Vision Section */}
      <div
        className="relative py-20 sm:py-32 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/images/bgp.jpg')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#120620cc] to-[#664384cc]"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto bg-[#120620] bg-opacity-80 p-6 sm:p-8 rounded-lg border-2 border-[#eca051] shadow-2xl animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#eca051] mb-6 sm:mb-8 text-center">
              Our Vision
            </h2>
            <p className="text-base sm:text-lg text-[#e8e8ea] mb-6 sm:mb-8">
              A greener future where <strong>packaging leaves zero traces</strong>, just peace of mind for generations to come.
              Avenue Packs has developed Ecogauge, which calculates carbon emission for the total design & development process in the initial stages of development to provide sustainable design solutions with less to zero carbon footprint.
            </p>
          </div>
        </div>
      </div>

      {/* Low Waste, Sustainable, Cost-Effective, Customizable Section */}
      <div className="bg-[#664384] py-12 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#eca051] mb-8 animate-fade-in">
            Our Commitment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-6xl mx-auto">
            {/* Low Waste */}
            <div className="bg-[#120620] p-6 sm:p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 sm:h-12 w-10 sm:w-12 mx-auto text-[#eca051] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <p className="text-base sm:text-lg font-semibold text-[#e8e8ea]">Low Waste</p>
            </div>
            {/* Sustainable */}
            <div className="bg-[#120620] p-6 sm:p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 sm:h-12 w-10 sm:w-12 mx-auto text-[#eca051] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p className="text-base sm:text-lg font-semibold text-[#e8e8ea]">Sustainable</p>
            </div>
            {/* Cost-Effective */}
            <div className="bg-[#120620] p-6 sm:p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 sm:h-12 w-10 sm:w-12 mx-auto text-[#eca051] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-base sm:text-lg font-semibold text-[#e8e8ea]">Cost-Effective</p>
            </div>
            {/* Customizable */}
            <div className="bg-[#120620] p-6 sm:p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 sm:h-12 w-10 sm:w-12 mx-auto text-[#eca051] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-base sm:text-lg font-semibold text-[#e8e8ea]">Customizable</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="relative py-20 sm:py-28 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/001.jpg')" }}>
        {/* Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#664384]/90 to-[#120620]/90"></div>

        {/* Parallax Scrolling Effect */}
        <div
          className="absolute inset-0 bg-cover bg-center transform translate-y-0"
          style={{
            animation: 'parallax 10s infinite ease-in-out',
          }}
        ></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <h2
              className="text-3xl sm:text-5xl font-bold text-[#eca051] mb-6 sm:mb-8"
              style={{
                animation: 'fadeIn 1s ease-in-out',
              }}
            >
              Our Mission
            </h2>
            {/* Mission Text */}
            <p
              className="text-base sm:text-xl text-[#e8e8ea] mb-8 sm:mb-12"
              style={{
                animation: 'fadeIn 1.5s ease-in-out',
              }}
            >
              At Avenue Packs, we fuse innovation and EcoGauge insights to craft cost-effective, carbon-conscious packaging. We’re here to help you reduce your footprint, meet your sustainability goals, and make the planet proud, one box at a time.
            </p>
            {/* CTA Button */}
            <a
              href="https://www.avenuepacks.com"
              className="inline-block bg-[#eca051] text-[#120620] font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-[#d18a3f] transition duration-300"
              style={{
                animation: 'fadeIn 2s ease-in-out',
              }}
            >
              Visit Our Official Site
            </a>
          </div>
        </div>
      </div>

      {/* Inline CSS for Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-in-out;
          }
          .animate-bounce {
            animation: bounce 1s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Pack;