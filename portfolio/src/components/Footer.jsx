import React from "react";
import {
	FaGithub,
	FaHome,
	FaLinkedin,
	FaMailBulk,
	FaPhone,
	FaTwitter,
} from "react-icons/fa";

import "./FooterStyles.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="left">
					<div className="location" style={{ paddingBottom: 20 }}>
						<FaHome size={20} color="white" style={{ marginRight: "2rem" }} />
						<div>
							<p>Toronto</p>
						</div>
					</div>
					<div className="phone" style={{ paddingBottom: 20 }}>
						<h4>
							<FaPhone
								size={20}
								color="white"
								style={{ marginRight: "2rem" }}
							/>
							587-937-7321
						</h4>
					</div>
					<div className="email" style={{ paddingBottom: 20 }}>
						<h4>
							<FaMailBulk
								size={20}
								color="white"
								style={{ marginRight: "2rem" }}
							/>
							abdallasarhan128@gmail.com
						</h4>
					</div>
				</div>
				<div className="right">
					<h4>About Me</h4>
					<p>
						My passion is in building innovative solutions to real-world
						problems through software. With hands on experience in full stack
						development and cloud platforms like AWS and GCP, I leverage
						containerization technologies such as Docker and Kubernetes to
						create scalable, efficient systems.
					</p>
					<div className="social">
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/AbdallaSarhan"
						>
							<FaGithub
								className="icon"
								size={30}
								color="#171515"
								style={{ marginRight: "1rem" }}
							/>
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.twitter.com/abdallaaax"
						>
							<FaTwitter
								className="icon"
								size={30}
								color="#00acee"
								style={{ marginRight: "1rem" }}
							/>
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.linkedin.com/in/abdalla-sarhan-a80330204/"
						>
							<FaLinkedin
								className="icon"
								size={30}
								color="#0072b1"
								style={{ marginRight: "1rem" }}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
