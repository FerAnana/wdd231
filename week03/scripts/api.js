const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.63&units=metric&appid=e02b26007dfe6fec2c51e08fbb8a7e26&lang=sp";

(49.74, 6.63);

async function apiFetch() {
  try {
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      displayResults(data);
    } else {
      const errorText = await response.text();
      throw new Error(`Server returned error: ${errorText}`);
    }
  } catch (error) {
    console.error(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp} C°`;
  const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weatherIcon.setAttribute("src", icon);
  weatherIcon.setAttribute("alt", `${data.weather[0].description}`);
  captionDesc.textContent = `${data.weather[0].description}`;
}
