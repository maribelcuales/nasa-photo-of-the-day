import React from "react";
import NasaPhotoGallery from "./NasaPhotoGallery";
import { Badge } from "reactstrap";
import styled from "styled-components";
import "./styles.css"; 

const DateContainer = styled.div`
	display: flex;	
	width: 80%;
	text-align: left;  
	margin: auto; 
	padding-bottom: 20px;
`

const NasaPhotoCard = props => {
		return (
			<div className="photo-card">
				<div className="photo-of-the-day-div">
					<img className="photo-of-the-day" src={props.url} alt="nasa-photo-of-the-day" /> 
				</div>
				{/* <NasaPhotoGallery /> */}
				<div className="card-details">
					<h2>{props.title} </h2>
					<p className="copyright">Image Credit and Copyright: {props.copyright}</p>
					<p className="card-content">{props.desc} </p>
				</div>
				<DateContainer>
					<Badge className="badge-date" color="primary">Date: {props.date} </Badge>
					<Badge className="badge-credit" color="primary">Content and Image Credit: NASA</Badge>
				</DateContainer>
			</div>
		)};

export default NasaPhotoCard; 