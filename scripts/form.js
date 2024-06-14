let confirmitem = document.querySelector("#confirm");

confirmitem.addEventListener("focusout", () => {
  let passworditem = document.querySelector("#password");
  if (confirmitem.value != passworditem.value) {
    document.querySelector("message").innerText = "Password dont match";
    passworditem.focus();
  } else {
    document.querySelector("#message").innerText;
  }
});
