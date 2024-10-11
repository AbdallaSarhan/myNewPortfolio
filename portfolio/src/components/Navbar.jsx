import React, { useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Ball6.png";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [color, setColor] = useState(false);

	const changeColor = () => {
		if (window.scrollY >= 100) {
			setColor(true);
		} else {
			setColor(false);
		}
	};
	window.addEventListener("scroll", changeColor);

	const handleClick = () => {
		setClick(!click);
	};

	return (
		<div className={color ? "header header-bg" : "header"}>
			<Link to="/">
				{/* <img src={logo} alt="img" className="logo" /> */}
				<h2 className="name-logo">Abdalla Sarhan</h2>
			</Link>
			<ul className={click ? "nav-menu active" : "nav-menu"}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				{/* <li>
          <Link to="/contact">Contact</Link>
        </li> */}
			</ul>
			<div className="hamburger" onClick={handleClick}>
				{click ? (
					<FaTimes size={20} color="508e63" />
				) : (
					<FaBars size={20} color="508e63" />
				)}
			</div>
		</div>
	);
};

export default Navbar;
