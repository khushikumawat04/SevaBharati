import React from "react";
import { useState } from "react";
import "./RecentEvents.css";
import { useTranslation } from "react-i18next";

const RecentEvents = () => {
  const { t } = useTranslation();
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <div>
        <h1 className="vtab-heading">{t("RecentEvents.Heading")}</h1>
        <span className="vtab-heading-line"></span>

        <div className="vtab-container">
          <div className="vblock-tabs">
            <div
              className={toggleState === 1 ? "vtabs active-vtabs" : "vtabs"}
              onClick={() => toggleTab(1)}
            >
              {t("RecentEvents.Program1.title")}
            </div>
            <div
              className={toggleState === 2 ? "vtabs active-vtabs" : "vtabs"}
              onClick={() => toggleTab(2)}
            >
              {t("RecentEvents.Program2.title")}
            </div>
            <div
              className={toggleState === 3 ? "vtabs active-vtabs" : "vtabs"}
              onClick={() => toggleTab(3)}
            >
              {t("RecentEvents.Program3.title")}
            </div>
            <div
              className={toggleState === 4 ? "vtabs active-vtabs" : "vtabs"}
              onClick={() => toggleTab(4)}
            >
              {t("RecentEvents.Program4.title")}
            </div>
          </div>
          <div className="content-vtabs">
            <div
              className={
                toggleState === 1 ? "content active-content" : "content"
              }
            >
              <div className="v_program">
                <h1> {t("RecentEvents.Program1.title")} </h1>
                <span className="vprogram-heading-line"></span>
                <p className="v-program-disc">
                  {t("RecentEvents.Program1.description")}
                </p>
                <div className="vprogram_imgcontainer">
                  <div>
                    <img src="svimage/Programs/disastermanament.jpeg" />
                  </div>

                  <div>
                    <img src="svimage/Programs/edu_covid_relief.jpg" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                toggleState === 2 ? "content active-content" : "content"
              }
            >
              <div className="v_program">
                <h1> {t("RecentEvents.Program2.title")}</h1>
                <span className="vprogram-heading-line"></span>

                <div className="vprogram_imgcontainer">
                  <div>
                    <img src="svimage/Programs/Majoranuradha/anradhaSmriti1.png" />
                  </div>
                  <div>
                    <img src="svimage/Programs/Majoranuradha/anuradhaSmriti2.png" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                toggleState === 3 ? "content active-content" : "content"
              }
            >
              <div className="v_program">
                <h1> {t("RecentEvents.Program3.title")}</h1>
                <span className="vprogram-heading-line"></span>

                <p className="v-program-disc">
                  {t("RecentEvents.Program3.description")}
                </p>
                <div className="vprogram_imgcontainer">
                  <div>
                    <img src="svimage/Programs/Computercentre/c_1.png" />
                  </div>
                  <div>
                    <img src="svimage/Programs/Computercentre/c_2.png" />
                  </div>
                  <div>
                    {" "}
                    <img src="svimage/Programs/Computercentre/c_3.png" />
                  </div>
                  <div>
                    {" "}
                    <img src="svimage/Programs/Computercentre/c_4.png" />
                  </div>
                  <div>
                    {" "}
                    <img src="svimage/Programs/Computercentre/c_5.png" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                toggleState === 4 ? "content active-content" : "content"
              }
            >
              <div className="v_program">
                <h1>{t("RecentEvents.Program4.title")}</h1>
                <span className="vprogram-heading-line"></span>
                <p className="v-program-disc">
                  {t("RecentEvents.Program4.description")}
                </p>
                <div className="vprogram_imgcontainer">
                  <div>
                    <img src="svimage/Programs/vradha_Jan_Seva_Kendra.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentEvents;
