// const mainnav = document.querySelector('.navigation')
// const hambutton = document.querySelector('#menu');

// hambutton.addEventListener('click', () => {
// 	mainnav.classList.toggle('show');
// 	hambutton.classList.toggle('show');
// });

const hamburgerElement = document.querySelector("#mybutton");
const navElement = document.querySelector("#animateme");

hamburgerElement.addEventListener("click", () => {
  navElement.classList.toggle("open");
  hamburgerElement.classList.toggle('open');
});
