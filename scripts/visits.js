let visits = getNumberOfVisits();
let websiteVisits = document.getElementById("home-visit");
websiteVisits.innerText = visits;

function getNumberOfVisits() {
  let locals = localStorage.getItem("site-visits");
  if (locals == null) {
    locals = 0;
  } else {
    locals = parseInt(locals);
  }

  locals = locals + 1;
  localStorage.setItem("site-visits", `${locals}`);

  return locals;
}
