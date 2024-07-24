const CURRENT_WEATHER_URL =
  "https://api.openweathermap.org/data/2.5/weather?lat=40.7608&lon=-111.8910&appid=fb53aead9c3bf6fb710e2d6c2b4608cc&units=imperial";
const FORECAST_URL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=40.7608&lon=-111.8910&appid=fb53aead9c3bf6fb710e2d6c2b4608cc&units=imperial";

// Select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const currentHumidity = document.querySelector("#current-humidity");
const forecastContainer = document.querySelector("#forecast");

function displayCurrentWeather(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  weatherIcon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
  weatherIcon.setAttribute("alt", data.weather[0].description);
  currentHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;
}

function displayForecast(data) {
  const forecastList = data.list;
  const forecastTimes = forecastList.filter((item) =>
    item.dt_txt.includes("09:00:00")
  );
  for (let i = 1; i <= 3; i++) {
    const forecast = forecastTimes[i];
    const date = forecast.dt_txt.split(" ")[0];
    const icon = forecast.weather[0].icon;
    const description = forecast.weather[0].description;
    const temp = forecast.main.temp.toFixed(0);

    let newSection = document.createElement("section");
    newSection.innerHTML = `<h3>${date}</h3>
      <p><img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" class="weather_img"></p>
      <p>${description}</p>
      <p>${temp}&deg;F</p>`;
    forecastContainer.appendChild(newSection);
  }
}

async function fetchWeatherData() {
  try {
    const currentWeatherResponse = await fetch(CURRENT_WEATHER_URL);
    const forecastResponse = await fetch(FORECAST_URL);

    if (currentWeatherResponse.ok && forecastResponse.ok) {
      const currentWeatherData = await currentWeatherResponse.json();
      const forecastData = await forecastResponse.json();

      displayCurrentWeather(currentWeatherData);
      displayForecast(forecastData);
    } else {
      throw Error(
        (await currentWeatherResponse.text()) || (await forecastResponse.text())
      );
    }
  } catch (error) {
    console.log(error);
  }
}

fetchWeatherData();
