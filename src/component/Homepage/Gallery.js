import React, { useState } from "react";
import "./Homepage.css";
import { VscChromeClose } from "react-icons/vsc";

export default function Gallery() {
  const imageData = [
    {
      id: 1,
      imagesrc: "images/Upsthit_Janmanas.jpeg.jpg",
      alt: "State Award",
    },
    {
      id: 2,
      imagesrc: "images/Purushkar_to_Sanskar_Kendra-4.jpeg.jpg",
      alt: "Shirady Saibaba Visit",
    },
    {
      id: 3,
      imagesrc: "svimage/Education/Edcuation - Sanskaar Kenrda-4.jpeg",
      alt: "Padubidri",
    },
    {
      id: 4,
      imagesrc: "svimage/Health/HealthEducayion.jpeg",
      alt: "Inauguration of 16th Camp Ambalpaddy",
    },
    {
      id: 5,
      imagesrc: "svimage/Programs/Computercentre/c_5.png",
      alt: "Gandhijayanthi at Sevadhama",
    },

    {
      id: 6,
      imagesrc: "svimage/Programs/Majoranuradha/anradhaSmriti1.png",
      alt: "Fundraising",
    },
    {
      id: 7,
      imagesrc: "svimage/Programs/disastermanament.jpeg",
      alt: "Felicitation to Vinayak",
    },
    {
      id: 8,
      imagesrc: "svimage/SamajikAyam/Samajik - Training for SHG Members.jpeg",
      alt: "Donation from Balakrishna Naimisha",
    },
    {
      id: 9,
      imagesrc: "svimage/SamajikAyam/Samajik - eShram Card for Shramik-2.jpeg",
      alt: "Camp 1",
    },
    {
      id: 10,
      imagesrc: "svimage/Swalamban/Mehndi.png",
      alt: "Blood Donation Camp Ujire",
    },
    {
      id: 11,
      imagesrc: "svimage/Swalamban/Swavlamban - Silai Kendra Sanchalan-2.jpeg",
      alt: "16th Medical Camp",
    },
    {
      id: 12,
      imagesrc: "svimage/Swalamban/soundrayacare.jpeg",
      alt: "Gandhijayanthi at Sevadhama",
    },
    {
      id: 13,
      imagesrc: "images/holi1.jpg",
      alt: "Gandhijayanthi at Sevadhama",
    },
    {
      id: 14,
      imagesrc: "svimage/Swalamban/ganeshji.jpg",
      alt: "Gandhijayanthi at Sevadhama",
    },
  ];
  const [model, setModel] = useState(false);
  const [temimgSrc, setTempimgsrc] = useState("");
  const getImage = (imagSrc) => {
    setTempimgsrc(imagSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={temimgSrc} />
        <a onClick={() => setModel(false)}>
          <VscChromeClose />
        </a>
      </div>

      <div className="gallery">
        {imageData.map((item) => {
          const { id, imagesrc, alt } = item;
          return (
            <>
              <div className="image-container">
                <img
                  src={imagesrc}
                  alt={alt}
                  onClick={() => getImage(imagesrc)}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
