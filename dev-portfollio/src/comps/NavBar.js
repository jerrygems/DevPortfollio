// import React from "react";
import React, { useState, useEffect } from "react";
// import { useState, useEffect } from "react";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode")
      ? localStorage.getItem("darkMode")
      : "light"
  );
  const toggle = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
    } else {
      setDarkMode("dark");
    }
  };
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    const localtheme = localStorage.getItem("darkMode");
    document.querySelector("html").setAttribute("data-theme", localtheme);
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur-lg bg-white/30 py-4 px-8">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">Anupam</div>
        <ul className="flex space-x-4 text-gray-800">
          <li className="hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer">
            About
          </li>
          <li className="hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer">
            Service
          </li>
          <li className="hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer">
            Skills
          </li>
          <li className="hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer">
            Projects
          </li>
          <li className="hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer">
            Contact
          </li>
        </ul>
        <div className="flex space-x-4">
          <a
            href="https://github.com/theanupamkumar1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-gray-800 hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer"></i>
          </a>
          <a
            href="https://twitter.com/the_anupamkumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter text-gray-800 hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer"></i>
          </a>
          <a
            href="https://instagram.com/the_anupam_kumar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-gray-800 hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer"></i>
          </a>
          <a
            href="https://linkedin.com/in/theanupamkumar1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-gray-800 hover:text-purple-600 text-gray-800 hover:text-purple-600 transition duration-300 cursor-pointer"></i>
          </a>
        </div>

        <button
          className="ml-4 bg-gray-800 text-white rounded px-2 py-1"
          onClick={toggle}
        >
          Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
