// Github repo link plus path to the links json file
const linksURL = "https://shyamkumar11.github.io/wdd230/data/links.json";

// Asynchronous function to get data from links file
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data); // Check the fetched data
    displayLinks(data.lessons); // Pass the correct data to displayLinks
  } catch (error) {
    console.error("Error fetching links:", error);
  }
}

// Function to display links
function displayLinks(lessons) {
  const container = document.getElementById("activity-links");
  if (!container) {
    console.error('Element with id "activity-links" not found');
    return;
  }
  container.innerHTML = ""; // Clear existing content

  lessons.forEach((lesson) => {
    const lessonDiv = document.createElement("div");
    const lessonTitle = document.createElement("h3");
    lessonTitle.textContent = `Lesson ${lesson.lesson}`;
    lessonDiv.appendChild(lessonTitle);

    const linksList = document.createElement("ul");
    lesson.links.forEach((link) => {
      const listItem = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.href = `${baseURL}${link.url}`;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);
      linksList.appendChild(listItem);
    });

    lessonDiv.appendChild(linksList);
    container.appendChild(lessonDiv);
  });
}

// Call the getLinks function
getLinks();
