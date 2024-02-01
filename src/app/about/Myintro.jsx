import React from 'react'
import "./About.css"
import manImg from "../../assets/images/journey-man.png"
import Hirebtn from '@/components/Childcomps/Hirebtn'
const Myintro = () => {
  return (
    <section className="myintro">
      <div className="wrapper flex gap-5 items-center about-intro">
      <div className="intro-image">
        <img src={manImg.src} alt="man-image" className='w-full'/>
      </div>
      <div className="intro-content pb-3">
        <h2 className='intro-tagline text-purple-200 mb-8'>I design not for the you as client but for your users</h2>
        <div className="myname-profession mb-8">
          <h3 className='text-xl tracking-wide mb-2 text-purple-200 font-semibold'>Tom Raclift</h3>
          <h4 className='text-orange-300 text-lg font-medium'>Senior UI UX Designer</h4>
        </div> 
        <div className="intro-buttons flex gap-3 items-center">
          <Hirebtn/>
          <button className='text-orange-300 font-medium text-sm pb-1 border-b-2 border-orange-300'><a href="/">Download CV</a></button>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Myintro