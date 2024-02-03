import React from 'react'
import "./PortfolioSection.css"
import Startups from '@/components/Childcomps/Startups'
import HomeComponentsHeading from '@/components/Childcomps/HomeComponentsHeading'
const PortfolioSection = () => {
  return (
    <section className="portfolio-section wrapper component-padding">
    <div className="portfolio-heading">
        <h1 className="portfolio-main-heading text-purple-200 font-semibold">I Make Digital Products For Your Needs, And Proudly I'll Show You</h1>
        <p className="portfolio-main-description text-purple-200 text-base font-normal mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum hic optio, quae laborum eos, distinctio autem harum iusto, vero accusamus at modi veniam atque sapiente sunt alias ducimus non qui.</p>
        <div className="portfolio-main-buttons">
            <button className="newproject W-40 bg-orange-200 text-black font-semibold p-3"><a href="/contact">Let&#39;s Start New Project</a></button>
        </div>
    </div>
    <div className="startups-part mb-14 mt-14">
    <Startups/>
    </div>
    <div className="our-portfolio-projects">
        <HomeComponentsHeading smallheading="🔥 AMAZING PORTFOLIO" heading="Our Latest" subheading="Cool Project"/>
    </div>
    </section>
  )
}

export default PortfolioSection