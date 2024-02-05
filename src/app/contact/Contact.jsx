// Contact.js
import React from "react";
import "./Contact.css";
import contactImg from "../../assets/images/journey-man.png";
import PageHeading from "@/components/Childcomps/PageHeading/PageHeading";
import MyAccordionComponent from "@/components/Childcomps/MyAccordianComponent/MyAccordianComponent";
import HomeComponentsHeading from "@/components/Childcomps/HomeComponentsHeading";
import Startups from "@/components/Childcomps/Startups";
const Contact = () => {
  const accordionData = [
    {
      title: "Accordion Item 1",
      content: "Content for Accordion Item 1",
    },
    {
      title: "Accordion Item 2",
      content: "Content for Accordion Item 2",
    },
    {
      title: "Accordion Item 3",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident eaque in laudantium facilis, fuga nisi reiciendis iure maxime, voluptates vitae itaque at unde veniam nobis quidem, consectetur deserunt voluptatem error",
    },
    {
      title: "Accordion Item 4",
      content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident eaque in laudantium facilis, fuga nisi reiciendis iure maxime, voluptates vitae itaque at unde veniam nobis quidem, consectetur deserunt voluptatem error",
    },
  ];

  return (
    <div className="tilt-in-bl">
      <PageHeading pageHeading="Contact Me" />
      <div className="contact-section wrapper component-padding">
        <div className="contact-top mb-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202844.46260508665!2d-122.20590770532918!3d37.40296192972832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1706808729808!5m2!1sen!2s"
            width="100%"
            height="600"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-helpus-heading">
          <HomeComponentsHeading
            smallheading="😎 I'M READY TO HELP YOU"
            heading="Feel Free To"
            subheading="Contact Me"
          />
        </div>
        <div className="contact-bottom flex gap-10 justify-center mb-10">
          <div className="contact-accordian self-center">
            <div className="mb-5">
            <MyAccordionComponent accordionData={accordionData} />
            </div>
            <div className="contact-buttons flex flex-wrap gap-2 items-center">
            <button className="h-12 w-40 bg-orange-300 text-black text-sm font-medium tracking-wide"><a href="/">Contact Me</a></button>
            <a href="/" className="text-purple-200 text-sm font-semibold">Message Me On Linkedin</a>
            </div>
          </div>
          <div className="contact-image self-end">
            <img src={contactImg.src} alt="" className="w-full" />
          </div>
        </div>
        <Startups/>
      </div>
    </div>
  );
};

export default Contact;
