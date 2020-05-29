import React from "react"; 
import { Button } from "reactstrap";
import styled from "styled-components";
import "./styles.css";

const ButtonContainer = styled.div`
	display: inline-block;
	width: 80%;
	padding-bottom: 80px;
`
const NasaPhotoBottomNav = props => {
	return (
		<ButtonContainer>
			<Button className="button1-style" outline color="primary" href={props.hdUrl} target="_blank"> HD Resolution </Button>
			<Button className="button2-style" outline color="info" href="https://www.nasa.gov/multimedia/imagegallery/index.html" target="_blank"> NASA Image Gallery </Button>
			<Button className="button3-style" outline color="primary" href="https://www.nasa.gov" target="_blank"> NASA Official Website </Button>
		</ButtonContainer>
	);
};

export default NasaPhotoBottomNav; 