import React from 'react'
import "./Home.css"
import videobck from "../../assets/images/main-video.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import HomeComponentsHeading from '../Childcomps/HomeComponentsHeading';
const Intro = () => {
  return (
    <>
    <section className="basic-padding wrapper">
    <div className="intro-top mb-10 flex gap-10">
     <HomeComponentsHeading smallheading= "😎 I WANT TO INTROUCE MYSELF" heading="Professional" subheading="Experienced"/>
     <div className="intro-top-right">
        <p className='text-purple-200 text-base font-medium mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <a href="/" className='text-orange-300 pb-1 border-b-2 border-orange-300 text-sm font-semibold tracking-wide'>Download CV</a>
     </div>
    </div>
    <div className="intro-bottom">
        <div className="intro-video-back-img w-full h-auto">
            <img src={videobck.src} alt="video-thumbnail"/>
            <a href="/" className="video-play-iocn w-12 h-12 rounded-full bg-orange-300"><FontAwesomeIcon className='absolute translate-x-4 translate-y-3 text-2xl' icon={faPlay} /></a>
        </div>
    </div>
    </section>
    </> 
  )
}

export default Intro
