import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaPhotoCard from "./NasaPhotoCard";
import NasaPhotoBottomNav from "./NasaPhotoBottomNav";

function NasaPhotoData() {	
	const [photo, setPhoto] = useState([]);

	useEffect(() => {
		axios
		.get('https://api.nasa.gov/planetary/apod?api_key=ZpebsFfzozubPgYXkFi5TckqXCf0JsEoofTxqzoZ')
		.then(response => {
			console.log(response.data);
			setPhoto(reponse.data);
		})
		.catch(error => {
			console.log('there was an error', error)
		});
	}, []);
  return (
		<div className="container">
			{/* <h1>Nasa Photo of the Day</h1> */}
			{photo.map(data => {
				return (
					<NasaPhotoCard
						key={data.id}
						date={data.date}
						title={data.title}
						desc={data.explanation}
						url={data.hdurl}
					/>
				)
			})}
			<NasaPhotoBottomNav />
		</div>
	)};

export default NasaPhotoData;