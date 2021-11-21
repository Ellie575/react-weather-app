import React from "react";
import "./Weather.css";

export default function Weather() {
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
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="description"
          />
          
          
          <span className="temperature">20</span> 
          <span className="unit">°C</span>
          </div>
          
        
        <div className="col-6">
          <h2>Tokyo</h2>
          <ul>
            <li>Monday</li>
            <li>Clear</li>
            <li>Humidity</li>
            <li>Wind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
