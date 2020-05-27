import React from "react";
import NasaPhotoGallery from "./NasaPhotoGallery";
import "./styles.css"; 

const NasaPhotoCard = props => {
		return (
			<div className="photo-card">
				<div className="photo-of-the-day-div">
					<img className="photo-of-the-day" src={props.url} alt="nasa-photo-of-the-day" /> 
				</div>
				{/* <NasaPhotoGallery /> */}
				<div className="card-details">
					<h2>{props.title} </h2>
					<p>Date: {props.date} </p>
					<p>{props.desc} </p>
				</div>
			</div>
		)};

export default NasaPhotoCard; 