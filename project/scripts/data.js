// Data source
import data from "../data/pathway.mjs";

const container = document.getElementById("card-container");
const modal = document.getElementById("modal");
const modalDescription = document.getElementById("modal-description");
const closeButton = document.querySelector(".close-button");


// Display cards
function displayCards(items) {
  container.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <button data-id="${item.id}" class="learn-more">Learn More</button>
    `;
    container.appendChild(card);
  });

  document.querySelectorAll(".learn-more").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const itemId = e.target.getAttribute("data-id");
      const item = items.find((i) => i.id === itemId);
      modalDescription.textContent = item.details;
      modal.showModal();
    });
  });
}

// Close modal
closeButton.addEventListener("click", () => {
  modal.close();
});

// Async data load
async function loadData() {
  try {
    // Simulate API delay
    await new Promise((r) => setTimeout(r, 300));
    localStorage.setItem("pathwayData", JSON.stringify(data));
    displayCards(data);
  } catch (err) {
    console.error("Error loading data", err);
  }
}

loadData();
