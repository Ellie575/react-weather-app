import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-6">
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            size={64}
          />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>

        <div className="col-6">
          <h2>{props.data.city}</h2>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
            <li>{props.data.humidity}%</li>
            <li>{props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
