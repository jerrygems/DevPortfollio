import React from "react";
import NavBar from "../NavBar";

// import myImage from "../../assets/myImage.jpg"; // Import your image here
import "./layouts.css";

import Button from "@mui/material/Button";
import HeroSection from "../Herosection";
import Services from "../../pages/home/Services";
import Projects from "../../pages/home/Projects";
import Skills from "../../pages/home/Skills";

const Layout = () => {
  return (
    <>
      <div className="nav">
        <NavBar />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Skills />
      </div>
    </>
  );
};

export default Layout;
