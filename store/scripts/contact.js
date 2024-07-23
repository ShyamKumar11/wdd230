document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const confirmationMessage = document.getElementById("confirmationMessage");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    // Here you could add code to send form data to a server via fetch or XMLHttpRequest

    // Display confirmation message
    confirmationMessage.style.display = "block";

    // Reset form (optional)
    contactForm.reset();
  });
});
