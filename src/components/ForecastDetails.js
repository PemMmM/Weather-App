import React from "react";
import PropTypes from "prop-types";
// import moment from "moment";
// import WeatherIcon from "react-icons-weather";

function ForecastDetails({ forecast }) {
  const { temperature, wind, humidity } = forecast;

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__temperature">
        {temperature.min}
        &deg;C
      </div>

      <div className="forecast-details__wind">
        {(wind.speed, wind.direction)}
      </div>
      <div className="forecast-details__humidity"> {humidity}</div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
    temperature: PropTypes.shape({
      min: PropTypes.number,
    }),
  }).isRequired,
};

export default ForecastDetails;
