// Sets the current year
let year = new Date().getFullYear();
let currentYearspan = document.querySelector("#currentYear");
currentYearspan.innerHTML = `${year}`;

//sets the last modified year
// let lastModifiedParagraph = document.querySelector("#lastModified")
let lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.innerHTML = `Last Modified: ${document.lastModified}`;

// Hamburger menu //
let menu_button = document.getElementById("menu-button");
let navlist = document.querySelector("nav ul");
menu_button.addEventListener("click", () => {
  menu_button.classList.toggle("open");
  navlist.classList.toggle("open");
});

//dark mode stuff

let darkbutton = document.getElementById("dark-mode");
darkbutton.addEventListener("click", () => {
  darkbutton.classList.toggle("dark");
  if (darkbutton.classList.contains("dark")) {
    // Dark mode colors
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--card-color", "#588157");
    document.documentElement.style.setProperty("--header-color", "#345A40");
    document.documentElement.style.setProperty("--background-color", "#797979");
  } else {
    // light mode colors
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--card-color", "White");
    document.documentElement.style.setProperty("--header-color", "#797979");
    document.documentElement.style.setProperty("--background-color", "white");
  }
});
