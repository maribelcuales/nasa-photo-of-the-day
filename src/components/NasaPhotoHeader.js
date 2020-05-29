import React from "react";
import {Jumbotron} from "reactstrap";
import "./styles.css";

const NasaPhotoHeader = props => {
	return (
		// <div className="header-logo-div">
		// 	<img className="header-logo" src="https://github.com/maribelcuales/nasa-photo-of-the-day/blob/master/assets/nasa-logo.png?raw=true" alt="NASA Logo"/>
		// 	<h1 className="title-header">NASA Photo of the Day</h1>
		// </div>

		<Jumbotron className="jumbotron-div">
			<img className="header-logo" src="https://github.com/maribelcuales/nasa-photo-of-the-day/blob/master/assets/nasa-logo.png?raw=true" alt="NASA Logo"/>
			<h1 className="display-4" >Astronomy Photo of the Day</h1>
		</Jumbotron>
	);
};

export default NasaPhotoHeader; 