import React from "react"; 
import { Button } from "reactstrap";
import styled from "styled-components";
import "./styles.css";

const ButtonContainer = styled.div`
	display: flex; 
	width: 100%;
	background-color: lightyellow;
	justify-content: space-between;
`

const NasaPhotoBottomNav = props => {
	return (
		<ButtonContainer>
			<Button outline color="primary" href={props.hdUrl} target="_blank"> HD Resolution </Button>
			<Button outline color="info" href="https://www.nasa.gov/multimedia/imagegallery/index.html" target="_blank"> NASA Image Gallery </Button>
			<Button outline color="primary" href="https://www.nasa.gov" target="_blank"> NASA Official Website </Button>
		</ButtonContainer>
	);
};

export default NasaPhotoBottomNav; 