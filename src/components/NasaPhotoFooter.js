import React from "react"; 
import "./styles.css";

const NasaPhotoFooter = props => {
	return (
		<div className="footer-div">
			<div className="footer-logo-div">
				<img className="footer-logo" src="https://github.com/maribelcuales/nasa-photo-of-the-day/blob/master/assets/nasa-logo.png?raw=true" alt="NASA Logo"/>
			</div>
			<div className="footer-contact">
				<p>National Aeronautics and Space Administration</p>
				<p>NASA Official: Brian Dunbar</p>
			</div>
		</div>
	);
};

export default NasaPhotoFooter; 