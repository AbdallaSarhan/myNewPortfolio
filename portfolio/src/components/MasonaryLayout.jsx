import React from "react";
import ProjectCardData from "./projects/ProjectCardData";
import ProjectCard from "./projects/ProjectCard";
import "./projects/ProjectCardStyles.css";
import "./MasonaryLayoutStyles.css";

const MasonaryLayout = () => {
  return (
    <div className="project-grid-layout">
      {ProjectCardData.map((value, index) => (
        <ProjectCard
          key={index}
          id={value.id}
          img={value.img}
          title={value.title}
          text={value.text}
          view={value.view}
          github={value.github}
          tags={value.tags}
          appStore={value.appStore}
          features={value.features}
        />
      ))}
    </div>
  );
};

export default MasonaryLayout;
