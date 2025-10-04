// let cardCount = 0;
// let cards = [];
// let selectedCard = null;
// let carIndex = null;
// let score = localStorage.getItem("score")
//   ? parseInt(localStorage.getItem("score"))
//   : 0;
// let revealCount = 0;

// document.getElementById("score").textContent = `${score}`;
// document.getElementById("card-count").addEventListener("change", startGame);
// document
//   .getElementById("reveal-button")
//   .addEventListener("click", handleReveal);
// document.getElementById("score").addEventListener("click", showResetPopup);
// document.getElementById("reset-ok").addEventListener("click", resetScore);
// document
//   .getElementById("reset-cancel")
//   .addEventListener("click", hideResetPopup);

// function startGame() {
//   cardCount = parseInt(document.getElementById("card-count").value);
//   if (!cardCount) return;
//   document.getElementById("dropdown-container").classList.add("hidden");
//   document.getElementById("reveal-button").classList.remove("hidden");
//   document.getElementById("game-container").innerHTML = "";
//   cards = [];
//   selectedCard = null;
//   carIndex = Math.floor(Math.random() * cardCount);
//   revealCount = 0;
//   document.getElementById("reveal-button").textContent = "Reveal";
//   document.getElementById("reveal-button").disabled = true;
//   document.getElementById("message").textContent = "Select a card";
//   document.getElementById("message").style.visibility = "visible";

//   const rows = Math.ceil(cardCount / 3);
//   let cardIndex = 0;
//   let html = "";
//   for (let i = 0; i < rows; i++) {
//     html += '<div class="card-row">';
//     for (let j = 0; j < 3 && cardIndex < cardCount; j++) {
//       html += `
//                 <div class="card" data-index="${cardIndex}">
//                     <div class="card-inner">
//                         <div class="card-front">
//                             <img src="media/251003.png" alt="Card Back">
//                         </div>
//                         <div class="card-back">
//                             <img src="${
//                               cardIndex === carIndex
//                                 ? "media/winner.jpg"
//                                 : "media/goat.gif"
//                             }" alt="${cardIndex === carIndex ? "Car" : "Goat"}">
//                         </div>
//                     </div>
//                 </div>
//             `;
//       cardIndex++;
//     }
//     html += "</div>";
//   }
//   document.getElementById("game-container").innerHTML = html;

//   cards = document.querySelectorAll(".card");
//   cards.forEach((card, index) => {
//     card.addEventListener("click", () => selectCard(index));
//   });
// }

// function selectCard(index) {
//   if (revealCount === 0) {
//     if (selectedCard !== null)
//       cards[selectedCard].classList.remove("selected-red");
//     selectedCard = index;
//     cards[index].classList.add("selected-red");
//     document.getElementById("reveal-button").disabled = false;
//   } else if (revealCount === 1) {
//     if (selectedCard !== null)
//       cards[selectedCard].classList.remove("selected-red");
//     cards[index].classList.add("selected-green");
//     selectedCard = index;
//     document.getElementById("reveal-button").disabled = false;
//   }
// }

// function handleReveal() {
//   if (revealCount === 0) {
//     revealCount++;
//     document.getElementById("message").textContent = "Pick again";
//     document.getElementById("reveal-button").disabled = true;

//     let remainingCard = null;
//     if (selectedCard === carIndex) {
//       const goatIndices = Array.from({ length: cardCount }, (_, i) => i).filter(
//         (i) => i !== selectedCard && i !== carIndex
//       );
//       remainingCard =
//         goatIndices[Math.floor(Math.random() * goatIndices.length)];
//     } else {
//       remainingCard = carIndex;
//     }

//     cards.forEach((card, i) => {
//       if (i !== selectedCard && i !== remainingCard) {
//         card.classList.add("flipped");
//       }
//     });
//   } else {
//     revealCount++;
//     cards.forEach((card) => card.classList.add("flipped"));
//     if (selectedCard === carIndex) {
//       score++;
//     } else {
//       score--;
//     }
//     localStorage.setItem("score", score);
//     document.getElementById("score").textContent = `${score}`;
//     document.getElementById("reveal-button").textContent = "Play Again";
//     document.getElementById("message").style.visibility = "hidden";
//     document
//       .getElementById("reveal-button")
//       .addEventListener("click", resetGame);
//   }
// }

// function resetGame() {
//   document.getElementById("game-container").classList.add("fade-out");
//   setTimeout(() => {
//     document.getElementById("game-container").innerHTML = "";
//     document.getElementById("game-container").classList.remove("fade-out");
//     document.getElementById("dropdown-container").classList.remove("hidden");
//     document.getElementById("reveal-button").classList.add("hidden");
//     document.getElementById("message").textContent = "Choose Number of Cards";
//     document.getElementById("message").style.visibility = "visible";
//     document
//       .getElementById("reveal-button")
//       .removeEventListener("click", resetGame);
//   }, 500);
// }

// function showResetPopup() {
//   document.getElementById("reset-popup").classList.remove("hidden");
// }

// function resetScore() {
//   score = 0;
//   localStorage.setItem("score", score);
//   document.getElementById("score").textContent = `${score}`;
//   hideResetPopup();
// }

// function hideResetPopup() {
//   document.getElementById("reset-popup").classList.add("hidden");
// }

let cardCount = 0;
let cards = [];
let selectedCard = null;
let carIndex = null;
let score = localStorage.getItem("score")
  ? parseInt(localStorage.getItem("score"))
  : 0;
let revealCount = 0;

// Create dropdown dynamically on page load
const dropdownContainer = document.createElement("div");
dropdownContainer.id = "dropdown-container";
dropdownContainer.innerHTML = `
    <select id="card-count">
        <option value="" selected disabled>Choose Number of Cards</option>
        <option value="3">3 Cards</option>
        <option value="6">6 Cards</option>
        <option value="9">9 Cards</option>
        <option value="12">12 Cards</option>
    </select>
`;
document.body.appendChild(dropdownContainer);

document.getElementById("score").textContent = `${score}`;
document.getElementById("card-count").addEventListener("change", startGame);
document
  .getElementById("reveal-button")
  .addEventListener("click", handleReveal);
document.getElementById("score").addEventListener("click", showResetPopup);
document.getElementById("reset-ok").addEventListener("click", resetScore);
document
  .getElementById("reset-cancel")
  .addEventListener("click", hideResetPopup);

function startGame() {
  cardCount = parseInt(document.getElementById("card-count").value);
  if (!cardCount) return;
  document.getElementById("dropdown-container").classList.add("hidden");
  document.getElementById("reveal-button").classList.remove("hidden");
  document.getElementById("game-container").innerHTML = "";
  cards = [];
  selectedCard = null;
  carIndex = Math.floor(Math.random() * cardCount);
  revealCount = 0;
  document.getElementById("reveal-button").textContent = "Reveal";
  document.getElementById("reveal-button").disabled = true;
  document.getElementById("message").textContent = "Select a card";
  document.getElementById("message").style.visibility = "visible";

  const rows = Math.ceil(cardCount / 3);
  let cardIndex = 0;
  let html = "";
  for (let i = 0; i < rows; i++) {
    html += '<div class="card-row">';
    for (let j = 0; j < 3 && cardIndex < cardCount; j++) {
      html += `
                <div class="card" data-index="${cardIndex}">
                    <div class="card-inner">
                        <div class="card-front">
                            <img src="media/251003.png" alt="Card Back">
                        </div>
                        <div class="card-back">
                            <img src="${
                              cardIndex === carIndex
                                ? "media/winner.jpg"
                                : "media/goat.gif"
                            }" alt="${cardIndex === carIndex ? "Car" : "Goat"}">
                        </div>
                    </div>
                </div>
            `;
      cardIndex++;
    }
    html += "</div>";
  }
  document.getElementById("game-container").innerHTML = html;

  cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.addEventListener("click", () => selectCard(index));
  });
}

function selectCard(index) {
  if (revealCount === 0) {
    if (selectedCard !== null)
      cards[selectedCard].classList.remove("selected-red");
    selectedCard = index;
    cards[index].classList.add("selected-red");
    document.getElementById("reveal-button").disabled = false;
  } else if (revealCount === 1) {
    if (selectedCard !== null)
      cards[selectedCard].classList.remove("selected-red");
    cards[index].classList.add("selected-green");
    selectedCard = index;
    document.getElementById("reveal-button").disabled = false;
  }
}

function handleReveal() {
  if (revealCount === 0) {
    revealCount++;
    document.getElementById("message").textContent = "Pick again";
    document.getElementById("reveal-button").disabled = true;

    let remainingCard = null;
    if (selectedCard === carIndex) {
      const goatIndices = Array.from({ length: cardCount }, (_, i) => i).filter(
        (i) => i !== selectedCard && i !== carIndex
      );
      remainingCard =
        goatIndices[Math.floor(Math.random() * goatIndices.length)];
    } else {
      remainingCard = carIndex;
    }

    cards.forEach((card, i) => {
      if (i !== selectedCard && i !== remainingCard) {
        card.classList.add("flipped");
      }
    });
  } else {
    revealCount++;
    cards.forEach((card) => card.classList.add("flipped"));
    if (selectedCard === carIndex) {
      score++;
    } else {
      score--;
    }
    localStorage.setItem("score", score);
    document.getElementById("score").textContent = `${score}`;
    document.getElementById("reveal-button").textContent = "Play Again";
    document.getElementById("message").style.visibility = "hidden";
    document
      .getElementById("reveal-button")
      .addEventListener("click", resetGame);
  }
}

function resetGame() {
  document.getElementById("game-container").classList.add("fade-out");
  setTimeout(() => {
    document.getElementById("game-container").innerHTML = "";
    document.getElementById("game-container").classList.remove("fade-out");
    document.getElementById("dropdown-container").classList.remove("hidden");
    document.getElementById("reveal-button").classList.add("hidden");
    document.getElementById("message").textContent = "";
    document.getElementById("message").style.visibility = "visible";
    document.getElementById("card-count").selectedIndex = 0; // Reset dropdown
    document
      .getElementById("reveal-button")
      .removeEventListener("click", resetGame);
  }, 500);
}

function showResetPopup() {
  document.getElementById("reset-popup").classList.remove("hidden");
}

function resetScore() {
  score = 0;
  localStorage.setItem("score", score);
  document.getElementById("score").textContent = `${score}`;
  hideResetPopup();
}

function hideResetPopup() {
  document.getElementById("reset-popup").classList.add("hidden");
}
