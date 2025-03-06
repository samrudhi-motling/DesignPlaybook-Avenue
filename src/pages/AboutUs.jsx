import React from "react";
import { motion } from "framer-motion";
import HistoryTimeline from "../components/HistoryTimeline";
// import New_Hero from "../components/New_Hero";
import Typewriter from "../components/Typewriter";
// import About from "../components/About";
import Mission from "../components/Mission";
import Vision from "../components/Vision";
import CoreValues from "../components/CoreValues";

// const missionItems = [
//   { icon: "fas fa-hand-holding-heart", text: "Empowering farmers & communities with sustainable solutions.", color: "text-[#eca051]" },
//   { icon: "fas fa-industry", text: "Revolutionizing industries through advanced technology.", color: "text-[#eca051]" },
//   { icon: "fas fa-globe", text: "Promoting environmental sustainability in all operations.", color: "text-[#eca051]" },
//   { icon: "fas fa-users", text: "Fostering strong partnerships worldwide.", color: "text-[#eca051]" }
// ];

// const visionItems = [
//   { icon: "fas fa-chart-line", text: "Becoming a global leader in industrial transformation.", color: "text-[#120620]" },
//   { icon: "fas fa-rocket", text: "Leveraging cutting-edge technology for sustainable growth.", color: "text-[#120620]" },
//   { icon: "fas fa-recycle", text: "Encouraging eco-friendly initiatives across all sectors.", color: "text-[#120620]" },
//   { icon: "fas fa-handshake", text: "Expanding long-term collaborations for mutual success.", color: "text-[#120620]" }
// ];

const businessDivisions = [
  {
    name: "Avenue Packs",
    desc: "Sustainable packaging solutions with zero carbon footprint.",
    img: "/images/24.jpg"
  },
  {
    name: "Agrovan India",
    desc: "Supporting 6,000+ farmers & exporting globally.",
    img: "/images/35.jpg"
  },
  {
    name: "Avenue Corporation",
    desc: "Your Automotive Components Trading Partner",
    img: "/images/14.jpg"
  },
  {
    name: "Avenue Buildcon",
    desc: "Prominent land and building developer",
    img: "https://www.avenuegroup.co/Projects/14.%20Avenue%20Promenade/Photos/1.jpg"
  }
];

// const MotionGridItem = ({ icon, text, color, textColor }) => (
//   <motion.div
//     className="flex flex-col items-center text-center p-4 rounded-lg transition duration-300"
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.6 }}
//   >
//     <motion.i className={`${icon} ${color} text-4xl mb-2 hover:scale-125 transition-transform`} whileHover={{ scale: 1.2 }}></motion.i>
//     <p className={`${textColor} text-sm`}>{text}</p>
//   </motion.div>
// );

const AboutUs = () => {
  return (
    <>
      {/* <New_Hero /> */}
      {/* <New_Hero /> */}
      {/* Custom Header */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/25.jpg')] bg-cover bg-center"></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-[#e8e8ea] leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Avenue Group
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl mt-4 text-[#e8e8ea] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* Replace this with Typewriter */}
            <Typewriter
              texts={[
                "Innovating for a Sustainable Future",
                "Empowering Communities with Innovation",
                "Shaping a Greener Tomorrow"
              ]}
              speed={50} // Increased speed (faster typing)
              delay={400} // Delay between text transitions
            />

          </motion.p>
        </div>
      </section>
      <div className="bg-gradient-to-b from-[#120620] to-[#a176d6] text-white">
        {/* Hero Section */}
        {/* <About/> */}
        <section className="relative py-20 flex justify-center items-center text-[#E8E8EA] bg-gradient-to-b from-[#120620] to-[#664384]">
          {/* Background SVG/Shapes */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <svg
              className="absolute top-0 left-0 w-full h-[115vh]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="#6a4c93"
                fillOpacity="0.3"
                d="M0,64L1440,128L1440,320L0,320Z"
              ></path>
            </svg>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 flex flex-col md:flex-row items-center gap-10">
            {/* Text Section */}
            <motion.div
              className="w-full md:w-2/3 text-left space-y-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h3
                className="text-lg md:text-xl font-semibold tracking-wide uppercase text-[#ECA051]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Leading with Innovation
              </motion.h3>

              <motion.h2
                className="text-4xl md:text-5xl font-extrabold leading-tight tracking-wide text-[#E8E8EA] drop-shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                Transforming Industries, Empowering Stakeholders
              </motion.h2>

              <motion.p
                className="text-lg leading-relaxed text-[#d0cfd3] max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Avenue Group is a diversified conglomerate that thrives on
                innovation, sustainability, and community-driven business
                practices. With a global presence in over 36 countries, we empower
                6,000+ farmers and serve 10,000+ customers with cutting-edge
                solutions across various industries.
              </motion.p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="w-full md:w-1/3 flex justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <img
                src="/images/avenue-hero1.webp"
                alt="Avenue Group"
                className="w-full max-w-[400px] rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </section>


        <HistoryTimeline />

        {/* Business Divisions */}
        <section className="py-16 px-8 bg-[#120620]">
        <motion.h2
        className="text-[#eca051] text-4xl font-bold text-center mb-12 uppercase tracking-wide"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Businesses
      </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {businessDivisions.map((biz, index) => (
              <motion.div key={index} className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img src={biz.img} alt={biz.name} className="w-full h-60 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6">
                  <h3 className="text-xl font-bold text-[#eca051]">{biz.name}</h3>
                  <p className="text-white text-sm mt-2">{biz.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Vision/>

        <Mission/>

        {/* Vision Section */}
        {/* <section className="relative w-full bg-[#e8e8ea] text-[#12061F] px-6 md:px-12 lg:px-24 py-16">
          <h3 className="text-[#120620] text-3xl font-bold text-center mb-6">Our Vision</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {visionItems.map((item, index) => (
              <MotionGridItem key={index} {...item} textColor="text-[#12061F]" />
            ))}
          </div>
        </section> */}

        {/* Mission Section */}
        {/* <section className="relative w-full bg-[#12061F] px-6 md:px-12 lg:px-24 py-20">
          <h3 className="text-[#eca051] text-3xl font-bold text-center mb-6">Our Mission</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {missionItems.map((item, index) => (
              <MotionGridItem key={index} {...item} textColor="text-[#e8e8ea]" />
            ))}
          </div>
        </section> */}

        {/* Core Values Section */}
        {/* <section className="py-16 px-8 bg-[#e8e8ea] text-[#12061F]">
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
              > */}
                {/* Background Image (NO BORDERS, NO SHADOWS) */}
                {/* <img src={item.img} alt={item.title} className="w-full h-100 object-cover block" /> */}

                {/* Text Overlay (PERFECTLY CENTERED) */}
                {/* <div className="absolute inset-0 flex flex-col justify-center items-center px-12 bottom-5">
                  <h3 className="text-[#eca051] text-lg font-semibold">{item.title}</h3>
                  <p className="text-white text-sm mt-2 text-center">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section> */}
<CoreValues/>

      </div>
    </>
  );
};

export default AboutUs;
