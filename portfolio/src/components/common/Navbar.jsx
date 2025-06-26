import React, { useEffect, useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaCalendarAlt } from "react-icons/fa";
import CalendlyModal from "./CalendlyModal";

const Navbar = () => {
	const [click, setClick] = useState(false);

	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [showCalendlyModal, setShowCalendlyModal] = useState(false);

	// const changeColor = () => {
	// 	if (window.scrollY >= 100) {
	// 		setColor(true);
	// 	} else {
	// 		setColor(false);
	// 	}
	// };
	// window.addEventListener("scroll", changeColor);

	const handleScroll = () => {
		if (window.scrollY > lastScrollY) {
			// If scrolling down, hide the navbar
			setIsVisible(false);
		} else {
			// If scrolling up, show the navbar
			setIsVisible(true);
		}
		setLastScrollY(window.scrollY);
	};

	const handleClick = () => {
		setClick(!click);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScrollY]);
	return (
		<div className={`header ${isVisible ? "show" : "hide"}`}>
			<Link to="/">
				{/* <img src={logo} alt="img" className="logo" /> */}
				<h2 className="name-logo">Abdalla Sarhan</h2>
			</Link>
			<div className="navbar-icons">
				<span
					tabIndex={0}
					role="button"
					title="Book a call"
					onClick={() => setShowCalendlyModal(true)}
				>
					<FaCalendarAlt size={22} />
				</span>
				<span
					tabIndex={0}
					role="button"
					title="LinkedIn"
					onClick={() => window.open("https://www.linkedin.com/in/abdalla-sarhan-a80330204/", "_blank", "noopener,noreferrer")}
				>
					<FaLinkedin size={22} />
				</span>
				<span
					tabIndex={0}
					role="button"
					title="GitHub"
					onClick={() => window.open("https://github.com/AbdallaSarhan", "_blank", "noopener,noreferrer")}
				>
					<FaGithub size={22} />
				</span>
			</div>
			<ul className={click ? "nav-menu active" : "nav-menu"}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
			</ul>
			<div className="hamburger" onClick={handleClick}>
				{click ? (
					<FaTimes size={20} color="white" />
				) : (
					<FaBars size={20} color="white" />
				)}
			</div>
			{showCalendlyModal && (
				<CalendlyModal onClose={() => setShowCalendlyModal(false)} />
			)}
		</div>
	);
};

export default Navbar;
