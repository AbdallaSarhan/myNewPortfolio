import React from "react";
import "./projects/ProjectCardStyles.css";
import MasonaryLayout from "./MasonaryLayout";
import ProjectsHeader from "./projects/ProjectsHeader";

const Project = () => {
  return (
    <div className="projects">
      <div className="projects-content">
        <ProjectsHeader />
        <div className="projects-header-divider" style={{ width: '80px', height: '4px', background: 'rgba(176,184,193,0.18)', borderRadius: '2px', margin: '0 auto 2.5rem auto' }} />
        <div className="projects-grid">
          <MasonaryLayout />
        </div>
      </div>
    </div>
  );
};

export default Project;
