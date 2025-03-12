import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ElevatorPitch from "../components/ElevatorPitch";
import IntroSection from "../components/IntroSection";
import SkillsSection from "../components/SkillsSection";
import Timeline from "../components/Timeline";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <IntroSection />
      <ElevatorPitch />
      <Timeline />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default Home;
