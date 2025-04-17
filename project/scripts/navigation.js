
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Toggle menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});