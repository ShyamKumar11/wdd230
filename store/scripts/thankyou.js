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

// Calculate estimated shipping date
const shippingDate = new Date();
shippingDate.setDate(shippingDate.getDate() + 5);
const options = { year: "numeric", month: "long", day: "numeric" };
document.getElementById("shipping-date").textContent =
  shippingDate.toLocaleDateString(undefined, options);
