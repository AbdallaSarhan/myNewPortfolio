import React from "react";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} color="white" style={{ marginRight: "2rem" }} />
            <div>
              <p>Toronto</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                color="white"
                style={{ marginRight: "2rem" }}
              />
              587-937-7321
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                color="white"
                style={{ marginRight: "2rem" }}
              />
              abdallasarhan128@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>
            I am a Computer Engineering student at York University - Lassonde
            School of Engineering. I am continuously learning Frontend and
            Backend web and mobile development.
          </p>
          <div className="social">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AbdallaSarhan"
            >
              <FaGithub
                size={30}
                color="white"
                style={{ marginRight: "1rem" }}
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.twitter.com/abdallaaax"
            >
              <FaTwitter
                size={30}
                color="white"
                style={{ marginRight: "1rem" }}
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/abdalla-sarhan-a80330204/"
            >
              <FaLinkedin
                size={30}
                color="white"
                style={{ marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
