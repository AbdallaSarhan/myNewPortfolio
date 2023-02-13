import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import ElevatorPitch from "../components/ElevatorPitch";
import IntroSection from "../components/IntroSection";
import SkillsSection from "../components/SkillsSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <ElevatorPitch />
      <SkillsSection />
      <Footer />
    </div>
  );
};

export default Home;
