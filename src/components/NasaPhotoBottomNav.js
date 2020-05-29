import React from "react"; 
import { Button } from "reactstrap";

const NasaPhotoBottomNav = props => {
	return (
		<Button>
			<Button outline color="primary" href={props.hdUrl} target="_blank"> HD Resolution </Button>
			<Button outline color="info" href="https://www.nasa.gov/multimedia/imagegallery/index.html" target="_blank"> NASA Image Gallery </Button>
			<Button outline color="primary" href="https://www.nasa.gov" target="_blank"> NASA Official Website </Button>
		</Button>
	);
};

export default NasaPhotoBottomNav; 