import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import WelcomeScreen from "../assets/WelcomeScreen.png";
import LoginScreen from "../assets/LoginScreen.png";
import FailLogin from "../assets/FailLoginScreen.png";
import Dashboard from "../assets/Dashboard.png";
import PostsScreen from "../assets/PostsScreen.png";
import PostTripScreen from "../assets/PostTripScreen.png";
import "../components/ProjectDetailStyles.css";
import { useEffect } from "react";

export const ProjectDetails = () => {
  let { title } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (title === "Autonomous Plant Watering") {
    return (
      <>
        <Navbar />
        <HeroImg2 heading="No More Details for" text={title} />
        <Footer />
      </>
    );
  } else if (title === "WhereTo") {
    return (
      <>
        <Navbar />
        <HeroImg2 heading={`Project Details: ${title}`} />
        <div className="info">
          <h4>
            Yes, this is the home screen. The design could definitely use some
            work
          </h4>
          <img src={WelcomeScreen} alt="" className="projectImg" />
          <h4>
            The Login Requires a Registration with a valid email format
            (example@example.example)
          </h4>
          <img src={LoginScreen} alt="" className="projectImg" />
          <h4>
            If you haven't Registered yet, a notification will pop up notifying
            you that the server couldn't find you in the database.
          </h4>
          <img src={FailLogin} alt="" className="projectImg" />
          <h4>
            Once you login or register succesfully you are Welcomed with the
            dashboard (Note: Test is the name of the logged in user in this case
            which is why "test" shows as the name under welcome)
          </h4>
          <img src={Dashboard} alt="" className="projectImg" />
          <h4>This is where you are able to post your trip details</h4>
          <img src={PostTripScreen} alt="" className="projectImg" />
          <h4>
            You can come and see who has posted their trip details. Note that
            the "Allowing" section of the posts was a an idea that I've decided
            to migrate to a different project that currently working on
          </h4>
          <img src={PostsScreen} alt="" className="projectImg" />
        </div>

        <Footer />
      </>
    );
  }
};
