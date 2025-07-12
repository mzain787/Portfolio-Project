"use client";
import React, { useState, useEffect } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    // Event listener for scrolling
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // You can adjust the value (e.g., 200) to determine when to show the button
      setShowTopButton(scrollY > 200);
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Smooth scroll to the top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="wrapper">
        <div className="footer-bottom flex justify-between items-center">
          <div className="footer-bottom-left flex gap-4 items-center">
            <p className="copyright text-purple-400">© 2025 mzain787</p>
          </div>
          <div className="footer-bottom-right">
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
      <button
        className={`top-button p-4 fixed bg-gray-800 text-purple-400 tracking-wide font-bold right-3 bottom-4 ${
          showTopButton ? "visible" : "invisible"
        }`}
        onClick={scrollToTop}
      >
        Top
      </button>
    </footer>
  );
};

export default Footer;
