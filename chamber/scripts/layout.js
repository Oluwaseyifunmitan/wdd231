const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#members-list");

gridbutton.addEventListener("click", () => {
  display.style.display = "grid";
  display.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
  display.style.gap = "20px";

  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList);
listbutton.addEventListener("click", () => {
  display.style.display = "flex";
  display.style.flexDirection = "column";
  display.style.gap = "10px";
});
function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
