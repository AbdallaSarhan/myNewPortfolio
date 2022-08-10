import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCardStyles.css";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.img} alt="project image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.text}</p>
        <div className="project-btns">
          {props.view === "" ? (
            <Link to={`/project/${props.title}`} className="btn">
              More
            </Link>
          ) : (
            <>
              <a
                className="btn"
                href={props.view}
                target="_blank"
                rel="noreferrer"
              >
                View
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
