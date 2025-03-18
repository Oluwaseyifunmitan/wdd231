// const cards = document.querySelector('#fetched-data')

async function getData() {
  try {
    const response = await fetch("./data/members.json");
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    displayMembers(data);
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

function displayMembers(members) {
  const container = document.querySelector("#members-list"); // Ensure this exists in HTML

  members.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("member-card");
    

    card.innerHTML = `
            
            <h3>${member.name}</h3>
            <hr/>
            <img src="./images/${member.image}" alt="${member.name}">
            <p><strong>Email:</strong> ${member.email}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>URL:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            
        `;

    container.appendChild(card);
  });
}
function getMembershipLevel(level) {
  switch (level) {
    case 1:
      return "Member";
    case 2:
      return "Silver";
    case 3:
      return "Gold";
    default:
      return "Unknown";
  }
}
getData();
