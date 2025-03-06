import React from "react";
import Typewriter from "./Typewriter";

const Hero = () => {
  return (
    <section className="absolute p-12 w-full h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Animation */}
      <div className="absolute inset-0 bg-[url('/images/878.jpg')] bg-cover bg-center animate-bg-zoom"></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h2 className="text-[#F8AB55] text-lg tracking-wide mb-2 animate-fade-in">
          Transforming Industries, Empowering Stakeholders
        </h2>

        {/* Typewriter Animation */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#CDCED0] animate-slide-in-left">
          <Typewriter
            texts={[
              "Innovating for a Sustainable Future",
              "Empowering Communities with Innovation",
              "Shaping a Greener Tomorrow",
            ]}
            speed={80}
            delay={1500}
          />
        </h1>

        {/* Paragraph */}
        <p className="text-[#CDCED0] text-lg leading-relaxed mt-4 w-[90%] md:w-[80%] mx-auto text-center animate-fade-in transition-opacity duration-700 hover:opacity-80">
          At Avenue Group, we revolutionize industries through innovation,
          sustainability, and community-driven business practices. From
          empowering over 6,000 farmers to serving customers across 36+
          countries, we are building a future of trust, progress, and
          excellence.
        </p>

        {/* Button */}
        <button className="mt-6 px-6 py-3 bg-[#F8AB55] text-[#12061F] font-semibold rounded-lg shadow-md hover:scale-105 transition-transform duration-300 hover:bg-[#e89a4c]">
          Explore Our Vision
        </button>
      </div>
    </section>
  );
};

export default Hero;
