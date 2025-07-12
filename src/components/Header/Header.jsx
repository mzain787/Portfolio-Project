// Header.js
"use client";
import "./Header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faCaretDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        // Click outside the menu, close it
        setMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleOutsideClick);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  // Array of links with href and name properties
  const links = [{ href: "#journey", name: "Journey" }];
  const pathname = usePathname();

  return (
    <>
      <header
        className={`header flex justify-between items-center fixed w-full z-30 ${
          scrolled ? "back-color" : ""
        }`}
      >
        {/* Left side with logo and options */}
        <div className="flex items-center">
          <a
            href="/"
            className="h-12 w-32 mr-8 pl-4 cursor-pointer text-orange-300 font-bold text-[2.5rem]"
          >
            MZ
          </a>
          <nav
            ref={menuRef}
            className={`flex items-center nav-items scale-in-ver-top scale-out-top ${
              menuOpen ? "open" : "close"
            }`}
          >
            <div className="nav-options">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`ispadding font-bold tracking-widest text-sm mr-5 hover:text-orange-300 ${
                      isActive ? "text-orange-300" : "text-purple-200"
                    }`}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Right side with social media icons */}
        <div className="flex items-center social-media">
          <a
            href="https://www.linkedin.com/in/mzain787"
            className="text-white mx-2"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-xl text-purple-200 hover:text-orange-300"
            />
          </a>
        </div>

        {/* hamburger */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          {menuOpen ? (
            <FontAwesomeIcon
              className="text-purple-200 text-2xl"
              icon={faTimes}
            />
          ) : (
            <FontAwesomeIcon
              className="text-purple-200 text-2xl"
              icon={faBars}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
