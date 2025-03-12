import React from "react";
import "./ProjectCardStyles.css";
import MasonryLayout from "./MasonaryLayout";

const Project = () => {
  return (
    <div className="projects">
      <div className="projects-content">
        <div className="projects-text">
          <h1>My Projects</h1>
          <div className="projects-grid">
            <MasonryLayout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
