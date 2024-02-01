import React from 'react'
import HomeComponentsHeading from '@/components/Childcomps/HomeComponentsHeading'
import workImg3 from "../../assets/images/blog-img2.png"
import workImg2 from "../../assets/images/blog-img1.png"
import workImg4 from "../../assets/images/blog-img3.png"
import workImg1 from "../../assets/images/blog-img4.png"
const MyWork = () => {
  return (
   <div className="mywork wrapper component-padding">
  <HomeComponentsHeading smallheading="😎 I  WANT TO INTRODUCE MYSELF" heading="It's Not Only About" 
  subheading="The Looks"/>    
    <div className="my-work-images flex">
        <div className="images-section1 flex flex-col">
            <div className="images-section1-top flex items-center">
                <img src={workImg1.src} alt="image" />
                <img src={workImg2.src} alt="image" />
            </div>
            <div className="images-section1-bottom">
            <img src={workImg3.src} alt="image" />
            </div>
        </div>
        <div className="images-section-2">
            <img src={workImg4.src} alt="image" />
        </div>
    </div>
   </div>
  )
}

export default MyWork