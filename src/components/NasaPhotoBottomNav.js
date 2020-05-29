import React from "react"; 
import { Button } from "reactstrap";

const NasaPhotoBottomNav = props => {
	return (
		<div>
			<Button outline color="info" > Photo of the Day </Button>
			<Button outline color="secondary"> Gallery </Button>
			<Button outline color="primary" href="https://www.nasa.gov" target="_blank"> Contact NASA </Button>
		</div>
	);
};

export default NasaPhotoBottomNav; 