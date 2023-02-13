import "./AboutContentStyles.css";
import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import aboutPicture from "../assets/AboutPicture.jpg";

const AboutContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <div className="container">
        <h1
          style={{
            color: "#bd6666",
            fontSize: 50,
            fontFamily: "fantasy",
            maxWidth: "550px",
            paddingBottom: 20,
          }}
        >
          Who I Am
        </h1>
        <div className="sub-container">
          <h4
            style={{
              maxWidth: "500px",
              marginLeft: 20,
              fontFamily: "fantasy",
            }}
          >
            I am originally from Egypt, but I’ve been living in Canada for more
            then a decade. From a young age, living in different places across
            Canada introduced me to many ideologies about how people live, treat
            one another, and they're values. These environments have shaped me
            to be a very open minded person and made it easy for me to
            communicate and understand others.
          </h4>
        </div>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={aboutPicture} alt="img" className="img" />
          </div>
          <div className="img-stack bottom">
            <img
              src={aboutPicture}
              alt="img"
              className="img"
              style={{ objectFit: "contained" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
