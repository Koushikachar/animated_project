import { useEffect } from "react";
// import { Routes, Route } from "react-router-dom";

import locomotive from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";

import Showcase from "./components/showcase";
import OurWork from "./components/OurWork";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  useEffect(() => {
    const scroll = new locomotive({
      el: document.querySelector("#main-container"),
      smooth: true,
    });
    return () => scroll.destroy();
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <Showcase />
      <OurWork />
      <Projects />
      <Services />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Work" element={<div>Work</div>} />
        <Route path="/About" element={<div>About</div>} />
        <Route path="/MainService" element={<div>MainService</div>} />
      </Routes> */}
    </>
  );
}

export default App;
