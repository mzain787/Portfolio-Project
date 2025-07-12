"use client";
import React from "react";
import "../Home/Home.css";
import fiverr from "../../assets/images/fi.png";
import upwork from "../../assets/images/up.png";
import man from "../../assets/images/man-image.png";
import AOSAnimation from "@/utils/AosAnimation";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <section className="hero-section  wrapper home-page relative">
        <div className="hero-items">
          <div>
            <div className="hero-content">
              <p className="text-sm font-semibold text-purple-200 mb-10">
                👋 DEVELOPING THINGS FOR HUMAN
              </p>
              <h1 className="hero-heading text-purple-200 mb-12 bounce-top">
                <span className="text-orange-300">Muhammad Zain</span>
              </h1>
              <hr className="hr-line" />
              <h2 className="mb-12 text-base font-normal tracking-wide text-purple-200">
                My expertise lies in frontend development, where I bring
                projects to life with creativity and precision. Additionally, I
                have a strong command on Rest API integrations and on making
                reuseable components.
              </h2>
              <a
                href="https://flowcv.com/resume/6c2hbea8ssqm"
                target="_blank"
                className="bg-orange-300 p-5 leading-[1.25rem] font-normal text-black"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
