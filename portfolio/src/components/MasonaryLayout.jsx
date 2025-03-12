import React from "react";
import Masonry from "react-masonry-css";
import ProjectCardData from "./ProjectCardData";
import ProjectCard from "./ProjectCard";
import "./MasonaryLayoutStyles.css";

const breakpointObj = {
  default: 3,
  1200: 2,
  800: 1,
};

const MasonryLayout = ({ projects }) => {
  return (
    <Masonry
      breakpointCols={breakpointObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
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
    </Masonry>
  );
};

export default MasonryLayout;
