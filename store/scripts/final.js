// JavaScript for toggling the hamburger menu
const menuButton = document.getElementById("menu-button");
const navList = document.querySelector("header nav ul");

menuButton.addEventListener("click", function () {
  navList.classList.toggle("open");
});

// Example: Store and retrieve order count
if (localStorage.getItem("orderCount")) {
  let ordersCompleted = parseInt(localStorage.getItem("orderCount"));
  // Display orders completed count on the page
} else {
  // Initialize order count if not exists
  localStorage.setItem("orderCount", "0");
}
