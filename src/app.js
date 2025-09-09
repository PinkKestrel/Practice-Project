function darkTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}
let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", darkTheme);

let contactSoon = "Thank you, we'll contact you soon!🕊️";
let submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", function () {
  alert(contactSoon);
});
