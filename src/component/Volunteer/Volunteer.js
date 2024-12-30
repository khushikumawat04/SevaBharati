import React from "react";
import "./Volunteer.css";
import { Link } from "react-router-dom";
import List from "./List";
import { useTranslation } from "react-i18next";

export default function Volunteer() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="volunteer-section">
        <div className="volunteer-content">
          <div className="volunteer-image-part">
            <img
              className="volunteer-image"
              alt="volunteer-image"
              src="images\volunteer-transparent.png"
            ></img>
          </div>

          <div className="volunteer-details">
            <h1 className="volunteer-heading">{t("Volunteer.heading")} </h1>
            <p>{t("Volunteer.para")}</p>
            <p>{t("Volunteer.para1")}</p>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSf-Xfmsyr1PRcnUab7ud0DCUGU2Rx7pD6QcaauFrFT1HCmWWA/viewform?usp=sf_link">
              <button className="volunteer-now">
                {t("Volunteer.button")}{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <List />
    </div>
  );
}
