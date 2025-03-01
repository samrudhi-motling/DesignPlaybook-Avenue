import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./pages/Contact"; // Import Contact page

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Companies />
              <About />
              <Services />
            </>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
