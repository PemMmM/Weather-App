/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from "axios";

const getForecast = (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation,
  setErrorMessage
) => {
  let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast/";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }
  return axios
    .get(endpoint)
    .then((response) => {
      setErrorMessage("");
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        console.error("Location is not valid", error);
        setErrorMessage("No such town or city, try again!");
      }
      if (status === 500) {
        console.error("Server error", error);
        setErrorMessage("Oops, server error, try again later.");
      }
    });
};

export default getForecast;
