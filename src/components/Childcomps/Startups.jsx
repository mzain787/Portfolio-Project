import React from 'react'
import"../Home/Home.css"
import startup1 from "../../assets/images/alien-tech.png"
import startup2 from "../../assets/images/app-ninja.png"
import startup3 from "../../assets/images/lightmedia.png"
import startup4 from "../../assets/images/forward.png"
import startup5 from "../../assets/images/codeguy.png"
import startup6 from "../../assets/images/starapp.png"
const Startups = () => {
  return (
    <section className="startups p-0">
    <div className="hero-startups flex flex-wrap justify-center gap-4 w-full">
      <img src={startup1.src} alt="startup1-img" className='w-full'/>
      <img src={startup2.src} alt="startup2-img" className='w-full'/>
      <img src={startup3.src} alt="startup3-img" className='w-full'/>
      <img src={startup4.src} alt="startup4-img" className='w-full'/>
      <img src={startup5.src} alt="startup5-img" className='w-full'/>
      <img src={startup6.src} alt="startup6-img" className='w-full'/>
      </div>
    </section>
  )
}

export default Startups