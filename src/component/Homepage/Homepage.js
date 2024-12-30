import React,{useEffect,useState} from "react";
import "./Homepage.css";
import Gallery from "./Gallery";
import { Link } from "react-router-dom";
import Events from "../Event/Event";
import OurApproach from "../FocusArea/Our_Approach";
import ProgramSlider from "./Program_Slider/ProgramSlider";
import HomeSlider from "./HomeSlider";

import { useTranslation } from "react-i18next";
import ReactConfetti from "react-confetti";
const Homepage = () => {
  const { i18n, t } = useTranslation();


  
  return (
    <div className="home-container">
     
      {/* About us start */}
      <HomeSlider />
      {/* about us */}
      {/* <section> */}
      <div class="container1">
        <h1 class="Who home-head">{t("AboutUs1.AboutUsHeading.Heading")}</h1>
        <div class="video">
          <video
            className="video1"
            src="../Videos/Who_We_Are_video.mp4"
            width="620"
            height="315"
            controls
          ></video>
        </div>
        <div class="text">
          <p>{t("AboutUs1.AboutUsContent.p.text")}</p>
        </div>
        <Link to="/about-us">
          <button class="know-btn">{t("AboutUs1.link.button.text")} </button>
        </Link>
      </div>
      {/* </section> */}
      {/* About us............end */}

      {/* Foucus area start */}
      {/* <section> */}
      {/* <h1 class="Focus-heading home-head">Focus Areas</h1> */}
      <OurApproach />
      <div className="focus-container">
        {/* <div className="focus-card">
          <Link to="/Disability">
            <img class="focus-box-img" src="images/FA-1.png" alt="" />
          </Link>
          <Link to="/Disability" className="focus-box-text">
            Disibility
          </Link>
          <p className="focus-box-description">
            Karnataka has a total population of 6.11 cores of which 1,324,205 is
            persons with...
          </p>
        </div> */}

        {/*   <div className="focus-card">
          <Link to="/Women-Empowerment">
            <img class="focus-box-img" src="images/FA-2.png" alt="" />
          </Link>
          <Link to="/Women-Empowerment" className="focus-box-text">
            Women Empowerment
          </Link>
          <p className="focus-box-description">
            Rural India is the actual soul of the country where a maximum of its
            population ….
          </p>
        </div> */}

        {/*  <div className="focus-card">
          <Link to="/Health">
            <img class="focus-box-img" src="images/FA-3.png" alt="" />
          </Link>
          <Link to="/Healthsection" className="focus-box-text">
            Health
          </Link>
          <p className="focus-box-description">
            There are so many people around us who can’t support themselves in
            case of any...
          </p>
        </div> */}
      </div>
      {/* </section> */}
      {/* Focus end */}

      {/* Programm start */}
      <ProgramSlider />
      {/* Program end */}

      <Events />

      {/* Gallery start */}
      {/* <section> */}
      <div class="gallery-heading">
        <h1 class="Gallery-heading home-head">Gallery</h1>
      </div>
      <div class="Gallery-main-section">
        <div className="gallery-container">
          <Gallery />
        </div>
        <div class="Gallery-about">
          {/* Facebook Page Plugin Embed */}
          <div className="facebook-embed">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frsewabharti%2F&tabs=timeline&width=400&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="200"
              height="100"
              style={{
                border: "none",
                overflow: "hidden",
                marginLeft: "80px",
              }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="facebook"
            ></iframe>
          </div>
        </div>
      </div>
      {/* </section> */}
      {/* Gallery end */}
    </div>
  );
};

export default Homepage;
