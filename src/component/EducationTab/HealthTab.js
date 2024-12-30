import React from "react";
import "./EducationTab.css";
import { useTranslation } from "react-i18next";

const HealthTab = () => {
  const { t } = useTranslation();

  const HealthData = [
    {
      id: 1,
      eimg: "svimage/Health/Health - Swasthya Parikshan and Upchar-3.jpeg",
      heading: t("HealthTab.Initiative1.heading"),
      description: t("HealthTab.Initiative1.description"),
    },
    {
      id: 2,
      eimg: "svimage/Health/Health - Swasthya Parikshan and Upchar-1.jpeg",
      heading: t("HealthTab.Initiative2.heading"),
      description: t("HealthTab.Initiative2.description"),
    },
    {
      id: 3,
      eimg: "svimage/Health/HealthEducayion.jpeg",
      heading: t("HealthTab.Initiative3.heading"),
      description: t("HealthTab.Initiative3.description"),
    },
    {
      id: 4,
      eimg: "svimage/Health/Health - Kishori Swasthya Parikshan-3.jpeg",
      heading: t("HealthTab.Initiative4.heading"),
      description: t("HealthTab.Initiative4.description"),
    },
    {
      id: 5,
      eimg: "svimage/Health/Health- Help centre at District Hospital Khargone.jpeg",
      heading: t("HealthTab.Initiative5.heading"),
      description: t("HealthTab.Initiative5.description"),
    },
    {
      id: 6,
      eimg: "svimage/Health/health1.jpg",
      heading: t("HealthTab.Initiative6.heading"),
      description: t("HealthTab.Initiative6.description"),
    },
  ];

  return (
    <div className="tab-section-container">
      <div className="tab-section-intro">
        <div className="tab-section-content">
          <h1>{t("HealthTab.Heading")}</h1>
          <p>{t("HealthTab.IntroParagraph")}</p>
        </div>
        <div className="tab-section-img">
          <video controls autoPlay muted playsInline loop>
            <source src="svimage/Health/sahayata Kendra.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="tab-section-cards">
        <h2>{t("HealthTab.InitiativesHeading")}</h2>
        <hr />
        <div className="tab-section-card-container">
          {HealthData.map((elem) => {
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

export default HealthTab;
