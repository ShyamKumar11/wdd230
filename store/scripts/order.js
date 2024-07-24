window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const tripId = urlParams.get("trip_id");
  const title = urlParams.get("title");
  const location = urlParams.get("location");

  // Pre-fill expedition details
  document.getElementById("expedition-title").textContent = `Title: ${title}`;
  document.getElementById(
    "expedition-location"
  ).textContent = `Location: ${location}`;
  document.getElementById("trip_id").value = tripId;
};
