import React from "react";
import "./App.css";
import NasaPhotoHeader from "./components/NasaPhotoHeader"; 
import NasaPhotoData from "./components/NasaPhotoData";
import NasaPhotoFooter from "./components/NasaPhotoFooter";

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <NasaPhotoHeader />
      <NasaPhotoData />
      <NasaPhotoFooter /> 
    </div>
  );
}

export default App;
