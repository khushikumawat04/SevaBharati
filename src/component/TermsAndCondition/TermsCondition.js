import React from "react";
import "./TermsCondition.css";
import { useTranslation } from "react-i18next";

export default function TC() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="TC-box">
        <p className="TC-heading">{t("TermsToUse.heading")} </p>

        <div className="TC-main-box">
          <div className="TC-left1-box">
            <ul>
              <li>{t("TermsToUse.para1")}</li>
              <li>{t("TermsToUse.para2")}</li>
              <li>{t("TermsToUse.para3")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
