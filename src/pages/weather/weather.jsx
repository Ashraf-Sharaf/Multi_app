import React from "react";
import "./weather.css";
import { useNavigate } from "react-router-dom";

const Weather = () => {
  const navigate = useNavigate();

  return (
    <div className="flex column center main">
      <div className="buttons flex center ">
        <button className="button" onClick={()=>{navigate("../notes.jsx")}}>Notes</button>
        <button className="button" onClick={()=>{navigate("../calculator")}}>Calculator</button>
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
