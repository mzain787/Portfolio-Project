import React from "react";
import Myskill from "../Childcomps/Myskill";
import HomeComponentsHeading from "../Childcomps/HomeComponentsHeading";
const Skills = () => {
  const skills = [
    {
      number: "01",
      skill: "Adobe Photoshop",
      description:
        "Proficient in Adobe Photoshop, skilled in creating visually appealing designs and graphics for various digital platforms with precision and creativity.",
    },
    {
      number: "02",
      skill: "User Interface Design",
      description:
        "Adept at crafting user-centric interfaces, ensuring seamless interaction between users and digital products through thoughtful layout and visual design.",
    },
    {
      number: "03",
      skill: "Frontend Dev",
      description:
        "Proficient in developing responsive and dynamic user interfaces using HTML, CSS, and JavaScript, with a focus on creating engaging and interactive web experiences for users.",
    },
  ];

  return (
    <>
      <section className="skills-section basic-padding wrapper">
        <div className="text-center">
          <HomeComponentsHeading
            smallheading="🗓️ WHAT I DO"
            heading="My"
            subheading="Skillset"
          />
        </div>
        <div className="flex justify-start gap-10 flex-wrap w-full" id="skills">
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
};

export default Skills;
