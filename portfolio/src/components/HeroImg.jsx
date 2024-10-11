import "./HeroImgStyles.css";
import React from "react";
import hammerImg from "../assets/pexels-antoni-shkraba-5475809.jpg";
import { Link } from "react-router-dom";
import logo from "../assets/Ball6.png";
const HeroImg = () => {
	return (
		<div className="hero">
			<div className="mask">
				<img className="intro-img" src={hammerImg} alt="work" />
			</div>
			<div className="content">
				<p>Abdalla Sarhan</p>
				<h1>Computer Engineering Student</h1>
				<div>
					<Link to="/projects" className="btn">
						Projects
					</Link>
					<Link to="/about" className="btn-light">
						About
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HeroImg;
