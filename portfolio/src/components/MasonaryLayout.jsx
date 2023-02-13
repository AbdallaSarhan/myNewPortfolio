import React from "react";
import Masonry from "react-masonry-css";
import ProjectCardData from "./ProjectCardData";
import ProjectCard from "./ProjectCard";
import "./MasonaryLayoutStyles.css";

const breakpointObj = {
  default: 3,
  //   3000: 6,
  //   1200: 3,
  1000: 2,
  500: 1,
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
