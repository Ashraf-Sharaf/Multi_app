import React from "react";
import "./weather.css";

const Weather = () => {
  return (
    <div className="flex column center main">
      <div className="buttons flex center ">
        <button className="button ">hello</button>
        <button className="button">hello</button>
      </div>

      <div className="flex center container">
        <div className="flex column card"></div>
        <div className="flex column card"></div>
        <div className="flex column card"></div>
      </div>
    </div>
  );
};
export default Weather;
