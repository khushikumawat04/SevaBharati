import React from "react";
import "./AnnualFunction.css";
import { useTranslation } from "react-i18next";

const AnnualFunction = () => {
  const { t } = useTranslation();
  return (
    <div className="Anual-container">
      <h1>{t("AnnualFunction.Heading")} </h1>
      <span className="annual-heading-line"></span>
      <p>{t("AnnualFunction.description")}</p>
      <div className="Annualprogram_imgcontainer">
        <div>
          <img src="svimage/Annual function/a_1.jpg" />
        </div>
        <div>
          <img src="svimage/Annual function/a_2.jpg" />
        </div>
        <div>
          <img src="svimage/Annual function/a_3.jpeg" />
        </div>
        <div>
          <img src="svimage/Annual function/Social Media(a_4).jpeg" />
        </div>
        <div>
          {" "}
          <img src="svimage/Annual function/Social Media-5.jpeg" />
        </div>
        <div>
          {" "}
          <img src="svimage/Annual function/Vande Matram(a-6).jpeg" />
        </div>
        <div>
          {" "}
          <img src="svimage/Annual function/Yog(a-7).jpeg" />
        </div>
      </div>
    </div>
  );
};

export default AnnualFunction;
