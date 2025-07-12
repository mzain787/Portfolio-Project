import React from "react";
import "../Home/Home.css";
import manPic from "../../assets/images/journey-man.png";
import { MyExperience } from "../Childcomps/Myskill";
import HomeComponentsHeading from "../Childcomps/HomeComponentsHeading";
const Journey = () => {
  const experiences = [
    {
      year: "2018-2022",
      jobTitle: "Bachelor's in Computer Science",
      jobDescription: "University of Gujrat",
    },
    {
      year: "2023",
      jobTitle: "Frontend Developer Intern (Digibits Technologies)",
      jobDescription:
        "Join DB Technoligies as an internee learn about responsive designing and make designs using Angular js",
    },
    {
      year: "2024 - Present",
      jobTitle: "Frontend Developer (Aftab IT Solutions)",
      jobDescription:
        "Html, CSS, SASS, JS, TS, React, Next.js, GatsBy, Wordpress CMS",
    },
  ];
  return (
    <section className="my-experience-journey" id="journey">
      <div className="wrapper flex justify-start gap-5 items-end journey-main">
        <div className="journey-image">
          <img src={manPic.src} alt="man-image" className="w-full" />
        </div>
        <div className="journey-content pb-10">
          <HomeComponentsHeading
            smallheading="⏱️ MY JOURNEY & TRACK RECORD"
            heading="Education"
            subheading="& Working Experience"
          />
          <div className="w-full flex flex-col">
            {experiences.map((experience) => (
              <MyExperience
                key={experience.year}
                year={experience.year}
                jobTitle={experience.jobTitle}
                jobDescription={experience.jobDescription}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
