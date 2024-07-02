document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("banner");
  const closeBannerButton = document.getElementById("close-banner");
  const today = new Date().getDay(); // Sunday - Saturday : 0 - 6

  if (today === 1 || today === 2 || today === 3) {
    banner.style.display = "block";
  } else {
    banner.style.display = "none";
  }

  closeBannerButton.addEventListener("click", () => {
    banner.style.display = "none";
  });
});
