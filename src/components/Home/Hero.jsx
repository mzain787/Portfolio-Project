import React from 'react'
import "../Home/Home.css"
import fiverr from "../../assets/images/fi.png"
import upwork from "../../assets/images/up.png"
import man from "../../assets/images/man-image.png"
const Hero = () => {
  return (
    <>
    <section className="hero-section  wrapper home-page relative">
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
        </div>
        </div>
        <div className="hero-image">
          <img src={man.src} alt="man-image" className='w-full'/>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero