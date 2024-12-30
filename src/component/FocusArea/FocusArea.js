import React from "react";
import "./FocusArea.css";
import { Link } from "react-router-dom";

const FocusArea = () => {
  return (
    <div>
      <div className="FocusArea-head">
        <h1 class="FocusArea-heading">Focus Areas</h1>
        <p className="FocusArea-paragraph">
          We are dedicated to empowering disabled individuals, promoting women's
          rights, and providing essential healthcare to those in need to make a
          positive impact in communities
        </p>
      </div>
      <div className="FocusArea-container">
        <a href="/education">
          {" "}
          <Link to="/education">
            <div className="FocusArea-card">
              <a href="/">
                <img
                  class="FocusArea-box-img"
                  src="images/open-book.png"
                  alt=""
                />
              </a>
              <a href="/" className="FocusArea-box-text">
                Education
              </a>
              <p className="FocusArea-box-description">
                Rural India is the actual soul of the country where a maximum of
                its population resides yet it is also the most neglected and
                ignored
              </p>
            </div>
          </Link>
        </a>

        <div className="FocusArea-card">
          <a href="/">
            <img class="FocusArea-box-img" src="images/heart-beat.png" alt="" />
          </a>
          <a href="/Womenempowerment" className="FocusArea-box-text">
            Health
          </a>
          <p className="FocusArea-box-description">
            There are so many people around us who can’t support themselves in
            case of any unexpected accidents or diseases. So, we are providing
            medical support.
          </p>
        </div>
        <a>
          <Link to="/samajik-ayam">
            <div className="FocusArea-card">
              <a href="/Healthsection">
                <img
                  class="FocusArea-box-img"
                  src="images/samajik-aayam.png"
                  alt=""
                />
              </a>
              <a href="/Healthsection" className="FocusArea-box-text">
                Samajik Aayam
              </a>
              <p className="FocusArea-box-description">
                Samajik Aayam is committed to addressing the various social
                dimensions affected by COVID-19.
              </p>
            </div>
          </Link>
        </a>
        <a>
          <Link to="/savalamban">
            <div className="FocusArea-card">
              <a href="/Healthsection">
                <img
                  class="FocusArea-box-img"
                  src="images/Swavalamban1.png"
                  alt=""
                />
              </a>
              <a href="/Healthsection" className="FocusArea-box-text">
                Svavlamban
              </a>
              <p className="FocusArea-box-description">
                Svavlamban offers a range of vocational and creative services
                aimed at empowering individuals and promoting self-reliance.
              </p>
            </div>
          </Link>
        </a>
        <div className="FocusArea-card">
          <a href="/Healthsection">
            <img class="FocusArea-box-img" src="images/old.png" alt="" />
          </a>
          <a href="/Healthsection" className="FocusArea-box-text">
            Wardh Jan Seva Kendra
          </a>
          <p className="FocusArea-box-description">
            Wardh Jan Seva Kendra provides comprehensive services for senior
            citizens through its Old Age Home, which includes residential care
            and Medical services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FocusArea;
