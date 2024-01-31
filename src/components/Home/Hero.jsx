import React from 'react'
import "../Home/Home.css"
import fiverr from "../../assets/images/fi.png"
import upwork from "../../assets/images/up.png"
import man from "../../assets/images/man-image.png"
import startup1 from "../../assets/images/alien-tech.png"
import startup2 from "../../assets/images/app-ninja.png"
import startup3 from "../../assets/images/lightmedia.png"
import startup4 from "../../assets/images/forward.png"
import startup5 from "../../assets/images/codeguy.png"
import startup6 from "../../assets/images/starapp.png"
const Hero = () => {
  return (
    <>
    <section className="hero-section home-page relative wrapper">
      <div className="upwork-fiverr flex items-center gap-3 p-12">
      <p className='text-pruple-200 tracking-wide text-base font-medium'>Top Rated At</p>
      <img src={fiverr.src} alt="fiverr-logo" className='w-10 h-10'/>
      <img src={upwork.src} alt="upwork-logo" className='w-10 h-10'/>
      </div>
      <div className="hero-items">
        <div>
        <div className="hero-content">
          <p className='text-sm font-semibold text-purple-200 mb-10'>👋 DESIGNING THINGS FOR HUMAN</p>
          <h1 className='hero-heading text-purple-200 mb-12'>Talented Designer <span className='text-orange-300'>That Help You</span></h1>
          <h2 className='mb-12 text-base font-normal tracking-wide text-purple-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h2>
        </div>
        <hr className='hr-line'/>
        <div className="brand-achievements flex gap-10 flex-wrap items-center">
        <div className="achievement">
          <p className='text-4xl font-bold text-purple-200 mb-3 tracking-wider numbers'>45</p>
          <p className='text-purple-400 text-base font-medium'>Awards</p>
        </div>
        <div className="achievement">
          <p className='text-4xl font-bold text-purple-200 mb-3 tracking-wider numbers'>345</p>
          <p className='text-purple-400 text-base font-medium'>Projects Finished</p>
        </div>
        <div className="achievement">
          <p className='text-4xl font-bold text-purple-200 mb-3 tracking-wider numbers'>10</p>
          <p className='text-purple-400 text-base font-medium'>Years Experience</p>
        </div>
        <div className="achievement">
          <p className='text-4xl font-bold text-purple-200 mb-3 tracking-wider numbers'>175</p>
          <p className='text-purple-400 text-base font-medium'>Global Clients</p>
        </div>
        <div className="get-started w-24 h-24 rounded-full bg-orange-300 cursor-pointer">
          <a href='/' className='text-black text-center font-bold'>Get Started</a>
        </div>
        </div>
        </div>
        <div className="hero-image">
          <img src={man.src} alt="man-image" className='w-full'/>
        </div>
      </div>
    </section>
    <section className="startups p-0">
    <div className="hero-startups flex flex-wrap justify-center gap-4 w-full">
      <img src={startup1.src} alt="startup1-img" className='w-40'/>
      <img src={startup2.src} alt="startup2-img" className='w-40'/>
      <img src={startup3.src} alt="startup3-img" className='w-40'/>
      <img src={startup4.src} alt="startup4-img" className='w-40'/>
      <img src={startup5.src} alt="startup5-img" className='w-40'/>
      <img src={startup6.src} alt="startup6-img" className='w-40'/>
      </div>
    </section>
    </>
  )
}

export default Hero