import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
      {/* Animated Background Image (Fixed) */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/images/0.jpg')",
          backgroundAttachment: "fixed", // Keeps background static
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dark Overlay with Stars */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-[url('/images/stars.png')] opacity-30 animate-fadeIn"></div>
      </div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 px-6 md:px-12 bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-lg border border-white/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ transform: `translateY(${offsetY * 0.3}px)` }} // Parallax Effect
      >
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Transforming Industries, <br />
          <span className="text-[#FFBF00]">
            <Typewriter
              options={{
                strings: ["Empowering Stakeholders", "Shaping the Future", "Innovating Every Day"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl opacity-90">
          Avenue Group creates value across multiple sectors while enhancing the lives of farmers and consumers alike.
        </p>
        {/* <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-white text-[#5825A6] font-semibold rounded-md shadow-md hover:bg-gray-200 transition"
        >
          Learn More
        </motion.button> */}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDownIcon className="h-10 w-10 text-white opacity-80 hover:opacity-100 transition duration-300" />
      </motion.div>
      
    </section> 
  );
};

export default Hero;