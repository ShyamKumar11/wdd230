const url = "./final_project/expedition.json";
const cards = document.querySelector("#cards");

const displayExpeditions = (expeditions) => {
  expeditions.forEach((expedition) => {
    let newsection = document.createElement("section");
    newsection.classList.add("card");
    newsection.innerHTML = `
      <img src="${expedition.image}" alt="${expedition.title} image" loading="lazy" class="card-image">
      <h2>${expedition.title}</h2>
      <p><strong>Location:</strong> ${expedition.location}</p>
      <p><strong>Dates:</strong> ${expedition.start_date} to ${expedition.end_date}</p>
      <p>${expedition.about}</p>`;
    cards.append(newsection);
  });
};

async function getExpeditionData() {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    displayExpeditions(data.expeditions);
  } else {
    console.log("This is not working.");
  }
}

getExpeditionData();
