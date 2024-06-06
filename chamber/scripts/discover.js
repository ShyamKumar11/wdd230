//Get current day

let today = new Date();
const DAY_IN_MILLIS = 1000 * 60 * 60 * 24;
const LAST_VISIT_KEY = "last-visit";

function getMessage() {
  let lastvisit = localStorage.getItem(LAST_VISIT_KEY);
  let messsage = "Welcome! Let us know if you have any questions.";
  if (lastvisit == null) {
    return messsage;
  }

  lastvisit = parseInt(lastvisit);
  let datediff = today.getTime() - lastvisit;
  if (datediff < DAY_IN_MILLIS) {
    messsage = "Back so soon! Awesome!";
    return messsage;
  }
  if (datediff < DAY_IN_MILLIS * 2) {
    return "You last visited 1 day ago.";
  }

  let daySinceLastVisit = Math.floor(lastvisit / DAY_IN_MILLIS);
  return `You last visited ${daySinceLastVisit} days ago.`;
}

let messsage = getMessage();
document.getElementById("discover-message").innerText = messsage;
localStorage.setItem(LAST_VISIT_KEY, `${today.getTime()}`);
