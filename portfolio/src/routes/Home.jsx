import React from "react";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import ElevatorPitch from "../components/ElevatorPitch";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <ElevatorPitch />
      <Footer />
    </div>
  );
};

export default Home;
