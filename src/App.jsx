import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact"; // Assuming you have this component

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures scrolling to top on route change */}
      <div className="bg-gray-900 min-h-screen text-white">
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={
            <>
              <Hero />
              <Companies />
              <About />
              <Services />
            </>
          } />
          
          {/* About Us Page Route */}
          <Route path="/about" element={<AboutUs />} />
          
          {/* Contact Page Route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
