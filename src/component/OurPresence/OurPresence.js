import React from "react";
import "./OurPresence.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Ourpresence() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="location-conatiner">
        <div className="location">
          <div className="location-info">
            <h1>{t("OurPresence.LocationInfo.Location.Heading")} :</h1>
            <p>{t("OurPresence.LocationInfo.Location.Description")}</p>
            <br></br>
            <div className="registered_address">
              <h4>
                {t("OurPresence.LocationInfo.RegisteredAddress.Heading")} -{" "}
              </h4>
              <p>
                {t("OurPresence.LocationInfo.RegisteredAddress.Description")}
              </p>
            </div>
            <div className="correspondence_address">
              <h4>
                {t("OurPresence.LocationInfo.CorrespondenceAddress.Heading")} -{" "}
              </h4>
              <p>
                {t(
                  "OurPresence.LocationInfo.CorrespondenceAddress.Description"
                )}
              </p>
            </div>
            <div className="contact">
              <h4>{t("OurPresence.LocationInfo.Contact.Heading")} -</h4>

              <p>
                <FontAwesomeIcon icon={faPhone} className="fsIcons" />
                {t("OurPresence.LocationInfo.Contact.Details")}
              </p>
            </div>
            <div className="email">
              <h4>{t("OurPresence.LocationInfo.Email.Heading")} -</h4>
              <p>
                {" "}
                <FontAwesomeIcon icon={faEnvelope} className="fsIcons" />
                {t("OurPresence.LocationInfo.Email.Details")}
              </p>
            </div>
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
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59261.71686501516!2d75.57183368421622!3d21.82444361957372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd885c4bd93b163%3A0xae95ec27b40bf31d!2sKhargone%2C%20Madhya%20Pradesh%20451001!5e0!3m2!1sen!2sin!4v1717585820755!5m2!1sen!2sin"
              width="400"
              height="470"
              title="Location"
              style={{ border: 0 }}
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="institute-heading">
        <p>{t("OurPresence.InstituteHeading")}</p>
      </div>

      <div className="institute-cards">
        <div className="institute-card-1">
          <p>{t("OurPresence.InstituteCards.Card1.Name")}</p>
          <div className="institute-location">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className="location-details">
              {t("OurPresence.InstituteCards.Card1.Location")}
            </p>
          </div>
        </div>

        <div className="institute-card-2">
          <p>{t("OurPresence.InstituteCards.Card2.Name")}</p>
          <div className="institute-location">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className="location-details">
              {t("OurPresence.InstituteCards.Card2.Location")}
            </p>
          </div>
        </div>

        <div className="institute-card-3">
          <p>{t("OurPresence.InstituteCards.Card3.Name")}</p>
          <div className="institute-location">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className="location-details">
              {t("OurPresence.InstituteCards.Card3.Location")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
