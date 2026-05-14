function drawReframe(type) {

  const pack = getPack();

  const value =
    pick(pack.reframes[type]);

  const card =
    createCard(type, value);

  document
    .getElementById("card-area")
    .prepend(card);
}

function rerollCard(button) {

  const card =
    button.closest(".card");

  if (card.dataset.pinned === "true") {
    return;
  }

  const type =
    card.dataset.type;

  const value =
    pick(getPack().reframes[type]);

  card.querySelector(".card-content")
    .innerText = value;
}

function clearCards() {
  document.getElementById("card-area").innerHTML = "";
}

window.drawReframe = drawReframe;
window.rerollCard = rerollCard;
window.clearCards = clearCards;
