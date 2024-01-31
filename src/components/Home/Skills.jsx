import React from 'react';
import Myskill from '../Childcomps/Myskill';
import HomeComponentsHeading from '../Childcomps/HomeComponentsHeading';

const Skills = () => {
  const skills = [
    {
      number: "01",
      skill: "UI Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      number: "02",
      skill: "UI Animation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      number: "03",
      skill: "UX Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      number: "04",
      skill: "UX Research",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      number: "05",
      skill: "Wireframe",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      number: "06",
      skill: "Design System",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    }
    // Add more skills as needed
  ];

  return (
    <>
      <section className="skills-section basic-padding wrapper">
        <div className='text-center'>
        <HomeComponentsHeading smallheading="🗓️ WHAT I DO" heading="My" subheading="Skillset"/>
        </div>
       <div className='flex justify-center gap-10 flex-wrap w-full'>
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
