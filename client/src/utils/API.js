import axios from "axios";

export default {
  getForecast: function() {
    return axios.get("/api/weather/forecast")
  },
  getWeather: function() {
    return axios.get("/api/weather")
  }
};
