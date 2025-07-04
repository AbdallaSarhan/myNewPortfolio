import React, { useEffect, useState } from "react";
import { useTrail, animated as a, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { 
	FaReact, 
	FaMobile, 
	FaJs, 
	FaNodeJs, 
	FaGitAlt, 
	FaDatabase, 
	FaJava, 
	FaPython, 
	FaLeaf, 
	FaCode, 
	FaHtml5,
	FaMicrochip,
	FaFlask,
	FaDocker,
	FaAws
} from "react-icons/fa";
import { SiTypescript, SiFirebase } from "react-icons/si";
import "./SkillsSectionStyles.css";

const skills = [
	{ name: "Java", icon: <FaJava /> },
	{ name: "Python", icon: <FaPython /> },
	{ name: "TypeScript", icon: <SiTypescript /> },
	{ name: "JavaScript", icon: <FaJs /> },
	{ name: "C", icon: <FaCode /> },
	{ name: "Spring Boot", icon: <FaLeaf /> },
	{ name: "Flask", icon: <FaFlask /> },
	{ name: "React Native", icon: <FaMobile /> },
	{ name: "React.JS", icon: <FaReact /> },
	{ name: "Node", icon: <FaNodeJs /> },
	{ name: "Git", icon: <FaGitAlt /> },
	{ name: "Firebase", icon: <SiFirebase /> },
	{ name: "MongoDB", icon: <FaDatabase /> },
	{ name: "Docker", icon: <FaDocker /> },
	{ name: "AWS", icon: <FaAws /> },
];

const SkillsSection = () => {
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

	const trail = useTrail(skills.length, {
		opacity: show ? 1 : 0,
		transform: show ? "translateY(0)" : "translateY(20px)",
		config: { mass: 1, tension: 180, friction: 12 },
		delay: 200
	});

	useEffect(() => {
		setShowing(inView);
	}, [inView]);

	return (
		<div className="skills-section">
			<div className="skills-content" ref={ref}>
				<a.h2 className="skills-title" style={titleProps}>
					Skills & Technologies
				</a.h2>
				<div className="skills-grid">
					{trail.map((style, index) => (
						<a.div
							key={skills[index].name}
							className="skill-item"
							style={style}
						>
							<div className="skill-icon">
								{skills[index].icon}
							</div>
							<p className="skill-name">{skills[index].name}</p>
						</a.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SkillsSection;
