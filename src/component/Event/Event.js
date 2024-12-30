import React from "react";
import "./Event.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Events = () => {
  const { t } = useTranslation();
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
  };
  return (
    <div className="event-container">
      <div className="recent-event-container">
        <h1 className="home-head">{t("Events.heading")} </h1>
        <div className="slider-container1">
          <Slider {...settings1}>
            <div className="event-slider1">
              <div className="event-slider-content">
                <div className="event-image">
                  <img
                    src="svimage/Education/Edcuation - Sanskaar Kenrda-4 (1).jpeg"
                    alt="Event 1"
                  />
                </div>
                <div className="event-text">
                  <h3>{t("Events.RecentUpdates.Event1.title")}</h3>
                  <p>{t("Events.RecentUpdates.Event1.description")}</p>
                  <Link to="/main-program">
                    {" "}
                    <button>{t("Events.Button")}</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="event-slider1">
              <div className="event-slider-content">
                <div className="event-image">
                  <img
                    src="svimage/Education/Edcuation - Sanskaar Kenrda-4 (1).jpeg"
                    alt="Event 2"
                  />
                </div>
                <div className="event-text">
                  <h3>{t("Events.RecentUpdates.Event2.title")}</h3>
                  <p>{t("Events.RecentUpdates.Event2.description")}</p>
                  <Link to="/main-program">
                    {" "}
                    <button>{t("Events.Button")}</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="event-slider1">
              <div className="event-slider-content">
                <div className="event-image">
                  <img
                    src="svimage/Annual function/Social Media(a_4).jpeg"
                    alt="Event 2"
                  />
                </div>
                <div className="event-text">
                  <h3>{t("Events.RecentUpdates.Event3.title")}</h3>
                  <p>{t("Events.RecentUpdates.Event3.description")}</p>
                  <Link to="/annualFunction">
                    <button>{t("Events.Button")}</button>
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="upcoming-event-container">
        <h1 className="home-head">{t("Events.UpcomingEvents.heading")}</h1>
        <p>{t("Events.UpcomingEvents.title")}</p>
      </div>
    </div>
  );
};

export default Events;
