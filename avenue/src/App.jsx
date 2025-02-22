import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import './styles.css';


export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      {/* <Carousel /> */}
      <Footer />
    </div>
  );
}
