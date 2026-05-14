function drawElement(type) {

  const pack = getPack();

  const value = pick(pack[type]);

  const card = createCard(type, value);

  document
    .getElementById("card-area")
    .prepend(card);
}

function rerollCard(button) {

  const card = button.closest(".card");

  if (card.dataset.pinned === "true") {
    return;
  }

  const type = card.dataset.type;

  const pack = getPack();

  card.querySelector(".card-content").innerText =
    pick(pack[type]);
}

function rerollAll() {

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {

    if (card.dataset.pinned === "true") {
      return;
    }

    const type = card.dataset.type;

    card.querySelector(".card-content").innerText =
      pick(getPack()[type]);
  });
}

function clearCards() {
  document.getElementById("card-area").innerHTML = "";
}

window.drawElement = drawElement;
window.rerollCard = rerollCard;
window.rerollAll = rerollAll;
window.clearCards = clearCards;
