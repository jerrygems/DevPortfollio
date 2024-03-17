import React from "react";
import "./herosection.css";
import "./layout/darkmode.css";

const HeroSection = () => {
  return (
    <div
      id="about"
      className="hero-section flex flex-col h-screen w-screen mt-[80px]  overflow-hidden"
    >
      <div className="hero-content md:w-full md:w-1/2 ml-[40px]">
        <div className="hero-text">
          <h1 className="font-bold">I'm Anupam Kumar </h1>
          <p>
            A{" "}
            <span className="text-purple font-bold px-2 py-1 rounded">
              Data Scientist
            </span>{" "}
            and a{" "}
            <span className="text-purple font-bold px-2 py-1 rounded">
              Machine Learning
            </span>{" "}
            enthusiast, beside this i'm a{" "}
            <span className="text-purple font-bold px-2 py-1 rounded">
              UI/UX
            </span>{" "}
            desinger.
          </p>
          <button className="hire-btn text-purple">Hire Me</button>
          <button className="previous-works-btn">Previous Works</button>
        </div>
        <div className="bg-hero-image bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full ">
          <div className="hero-image m-4">
            <img
              className="hero-image rounded-full w-96 h-96"
              src="../../logo.png"
              alt="Hero"
            />
          </div>
        </div>
      </div>

      <div className="stats md:w-1/2 md:px-30 py-5 overflow-hidden mt-[-100px] ml-[40px]">
        <div className="stat flex flex-col items-center">
          <span className="stat-value">6+</span>
          <span className="stat-label">Projects Done</span>
        </div>
        <div className="stat flex flex-col items-center">
          <span className="stat-value">99%</span>
          <span className="stat-label">Happy Client</span>
        </div>
        <div className="stat flex flex-col items-center">
          <span className="stat-value">2+</span>
          <span className="stat-label">Internships</span>
        </div>
      </div>
      <hr className="border-t-2 border-gray-300 my-8" />
    </div>
  );
};

export default HeroSection;
