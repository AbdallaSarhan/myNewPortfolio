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
						My passion for technology drives me to continuously explore web and
						mobile development, where I enjoy experimenting with new frameworks
						and technologies.
					</a.li>
					<a.li ref={ref} style={contentProps}>
						As a naturally curious and proactive learner, I am always eager to
						deepen my knowledge and refine my skills.
					</a.li>
					<a.li ref={ref} style={contentProps}>
						I thrive in diverse roles and welcome opportunities that challenge
						me to grow and expand my expertise.
					</a.li>
					<a.li ref={ref} style={contentProps}>
						With a strong attention to detail and a problem-solving mindset, I
						aim to contribute effectively to any team and deliver high-quality
						results.
					</a.li>

					<a.li style={contentProps}>
						I have a strong interest in entrepreneurship and enjoy exploring
						innovative ideas that blend technology and business to create
						impactful solutions.
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
