import React, { useState, useEffect } from "react";
import headshot from "../assets/Headshot.jpg";
import resume from "../assets/Resume.pdf";
import { animated as a, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "./IntroSectionStyles.css";
import { ReactTyped } from "react-typed";
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
				<a.h1 ref={ref} className={"name"} style={headerProps}>
					Abdalla Sarhan
				</a.h1>
				<a.h4 className="sub-header" style={subHeaderProps}>
					<ReactTyped
						strings={[
							"Software Engineer",
							"Full Stack Developer",
							"Mobile Developer",
						]}
						typeSpeed={50}
						backSpeed={50}
						loop
					/>
				</a.h4>
			</div>

			<div className="sub-container">
				<a.div className="img-container" style={contentProps}>
					<img src={headshot} alt="Picture of me" className="img" />
				</a.div>
				<a.a
					href={resume}
					className="resume"
					target="_blank"
					style={subHeaderProps}
				>
					Resume
				</a.a>
			</div>
		</div>
	);
};

export default ElevatorPitch;
