// =========================
// GLOBAL PACK STATE
// =========================

window.ACTIVE_PACK = "entrepreneurship";

// =========================
// HELPERS
// =========================

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getPack() {
  return window.PACKS[window.ACTIVE_PACK];
}

// =========================
// PACK SWITCHING
// =========================

function setPack(name) {
  window.ACTIVE_PACK = name;
}

// =========================
// CARD FACTORY
// =========================

function createCard(type, content) {

  const card = document.createElement("div");

  card.className = "card";

  card.dataset.type = type;
  card.dataset.pinned = "false";

  card.innerHTML = `

    <div class="card-header">

      <div class="card-type">
        ${type.toUpperCase()}
      </div>

      <div class="card-controls">

        <button onclick="rerollCard(this)">
          🔄
        </button>

        <button onclick="pinCard(this)">
          📌
        </button>

      </div>

    </div>

    <div class="card-content">
      ${content}
    </div>

  `;

  return card;
}

// =========================
// PINNING
// =========================

function pinCard(button) {

  const card = button.closest(".card");

  if (card.dataset.pinned === "true") {

    card.dataset.pinned = "false";
    card.classList.remove("pinned");

  } else {

    card.dataset.pinned = "true";
    card.classList.add("pinned");
  }
}

// =========================
// EXPORT
// =========================

function exportCards() {

  const cards = document.querySelectorAll(".card");

  let output = "🎲 ANALOGUE DESIGN STUDIO\n\n";

  cards.forEach(card => {

    const type = card.dataset.type;
    const content =
      card.querySelector(".card-content").innerText;

    output += `${type.toUpperCase()}: ${content}\n`;
  });

  navigator.clipboard.writeText(output);

  alert("Copied to clipboard!");
}

// =========================
// GLOBALS
// =========================

window.pick = pick;
window.getPack = getPack;
window.setPack = setPack;

window.createCard = createCard;
window.pinCard = pinCard;

window.exportCards = exportCards;
