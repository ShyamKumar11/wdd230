const WEATHER_URL =
  "https://api.openweathermap.org/data/2.5/weather?lat=40.7608&lon=-111.8910&appid=fb53aead9c3bf6fb710e2d6c2b4608cc&units=imperial";
// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#temp-desc");

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  captionDesc.innerText = data.weather[0].description;
  weatherIcon.setAttribute(
    "src",
    "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
  );
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

apiFetch();
