export async function getWeather(weatherUrl) {
  try {
    let response = await fetch(weatherUrl);
    if (response.ok) {
      let data = await response.json();
      currentTemp(data);
    } else {
      const errorText = await response.text();
      throw new Error(`Server returned error: ${errorText}`);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getForecast(forecastUrl) {
  try {
    let response = await fetch(forecastUrl);
    if (response.ok) {
      let data = await response.json();
      displayForecast(data);
    } else {
      const errorText = await response.text();
      throw new Error(`Server returned error: ${errorText}`);
    }
  } catch (error) {
    console.log(error);
  }
}

function currentTemp(data) {
  if (!document.querySelector("#current-weather")) return;
  let div = document.createElement("div");
  let celsius = document.createElement("p");
  let description = document.createElement("p");
  let highTemp = document.createElement("p");
  let lowTemp = document.createElement("p");
  let humidity = document.createElement("p");
  let sunrise = document.createElement("p");
  let sunset = document.createElement("p");
  let weatherIcon = document.createElement("img");

  const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  const sunsetSunriseTime = (timestamp) => {
    const localDate = new Date((timestamp + -10800) * 1000);

    const hours = localDate.getUTCHours();
    const minutes = String(localDate.getUTCMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  celsius.textContent = `${Math.floor(data.main.temp)}°C`;
  description.textContent =
    data.weather[0].description.charAt(0).toUpperCase() +
    data.weather[0].description.slice(1).toLowerCase();
  highTemp.textContent = `Máxima: ${Math.floor(data.main.temp_max)}°C`;
  lowTemp.textContent = `Mínima: ${Math.floor(data.main.temp_min)}°C`;
  humidity.textContent = `Humedad: ${data.main.humidity}%`;
  sunrise.textContent = `Amanecer: ${sunsetSunriseTime(data.sys.sunrise)}`;
  sunset.textContent = `Atardecer: ${sunsetSunriseTime(data.sys.sunset)}`;
  weatherIcon.setAttribute("src", icon);
  weatherIcon.setAttribute("loading", "lazy");
  div.setAttribute("class", "data");

  div.appendChild(weatherIcon);
  div.appendChild(celsius);
  div.appendChild(description);
  div.appendChild(highTemp);
  div.appendChild(lowTemp);
  div.appendChild(humidity);
  div.appendChild(sunrise);
  div.appendChild(sunset);
  document.querySelector("#current-weather").appendChild(div);
}

function displayForecast(data) {
  if (!document.querySelector("#weather-forecast")) return;
  let todayForecast = document.createElement("p");
  let tomorrowForecast = document.createElement("p");
  let afterTomorrow = document.createElement("p");

  const dayOfTheWeek = (timestamp) => {
    const localDate = new Date((timestamp + -10800) * 1000);

    const days = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];

    return days[localDate.getUTCDay()];
  };

  todayForecast.textContent = `Hoy: ${Math.floor(data.list[0].main.temp)}°C`;
  tomorrowForecast.textContent = `${dayOfTheWeek(data.list[8].dt)}: ${Math.floor(data.list[8].main.temp)}°C`;
  afterTomorrow.textContent = `${dayOfTheWeek(data.list[16].dt)}: ${Math.floor(data.list[16].main.temp)}°C`;

  document.querySelector("#weather-forecast").appendChild(todayForecast);
  document.querySelector("#weather-forecast").appendChild(tomorrowForecast);
  document.querySelector("#weather-forecast").appendChild(afterTomorrow);
}
