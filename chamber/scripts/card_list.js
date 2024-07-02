const url = "./data/member.json";
const cards = document.querySelector("#cards");
const grid_btn = document.querySelector("#grid-btn");
const list_btn = document.querySelector("#list-btn");

grid_btn.addEventListener("click", () => {
  if (!grid_btn.classList.contains("active")) {
    grid_btn.classList.add("active");
    list_btn.classList.remove("active");
    cards.classList.add("direcotry-grid");
    cards.classList.remove("directory-list");
  }
});

list_btn.addEventListener("click", () => {
  if (!list_btn.classList.contains("active")) {
    list_btn.classList.add("active");
    grid_btn.classList.remove("active");
    cards.classList.add("directory-list");
    cards.classList.remove("directory-grid");
  }
});

const displayProphets = (members) => {
  members.forEach((member) => {
    let newsection = document.createElement("section");
    newsection.innerHTML = `
    <h2>${member.name} </h2>
    <img src=${member.imageurl} "alt=${member.name} image" loading="lazy" height="400">
    <p>Address ${member.address}</p>
    <p>Phone Numebr ${member.phone}</p>
    <p>Membership ${member.membership}</p>
    <p>Website Url ${member.websiteURL}</p>`;

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
