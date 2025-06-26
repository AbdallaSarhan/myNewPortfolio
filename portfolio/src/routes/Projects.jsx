import React, { useEffect } from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Project from "../components/Project";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Navbar />
      <Project />
      <Footer />
    </div>
  );
};

export default Projects;
