// const cards = document.querySelector('#fetched-data')

async function getData() {
  try {
    const response = await fetch("./data/members.json");
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    displayMembers(data);
    // const filteredMembers = data.filter(member => member.membership_level === "silver" || member.membership_level === "gold");
    
    // Shuffle and pick 3 random members
    // const selectedMembers = getRandomMembers(filteredMembers, 3);

    // displayMembers(selectedMembers);
    // console.log(selectedMembers);
  } catch (error) {
    console.error(error.message);
  }
}
function getRandomMembers(members, count) {
  // Shuffle array using Fisher-Yates algorithm
  for (let i = members.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [members[i], members[j]] = [members[j], members[i]];
  }
  return members.slice(0, count);
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
             <p><strong>Membership level: </strong> ${member.membership_level}</p>
        `;

    container.appendChild(card);
  });
}
// function getMembershipLevel(level) {
//   switch (level) {
//     case 1:
//       return "Member";
//     case 2:
//       return "Silver";
//     case 3:
//       return "Gold";
//     default:
//       return "Unknown";
//   }
// }
getData();
