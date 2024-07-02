const WEATHER_URL =
  "https://api.openweathermap.org/data/2.5/weather?lat=38.035994&lon=40.7361372&appid=fb53aead9c3bf6fb710e2d6c2b4608cc&units=imperial";
const FORECAST_URL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=38.035994&lon=40.7361372&appid=fb53aead9c3bf6fb710e2d6c2b4608cc&units=imperial";

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const forecastlist = document.querySelector("#forecast");

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  captionDesc.innerText = data.weather[0].main;
  weatherIcon.setAttribute(
    "src",
    "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
  );
  weatherIcon.setAttribute("alt", data.weather[0].description);
}

function displayForecast(data) {
  forecastList.innerHTML = "";
  const forecastItems = data.list
    .filter((item, index) => index % 8 === 0)
    .slice(0, 3); // Take 3 days of data at 24-hour intervals
  forecastItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${item.dt_txt.split(" ")[0]}:</strong> ${
      item.main.temp
    }&deg;F`;
    forecastList.appendChild(listItem);
  });
}

async function apiFetch() {
  try {
    const response = await fetch(WEATHER_URL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

async function fetchForecast() {
  try {
    const response = await fetch(FORECAST_URL);
    if (response.ok) {
      const data = await response.json();
      displayForecast(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

apiFetch();
fetchForecast();
