// src/PageSlider.js
import React from "react";
// import ReactDOM from "react-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeSlider.css";

const HomeSlider = () => {
  const pages = [
    {
      image: "../images/B1.png",
    },
    {
      image: "../images/B2.png",
    },
    {
      image: "../images/B3.png",
    },
    {
      image: "../images/B2.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    arrows: false, // Hide navigation arrows
  };

  return (
    <div className="page-slider">
      <Slider {...settings}>
        {pages.map((page, index) => (
          <div key={index} className="page">
            <img src={page.image} alt="homeSlider" className="page-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
