import React from "react";
import Typewriter from "./Typewriter";

const Hero = () => {
  // Array of company logos (Replace with actual file paths)
  const companyLogos = [
    "https://avenuepacks.com/_next/image?url=%2Fpixels%2Flogo%2Fblue-bg.png&w=1920&q=75",
    "/images/avenue-buildcon.png",
    "https://cdn.prod.website-files.com/67933d6f2b27add338fbd0e6/67933d6f2b27add338fbd27d_agrovan%2520(1)-p-500.png",
    "/images/agrovan-farm.png",
    "/images/avenue-corporation.png",
    "/images/sarvesh-petroleum.png",
    "/images/la-ruche.png",
    "/images/avenue-foundation.png",
  ];

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-[#12061F] to-[#1A082A]">
      <div className="container mx-auto px-6 grid grid-cols-1 items-center gap-8 text-center">
        {/* Left Content (Centered Text) */}
        <div className="animate-slide-in-left">
          <h2 className="text-[#F8AB55] text-lg tracking-wide mb-2">
            Transforming Industries, Empowering Stakeholders
          </h2>

          {/* Typewriter Animation */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#CDCED0]">
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
      </div>

      {/* Company Logos Section */}
      {/* <div className="absolute bottom-6 left-0 right-0 px-6 md:px-10 flex justify-center">
        <div className="flex flex-wrap gap-6 justify-center max-w-6xl mx-auto">
          {companyLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="h-10 md:h-12 max-w-[100px] md:max-w-[120px] object-contain transition-transform duration-300 hover:scale-105 hover:opacity-80"
            />
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
