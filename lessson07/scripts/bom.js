// In your js file, declare three const variables that hold references to the input, button, and list elements. //

constfavchap = document.querySelector("#favchap");
const addbutton = document.querySelector("#addbutton");
const mylist = document.querySelector("#list"); //const mulist = document.getElementById("list")

const CHAPTER_KEY = "chapters";
let chapterList = getChapterListFromStorage();
chapterList.forEach(addItem);

function getChapterListFromStorage() {
  let chapterString = localStorage.getItem(CHAPTER_KEY);
  if (chapterString == null) {
    return [];
  }

  return JSON.parse(chapterString);
}

function updateLocalStorage() {
  localStorage.setItem(CHAPTER_KEY, JSON.stringify(chapterList));
}

function addItem(item) {
  // Create a list element//

  let newitem = document.createElement("li");

  //create a delete button //

  let deletebutton = document.createElement("button");

  newitem.innerText = favchap.value;
  newitem.setAttribute("chapter", item);

  //populate the delete button textcontent with a ❌

  deletebutton.innerText = "❌";

  // append the list element with the delete button

  newitem.append(deletebutton);

  mylist.append(newitem);

  // add an event listner to the delete button that removes the list element when clicked
  //send the focus to the input elelment.

  deletebutton.addEventListener("click", () => {
    let chapter = newitem.getAttribute("chapter");
    chapterList = chapterList.filter((x) => x != chapter);
    updateLocalStorage();
    newitem.remove();
    favchap.focus();
  });
}

// change the input vlaue to nothing or the empty string to clean up the
favchap.value = "";

// Create a click event listener for the add chapter button using addEventListenr //

addbutton.addEventListener("click", () => {
  // check to make sure the input is not blank before the following remaining tasks in this list
  //using an if block, otherwise provide a messsage or at least do nothing and return the .focus to the input field.

  if (favchap.value == "") {
    console.log("You didn't type anything!!!");
    favchap.focus();
    return;
  }

  // add item from user

  addItem(favchap.value);
  // Update the internal list
  chapterList.push(favchap.value);
  // Save to local storage
  updateLocalStorage();
  // Create a list element//

  // change the input vlaue to nothing or the empty string to clean up the
  favchap.value = "";
});
