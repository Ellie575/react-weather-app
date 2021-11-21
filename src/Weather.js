import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false} );
  function handleResponse(response) {
    
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed, 
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    }
      );
    
  }
    

if (weatherData.ready) {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>

      <div className="row mt-3">
        <div className="col-6">
        
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
          />
          
          
          <span className="temperature">{Math.round(weatherData.temperature)}</span> 
          <span className="unit">°C</span>
          </div>
          
        
        <div className="col-6">
          <h2>{weatherData.city}</h2>
          <ul>
            <li><FormattedDate date={weatherData.date}/></li>
            <li className="text-capitalize">{weatherData.description}</li>
            <li>{weatherData.humidity}%</li>
            <li>{weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
  }
  else {
   let apiKey = "56e0818fd22a5efa4a6c31eab2ac96a0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      "Loading..."
    )
    
  }
}
