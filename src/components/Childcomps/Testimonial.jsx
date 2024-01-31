import React from 'react'
import '../Home/Home.css'
function Testimonial({ clientReview, clientImg, clientName }) {
    return (
      <>
        <div className="testimonial mb-10 p-10 mr-5">
          <div className="pb-4 mb-5 client-review">
            <p className="text-lg text-purple-200 font-medium tracking-wider">{clientReview}</p>
          </div>
          <div className='pr-4 client'>
            <div className="client-img w-16 mb-3"><img src={clientImg.src} alt="client-img" className='w-full'/></div>
            <p className="client-name text-orange-300 text-base font-semibold tracking-wider">{clientName}</p>
          </div>
        </div>
      </>
    );
  }
export default Testimonial