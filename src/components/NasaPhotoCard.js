import React from "react";
import NasaPhotoGallery from "./NasaPhotoGallery";
import { Badge } from "reactstrap";
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
					<p>{props.desc} </p>
					<Badge className="badge-date" color="primary">Date: {props.date} </Badge>
				</div>
			</div>
		)};

export default NasaPhotoCard; 