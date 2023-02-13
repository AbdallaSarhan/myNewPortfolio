import React, { useState, useEffect } from "react";
import { animated as a, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "./ElevatorPitchStyles.css";
const ElevatorPitch = () => {
  const [show, setShowing] = useState(false);

  const { ref, inView } = useInView({});

  const headerProps = useSpring({
    opacity: show ? 1 : 0,
    // marginRight: show ? 0 : -710,
    marginRight: show ? 60 : -710,
    fontSize: show ? 65 : 25,
  });
  const contentProps = useSpring({
    opacity: show ? 1 : 0,
    marginRight: show ? 0 : -710,
    color: show ? "white" : "black",
    fontSize: 18,
    fontWeight: 600,
    paddingBottom: 20,
    // marginLeft: show ? -150 : -710,
  });
  useEffect(() => {
    setShowing(inView);
  }, [inView]);
  return (
    <div className="container">
      <a.div className="summary-container" style={contentProps}>
        <a.div className="summary ">
          <a.li ref={ref} style={contentProps}>
            Third year student studying a BEng specialized in Computer
            Engineering at York University.
          </a.li>
          <a.li ref={ref} style={contentProps}>
            My interests have led me in the direction of full stack development
            and I've been learning and experimenting with web and mobile
            development ever since.
          </a.li>
          <a.li ref={ref} style={contentProps}>
            Naturally, I am a very curious person and love continuously learning
            and filling the gaps in my understanding.
          </a.li>
          <a.li ref={ref} style={contentProps}>
            I'm open to being involved in many different roles to try new things
            and aquire new knowledge.
          </a.li>

          <a.li style={contentProps}>
            I believe my eye for detail and determination for solving complex
            problems will help me achieve my targets and be a valuable asset to
            any team.
          </a.li>
        </a.div>
      </a.div>
      <a.h1 className="title" style={headerProps}>
        Summary
      </a.h1>
    </div>
  );
};

export default ElevatorPitch;
