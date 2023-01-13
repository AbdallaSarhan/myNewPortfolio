import React from "react";
import me from "../assets/ME.jpeg";
import resume from "../assets/Abdalla_Sarhan_Resume_Latest.pdf";
import "./ElevatorPitchStyles.css";
const ElevatorPitch = () => {
  return (
    <div className="container">
      <div className="img-container">
        <img src={me} alt="Picture of me" className="img" />
      </div>
      <a href={resume} className="resume" download>
        Download Resume
      </a>

      <div className="desc">
        <h4>
          Hey there, My name is Abdalla Sarhan and I'm going into my third year
          of Computer Engineering at York University. I am an aspring Full Stack
          Developer and I've been learning and experimenting with web
          development for over a year and have recently gotten into mobile
          development with React Native.
        </h4>
        <h4>
          Initially, I didn't have a vision for what I wanted to do after high
          school. I decided to give Engineering a shot since I was good at Math
          and Science. After completing my second year, I got a taste of the
          content I’ll be learning that is more related to the career I am
          trying to pursue and surprisingly I’ve grown a passion and enjoyment
          for coding and the field of Computer Engineering. I’m looking forward
          to the content I’ll be learning in my degree next, and I think my eye
          for details and determination to reach my goals will fuel my success
          in my career.
        </h4>
      </div>
    </div>
  );
};

export default ElevatorPitch;
