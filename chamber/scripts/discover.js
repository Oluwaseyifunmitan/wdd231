fetch("data/interest.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("cardContainer");
    data.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "cardd";
      // card.style.gridArea = `card${index + 1}`;
      card.innerHTML = `
        <h2>${item.title}</h2>
        <figure>
          <img src="${item.image}" alt="${item.title}" width="300px" height="200px" >
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;
      container.appendChild(card);
    });
  });
