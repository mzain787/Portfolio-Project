import AosAnimation from "@/utils/AosAnimation";
import "./PortfolioSection.css";
import React from "react";

const PortfolioProject = ({ pprojectName, ppLink, ppImage }) => {
  return (
    <section className="portfolio-project mb-10">
      <AosAnimation type="flip-up" duration={1000}>
      <div className="portfolio-project-image mb-3 w-full">
        <img src={ppImage.src} className="w-full" />
      </div>
      <div className="portfolio-project-details flex justify-between items-start">
        <div className="naming">
          <h4 className="text-sm font-medium tracking-wide text-purple-300 mb-1">
            PROJECT NAME
          </h4>
          <h3 className="portfolio-projectname text-lg font-medium text-purple-200">
            {pprojectName}
          </h3>
        </div>
        <a href={ppLink} className="text-sm text-orange-200 pb-1 border-b border-orange-200">ShowCase</a>
      </div>
      </AosAnimation>
    </section>
  );
};

export default PortfolioProject;
