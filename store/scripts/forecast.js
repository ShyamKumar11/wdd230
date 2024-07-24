const FORECAST_URL =
  "https://api.openweathermap.org/data/2.5/forecast?lat=40.7608&lon=-111.8910&appid=fb53aead9c3bf6fb710e2d6c2b4608cc&units=imperial";
// select HTML elements in the document

const ONE_DAY = 24 * 60 * 60 * 1000;

function showForecast(forecast) {
  const forecastId = document.querySelector("#forecast");
  const timenow = forecast[0].dt_txt.slice(11, 19);
  let temps = forecast.filter((x) => x.dt_txt.indexOf(timenow) != -1);

  for (let i = 1; i <= 3; i++) {
    let newsection = document.createElement("section");
    let mydate = temps[i].dt_txt.slice(0, 10);
    let icon = temps[i].weather[0].icon;
    let tempreture = temps[i].main.temp.toFixed(0);
    let description = temps[i].weather[0].description;
    newsection.innerHTML = `<h3>${mydate}</h3>
    <p><img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" class="weather_img"></p>
    <p>${description}</p>
    <p>${tempreture}&deg;F</p>`;
    forecastId.append(newsection);
  }
}

async function fetchForecast() {
  try {
    const response = await fetch(FORECAST_URL);
    if (response.ok) {
      const data = await response.json();
      showForecast(data.list);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

fetchForecast();
