import React, { useState, useEffect } from "react";
import { animated as a, useSpring, useTrail } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { FaRocket, FaLightbulb, FaUsers, FaCode, FaGlobe, FaBrain } from "react-icons/fa";
import "./ElevatorPitchStyles.css";
import Headshot from "../../assets/Headshot.jpg";

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

	const paragraphProps = useSpring({
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
					About Me
				</a.h2>
				<div className="elevator-flex">
					<div className="elevator-img-container">
						<img src={Headshot} alt="Abdalla Sarhan" className="elevator-profile-img" />
					</div>
					<a.p className="elevator-paragraph" style={paragraphProps}>
						I am a Computer Engineer driven by a passion to make a meaningful impact on people's lives through tech. I like to build mobile apps for fun, often starting with solving a problem I'm personally experiencing that others can benefit from too. My previous work experiences have given me a holistic overview and hands-on experience across various areas of software engineering and how they come together within an organization to develop, test, and deploy software. I've also gained hands-on experience with cloud technologies and DevOps practices, which has given me a deeper understanding of system design and infrastructure architecture. Lately, I have been exploring the application of machine learning and AI within my projects, and enjoy learning about system-level topics like Linux, enterprise computing and the mainframe.
					</a.p>
				</div>
			</div>
		</div>
	);
};

export default ElevatorPitch;
