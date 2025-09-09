function toggleTheme() {
  const body = document.querySelector("body");
  body.classList.toggle("dark");
}

const themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", toggleTheme);
