import React from "react";
import { motion } from "framer-motion";
import HistoryTimeline from "../components/HistoryTimeline";
import Typewriter from "../components/Typewriter";
import Mission from "../components/Mission";
import Vision from "../components/Vision";
import CoreValues from "../components/CoreValues";
import OurBusiness from "../components/OurBusiness";

// const businessDivisions = [
//   {
//     name: "Avenue Packs",
//     desc: "Innovative and sustainable packaging solutions with zero carbon footprint. Features EcoGauge for carbon emission tracking.",
//     img: "/images/24.jpg"
//   },
//   {
//     name: "Agrovan India",
//     desc: "Empowering 6,000+ farmers with high-quality produce, state-of-the-art processing, and global exports to 36+ countries.",
//     img: "/images/35.jpg"
//   },
//   {
//     name: "Avenue Corporation",
//     desc: "A trusted trading partner in automotive components, ensuring top-notch quality and reliability for the industry.",
//     img: "/images/14.jpg"
//   },
//   {
//     name: "Avenue Buildcon",
//     desc: "A leading real estate developer in Pune, delivering high-quality, sustainable, and innovative infrastructure projects.",
//     img: "https://www.avenuegroup.co/Projects/14.%20Avenue%20Promenade/Photos/1.jpg"
//   },
//   {
//     name: "Agrovan Farm Producing Co.",
//     desc: "Supporting farmers with direct collaboration, offering resources to boost productivity and drive sustainable growth.",
//     img: "/images/36.jpg"
//   },
//   {
//     name: "Sarvesh Petro Hub",
//     desc: "A leading supplier of fuel and oil, ensuring reliable energy solutions for industries with a commitment to quality.",
//     img: "/images/petroleum.webp"
//   },
//   {
//     name: "La Ruche Food Stuffs",
//     desc: "Dubai-based frozen food distribution chain, delivering high-quality products efficiently across the region.",
//     img: "/images/laruche.webp"
//   },
//   {
//     name: "Avenue Foundation",
//     desc: "A social initiative dedicated to providing education and resources for underprivileged children, fostering equal opportunities.",
//     img: "/images/41.jpg"
//   }
// ];

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
        <OurBusiness/>
        <Vision />
        <Mission />
        <CoreValues />

      </div>
    </>
  );
};

export default AboutUs;
