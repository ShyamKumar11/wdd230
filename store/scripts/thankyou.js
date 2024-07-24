window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  document.getElementById("yourname").textContent =
    urlParams.get("first_name") + " " + urlParams.get("last_name");
  document.getElementById("yourlocation").textContent =
    urlParams.get("location");
  document.getElementById("youremail").textContent = urlParams.get("email");
  document.getElementById("yourexp").textContent = urlParams.get("expedition");
  document.getElementById("yourlocation").textContent =
    urlParams.get("location");
};
