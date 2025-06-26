import React, { useState, useEffect } from "react";
import Headshot from "../../assets/new-headshot.jpg";
import ResumePDF from "../../assets/Resume.pdf";
import { animated as a, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import "./IntroSectionStyles.css";
import { ReactTyped } from "react-typed";
import { FaFileAlt, FaLaptopCode, FaChevronDown } from "react-icons/fa";

const IntroSection = () => {
	const [show, setShowing] = useState(false);
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true
	});

	const headerProps = useSpring({
		opacity: show ? 1 : 0,
		transform: show ? "translateY(0)" : "translateY(20px)",
		config: { mass: 1, tension: 180, friction: 12 }
	});

	const imageProps = useSpring({
		opacity: show ? 1 : 0,
		transform: show ? "translateY(0)" : "translateY(40px)",
		delay: 200,
		config: { mass: 1, tension: 180, friction: 12 }
	});

	const laptopProps = useSpring({
		loop: true,
		from: { rotateZ: 0 },
		to: { rotateZ: 360 },
		config: { duration: 4000 },
		delay: 100
	});

	const arrowProps = useSpring({
		from: { y: 0 },
		to: async (next) => {
			while (1) {
				await next({ y: 16 });
				await next({ y: 0 });
			}
		},
		config: { mass: 1, tension: 180, friction: 12 },
	});

	useEffect(() => {
		setShowing(inView);
	}, [inView]);

	const handleScrollDown = () => {
		const aboutSection = document.querySelector(".about");
		if (aboutSection) {
			const y = aboutSection.getBoundingClientRect().top + window.pageYOffset - 80;
			window.scrollTo({ top: y, behavior: "smooth" });
		}
	};

	return (
		<div className="container">
			<div className="intro-content intro-row-layout">
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.1rem' }}>
					<div className="img-container" style={{ maxWidth: '220px', marginBottom: 30, paddingBottom: 0 }}>
						<img src={Headshot} alt="Abdalla Sarhan" className="intro-headshot" style={{ width: '100%', height: 'auto', display: 'block', marginBottom: 0, paddingBottom: 0 }} />
					</div>
					<a.h1 className="intro-greeting">
						Hi, <ReactTyped
							strings={["I'm Abdalla", "I'm curious", "I'm a creator"]}
							typeSpeed={100}
							backSpeed={40}
							loop
						/>
					</a.h1>
				</div>
				<a.h2 className="intro-subtitle">
					Computer Engineering @ York University
				</a.h2>
				<a.div className="intro-laptop-icon" style={laptopProps}>
					<FaLaptopCode size={80} />
				</a.div>
			</div>
			{/* <a.div className="intro-scroll-arrow" style={arrowProps} onClick={handleScrollDown}>
				<FaChevronDown size={40} />
			</a.div> */}
		</div>
	);
};

export default IntroSection;
