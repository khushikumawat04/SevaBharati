import React from "react";
import "./EducationTab.css";
import { useTranslation } from "react-i18next";

const SwavalambanTab = () => {
  const { t } = useTranslation();

  const EducationData = [
    {
      id: 1,
      eimg: "svimage/Swalamban/Swavlamban - Computer Centre.jpeg",
      heading: t("SwavalambanTab.Initiative1.heading"),
      description: t("SwavalambanTab.Initiative1.description"),
    },
    {
      id: 2,
      eimg: "svimage/Swalamban/Swavlamban - Silai Kendra Sanchalan and Bag Making.jpeg",
      heading: t("SwavalambanTab.Initiative2.heading"),
      description: t("SwavalambanTab.Initiative2.description"),
    },
    {
      id: 3,
      eimg: "svimage/Swalamban/Swavlamban - Silai Kendra Sanchalan-2.jpeg",
      heading: t("SwavalambanTab.Initiative3.heading"),
      description: t("SwavalambanTab.Initiative3.description"),
    },
    {
      id: 4,
      eimg: "svimage/Swalamban/Mehndi.png",
      heading: t("SwavalambanTab.Initiative4.heading"),
      description: t("SwavalambanTab.Initiative4.description"),
    },
    {
      id: 5,
      eimg: "svimage/Swalamban/soundrayacare.jpeg",
      heading: t("SwavalambanTab.Initiative5.heading"),
      description: t("SwavalambanTab.Initiative5.description"),
    },
    {
      id: 6,
      eimg: "svimage/Swalamban/ganeshji.jpg",
      heading: t("SwavalambanTab.Initiative6.heading"),
      description: t("SwavalambanTab.Initiative6.description"),
    },
  ];

  return (
    <div className="tab-section-container">
      <div className="tab-section-intro">
        <div className="tab-section-content">
          <h1>{t("SwavalambanTab.Heading")}</h1>
          <p>{t("SwavalambanTab.IntroParagraph")}</p>
        </div>
        <div className="tab-section-img">
          <video controls autoPlay muted playsInline loop>
            <source src="svimage/Swalamban/silaikendra.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="tab-section-cards">
        <h2>{t("SwavalambanTab.InitiativesHeading")}</h2>
        <hr />
        <div className="tab-section-card-container">
          {EducationData.map((elem) => {
            const { heading, eimg, description } = elem;
            const isVideo = eimg.endsWith(".mp4");
            return (
              <div className="ecard" key={elem.id}>
                {isVideo ? (
                  <video
                    controls
                    height={300}
                    width={600}
                    autoPlay
                    muted
                    playsInline
                    loop
                  >
                    <source src={eimg} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={eimg} alt={heading} />
                )}
                <h3>{heading}</h3>
                <span className="heading-line"></span>
                {/* <p>{description}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SwavalambanTab;
