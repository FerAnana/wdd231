export async function getWeather() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=-32.32&lon=-58.09&units=metric&appid=e02b26007dfe6fec2c51e08fbb8a7e26&lang=sp";
  try {
    let response = await fetch(url);
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
      // function to display the DOM
    } else {
      const errorText = await response.text();
      throw new Error(`Server returned error: ${errorText}`);
    }
  } catch (error) {
    console.log(error);
  }
}

function currentTemp(data) {
  let celsius = document.createElement("p");
  let description = document.createElement("p");
  let highTemp = document.createElement("p");
  let lowTemp = document.createElement("p");
  let humidity = document.createElement("p");
  let sunrise = document.createElement("p");
  let sunset = document.createElement("p");
  let weatherIcon = document.createElement("img");

  const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  const sunsetSunriseTime = (timestamp, timezoneOffset) => {
    const localDate = new Date((timestamp + timezoneOffset) * 1000);

    const hours = localDate.getUTCHours();
    const minutes = String(localDate.getUTCMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  celsius.textContent = `${data.main.temp}°`;
  description.textContent = data.weather[0].description;
  highTemp.textContent = `Máxima: ${data.main.temp_max}°`;
  lowTemp.textContent = `Mínima: ${data.main.temp_min}°`;
  humidity.textContent = `Humedad: ${data.main.humidity}%`;
  sunrise.textContent = `Amanecer: ${sunsetSunriseTime(data.sys.sunrise, data.timezone)}`;
  sunset.textContent = `Atardecer: ${sunsetSunriseTime(data.sys.sunset, data.timezone)}`;
  weatherIcon.setAttribute("src", icon);
  weatherIcon.setAttribute("loading", "lazy");

  document.querySelector("#current-weather").appendChild(weatherIcon);
  document.querySelector("#current-weather").appendChild(celsius);
  document.querySelector("#current-weather").appendChild(description);
  document.querySelector("#current-weather").appendChild(highTemp);
  document.querySelector("#current-weather").appendChild(lowTemp);
  document.querySelector("#current-weather").appendChild(humidity);
  document.querySelector("#current-weather").appendChild(sunrise);
  document.querySelector("#current-weather").appendChild(sunset);
}
