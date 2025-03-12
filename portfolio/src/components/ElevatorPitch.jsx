import React, { useState, useEffect } from "react";
import { animated as a, useSpring, useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { FaRocket, FaLightbulb, FaUsers, FaCode, FaGlobe, FaBrain } from "react-icons/fa";
import "./ElevatorPitchStyles.css";

const summaryPoints = [
	{
		text: "Driven by innovation, I specialize in crafting cutting-edge web and mobile solutions using modern frameworks and emerging technologies. Every project is an opportunity to push boundaries and create exceptional user experiences.",
		icon: <FaRocket />
	},
	{
		text: "With a global perspective shaped by diverse cultural experiences, I bring unique insights to software development. My background enables me to approach challenges with creativity and adaptability.",
		icon: <FaGlobe />
	},
	{
		text: "I thrive in collaborative environments where I can contribute to ambitious projects and learn from talented peers. My experience spans from startup innovations to enterprise-scale solutions.",
		icon: <FaUsers />
	},
	{
		text: "Committed to technical excellence, I focus on writing clean, maintainable code and building scalable architectures. I stay at the forefront of technology trends to deliver modern, efficient solutions.",
		icon: <FaCode />
	},
	{
		text: "Passionate about AI and Machine Learning, I actively explore innovative ways to integrate these technologies into practical applications. I'm particularly interested in developing intelligent solutions that solve complex real-world challenges.",
		icon: <FaBrain />
	},
	{
		text: "Beyond coding, I'm passionate about solving real-world problems through technology. I combine technical expertise with business acumen to create solutions that drive meaningful impact.",
		icon: <FaLightbulb />
	}
];

const ElevatorPitch = () => {
	const [show, setShowing] = useState(false);
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true
	});

	const titleProps = useSpring({
		opacity: show ? 1 : 0,
		transform: show ? "translateY(0)" : "translateY(20px)",
		config: { mass: 1, tension: 180, friction: 12 }
	});

	const trail = useTrail(summaryPoints.length, {
		opacity: show ? 1 : 0,
		transform: show ? "translateY(0)" : "translateY(20px)",
		config: { mass: 1, tension: 180, friction: 12 },
		delay: 200
	});

	useEffect(() => {
		setShowing(inView);
	}, [inView]);

	return (
		<div className="elevator-pitch">
			<div className="elevator-content" ref={ref}>
				<a.h2 className="elevator-title" style={titleProps}>
					Professional Overview
				</a.h2>
				<div className="summary-container">
					{trail.map((style, index) => (
						<a.div
							key={index}
							className="summary-point"
							style={style}
						>
							<div className="summary-icon">
								{summaryPoints[index].icon}
							</div>
							<p>{summaryPoints[index].text}</p>
						</a.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ElevatorPitch;
