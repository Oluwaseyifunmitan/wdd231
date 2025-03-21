// const hamburgerMenu = document.querySelector("#myButton");
// const menu = document.querySelector(".menuLinks");

// hamburgerMenu.addEventListener("click", () => {
//   menu.classList.toggle("open");
// });
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});