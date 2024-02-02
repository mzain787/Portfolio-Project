import React from 'react'
import "./TestimonialsComponent.css"
import customerImg from "../../assets/images/testimonial-image.png"
import customerImg2 from "../../assets/images/man-testimonial2.jpg"

import HomeComponentsHeading from '@/components/Childcomps/HomeComponentsHeading'
const Customers = () => {
  return (
    <div className="customers-section wrapper component-padding">
        <div className="customers-heading">
        <HomeComponentsHeading smallheading="😎 HAPPY CUSTOMERS" heading="Customer Smile Is My Breath" subheading="Of Happiess"/>
        </div>
        <div>
        <h3 className='happy-customer-quote text-xl font-normal text-purple-300 tracking-wide w-7/12 mb-20'>Every sense of happinesss and satisfaction that is born from customers becomes a value that is not comparable to anything. Trust is priceless</h3>
        <p className="overall-ratings text-base text-purple-300 font-bold tracking-wide mb-4">(5.0) ⭐⭐⭐⭐⭐</p>
        <p className='happy-customer-description text-purple-300 text-base font-normal tracking-wide w-6/12 mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, officia repudiandae exercitationem libero nihil itaque neque, assumenda nam nisi eligendi optio sint consequuntur fugit sed asperiores saepe placeat architecto tempora.</p>
        </div>
        <div className="ceo">
            <h3 className="ceo-name text-orange-300 font-medium text-base">Ronald Black</h3>
            <p className='text-sm text-purple-200 tracking-wide font-semibold'>CEO</p>
        </div>
        <div className="customer-images flex items-end">
            <div className="customer-images-part1">
             <div className='customer-happy-image'>
             <img src={customerImg.src} alt="client-image" className='w-full h-full'/>
             </div>
            </div>
            <div className="customer-images-part2">
            <div className='bg-orange-300 customer-happy-image'></div>
            <div className='bg-transparent customer-happy-image'></div>
            </div>
            <div className="customer-images-part3">
            <div className='customer-happy-image'><img src={customerImg2.src} alt="client-image" className='w-full h-full'/></div>
            <div className='bg-transparent customer-happy-image'></div>
            <div className='bg-orange-300 customer-happy-image'>
            <img src={customerImg2.src} alt="client-image" className='w-full h-full'/>
            </div>
            </div>
            <div className="customer-images-part4">
            <div className='bg-orange-300 customer-happy-image'></div>
            <div className='bg-transparent customer-happy-image'></div>
            <div className='bg-orange-300 customer-happy-image '>
            <img src={customerImg.src} alt="client-image" className='w-full h-full'/>    
            </div>        
            <div className='bg-transparent customer-happy-image'></div>
            </div>
            
        </div>      
    </div>
  )
}

export default Customers