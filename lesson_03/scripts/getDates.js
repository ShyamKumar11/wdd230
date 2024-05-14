// Sets the current year
let year = new Date().getFullYear();
let currentYearspan = document.querySelector("#currentYear");
currentYearspan.innerHTML = `${year}`;

//sets the last modified year
// let lastModifiedParagraph = document.querySelector("#lastModified")
let lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.innerHTML = `Last Modified: ${document.lastModified}`;
