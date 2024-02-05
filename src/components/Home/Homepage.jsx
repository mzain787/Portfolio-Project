import React from 'react'
import Hero from "./Hero.jsx"
import Intro from "./Intro.jsx"
import Skills from "./Skills.jsx"
import Journey from './Journey.jsx'
import Testimonials from './Testimonials.jsx'
import Projects from './Projects.jsx'
import "./Home.css"
const Homepage = () => {
  return (
    <div className='bounce-in-top'>
    <Hero/>
    <Intro/>
    <Skills/>
    <Journey/>
    <Testimonials/>
    <Projects/>
    </div>
  )
}

export default Homepage