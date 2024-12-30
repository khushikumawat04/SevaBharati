import React from "react";
import "./About.css";
import { useTranslation } from "react-i18next";

export default function Aboutus() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="head-jabout">{t("AboutUs2.AboutUsHeading2.Heading2")}</h1>

      <div className="jabout-container">
        <img src="svimage/Annual function/a_1.jpg" alt="about-1" />
        <img
          src="svimage/Annual function/Vande Matram(a-6).jpeg"
          alt="about-2"
        />
      </div>

      <div className="para-info">
        <div className="our-history">
          <h1 className="head-history">
            {t("AboutUs2.ourHistory.ourhistory")}
          </h1>
          <div className="ios">
            <p className="history-info">
              {t("AboutUs2.container.history.paragraph1.text")}
            </p>
            <p className="history-info">
              {t("AboutUs2.container.history.paragraph2.text")}
            </p>
          </div>
        </div>
      </div>

      <div className="vis-mis">
        <div className="vission">
          <img src="/images/vision.png" alt="vision" />
          <p>{t("AboutUs2.vision.text")}</p>
        </div>
        <div className="mission">
          <img src="/images/mission.png" alt="mission" />
          <p>{t("AboutUs2.mission.text")}</p>
        </div>
        <div className="Goal">
          <img src="/images/goal-main.PNG" alt="vision" />
          <p>{t("AboutUs2.goal.text")}</p>
        </div>
      </div>
    </div>
  );
}
