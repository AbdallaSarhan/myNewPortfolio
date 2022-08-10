import React from "react";
import "./ProjectCardStyles.css";
import ProjectCard from "./ProjectCard";
import ProjectCardData from "./ProjectCardData";

const Project = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((value, index) => {
          return (
            <ProjectCard
              key={index}
              id={value.id}
              img={value.img}
              title={value.title}
              text={value.text}
              view={value.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
