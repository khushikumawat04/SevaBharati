import React from "react";
import "./Approach.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Our_Approach = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="approach-container">
        <div className="approach-img">
          <img src="images/approach.png" alt="approachimg" />
        </div>
        <div className="approach-content">
          <h1>{t("OurApproach.Heading")} </h1>
          <ul>
            <li>{t("OurApproach.ListItems.Education")}</li>
            <li>{t("OurApproach.ListItems.Health")}</li>
            <li>{t("OurApproach.ListItems.SamajikAyam")}</li>
            <li>{t("OurApproach.ListItems.Swavalamban")}</li>
          </ul>
          <p>{t("OurApproach.Paragraph.text")}</p>
          <Link to="/approachTab">
            <button style={{ cursor: "pointer" }}>
              {t("OurApproach.Link.button.text")}{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Our_Approach;
