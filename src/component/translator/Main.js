// src/App.js
import React from "react";
import { useTranslation } from "react-i18next";
// import Nav from "../Navbar/Nav";

function Main() {
  const { i18n, t } = useTranslation();
  const changelanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div>
        {/* <h1>{t("welcome")}</h1>
        <p>{t("hello")}</p> */}
        {/* <Nav /> */}
      </div>
      <div style={{ background: "blue", marginTop: "100px" }}>
        <button onClick={() => changelanguage("en")}>English</button>
        <button onClick={() => changelanguage("hi")}>Hindi</button>
      </div>
    </>
  );
}

export default Main;
