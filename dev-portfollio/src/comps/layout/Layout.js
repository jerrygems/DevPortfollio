import React from "react";
import NavBar from "../NavBar";
import Home from "../../pages/home/Home";
// import myImage from "../../assets/myImage.jpg"; // Import your image here
import "./layouts.css";

import Button from "@mui/material/Button";

const Layout = () => {
  return (
    <>
      <div className="nav">
        <NavBar />
      </div>
      <div className="title">
        <pre>
          <h1>hi, i'm anupam and i'm good for nothing </h1>
          <Button variant="contained">hire me</Button>
        </pre>
        <div className="title_img">
          {/* <img src={myImage} alt="My Image" /> */}
        </div>
      </div>
      <Home />
    </>
  );
};

export default Layout;
