// In your js file, declare three const variables that hold references to the input, button, and list elements. //

constfavchap = document.querySelector("#favchap");
const addbutton = document.querySelector("#addbutton");
const mylist = document.querySelector("#list"); //const mulist = document.getElementById("list")

// Create a click event listener for the add chapter button using addEventListenr //

addbutton.addEventListener("click", () => {
  // check to make sure the input is not blank before the following remaining tasks in this list
  //using an if block, otherwise provide a messsage or at least do nothing and return the .focus to the input field.

  if (favchap.value == "") {
    console.log("You didn't type anything!!!");
    favchap.focus();
    return;
  }

  // Create a list element//

  let newitem = document.createElement("li");

  //create a delete button //

  let deletebutton = document.createElement("button");

  newitem.innerText = favchap.value;

  //populate the delete button textcontent with a ❌

  deletebutton.innerText = "❌";

  // append the list element with the delete button

  newitem.append(deletebutton);

  mylist.append(newitem);

  // add an event listner to the delete button that removes the list element when clicked
  //send the focus to the input elelment.

  deletebutton.addEventListener("click", () => {
    newitem.remove();
    favchap.focus();
  });

  // change the input vlaue to nothing or the empty string to clean up the
  favchap.value = "";
});
