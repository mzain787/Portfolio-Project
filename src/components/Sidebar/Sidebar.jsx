// Sidebar.js
"use client";
import React, { useState, useRef, useEffect } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faArrowLeft, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  const handleScrollDown = () => {
    window.scrollBy(0, 300);
  };

  useEffect(() => {
    // Function to close the sidebar when clicking outside
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarVisible(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Sidebar */}
      <div
        className="sidebar text-white w-20 flex flex-col h-screen fixed z-50"
        style={{ borderRight: "1px solid #494F55" }}
      >
        <div className="sidebar-to-show">
          {/* Hamburger Icon */}
          <button
            className="sidebar-main-icon p-5 focus:outline-none mb-60"
            onClick={toggleSidebar}
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <div
            onClick={handleScrollDown}
            className="transform -rotate-90 p-2 cursor-pointer flex items-center"
          >
            <span className="text-orange-300 text-xl mr-2 flex items-center justify-center">
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            <button
              className="whitespace-nowrap text-md font-semibold tracking-wide"
              style={{ color: "#534b7a" }}
            >
              Scroll Down
            </button>
          </div>
        </div>
        <div
          ref={sidebarRef}
          className={`sidebar-content flex flex-col items-center absolute h-screen p-8 ${
            sidebarVisible ? "sidebar-open" : "sidebar-close"
          }`}
        >
          <div
            className="cross-icon absolute right-2 top-2 cursor-pointer"
            onClick={closeSidebar}
          >
            <FontAwesomeIcon
              className="text-orange-300 text-2xl"
              icon={faTimes}
            />
          </div>
          <div className="sidebar-content-data">
            <div className="brand-details mb-16">
              <h1 className="h-12 w-32 mb-16 text-orange-300 font-bold text-[2.5rem]">
                MZ
              </h1>
              <h3 className="text-purple-200 text-2xl mb-7 font-medium">
                Contact Me Today
              </h3>
              <h4 className="text-orange-300 text-xl font-semibold">
                zain26062001@gmail.com
              </h4>
            </div>
            <div className="meet-me-section gap-1 mb-16">
              <h2 className="text-purple-200 tracking-wider text-sm font-bold mb-5">
                MEET ME
              </h2>
              <h3 className="text-purple-200 tracking-widest text-base font-medium mb-5">
                {" "}
                +923425073787
              </h3>
            </div>
            <div className="social-media-section">
              <h2 className="text-base font-semibold tracking-widest text-purple-200 mb-6">
                FOLLOW ME
              </h2>
              <div className="flex items-center">
                <a
                  href="https://linkedin.com/in/mzain787"
                  className="text-white mx-2"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-xl text-purple-200 hover:text-orange-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
