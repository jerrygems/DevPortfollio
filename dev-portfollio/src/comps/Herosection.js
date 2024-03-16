import React from "react";
import "./herosection.css";

const HeroSection = () => {
  return (
    <div className="hero-section w-screen h-screen ">
      <div className="social-icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin"></i>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1>hi, i'm the anupam kumar</h1>
          <p>
            i'm good for nothing i'm even broke. you can heal me by clicking on
            "hire me"
          </p>
          <button className="hire-btn">Hire Me</button>
          <button className="previous-works-btn">Previous Works</button>
        </div>
        <div className="bg-hero-image bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-1/2 rounded-full ">
          <div className="hero-image m-4">
            <img
              className="hero-image rounded-full w-96 h-96"
              src="../../logo.png"
              alt="Hero"
            />
          </div>
        </div>

        <div className="stats ">
          <div className="stat flex flex-col items-center">
            <span className="stat-value">650+</span>
            <span className="stat-label">Projects Done</span>
          </div>
          <div className="stat flex flex-col items-center">
            <span className="stat-value">99%</span>
            <span className="stat-label">Happy Client</span>
          </div>
          <div className="stat flex flex-col items-center">
            <span className="stat-value">240+</span>
            <span className="stat-label">Fine Artworks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
