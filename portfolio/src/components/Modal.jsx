import React, { useState, useEffect } from "react";
import "./Modal.css";
import quiqpostLogo from "../assets/quiqpost-logo.png";
import platepalLogo from "../assets/platepal-logo.png";

const Modal = ({ onClose }) => {
	const [isClosing, setIsClosing] = useState(false);

	const handleClose = () => {
		setIsClosing(true);
		setTimeout(() => {
			onClose();
		}, 300); // Match this with CSS animation duration
	};

	return (
		<div className={`modal-backdrop ${isClosing ? "closing" : ""}`}>
			<div className={`modal ${isClosing ? "closing" : ""}`}>
				<div className="modal-header">
					<h1 className="modal-title">Check out my apps!</h1>
					<button onClick={handleClose} className="modal-close">
						&times;
					</button>
				</div>
				<div className="modal-content">
					<div className="apps-container">
						<div className="app-card">
							<img src={quiqpostLogo} alt="Quiqpost Logo" className="modal-logo" />
							<p style={{ color: "black", marginTop: "1.2rem", fontSize: 17 }}>
								A community connecting travelers with people needing item delivery.
							</p>
							<a
								href="https://apps.apple.com/ca/app/quiqpost/id6737566141?uo=2"
								target="_blank"
								rel="noopener noreferrer"
								className="app-store-link"
							>
								<img
									src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
									alt="Download on the App Store"
								/>
							</a>
						</div>
						<div className="app-card">
							<img src={platepalLogo} alt="PlatePal Logo" className="modal-logo" />
							<p style={{ color: "black", marginTop: "1.2rem", fontSize: 17 }}>
								Your personal food companion for discovering and sharing amazing dishes.
							</p>
							<a
								href="https://apps.apple.com/ca/app/platepal/id6741442946"
								target="_blank"
								rel="noopener noreferrer"
								className="app-store-link"
							>
								<img
									src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
									alt="Download on the App Store"
								/>
							</a>
						</div>
					</div>
				</div>
				<div className="modal-footer"></div>
			</div>
		</div>
	);
};

export default Modal;
