const hamburgerMenu = document.querySelector("#myButton");
const menu = document.querySelector(".menuLinks");

hamburgerMenu.addEventListener("click", () => {
  menu.classList.toggle("open");
});
