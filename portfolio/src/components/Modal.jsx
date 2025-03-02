import React from "react";
import "./Modal.css";

const Modal = ({ onClose, logo }) => {
	return (
		<div className="modal-backdrop">
			<div className="modal">
				<div className="modal-header">
					<h1 className="modal-title">Check out my new app!</h1>
					<button onClick={onClose} className="modal-close">
						&times;
					</button>
				</div>
				<div className="modal-content">
					<img src={logo} alt="Quiqpost Logo" className="modal-logo" />
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
				<div className="modal-footer"></div>
			</div>
		</div>
	);
};

export default Modal;
