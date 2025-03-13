import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Agrovan from "./pages/Agrovan";
import Corporation from "./pages/Corporation";
import Overview from "./pages/Overview";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
import Pack from "./pages/Pack";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-gray-900 min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Companies />
                <About />
                <Services />
                {/* <Overview/> */}
              </>
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/agrovan" element={<Agrovan />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/corp" element={<Corporation />} />
          <Route path="/pack" element={<Pack />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
