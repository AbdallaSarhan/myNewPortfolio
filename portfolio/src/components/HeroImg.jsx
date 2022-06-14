import "./HeroImgStyles.css";
import React from "react";
import hammerImg from "../assets/pexels-antoni-shkraba-5475809.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={hammerImg} alt="work" />
      </div>
      <div className="content">
        <p>HI, I'M A COMPUTER ENGINEERING STUDENT</p>
        <h1>Learning Frontend and Backend Since 2021</h1>
        <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
