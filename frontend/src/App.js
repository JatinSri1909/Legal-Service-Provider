import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Laws from "./components/Laws";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [currentSection, setCurrentSection] = useState("home-section");

  const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
      setCurrentSection(targetId);
    }
  };

  return (
    <div className="App">
      <Navbar currentSection={currentSection} smoothScrollTo={smoothScrollTo} />
      <Home smoothScrollTo={smoothScrollTo} />
      <About />
      <Services smoothScrollTo={smoothScrollTo} /> 
      <Laws />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
