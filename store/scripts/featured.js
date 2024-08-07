const featuredUrl = "./expedition.json";
const featuredcards = document.querySelector("#featuredcards");

const featuredexpeditions = (expeditions) => {
  expeditions.forEach((expedition) => {
    let newsection = document.createElement("section");
    newsection.classList.add("card");
    newsection.innerHTML = `
      <img src="${expedition.image}" alt="${expedition.title} image" loading="lazy" class="card-image">
      <h2>${expedition.title}</h2>
      <p><strong>Location:</strong> ${expedition.location}</p>
      <p><strong>Dates:</strong> ${expedition.start_date} to ${expedition.end_date}</p>
      <p>${expedition.about}</p>
      <a href="expeditions.html" class="view-details-button">View Details</a>`;
    featuredcards.append(newsection);
  });
};

async function getFeatured() {
  const response = await fetch(featuredUrl);

  if (response.ok) {
    const data = await response.json();
    const featuredones = data.expeditions.filter((x) => x.featured);
    featuredexpeditions(featuredones);
  } else {
    console.log("This is not working.");
  }
}

getFeatured();
