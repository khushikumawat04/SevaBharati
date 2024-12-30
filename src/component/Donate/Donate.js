import React from "react";
import "./Donate.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Donate() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="donate-box">
        <div className="donate-img">
          <img src="images/donate.png" alt="" />
        </div>
        <div className="donate-content">
          <h1 className="heading1">{t("Donate.heading")} </h1>
          <p className="para1">{t("Donate.para1")}</p>
          <p className="para1">{t("Donate.para2")}</p>
          <p className="para1">{t("Donate.para3")}</p>
          <p className="para2">{t("Donate.para4")}</p>
          <Link to="/donationForm">
            <button className="donate-btn">{t("Donate.heading")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
