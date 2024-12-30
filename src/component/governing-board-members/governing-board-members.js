import React from "react";
import "./governing-board-members.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
export default function Team() {
  const { t } = useTranslation();
  const TeamData = [
    {
      id: 1,
      Name: t("TeamData.1.Name"),
      Role: t("TeamData.1.Role"),
      Addr: t("TeamData.1.Address"),
      contact: t("TeamData.1.Contact"),
      Adddate: t("TeamData.1.AddDate"),
    },
    {
      id: 2,
      Name: t("TeamData.2.Name"),
      Role: t("TeamData.2.Role"),
      Addr: t("TeamData.2.Address"),
      contact: t("TeamData.2.Contact"),
      Adddate: t("TeamData.2.AddDate"),
    },
    {
      id: 3,
      Name: t("TeamData.3.Name"),
      Role: t("TeamData.3.Role"),
      Addr: t("TeamData.3.Address"),
      contact: t("TeamData.3.Contact"),
      Adddate: t("TeamData.3.AddDate"),
    },
    {
      id: 4,
      Name: t("TeamData.4.Name"),
      Role: t("TeamData.4.Role"),
      Addr: t("TeamData.4.Address"),
      contact: t("TeamData.4.Contact"),
      Adddate: t("TeamData.4.AddDate"),
    },
    {
      id: 5,
      Name: t("TeamData.5.Name"),
      Role: t("TeamData.5.Role"),
      Addr: t("TeamData.5.Address"),
      contact: t("TeamData.5.Contact"),
      Adddate: t("TeamData.5.AddDate"),
    },
    {
      id: 6,
      Name: t("TeamData.6.Name"),
      Role: t("TeamData.6.Role"),
      Addr: t("TeamData.6.Address"),
      contact: t("TeamData.6.Contact"),
      Adddate: t("TeamData.6.AddDate"),
    },
    {
      id: 7,
      Name: t("TeamData.7.Name"),
      Role: t("TeamData.7.Role"),
      Addr: t("TeamData.7.Address"),
      contact: t("TeamData.7.Contact"),
      Adddate: t("TeamData.7.AddDate"),
    },
    {
      id: 8,
      Name: t("TeamData.8.Name"),
      Role: t("TeamData.8.Role"),
      Addr: t("TeamData.8.Address"),
      contact: t("TeamData.8.Contact"),
      Adddate: t("TeamData.8.AddDate"),
    },
    {
      id: 9,
      Name: t("TeamData.9.Name"),
      Role: t("TeamData.9.Role"),
      Addr: t("TeamData.9.Address"),
      contact: t("TeamData.9.Contact"),
      Adddate: t("TeamData.9.AddDate"),
    },
    {
      id: 10,
      Name: t("TeamData.10.Name"),
      Role: t("TeamData.10.Role"),
      Addr: t("TeamData.10.Address"),
      contact: t("TeamData.10.Contact"),
      Adddate: t("TeamData.10.AddDate"),
    },
    {
      id: 11,
      Name: t("TeamData.11.Name"),
      Role: t("TeamData.11.Role"),
      Addr: t("TeamData.11.Address"),
      contact: t("TeamData.11.Contact"),
      Adddate: t("TeamData.11.AddDate"),
    },
    {
      id: 12,
      Name: t("TeamData.12.Name"),
      Role: t("TeamData.12.Role"),
      Addr: t("TeamData.12.Address"),
      contact: t("TeamData.12.Contact"),
      Adddate: t("TeamData.12.AddDate"),
    },
  ];
  return (
    /*   style={{ marginBottom: "130px" }} */
    <div className="goverment-b">
      <div className="team-heading">
        <h1> {t("TeamData.heading")} </h1>
      </div>

      <div className="large-container">
        {TeamData.map((data) => {
          const { Name, Role, Addr, contact, Adddate } = data;
          return (
            <>
              <div className="small-cards">
                {/* <img src="images/Girish Rao K U.jpg"  alt='Girish Rao K U'/> */}

                <div className="pass-heading">
                  <h1>{Name}</h1>
                </div>
                <div className="pass-role">
                  <p>{Role}</p>
                </div>
                <div className="pass-information">
                  <p>
                    <FontAwesomeIcon icon={faPhone} className="fsIcons" />
                    <span>{contact}</span>
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="faLocationDot"
                    />
                    <span>{Addr}</span>
                  </p>
                  {/* <p><span></span>{Adddate}</p> */}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
