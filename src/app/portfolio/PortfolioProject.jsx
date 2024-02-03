import "./PortfolioSection.css";
import React from "react";

const PortfolioProject = ({ pprojectName, ppLink, ppImage }) => {
  return (
    <section className="portfolio-project">
      <div className="portfolio-project-image">
        <img src={ppImage.src} className="w-full" />
      </div>
      <div className="portfolio-project-details">
        <div className="naming">
          <h4 className="text-sm font-medium tracking-wide text-purple-300">
            PROJECT NAME
          </h4>
          <h3 className="portfolio-projectname text-lg font-medium text-purple-200">
            {pprojectName}
          </h3>
        </div>
        <a href={ppLink}>ShowCase</a>
      </div>
    </section>
  );
};

export default PortfolioProject;
