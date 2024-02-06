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
        <div className="upwork-fiverr flex items-center gap-3 p-12 shake-vertical">
          <p className="text-pruple-200 tracking-wide text-base font-medium">
            Top Rated At
          </p>
          <img
            src={fiverr.src}
            alt="fiverr-logo"
            className="w-10 h-10 shake-vertical"
          />
          <a
            href=
            "https://www.upwork.com/freelancers/~014b6ad79986046218"
            target="_blank"
            rel="noopener noreferrer"
          >
             <img
            src={upwork.src}
            alt="upwork-logo"
            className="w-10 h-10 shake-vertical"
          />
          </a>   
        </div>
        <div className="hero-items">
          <div>
            <div className="hero-content">
              <p className="text-sm font-semibold text-purple-200 mb-10">
                👋 DESIGNING THINGS FOR HUMAN
              </p>
              <h1 className="hero-heading text-purple-200 mb-12 bounce-top">
                Talented Developer{" "}
                <span className="text-orange-300">That Help You</span>
              </h1>
              <h2 className="mb-12 text-base font-normal tracking-wide text-purple-200">
              My expertise lies in frontend and full stack development, where I bring projects to life with creativity and precision. Additionally, I have a strong command of Adobe Photoshop and web designing principles, allowing me to create visually stunning and user-friendly interfaces that leave a lasting impression.
              </h2>
            </div>
            <hr className="hr-line" />
            <div className="brand-achievements flex gap-10 flex-wrap items-center">
              {/* <div className="achievement">
                <p className="text-4xl font-bold text-purple-200 mb-3 tracking-wider numbers">
                  45
                </p>
                <p className="text-purple-400 text-base font-medium">Awards</p>
              </div> */}
              <div className="achievement">
                <p className="text-4xl font-bold text-purple-200 mb-3 tracking-wider numbers">
                  200+
                </p>
                <p className="text-purple-400 text-base font-medium">
                  Projects Finished
                </p>
              </div>
              <div className="achievement">
                <p className="text-4xl font-bold text-purple-200 mb-3 tracking-wider numbers">
                  8
                </p>
                <p className="text-purple-400 text-base font-medium">
                  Years Experience
                </p>
              </div>
              <div className="achievement">
                <p className="text-4xl font-bold text-purple-200 mb-3 tracking-wider numbers">
                  134
                </p>
                <p className="text-purple-400 text-base font-medium">
                  Upwork Jobs
                </p>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <AOSAnimation type="fade-right" easing="linear" duration={300}>
              <Image className="w-full" src={man} alt="man-imge" />
            </AOSAnimation>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
