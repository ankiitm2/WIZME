import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
// import RecentWorks from "./components/RecentWorks";
// import Process from "./components/Process";
import Services from "./components/Services";
// import Reviews from "./components/Reviews";
// import Stats from "./components/Stats";
// import FAQ from "./components/FAQ";
// import Footer from "./components/Footer";
import CursorFollower from "./components/CursorFollower";
import Navbar from "./components/Navbar";

const PortfolioLanding = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      {/* <CursorFollower /> */}
      {/* <Navbar /> */}
      <Hero
        isVisible={isVisible}
        className={`transition-zoom transform ${
          isVisible["hero"] ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      />
      <About
        isVisible={isVisible}
        className={`transition-zoom transform ${
          isVisible["about"] ? "scale-100 opacity-100" : "scale-75 opacity-25"
        }`}
      />

      {/* <RecentWorks isVisible={isVisible} /> */}
      {/* <Process isVisible={isVisible} /> */}
      <Services
        isVisible={isVisible}
        className={`transition-zoom transform ${
          isVisible["services"] ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      />
      {/* <Reviews isVisible={isVisible} /> */}
      {/* <Stats isVisible={isVisible} /> */}
      {/* <FAQ isVisible={isVisible} /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default PortfolioLanding;
