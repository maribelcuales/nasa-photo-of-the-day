import React from "react"; 
import { Button } from "reactstrap";
import styled from "styled-components";
import "./styles.css";

const ButtonContainer = styled.div`
	display: inline-block;
	width: 80%;
	padding-bottom: 40px;
	align-items: center;
	justify-content: space-between;
`

const NasaPhotoBottomNav = props => {
	return (
		<ButtonContainer className="button-container">
			<Button className="button1-style" outline color="primary" href={props.hdUrl} target="_blank"> HD Resolution </Button>
			<Button className="button2-style" outline color="info" href="https://www.nasa.gov/multimedia/imagegallery/index.html" target="_blank"> NASA Image Gallery </Button>
			<Button className="button3-style" outline color="primary" href="https://www.nasa.gov" target="_blank"> NASA Official Website </Button>
			<Button className="button4-style" outline color="warning" href="https://www.nasa.gov/nasa-at-home-be-a-scientist" target="_blank"> Be a Scientist! </Button>
		</ButtonContainer>
	);
};

export default NasaPhotoBottomNav; 