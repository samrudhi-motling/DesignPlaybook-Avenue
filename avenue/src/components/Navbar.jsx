import React from "react";

export default function Navbar() {
  return (
    <nav className="px-8 py-4 flex justify-between items-center max-w-7xl mx-auto">
      <a href="#" className="flex items-center space-x-2">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path>
        </svg>
        <span className="font-bold text-xl">BrandLyft</span>
      </a>

      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="nav-link">
          Brands
        </a>
        <a href="#" className="nav-link">
          Creators
        </a>
        <a href="#" className="nav-link">
          Pricing
        </a>
        <a href="#" className="nav-link">
          Use Cases
        </a>
        <a href="#" className="nav-link">
          Contact
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
          Log in
        </button>
        <button className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all transform hover:scale-105">
          Sign up
        </button>
      </div>
    </nav>
  );
}
