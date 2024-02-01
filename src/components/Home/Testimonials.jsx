"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home/Home.css";
import Testimonial from "../Childcomps/Testimonial";
import clientImg1 from "../../assets/images/testimonial-image.png";
import HomeComponentsHeading from "../Childcomps/HomeComponentsHeading";
import Hirebtn from "../Childcomps/Hirebtn";

const Testimonials = ({showHeading = true}) => {
  const testimonials = [
    {
      clientReview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      clientImg: clientImg1,
      clientName: "Jimmy Sams",
    },
    {
      clientReview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      clientImg: clientImg1,
      clientName: "Andrew Tate",
    },
    {
      clientReview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      clientImg: clientImg1,
      clientName: "Jimmy Sams",
    },
    {
      clientReview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      clientImg: clientImg1,
      clientName: "Andrew Tate",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div
        style={{
          bottom: "10px",
          textAlign: "center",
        }}
      >
        <ul style={{ margin: "0" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          background: i === settings.currentSlide ? "grey" : "orange",
          borderRadius: "50%",
          margin: "20px 5px",
          cursor: "pointer",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="clients-talking wrapper basic-padding">
      {showHeading && (
        <div className="text-center">
          <HomeComponentsHeading
            smallheading="👌 PEOPLE SAY ABOUT ME"
            heading="Clients"
            subheading="Talking"
          />
        </div>
      )}
      <div className="client-testimonials flex items-start gap-5">
        <div className="clients-section-left">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                clientReview={testimonial.clientReview}
                clientImg={testimonial.clientImg}
                clientName={testimonial.clientName}
              />
            ))}
          </Slider>
        </div>
        <div className="clients-section-right">
          <div className="standard border-b-2 border-gray-900 pb-4 mb-4">
            <p className="text-purple-200 text-xl tracking-wide font-semibold mb-2">100%</p>
            <h3 className="text-base text-purple-300 tracking-wide font-medium">Satisfaction Rate</h3>
          </div>
          <div className="standard border-b-2 border-gray-900 pb-4 mb-4">
            <p className="text-purple-200 text-xl tracking-wide font-semibold mb-2">1%</p>
            <h3 className="text-base text-purple-300 tracking-wide font-medium">Repeat Order</h3>
          </div>
          <div className="standard border-b-2 border-gray-900 pb-4 mb-8">
            <p className="text-purple-200 text-xl tracking-wide font-semibold mb-2">100%</p>
            <h3 className="text-base text-purple-300 tracking-wide font-medium">Good Reviews</h3>
          </div>
          <Hirebtn/>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
