import React from "react";
import "./EducationTab.css";
import { useTranslation } from "react-i18next";

const SamajikTab = () => {
  const { t } = useTranslation();

  const EducationData = [
    {
      id: 1,
      eimg: "svimage/SamajikAyam/Samajik - eShram Card for Shramik-2.jpeg",
      heading: t("SamajikTab.Initiative1.heading"),
      description: t("SamajikTab.Initiative1.description"),
    },
    {
      id: 2,
      eimg: "svimage/SamajikAyam/Samajik - Training for SHG Members.jpeg",
      heading: t("SamajikTab.Initiative2.heading"),
      description: t("SamajikTab.Initiative2.description"),
    },
    {
      id: 3,
      eimg: "svimage/SamajikAyam/Samajik - eShram Card Distribution.jpeg",
      heading: t("SamajikTab.Initiative3.heading"),
      description: t("SamajikTab.Initiative3.description"),
    },
    {
      id: 4,
      eimg: "svimage/Health/Health - Kishori Swasthya Parikshan-3.jpeg",
      heading: t("SamajikTab.Initiative4.heading"),
      description: t("SamajikTab.Initiative4.description"),
    },
    {
      id: 5,
      eimg: "svimage/SamajikAyam/Samajik - eShram Card awareness on Shivaji Maharaj Jayanti.jpeg",
      heading: t("SamajikTab.Initiative5.heading"),
      description: t("SamajikTab.Initiative5.description"),
    },
    {
      id: 6,
      eimg: "",
      heading: t("SamajikTab.Initiative6.heading"),
      description: t("SamajikTab.Initiative6.description"),
    },
  ];

  return (
    <div className="tab-section-container">
      <div className="tab-section-intro">
        <div className="tab-section-content">
          <h1>{t("SamajikTab.Heading")}</h1>
          <p>{t("SamajikTab.IntroParagraph")}</p>
        </div>
        <div className="tab-section-img">
          <video controls autoPlay muted playsInline loop>
            <source
              src="svimage/SamajikAyam/samajik(video).mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="tab-section-cards">
        <h2>{t("SamajikTab.InitiativesHeading")}</h2>
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

export default SamajikTab;
