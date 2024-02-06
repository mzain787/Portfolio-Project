import React from 'react';
import Myskill from '../Childcomps/Myskill';
import HomeComponentsHeading from '../Childcomps/HomeComponentsHeading';
const Skills = () => {
  const skills = [
    {
      number: "01",
      skill: "Adobe Photoshop",
      description: "Proficient in Adobe Photoshop, skilled in creating visually appealing designs and graphics for various digital platforms with precision and creativity."
    },
    {
      number: "02",
      skill: "Web Design",
      description: "Experienced in designing intuitive and aesthetically pleasing websites, focusing on user experience and functionality to deliver engaging online experiences."
    },
    {
      number: "03",
      skill: "User Interface Design",
      description: "Adept at crafting user-centric interfaces, ensuring seamless interaction between users and digital products through thoughtful layout and visual design."
    },
    {
      number: "04",
      skill: "Full Stack Dev",
      description: "Well-versed in both front-end and back-end development, capable of building end-to-end web applications from conceptualization to deployment using a variety of technologies."
    },
    {
      number: "05",
      skill: "Data Scraping",
      description: "Skilled in extracting and parsing data from various sources on the web, utilizing automated tools and scripts to gather valuable information for analysis and decision-making."
    },
    {
      number: "06",
      skill: "Frontend Dev",
      description: "Proficient in developing responsive and dynamic user interfaces using HTML, CSS, and JavaScript, with a focus on creating engaging and interactive web experiences for users."
    }
  ];

  return (
    <>
      <section className="skills-section basic-padding wrapper">
        <div className='text-center'>
        <HomeComponentsHeading smallheading="🗓️ WHAT I DO" heading="My" subheading="Skillset"/>
        </div>
       <div className='flex justify-start gap-10 flex-wrap w-full'>
        {skills.map((skill) => (
          <Myskill
            key={skill.number} // It's good practice to provide a unique key when using map
            number={skill.number}
            skill={skill.skill}
            description={skill.description}
          />
        ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
