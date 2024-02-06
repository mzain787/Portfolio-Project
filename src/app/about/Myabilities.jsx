import HomeComponentsHeading from '@/components/Childcomps/HomeComponentsHeading'
import React from 'react'
import Hirebtn from '@/components/Childcomps/Hirebtn'
import tool1 from "../../assets/images/figma.svg"
import tool2 from "../../assets/images/react.svg"
import tool3 from "../../assets/images/next-js.svg"
import Experties from '@/components/Childcomps/Experties'
import "./About.css"
import Startups from '@/components/Childcomps/Startups'
import AosAnimation from '@/utils/AosAnimation'

const tools =[
    {
        toolImage:tool1,
        toolName:"Figma",
        toolSkill:"90%"
    },
    {
        toolImage:tool2,
        toolName:"React.js",
        toolSkill:"95%"
    },
    {
        toolImage:tool3,
        toolName:"Next.js",
        toolSkill:"95%"
    },
]
const skillsData = [
    { skillName: 'HTML', percentage: '90%' },
    { skillName: 'CSS', percentage: '85%' },
    { skillName: 'JavaScript', percentage: '92%' },
    { skillName: 'React.js', percentage: '95%' },
    { skillName: 'Next.js', percentage: '75%' },
    { skillName: 'Reducx Toolkit', percentage: '80%' },
  ];
const Myabilities = () => {
  return (
    <section className="my-abilities wrapper component-padding">
        <HomeComponentsHeading smallheading="💻 SKILL IN RACE" heading="Measurable" subheading="Ability"/>
        <div className="abilities mb-20 flex gap-10 items-start">
            <div className="abilities-section1">
            <div className="skills-container">
        {skillsData.map((skill, index) => (
          <Experties key={index} skillName={skill.skillName} percentage={skill.percentage} />
        ))}
      </div>
            </div>
            <div className="abilities-section2">
            <h4 className='text-purple-300 text-xl font-medium mb-5'>What App I Use</h4>
            <h3 className='text-purple-200 mb-5 font-semibold text-3xl tracking-wide'>Mastered In 3 Popular App For Every Designer</h3>
            <p className='text-purple-300 mb-8 text-base font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam qui esse numquam dolores! Repellendus eos deleniti quas, dolor amet ea perspiciatis exercitationem repudiandae dolorem, illo cumque sequi distinctio nam doloremque.</p>
            <div className="skills-on-tools flex flex-wrap gap-10 items-end">
            {tools.map((tool, index) => (
              <div className="single-tool" key={index}>
                <img src={tool.toolImage.src} alt={tool.toolName} className='w-12 mb-3'/>
                <p className="tool-name text-base font-medium tracking-wider text-purple-200 mb-2">{tool.toolName}</p>
                <p className="skillpercentage text-purple-400 text-sm font-semibold tracking-wide">{tool.toolSkill}</p>
              </div>
            ))}
            <Hirebtn/>
            </div>
        </div>
       
        </div>
        <Startups/>
        <AosAnimation type="zoom-in-up" duration={1000}>
        <div className="about-bottom flex flex-col justify-center items-center">
            <h3 className='about-bottom-heading text-center font-semibold text-purple-200 mb-10'>Want to Work Together And Create An Amazing Products With Me?</h3>
            <Hirebtn/>
        </div>  
        </AosAnimation>    
    </section>
  )
}

export default Myabilities