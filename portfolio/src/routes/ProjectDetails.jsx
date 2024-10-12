import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import WelcomeScreen from "../assets/WelcomeScreen.png";
import LoginScreen from "../assets/LoginScreen.png";
import FailLogin from "../assets/FailLoginScreen.png";
import Dashboard from "../assets/Dashboard.png";
import PostsScreen from "../assets/PostsScreen.png";
import PostTripScreen from "../assets/PostTripScreen.png";
import "../components/ProjectDetailStyles.css";
import uploadProcessVideo from "../assets/Videos/uploadProcess.mp4";
import locationRetrevialImg from "../assets/geosnapAssets/location-retrevial.png";
import pinClusteringImg from "../assets/geosnapAssets/pin-clustering.png";
import pinMapDisplay from "../assets/geosnapAssets/pin-map-display.png";
import { useEffect } from "react";

export const ProjectDetails = () => {
	let { title } = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (title === "Autonomous Plant Watering") {
		return (
			<>
				<Navbar />
				<HeroImg2 heading="No More Details for" text={title} />
				<Footer />
			</>
		);
	} else if (title === "WhereTo") {
		return (
			<>
				<Navbar />
				<HeroImg2 heading={`Project Details: ${title}`} />
				<div className="info">
					<h4>This is the amazing looking home screen.</h4>
					<img src={WelcomeScreen} alt="" className="projectImg" />
					<h4>
						The Login Requires a Registration with a valid email format
						(example@example.example)
					</h4>
					<img src={LoginScreen} alt="" className="projectImg" />
					<h4>
						If you haven't Registered yet, a notification will pop up notifying
						you that the server couldn't find you in the database.
					</h4>
					<img src={FailLogin} alt="" className="projectImg" />
					<h4>
						Once you login or register succesfully you are Welcomed with the
						dashboard (Note: Test is the name of the logged in user in this case
						which is why "test" shows as the name under welcome)
					</h4>
					<img src={Dashboard} alt="" className="projectImg" />
					<h4>This is where you are able to post your trip details</h4>
					<img src={PostTripScreen} alt="" className="projectImg" />
					<h4>
						You can come and see who has posted their trip details. Note that
						the "Allowing" section of the posts was a an idea that I've decided
						to migrate to a different project that I'm currently working on
					</h4>
					<img src={PostsScreen} alt="" className="projectImg" />
				</div>

				<Footer />
			</>
		);
	} else if (title === "CampUnity") {
		return (
			<>
				<>
					<Navbar />
					<HeroImg2 heading="No More Details for" text={title} />
					<Footer />
				</>
			</>
		);
	} else if (title === "GeoSnap") {
		return (
			<>
				<div style={{}}>
					<Navbar />
					<HeroImg2 heading={`Project Details: ${title}`} />
					<div className="simulator-screenshots-container">
						<div
							style={{
								alignItems: "center",
								justifyContent: "center",
								display: "flex",
								flexDirection: "column",
							}}
						>
							<h3 style={{ color: "black" }}>Current Location Retrevial</h3>
							<p
								style={{
									color: "black",
									marginBottom: 40,
									marginTop: 10,
									fontSize: 14,
									maxWidth: "300px",
									textAlign: "center",
								}}
							>
								Once the app is launched, the user's current location requested
								and then retreived.
							</p>
							<img
								src={locationRetrevialImg}
								alt="location retrevial image"
								className="image"
							/>
						</div>
						<div
							style={{
								alignItems: "center",
								justifyContent: "center",
								display: "flex",
								flexDirection: "column",
							}}
						>
							<h3 style={{ color: "black" }}>Pin Clustering</h3>
							<p
								style={{
									color: "black",
									marginBottom: 40,
									marginTop: 10,
									fontSize: 14,
									maxWidth: "300px",
									textAlign: "center",
								}}
							>
								Pins are clustered together when the user is zoomed out.
							</p>
							<img
								src={pinClusteringImg}
								alt="Pin clustering image"
								className="image"
							/>
						</div>
						<div
							style={{
								alignItems: "center",
								justifyContent: "center",
								display: "flex",
								flexDirection: "column",
							}}
						>
							<h3 style={{ color: "black" }}>Displaying Pins on the Map</h3>
							<p
								style={{
									color: "black",
									marginBottom: 40,
									marginTop: 10,
									fontSize: 14,
									maxWidth: "300px",
									textAlign: "center",
								}}
							>
								After the user zooms in, the pins will be displayed on the map.
							</p>
							<img
								src={pinMapDisplay}
								alt="displaying pins on the map"
								className="image"
							/>
						</div>
					</div>
					<div className="video-container">
						<h2 style={{ color: "black", marginBottom: 10 }}>
							Upload Process Video
						</h2>
						<p
							style={{
								color: "black",
								marginBottom: 40,
								marginTop: 10,
								fontSize: 14,
								maxWidth: "1000px",
								textAlign: "center",
							}}
						>
							After the user zooms in, the pins will be displayed on the map.
						</p>
						<video
							width="750"
							height="500"
							controls
							className="video"
							onLoadedMetadata={(e) => (e.target.playbackRate = 2)}
						>
							<source src={uploadProcessVideo} type="video/mp4" />
						</video>
					</div>

					<Footer />
				</div>
			</>
		);
	}
};
