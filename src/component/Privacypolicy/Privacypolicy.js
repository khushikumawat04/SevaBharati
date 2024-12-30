import React from "react";
import "./Privacypolicy.css";
import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="privacy-box">
        <p className="privacy-heading">{t("Privacy_P.heading")}</p>

        <div className="privacy-text">
          <ul typeof="circle">
            <li>{t("Privacy_P.para1")}</li>
            <li>{t("Privacy_P.para2")}</li>
            <li>{t("Privacy_P.para3")}</li>
            <li>{t("Privacy_P.para4")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
