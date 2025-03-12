import "./AboutContentStyles.css";
import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import aboutPicture from "../assets/AboutPicture.jpg";
import { FaGlobe, FaLightbulb, FaUsers, FaCode, FaBrain } from "react-icons/fa";

const AboutContent = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="about">
			<div className="about-content">
				<div className="about-text">
					<h1>About Me</h1>
					<div className="bio-section">
						<p className="bio-intro">
							Originally from Egypt and raised in Canada, my journey across different regions has shaped me into a versatile and adaptable individual. Through these diverse experiences and environments, I've developed a deep appreciation for different perspectives and innovative approaches to problem-solving. This unique background, combined with my technical skills, enables me to bring fresh insights and creative solutions to every project I undertake.
						</p>
						
						<div className="key-points">
							<div className="key-point">
								<FaGlobe className="key-icon" />
								<h3>Global Perspective</h3>
								<p>My multicultural background has given me a unique lens through which I view challenges and opportunities in software development.</p>
							</div>

							<div className="key-point">
								<FaLightbulb className="key-icon" />
								<h3>Innovation Driven</h3>
								<p>I combine technical expertise with creative problem-solving to build solutions that make a real impact.</p>
							</div>

							<div className="key-point">
								<FaUsers className="key-icon" />
								<h3>Collaborative Spirit</h3>
								<p>My diverse background has enhanced my ability to communicate effectively and work seamlessly in cross-cultural teams.</p>
							</div>

							<div className="key-point">
								<FaCode className="key-icon" />
								<h3>Technical Excellence</h3>
								<p>Passionate about clean code and modern technologies, I strive to create efficient and scalable solutions.</p>
							</div>

							<div className="key-point">
								<FaBrain className="key-icon" />
								<h3>AI Enthusiast</h3>
								<p>Deeply fascinated by Machine Learning and AI, actively exploring their applications in solving complex real-world problems.</p>
							</div>
						</div>
					</div>
				</div>

				<div className="about-image">
					<div className="img-container">
						<img src={aboutPicture} alt="Abdalla Sarhan" className="profile-img" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutContent;
