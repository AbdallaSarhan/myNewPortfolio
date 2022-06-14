import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} color="white" style={{ marginRight: "2rem" }} />
            <div>
              <p>123 Housing Society</p>
              <p>Canada</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                color="white"
                style={{ marginRight: "2rem" }}
              />
              1-1212-121-21
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                color="white"
                style={{ marginRight: "2rem" }}
              />
              admin@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>I am......... cooollll guy</p>
          <div className="social">
            <FaFacebook
              size={30}
              color="white"
              style={{ marginRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              color="white"
              style={{ marginRight: "1rem" }}
            />
            <NavLink to="https://www.linkedin.com/in/abdalla-sarhan-a80330204/"></NavLink>
            <FaLinkedin
              size={30}
              color="white"
              style={{ marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
