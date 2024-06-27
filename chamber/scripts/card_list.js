const url = "./data/member.json";
const cards = document.querySelector("#cards");

const displayProphets = (members) => {
  members.forEach((member) => {
    let newsection = document.createElement("section");
    newsection.innerHTML = `
    <h2>${member.name} ${member.lastname}</h2>
    <img src=${member.imageurl} "alt=${member.name} ${member.lastname} image" loading="lazy" height="400">`;
    cards.append(newsection);
  });
};

async function getProphetData() {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    //console.table(data);
    displayProphets(data.members);
  } else {
    console.log("This is not working.");
  }
}

getProphetData();
