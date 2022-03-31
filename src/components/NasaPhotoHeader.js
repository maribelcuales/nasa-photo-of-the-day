import React from "react"
import "./styles.css";

const NasaPhotoHeader = (props) => {
  return (
    <div className="header-logo-div">
      <img
        className="header-logo"
        src="https://github.com/maribelcuales/nasa-photo-of-the-day/blob/master/assets/nasa-logo.png?raw=true"
        alt="NASA Logo"
      />
      <h1 className="title-header">Astronomy Photo of the Day</h1>
    </div>
  );
};

export default NasaPhotoHeader;