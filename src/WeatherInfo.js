import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
        <div className="row mt-3">
        <div className="col-6">
        
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
          />
          
          
          <span className="temperature">{Math.round(props.data.temperature)}</span> 
          <span className="unit">°C</span>
          </div>
          
        
        <div className="col-6">
          <h2>{props.data.city}</h2>
          <ul>
            <li><FormattedDate date={props.data.date}/></li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>{props.data.humidity}%</li>
            <li>{props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
      </div>
    );
}