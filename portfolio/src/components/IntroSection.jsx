import React, { useState, useEffect } from "react";
import headshot from "../assets/Headshot.jpg";
import resume from "../assets/Resume.pdf";
import { animated as a, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "./IntroSectionStyles.css";
import { ReactTyped } from "react-typed";
import { FaFileAlt } from "react-icons/fa";

const IntroSection = () => {
	const [show, setShowing] = useState(false);
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true
	});

	const headerProps = useSpring({
		opacity: show ? 1 : 0,
		transform: show ? "translateY(0)" : "translateY(20px)",
		config: { mass: 1, tension: 180, friction: 12 }
	});

	const imageProps = useSpring({
		opacity: show ? 1 : 0,
		transform: show ? "translateY(0)" : "translateY(40px)",
		delay: 200,
		config: { mass: 1, tension: 180, friction: 12 }
	});

	useEffect(() => {
		setShowing(inView);
	}, [inView]);

	return (
		<div className="container">
			<div className="intro-content" ref={ref}>
				<div className="title-section">
					<a.h1 className="name" style={headerProps}>
						Abdalla Sarhan
					</a.h1>
					<a.h4 className="sub-header" style={headerProps}>
						<ReactTyped
							strings={[
								"Software Engineer",
								"Full Stack Developer",
								"Mobile Developer",
								"Problem Solver",
								"Innovation Enthusiast"
							]}
							typeSpeed={50}
							backSpeed={50}
							loop
						/>
					</a.h4>
					<a.a
						href={resume}
						className="resume"
						target="_blank"
						rel="noopener noreferrer"
						style={headerProps}
					>
						<FaFileAlt /> View Resume
					</a.a>
				</div>

				<a.div className="img-container" style={imageProps}>
					<img src={headshot} alt="Abdalla Sarhan" className="img" />
				</a.div>
			</div>
		</div>
	);
};

export default IntroSection;
