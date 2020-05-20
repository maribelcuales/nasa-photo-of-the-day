import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaPhotoCard from "./NasaPhotoCard";
import NasaPhotoBottomNav from "./NasaPhotoBottomNav";

function NasaPhotoData() {	
	const [photo, setPhoto] = useState([]);

	useEffect(() => {
		axios
		.get('')
		.then(response => {
			console.log(response);
		})
		.catch(error => {
			console.log('there was an error', error)
		});
	}, []);
  return (
		<div className="container">
			{/* <h1>Nasa Photo of the Day</h1> */}
			<NasaPhotoCard /> 
			<NasaPhotoBottomNav />
		</div>
	)};

export default NasaPhotoData;