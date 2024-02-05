import React from 'react'
import "../Home/Home.css"
import manPic from "../../assets/images/journey-man.png"
import { MyExperience } from '../Childcomps/Myskill'
import HomeComponentsHeading from '../Childcomps/HomeComponentsHeading'
const Journey = () => {
  const experiences = [
    {
      year: "2002",
      jobTitle: "Product Manager",
      jobDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      year: "2010",
      jobTitle: "Sr. UIX Designer",
      jobDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      year: "2019",
      jobTitle: "QA Assurance",
      jobDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      year: "2020",
      jobTitle: "Global Research",
      jobDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      year: "2021",
      jobTitle: "Design Consultant",
      jobDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      year: "2022",
      jobTitle: "Founder Company",
      jobDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
    // Add more skills as needed
  ];
  return (
    <section className="my-experience-journey">
     <div className="wrapper flex justify-start gap-5 items-end journey-main">
        <div className="journey-image">
            <img src={manPic.src} alt="man-image" className='w-full'/>
        </div>
     <div className="journey-content pb-10">
     <HomeComponentsHeading smallheading="⏱️ MY JOURNEY & TRACK RECORD" heading="Tons of" subheading="Experiences"/>
     <div className='w-full flex flex-wrap'>
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
  )
}

export default Journey