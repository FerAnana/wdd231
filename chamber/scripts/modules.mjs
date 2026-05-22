import { getMembersData } from "./members.mjs";
import { getForecast, getWeather } from "./weather.mjs";

const weatherUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=-32.32&lon=-58.09&units=metric&appid=e02b26007dfe6fec2c51e08fbb8a7e26&lang=sp";

const forecastUrl =
  "https://api.openweathermap.org/data/2.5/forecast?lat=-32.32&lon=-58.09&units=metric&appid=e02b26007dfe6fec2c51e08fbb8a7e26&lang=sp";

getMembersData("data/members.json");
getWeather(weatherUrl);
getForecast(forecastUrl);
