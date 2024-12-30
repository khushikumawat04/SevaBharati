import React from "react";
import { useState } from "react";
import "./ApproachTab.css";
import EducationTab from "../EducationTab/EducationTab";
// import "../Approach/Approach.css";
import HealthTab from "../EducationTab/HealthTab";
import SamajikTab from "../EducationTab/Samajik";
import SwavalambanTab from "../EducationTab/Swalavanban";
import { useTranslation } from "react-i18next";

const AppoachTab = (props) => {
  const { t } = useTranslation();
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <div className="approch-section">
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
              {/* <button>Read More</button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="block-tabs">
          <div
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            {t("OurApproach.ListItems.Education")}
          </div>
          <hr />
          <div
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            {t("OurApproach.ListItems.Health")}
          </div>
          <hr />
          <div
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            {t("OurApproach.ListItems.SamajikAyam")}
          </div>
          <hr />
          <div
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            {t("OurApproach.ListItems.Swavalamban")}
          </div>
        </div>
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content active-content" : "content"}
          >
            <div className="handbag_grid">
              <EducationTab />
            </div>
          </div>
          <div
            className={toggleState === 2 ? "content active-content" : "content"}
          >
            <div className="handbag_grid">
              <HealthTab />
            </div>
          </div>
          <div
            className={toggleState === 3 ? "content active-content" : "content"}
          >
            <div className="handbag_grid">
              <SamajikTab />
            </div>
          </div>
          <div
            className={toggleState === 4 ? "content active-content" : "content"}
          >
            <div className="handbag_grid">
              <SwavalambanTab />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoachTab;
