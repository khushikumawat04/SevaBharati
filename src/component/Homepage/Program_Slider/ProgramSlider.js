import React, { useEffect, useRef, useState } from "react";
import "./ProgramSlider.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProgramSlider() {
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      <h1
        style={{
          fontSize: "30px",
          textAlign: "center",
          color: "var(--green)",
          marginTop: "-30px",
          marginBottom: "10px",
        }}
      >
        {t("Programs.heading")}
      </h1>
      <ul className="carousel">
        <li className="card">
          <div className="img">
            <img
              src="svimage/Programs/disastermanament.jpeg"
              alt="img"
              draggable="false"
            />
          </div>
          <h2>{t("Programs.Program1.title")}</h2>
          <p className="description">{t("Programs.Program1.description")}</p>
          <Link to="/main-program">
            <button className="program-read-more-button">
              {t("Programs.Button")}
            </button>
          </Link>
        </li>
        <li className="card">
          <div className="img">
            <img
              src="svimage/Programs/Computercentre/c_5.png"
              alt="img"
              draggable="false"
            />
          </div>
          <h2>{t("Programs.Program2.title")}</h2>
          <p className="description">{t("Programs.Program2.description")}</p>
          <Link to="/main-program">
            <button className="program-read-more-button">
              {t("Programs.Button")}
            </button>
          </Link>
        </li>
        <li className="card">
          <div className="img">
            <img
              src="svimage/Programs/Majoranuradha/anradhaSmriti1.png"
              alt="img"
              draggable="false"
            />
          </div>
          <h2>{t("Programs.Program3.title")}</h2>
          <p className="description">{t("Programs.Program3.description")}</p>
          <Link to="/main-program">
            <button className="program-read-more-button">
              {t("Programs.Button")}
            </button>
          </Link>
        </li>
        <li className="card">
          <div className="img">
            <img
              src="svimage/Programs/vradha_Jan_Seva_Kendra.jpg"
              alt="img"
              draggable="false"
            />
          </div>
          <h2>{t("Programs.Program4.title")}</h2>
          <p className="description">{t("Programs.Program4.description")}</p>
          <Link to="/main-program">
            <button className="program-read-more-button">
              {t("Programs.Button")}
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
