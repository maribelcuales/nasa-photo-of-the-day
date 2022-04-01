import React, {useState, useEffect} from "react";
import axios from "axios";


function NasaPhotoGallery() {

	const [photoGallery, setPhotoGallery] = useState([]); 

	useEffect(() => {
		axios
		.get('https://api.nasa.gov/planetary/apod?api_key=ZpebsFfzozubPgYXkFi5TckqXCf0JsEoofTxqzoZ&count=5')
		.then(response => {
			// console.log(response.data);
			setPhotoGallery(response.data);
		})
		.catch(error => {
			console.log('there was an error', error)
		});
}, []);

	return (
		<div>
			<img />
			<button> See More </button>
		</div>
	);
};

export default NasaPhotoGallery; 