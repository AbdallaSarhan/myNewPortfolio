import "./AboutContentStyles.css";
import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import aboutPicture from "../../assets/AboutPicture.jpg";
import { FaGlobe, FaLightbulb, FaUsers, FaCode, FaBrain, FaDatabase, FaMobile } from "react-icons/fa";
// import backendIcon from "../assets/backend-icon.png";
// import webIcon from "../assets/web-icon.png";
// import mobileIcon from "../assets/mobile-icon.png";

const AboutContent = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="about new-about-section">
			<div className="about-content new-about-content">
				<p className="about-intro-label">INTRODUCTION</p>
				<h1 className="about-title">About Me</h1>
				<p className="about-description">
				I am a Computer Engineer driven by a passion to make a meaningful impact on people's lives through tech. I like to build mobile apps for fun, often starting with solving a problem I'm personally experiencing that others can benefit from too. My previous work experiences have given me a holistic overview and hands-on experience across various areas of software engineering and how they come together within an organization to develop, test, and deploy software. I've also gained hands-on experience with cloud technologies and DevOps practices, which has given me a deeper understanding of system design and infrastructure architecture. Lately, I have been exploring the application of machine learning and AI within my projects, and enjoy learning about system-level topics like Linux, enterprise computing and the mainframe.				</p>
				<div className="about-cards">
					<div className="about-card">
						<FaDatabase className="about-card-icon" style={{ color: '#00ffe7', fontSize: '3.2rem', marginBottom: '1.2rem' }} />
						<h2 className="about-card-title">Backend Developer</h2>
					</div>
					<div className="about-card">
						<FaGlobe className="about-card-icon" style={{ color: '#7f7fff', fontSize: '3.2rem', marginBottom: '1.2rem' }} />
						<h2 className="about-card-title">Web Developer</h2>
					</div>
					<div className="about-card">
						<FaMobile className="about-card-icon" style={{ color: '#ff6ec4', fontSize: '3.2rem', marginBottom: '1.2rem' }} />
						<h2 className="about-card-title">Mobile Developer</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutContent;
