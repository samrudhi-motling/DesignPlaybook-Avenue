"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
  "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=800&q=80",
  "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=80",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
];

export default function HeroSection() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="bg-white">
             {/* Navbar */}
      {/* <nav className="px-8 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <a href="#" className="flex items-center space-x-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
          </svg>
          <span className="font-bold text-xl">BrandLyft</span>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="nav-link">Brands</a>
          <a href="#" className="nav-link">Creators</a>
          <a href="#" className="nav-link">Pricing</a>
          <a href="#" className="nav-link">Use Cases</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">Log in</button>
          <button className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all transform hover:scale-105">
            Sign up
          </button>
        </div>
      </nav> */}

      {/* Hero Section */}
      <main className="relative pt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <span className="bg-orange-50 text-orange-700 px-6 py-2 rounded-full text-sm font-medium inline-block">
              Join over 100,000 happy creators
            </span>
          </div>
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-[4rem] leading-tight font-bold mb-8 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Engage Audiences<br />with Stunning Videos
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Boost Your Brand with High-Impact Short Videos from our expert content creators. Our team is ready to propel your business forward
            </motion.p>
          </div>
        </div>

        {/* Tilted Carousel Section */}
        <div className="carousel-wrapper mt-16" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <motion.div
            className="carousel-container"
            animate={{ x: isPaused ? 0 : ["0%", "-100%"] }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          >
            <div className="carousel-track">
              {images.map((src, index) => (
                <div key={index} className="carousel-card">
                  <img src={src} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 mb-20">
          <button className="premium-button text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
