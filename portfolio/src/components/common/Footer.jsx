import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
	const [showFooter, setShowFooter] = useState(false);
	const [footerEverShown, setFooterEverShown] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY || window.pageYOffset;
			const windowHeight = window.innerHeight;
			const docHeight = document.documentElement.scrollHeight;
			if (scrollY + windowHeight >= docHeight - 2) {
				setShowFooter(true);
				setFooterEverShown(true);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className={`footer minimal-footer${(showFooter || footerEverShown) ? " footer-slide-in" : ""}`}>
			<div className="footer-center-content">
				<div className="footer-copyright">
					Abdalla Sarhan <br />
					All rights reserved &copy;
				</div>
				<div className="footer-social">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/AbdallaSarhan"
					>
						<FaGithub className="icon" size={26} />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/abdalla-sarhan-a80330204/"
					>
						<FaLinkedin className="icon" size={26} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
