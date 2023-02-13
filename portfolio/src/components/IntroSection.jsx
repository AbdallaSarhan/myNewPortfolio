import React, { useState, useEffect } from "react";
import me from "../assets/ME.jpeg";
import resume from "../assets/Abdalla_Sarhan_Resume_Latest.pdf";
import { animated as a, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "./IntroSectionStyles.css";
const ElevatorPitch = () => {
  const [show, setShowing] = useState(false);

  const { ref, inView } = useInView({});
  const headerProps = useSpring({
    opacity: show ? 1 : 0,
    marginLeft: show ? 0 : -810,
    fontSize: show ? 65 : 25,
  });
  const subHeaderProps = useSpring({
    opacity: show ? 1 : 0,
    marginTop: show ? 0 : -410,
    fontSize: show ? 25 : 10,
  });

  const contentProps = useSpring({
    opacity: show ? 1 : 0,
    marginRight: show ? 0 : -710,
  });

  useEffect(() => {
    setShowing(true);
  }, [inView]);
  return (
    <div className="container">
      <div className="title">
        <a.h1 ref={ref} className="title" style={headerProps}>
          Abdalla Sarhan
        </a.h1>
        <a.h4 className="sub-header" style={subHeaderProps}>
          Aspiring Software and Computer Engineer
        </a.h4>
      </div>

      <div className="sub-container">
        <a.div className="img-container" style={contentProps}>
          <img src={me} alt="Picture of me" className="img" />
        </a.div>
        <a.a href={resume} className="resume" download style={subHeaderProps}>
          Resume
        </a.a>
      </div>
    </div>
  );
};

export default ElevatorPitch;
