import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCardStyles.css";

const ProjectCard = (props) => {
  const projectBullets = props.text.split("-");
  return (
    <div className="project-card">
      <img className="proj-img" src={props.img} alt="project image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        {projectBullets.map((value, index) => {
          if (value === "") {
            projectBullets[index] = null;
          } else {
            return (
              <li style={{ color: "white", paddingBottom: 15 }}>{value}</li>
            );
          }
        })}
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
