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
      <div className="left">
        <h1>Who I Am </h1>
        <p>
          I am originally from Egypt, but I’ve lived in Canada for over 10
          years. My life consisted of a lot of moving around. Living in
          different places gave me a lot of different perspectives in terms of
          how people live, treat one another, and they're values. Because of
          this, I’ve grown to be very open minded and easily understand other
          people’s perspectives. This has also made me a great communicator when
          it comes to interacting with new people.
        </p>
        <h1 style={{ marginTop: "50px" }}>Experience with:</h1>
        <div>
          <li style={{ color: "white" }}>React and Node.js</li>
          <li style={{ color: "white" }}>Scala and ZIO</li>
          <li style={{ color: "white" }}>Java and Spring Boot</li>
          <li style={{ color: "white" }}>SQL and noSQL databases</li>
          <li style={{ color: "white" }}>python</li>
          <li style={{ color: "white" }}>Docker</li>
          <li style={{ color: "white" }}>AWS</li>
          <li style={{ color: "white" }}>Git</li>
          <li style={{ color: "white" }}>Backstage developer platform</li>
        </div>
        {/* <Link to="/contact">
          <button className="btn"> Contact</button>
        </Link> */}
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
