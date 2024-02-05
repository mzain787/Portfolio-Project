import React from "react";
import "./PortfolioSection.css";
import Startups from "@/components/Childcomps/Startups";
import HomeComponentsHeading from "@/components/Childcomps/HomeComponentsHeading";
import PortfolioProject from "./PortfolioProject";
import projImg1 from "../../assets/images/app-img1.png";
import projImg2 from "../../assets/images/ecommerce.png"
import projImg3 from "../../assets/images/accomodation.png"
import projImg4 from "../../assets/images/ecommerce-ap.png"

const PortfolioSection = () => {
  const pprojects = [
    {
      ppImage:projImg1,
      pprojectName:"Finance App",
      ppLink:"/",
    },
    {
      ppImage:projImg2,
      pprojectName:"E-commmerce App",
      ppLink:"/",
    },
    {
      ppImage:projImg3,
      pprojectName:"Accomodation App",
      ppLink:"/",
    },
    {
      ppImage:projImg4,
      pprojectName:"Store",
      ppLink:"/",
    },
  ]
  return (
    <section className="portfolio-section wrapper component-padding">
      <div className="portfolio-heading">
        <h1 className="portfolio-main-heading text-purple-200 font-semibold">
          I Make Digital Products For Your Needs, And Proudly I&#39;ll Show You
        </h1>
        <p className="portfolio-main-description text-purple-200 text-base font-normal mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum hic
          optio, quae laborum eos, distinctio autem harum iusto, vero accusamus
          at modi veniam atque sapiente sunt alias ducimus non qui.
        </p>
        <div className="portfolio-main-buttons">
          <button className="newproject W-40 bg-orange-200 text-black font-semibold p-3 heartbeat">
            <a href="/contact">Let&#39;s Start New Project</a>
          </button>
        </div>
      </div>
      <div className="startups-part mb-14 mt-14">
        <Startups />
      </div>
      <div className="portfolio-projects-heading">
        <HomeComponentsHeading
          smallheading="🔥 AMAZING PORTFOLIO"
          heading="Our Latest"
          subheading="Cool Project"
        />
      </div>
      <div className="our-portfolio-projects w-full">
        {pprojects.map((pproject,index)=>(
        <div className="single-project" key={index}>
        <PortfolioProject
        pprojectName={pproject.pprojectName} 
        ppLink={pproject.ppLink}
        ppImage={pproject.ppImage}/>
        </div>
        ))
        }
      </div>
    </section>
  );
};

export default PortfolioSection;
