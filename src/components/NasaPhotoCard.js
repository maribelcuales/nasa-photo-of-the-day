import React from "react";
import NasaPhotoGallery from "./NasaPhotoGallery";

const NasaPhotoCard = props => {
		return (
			<div className="photo-card">
				<img className="photo-of-the-day" src={props.url} alt="nasa-photo-of-the-day" />
				<NasaPhotoGallery /> 
			</div>  
		)};

export default NasaPhotoCard; 