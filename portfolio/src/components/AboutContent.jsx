import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/socialbook.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm a Computer Engineering Student at York University</p>
        <Link to="/contact">
          <button className="btn"> Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={img} alt="img" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={img} alt="img" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
