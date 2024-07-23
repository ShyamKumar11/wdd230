// JavaScript for toggling the hamburger menu
const menuButton = document.getElementById("menu-button");
const navList = document.querySelector("header nav ul");

menuButton.addEventListener("click", function () {
  navList.classList.toggle("open");
});

// JavaScript for fetching weather data from OpenWeatherMap API
const weatherAPIKey = "your_openweathermap_api_key";
const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?lat=40.764530324632304&lon=-111.88685492288826&appid=fb53aead9c3bf6fb710e2d6c2b4608cc`;

fetch(weatherEndpoint)
  .then((response) => response.json())
  .then((data) => {
    // Update DOM elements with weather data
    console.log(data); // Replace with actual DOM manipulation
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
  });

// JavaScript for handling local storage (orders completed)
// Example: Store and retrieve order count
if (localStorage.getItem("orderCount")) {
  let ordersCompleted = parseInt(localStorage.getItem("orderCount"));
  // Display orders completed count on the page
} else {
  // Initialize order count if not exists
  localStorage.setItem("orderCount", "0");
}
