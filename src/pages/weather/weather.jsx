import React, { useEffect, useState } from "react";
import "./weather.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Weather = () => {
  const navigate = useNavigate();
  const [location, setlocations] = useState([]);
  const [current, setCurrent] = useState([]);
  const [forecast, setForecast] = useState([]);

  const loadweather = async () => {
    try {
      const response = await axios.get(
        "http://api.weatherapi.com/v1/forecast.json?key=466ecb615efc421c966230721242603&q=beirut&days=3&aqi=no&alerts=no"
      );

      setlocations(response.data["location"]);
      setCurrent(response.data["current"]);
      setForecast(response.data["forecast"]["forecastday"]);
    } catch (error) {
      console.error("Error loading weather data:", error);
    }
  };

  useEffect(() => {
    loadweather();
  }, []);
  // console.log(location['name']);
  // console.log(current['humidity']);
  // console.log(forecast[0]['date']);

  return (
    <div className="flex column center main">
      <div className="buttons flex center ">
        <button
          className="button"
          onClick={() => {
            navigate("../notes");
          }}
        >
          Notes
        </button>

        <button
          className="button"
          onClick={() => {
            navigate("../calculator");
          }}
        >
          Calculator
        </button>
      </div>
      <div className="flex current ">
        <div className="flex details">
    
            {/* {location["name"]}
            {location["country"]}
            {location["localtime"]} */}
      
        </div>
        <div className="flex column">
          <div> Temperature in celsius:</div> <div>{current['temp_c']} </div>
          <div> Temperature in celsius:</div> <div>{current['temp_c']} </div>
     
          
            {/* Wind Speed: {current['wind_kph']} 
            Humidity: {current['humidity']}  */}
        </div>
      </div>

      <div className="flex center container">
        <div className="flex column card">
          {/* <div>
            {location['country']} 
            {location['name']}
            {location['localtime']}
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Weather;
