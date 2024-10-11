import React, { useEffect, useState } from "react";
import { useTrail, animated as a, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "./SkillsSectionStyles.css";

const skills = [
	"React.JS",
	"React Native",
	"JavaScript",
	"TypeScript",
	"Node",
	"Git",
	"Firebase",
	"MongoDB",
	"Java",
	"Python",
	"Spring Boot",
	"C",
	"HTML and CSS",
	"Verilog HDL",
];
const config = { mass: 5, tension: 2000, friction: 200 };
const ElevatorPitch = () => {
	const [show, setShowing] = useState(false);

	const { ref, inView } = useInView({});

	const trail = useTrail(skills.length, {
		config,
		opacity: show ? 1 : 0,
		x: show ? 0 : 20,
		height: show ? 80 : 0,
		from: { opacity: 0, x: 20, height: 0 },
	});

	const titleProps = useSpring({
		opacity: show ? 1 : 0.5,
		marginLeft: show ? 50 : -710,
		fontSize: show ? 65 : 25,
	});
	const listProps = useSpring({
		opacity: show ? 1 : 0,

		padding: "1.5rem",
		border: "2px dotted #508e63",
		borderRadius: "60px",
		boxShadow: "10px 10px 30px #508e63",
		fontFamily: "sans-serif",
		backgroundColor: "#3e6c60",
	});

	useEffect(() => {
		setShowing(inView);
	}, [inView]);
	return (
		<div className="skill-container">
			<a.h1 style={titleProps} className="title">
				Skills
			</a.h1>
			<div className="skill-sub-container">
				<a.ul className="sub-sub-container" style={listProps}>
					{trail.map(({ x, height, ...rest }, index) => (
						<a.div
							ref={ref}
							key={skills[index]}
							// className="trails-text"
							style={{
								...rest,
								transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
							}}
						>
							<a.li
								style={{
									color: "white",
									fontSize: 22,
									fontWeight: 500,
									maxWidth: "550px",
									marginLeft: 50,
									paddingRight: 90,
									paddingTop: 3,
									fontFamily: "sans-serif",
								}}
							>
								{skills[index]}
							</a.li>
						</a.div>
					))}
				</a.ul>
			</div>
		</div>
	);
};

export default ElevatorPitch;
