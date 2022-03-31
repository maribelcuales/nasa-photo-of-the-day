import React from "react";
import "./App.css";
import NasaPhotoHeader from "./components/NasaPhotoHeader"; 
import NasaPhotoData from "./components/NasaPhotoData";
import NasaPhotoFooter from "./components/NasaPhotoFooter";

function App() {
  return (
    <div className="App">
      <NasaPhotoHeader />
      <NasaPhotoData />
      <NasaPhotoFooter /> 
    </div>
  );
}

export default App;
