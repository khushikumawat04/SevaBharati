import React from "react";
import "./EducationTab.css";
import { useTranslation } from "react-i18next";

const EducationTab = () => {
  const { t } = useTranslation();

  const EducationData = [
    {
      id: 1,
      eimg: "svimage/Education/disha(vid).mp4",
      heading: t("EducationTab.Initiative1.heading"),
      discription: t("EducationTab.Initiative1.description"),
    },
    {
      id: 2,
      eimg: "svimage/Education/dishacomp.mp4",
      heading: t("EducationTab.Initiative2.heading"),
      discription: t("EducationTab.Initiative2.description"),
    },
    {
      id: 3,
      eimg: "svimage/Education/balsanskar4.jpeg",
      heading: t("EducationTab.Initiative3.heading"),
      discription: t("EducationTab.Initiative3.description"),
    },
    {
      id: 4,
      eimg: "svimage/Education/balsanskar2.jpeg",
      heading: t("EducationTab.Initiative3.heading"),
      discription: t("EducationTab.Initiative3.description"),
    },
    {
      id: 5,
      eimg: "svimage/Education/balsanskar1.jpeg",
      heading: t("EducationTab.Initiative3.heading"),
      discription: t("EducationTab.Initiative3.description"),
    },
    {
      id: 6,
      eimg: "svimage/Education/Education - Gram Pathshala.jpeg",
      heading: t("EducationTab.Initiative4.heading"),
      discription: t("EducationTab.Initiative4.description"),
    },
  ];

  return (
    <div className="tab-section-container">
      <div className="tab-section-intro">
        <div className="tab-section-content">
          <h1>{t("EducationTab.Heading")}</h1>
          <p>
            {t("EducationTab.IntroParagraph")}
            <br />
          </p>
        </div>
        <div className="tab-section-img">
          <img
            src="svimage/Education/Edcuation - Sanskaar Kenrda-1.jpeg"
            alt="Education"
          />
        </div>
      </div>

      <div className="tab-section-cards">
        <h2>{t("EducationTab.InitiativesHeading")}</h2>
        <hr />
        <div className="tab-section-card-container">
          {EducationData.map((elem) => {
            const { heading, eimg, discription } = elem;
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
                  <img src={eimg} alt="Education" />
                )}
                <h3>{heading}</h3>
                <span className="heding-line"></span>
                {/* <p>{discription}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EducationTab;
