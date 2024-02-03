import React from 'react';
import "./Home.css";
import HomeComponentsHeading from '../Childcomps/HomeComponentsHeading';
import Proj from '../Childcomps/Proj';
import projImg1 from "../../assets/images/app-img1.png";
import projImg2 from "../../assets/images/ecommerce.png"
import projImg3 from "../../assets/images/accomodation.png"
import projImg4 from "../../assets/images/ecommerce-ap.png"

const Projects = () => {
  const projectsData = [
    {
      projectCategory: "Finance App",
      projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      projectClient: "Andrew NG",
      projectImg: projImg1,
      projectRating:"4.8",
      showcaseLink:"/"
    },
    {
      projectCategory: "E-commerce App",
      projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      projectClient: "Jack MA",
      projectImg: projImg2,
      projectRating:"5.0",
      reverseOrder:true,
      showcaseLink:"/"
    },
    {
      projectCategory: "Accomodation App",
      projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      projectClient: "Andrew NG",
      projectImg: projImg3,
      projectRating:"4.8",
      showcaseLink:"/"
    },
    {
      projectCategory: "E-commerce App",
      projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      projectClient: "Jack MA",
      projectImg: projImg4,
      projectRating:"5.0",
      reverseOrder:true,
      showcaseLink:"/"
    }
  ];

  return (
    <>
      <section className="projects-section basic-padding wrapper">
        <div className="heading-part">
          <HomeComponentsHeading smallheading="👌 SHOW CASE" heading="Discover" subheading="How I Work"/>
        </div>
        <div className="projects-content-part">
          {projectsData.map((project) => (
            <div className='mb-20' key={project.id}>
            <Proj
              {...project}
            />
          </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
