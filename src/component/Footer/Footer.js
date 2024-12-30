import React, { useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (
        !document.querySelector(
          'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
        )
      ) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);
      }
    };

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      }
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <>
      {/* <section> */}
      <footer className="footer">
        <div className="footer-upper-line"></div>
        <div className="footer-content">
          <div className="footer-section logo">
            <img src="/images/homelogo.gif" alt="Seva Bharathi Logo" />
          </div>
          <div className="footer-section">
            <h4>{t("Footer.footerSection1.heading")} </h4>
            <ul>
              <a href="/about-us">
                <li>{t("Footer.footerSection1.li1")}</li>
              </a>
              <a href="/governing-board-members">
                <li>{t("Footer.footerSection1.li2")}</li>
              </a>
              <a href="/our-presence">
                <li>{t("Footer.footerSection1.li3")}</li>
              </a>
              <a href="/Annual-report">
                <li>{t("Footer.footerSection1.li4")}</li>
              </a>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t("Footer.footerSection2.heading")}</h4>
            <ul>
              <a href="/event">
                <li>{t("Footer.footerSection2.li1")}</li>
              </a>
              <a href="/volunteer">
                <li>{t("Footer.footerSection2.li2")}</li>
              </a>
              <a href="/donate">
                <li>{t("Footer.footerSection2.li3")}</li>
              </a>
              <a href="/main-program">
                <li>{t("Footer.footerSection2.li4")}</li>
              </a>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t("Footer.footerSection3.heading")}</h4>
            <ul>
              <Link to="/Gallery">
                <li>{t("Footer.footerSection3.li1")}</li>
              </Link>
            </ul>
          </div>
          <div className="footer-section social">
            <div className="social_icons">
              <Link to="https://www.facebook.com/rsewabharti">
                <img src="../icons/facebook.png" alt="facebook" />
              </Link>
              <Link to="https://www.instagram.com/bharat_rsb?igsh=MXBmNmVkaWRkd3Rqdg==">
                <img src="../icons/instagram.png" alt="instagram" />
              </Link>
              <Link to="https://www.linkedin.com/company/rashtriyasewabharati/">
                <img src="../icons/linkedin.png" alt="linkedin" />
              </Link>
              <Link to="https://youtube.com/@rashtriyasewabharati?si=XHTqKCa94r-73fbZ">
                <img src="../icons/youtube.png" alt="youtube" />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-lower-line"></div>
        <div className="footer-bottom">
          <p>
            <Link to="/Term-and-condition">{t("Footer.footerBottom.li1")}</Link>{" "}
            || <Link to="/privacy-policy"> {t("Footer.footerBottom.li2")}</Link>
          </p>
          <p>&copy; {t("Footer.footerBottom.li3")}</p>
          <p><a href="https://digitalsavers.in">Developed By : Digital Savers</a></p>
        </div>
      </footer>
      {/* </section> */}
    </>
  );
}
