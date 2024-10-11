import "./AboutContentStyles.css";
import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import aboutPicture from "../assets/AboutPicture.jpg";

const AboutContent = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="about">
			{/* <h1
				style={{
					color: "#397a4c",
					fontSize: 50,
					maxWidth: "550px",
					paddingBottom: 20,
				}}
			>
				Who I Am
			</h1> */}
			<div className="sub-container">
				<h4
					style={{
						maxWidth: "500px",
						marginLeft: 20,
						fontFamily: "fantasy",
						color: "#3e6c60",
					}}
				>
					Originally from Egypt, I have spent the majority of my life in Canada,
					moving between various regions. This experience exposed me to a wide
					range of cultures, values, and perspectives, all of which have shaped
					me into an open-minded individual. My diverse background has not only
					enhanced my ability to connect with others but also fostered a deep
					appreciation for different ways of living and thinking. These
					experiences have helped me become an effective communicator with a
					strong understanding of people from all walks of life.
				</h4>
			</div>

			<div className="right">
				<div className="img-container">
					<div className="img-stack top">
						<img src={aboutPicture} alt="img" className="img" />
					</div>
					<div className="img-stack bottom">
						<img
							src={aboutPicture}
							alt="img"
							className="img"
							style={{ objectFit: "contained" }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutContent;
