import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const [navLinksStyle, setNavLinksStyle] = useState({ left: "-100%" });
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleMenuOpen = () => setNavLinksStyle({ left: "0" });
    const handleMenuClose = () => setNavLinksStyle({ left: "-100%" });

    const handleHtmlCssArrow = () =>
      document.querySelector(".nav-links").classList.toggle("show1");
    const handleJsArrow = () =>
      document.querySelector(".nav-links").classList.toggle("show3");
    const handleJsArrow1 = () =>
      document.querySelector(".nav-links").classList.toggle("show2");
    const handleJsArrow2 = () =>
      document.querySelector(".nav-links").classList.toggle("show4");

    const menuOpenBtn = document.querySelector(".navbar .bx-menu");
    const menuCloseBtn = document.querySelector(".nav-links .bx-x");
    const htmlcssArrow = document.querySelector(".htmlcss-arrow");
    const jsArrow = document.querySelector(".js-arrow");
    const jsArrow1 = document.querySelector(".js-arrow1");
    const jsArrow2 = document.querySelector(".js-arrow2");
    const navLinks = document.querySelectorAll(".nav-links a");

    if (menuOpenBtn) menuOpenBtn.addEventListener("click", handleMenuOpen);
    if (menuCloseBtn) menuCloseBtn.addEventListener("click", handleMenuClose);
    if (htmlcssArrow)
      htmlcssArrow.addEventListener("click", handleHtmlCssArrow);
    if (jsArrow) jsArrow.addEventListener("click", handleJsArrow);
    if (jsArrow1) jsArrow1.addEventListener("click", handleJsArrow1);
    if (jsArrow2) jsArrow2.addEventListener("click", handleJsArrow2);

    navLinks.forEach((link) => {
      link.addEventListener("click", handleMenuClose);
    });

    return () => {
      if (menuOpenBtn) menuOpenBtn.removeEventListener("click", handleMenuOpen);
      if (menuCloseBtn)
        menuCloseBtn.removeEventListener("click", handleMenuClose);
      if (htmlcssArrow)
        htmlcssArrow.removeEventListener("click", handleHtmlCssArrow);
      if (jsArrow) jsArrow.removeEventListener("click", handleJsArrow);
      if (jsArrow1) jsArrow1.removeEventListener("click", handleJsArrow1);
      if (jsArrow2) jsArrow2.removeEventListener("click", handleJsArrow2);
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleMenuClose);
      });
    };
  }, []);

  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img className="logo1" src="/images/homelogo.gif" alt="Logo" />
          </Link>
        </div>

        <div className="nav-links" style={navLinksStyle}>
          <div className="sidebar-logo">
            <span className="logo-name"></span>
            <i className="bx bx-x"></i>
          </div>
          <ul className="links">
            <li>
              <Link to="/">{t("Nav.navbar.links.Homepage")}</Link>
            </li>
            <li>
              <Link to="/about-us">{t("Nav.navbar.links.About Us")}</Link>
              <i className="bx bxs-chevron-down htmlcss-arrow arrow"></i>
              <ul className="htmlCss-sub-menu sub-menu">
                <li>
                  <Link to="our-presence">
                    {t("Nav.navbar.links.Our Presence")}
                  </Link>
                </li>
                <li>
                  <Link to="/governing-board-members">
                    {t("Nav.navbar.links.Governing Board Members")}
                  </Link>
                </li>
                <li>
                  <Link to="/Annual-report">
                    {t("Nav.navbar.links.Annual Reports")}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/foucs-area">{t("Nav.navbar.links.Our Approach")}</Link>
              <i className="bx bxs-chevron-down js-arrow arrow"></i>
              <ul className="js-sub-menu sub-menu">
                <li>
                  <Link to="/education">{t("Nav.navbar.links.Education")}</Link>
                </li>
                <li>
                  <Link to="/Health">{t("Nav.navbar.links.Health")}</Link>
                </li>
                <li>
                  <Link to="/samajik-ayam">
                    {t("Nav.navbar.links.Samajik Aayam")}
                  </Link>
                </li>
                <li>
                  <Link to="/savalamban">
                    {t("Nav.navbar.links.Swavalamban")}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/main-program">{t("Nav.navbar.links.Programs")}</Link>
            </li>
            <li>
              <Link to="/event">{t("Nav.navbar.links.Events")}</Link>
            </li>
            <li>
              <Link to="/donate">{t("Nav.navbar.links.Donate")}</Link>
            </li>
            <li>
              <Link to="/volunteer">{t("Nav.navbar.links.Volunteer")}</Link>
            </li>
          </ul>
        </div>
        {/* <span>{t("Select Language")}</span> */}
        <div className="tbutton">
          <button onClick={() => changeLanguage("en")} className="TButton">
            {t("English")}
          </button>
          <button onClick={() => changeLanguage("hi")} className="TButton">
            {t("हिंदी")}
          </button>
        </div>

        <i className="bx bx-menu"></i>
      </div>
    </nav>
  );
};

export default Nav;
