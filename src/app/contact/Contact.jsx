'use client'
import React from 'react'
import "./Contact.css"
import PageHeading from '@/components/Childcomps/PageHeading/PageHeading'
const Contact = () => {
  return (
    <>
    <PageHeading pageHeading="Contact Me"/>
    <div className="contact-section wrapper component-padding">
        <div className="contact-top">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202844.46260508665!2d-122.20590770532918!3d37.40296192972832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1706808729808!5m2!1sen!2s" width="100%" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="contact-bottom">
        </div>
    </div>
    </>
  )
}

export default Contact