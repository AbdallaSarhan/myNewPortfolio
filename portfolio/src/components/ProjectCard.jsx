import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCardStyles.css";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";

const ProjectCard = (props) => {
  const projectBullets = props.text.split("-");
  const isPhoneScreen = props.title.toLowerCase() === "geosnap" || props.title.toLowerCase() === "campunity";

  return (
    <div className="project-card">
      <div className="img-container">
        <img 
          className={`proj-img ${isPhoneScreen ? "phone-screen" : ""}`} 
          src={props.img} 
          alt={`${props.title} screenshot`} 
        />
      </div>
      <div className="project-content">
        <h2 className="project-title">{props.title}</h2>
        <div className="project-details">
          <ul>
            {projectBullets.map((value, index) => {
              if (value.trim() === "") return null;
              return (
                <li key={index}>{value.trim()}</li>
              );
            })}
          </ul>
          <div className="project-btns">
            {props.view && (
              <a
                className="btn"
                href={props.view}
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt className="btn-icon" /> Live Demo
              </a>
            )}
            {!props.view && (
              <Link to={`/project/${props.title}`} className="btn">
                <FaInfoCircle className="btn-icon" /> Details
              </Link>
            )}
            {props.github && (
              <a
                className="btn"
                href={props.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="btn-icon" /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
