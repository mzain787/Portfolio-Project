import React from "react";
import "../Home/Home.css";
import star from "../../assets/images/star.svg";
const Proj = ({projectCategory,projectDescription,projectClient,projectImg,projectRating,reverseOrder}) => {
  return (
    <div className={`our-project flex items-center gap-10 ${reverseOrder ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className="project-info">
        <div className="project-category mb-6">
          <h3 className="text-sm text-gray-600 font-semibold tracking-wide mb-1">
            PROJECT CATEGORY
          </h3>
          <h4
            className="text-purple-200 text-base font-semibold tracking-wide
        "
          >
            {projectCategory}
          </h4>
        </div>
        <div className="projectdescription mb-6">
          <h3 className="text-sm text-gray-600 font-semibold tracking-wide mb-1">
            SHORT DESCRIPTION
          </h3>
          <h4
            className="text-purple-200 text-base font-medium tracking-wide
        "
          >
            {projectDescription}
          </h4>
        </div>
        <div className="project-client">
        <h3 className="text-sm text-gray-600 font-semibold tracking-wide mb-1">
            CLIENT
          </h3>
          <h4
            className="text-purple-200 text-base font-semibold tracking-wide
        "
          >
            {projectClient}
          </h4>
         
        </div>
        <hr className="mb-5 mt-5 border-gray-700"/>
        <div className="rating flex justify-between">
          <div className="stars flex gap-2 items-center">
            <span className="text-purple-200">({projectRating})</span>
            <div className="star-imgs flex gap-1">
              <img className="w-4" src={star.src} />
              <img className="w-4" src={star.src} />
              <img className="w-4" src={star.src} />
              <img className="w-4" src={star.src} />
              <img className="w-4" src={star.src} />
            </div>
          </div>
          <span>
            <a href="/" className="text-orange-300 text-sm pb-1 border-b border-orange-300 tracking-wide ">Showcase</a>
          </span>
        </div>
      </div>
      <div className="project-image">
          <img src={projectImg.src} className="w-full"/>
      </div>
    </div>
  );
};

export default Proj;