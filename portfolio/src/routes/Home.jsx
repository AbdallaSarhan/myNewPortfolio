import React, { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ElevatorPitch from "../components/elevator/ElevatorPitch";
import IntroSection from "../components/intro/IntroSection";
import SkillsSection from "../components/skills/SkillsSection";
import Timeline from "../components/timeline/Timeline";
import AboutContent from "../components/about/AboutContent";
import ProjectsHeader from "../components/projects/ProjectsHeader";
import ProjectsSection from "../components/projects/ProjectsSection";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <IntroSection />
      <AboutContent />
      {/* <ElevatorPitch /> */}
      <Timeline />
      <ProjectsHeader />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default Home;
