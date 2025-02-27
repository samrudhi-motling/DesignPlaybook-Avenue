import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import About from "./components/About";
import Footer from "./components/Footer";
import Services from "./components/Services";
// import SubsidiariesGrid from "./components/SubsidiariesGrid";


const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <Hero />
      <Companies />
      {/* <SubsidiariesGrid /> */}
      <About />
      <Services />
      <Footer />

      {/* Add other sections here */}
      
    </div>
  );
};

export default App;
