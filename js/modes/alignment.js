function generateAlignment() {

  const pack = getPack();

  const area =
    document.getElementById("card-area");

  const cards = [

    createCard(
      "learning outcome",
      pick(pack.learningOutcomes)
    ),

    createCard(
      "concept",
      pick(pack.concepts)
    ),

    createCard(
      "mechanic bridge",
      pick(pack.bridges)
    ),

    createCard(
      "assessment",
      pick(pack.assessments)
    )

  ];

  cards.forEach(card => {
    area.prepend(card);
  });
}

function rerollCard(button) {

  const card =
    button.closest(".card");

  if (card.dataset.pinned === "true") {
    return;
  }

  const type =
    card.dataset.type;

  const pack = getPack();

  let value = "";

  if (type === "learning outcome") {
    value = pick(pack.learningOutcomes);
  }

  else if (type === "concept") {
    value = pick(pack.concepts);
  }

  else if (type === "mechanic bridge") {
    value = pick(pack.bridges);
  }

  else if (type === "assessment") {
    value = pick(pack.assessments);
  }

  card.querySelector(".card-content")
    .innerText = value;
}

function clearCards() {
  document.getElementById("card-area").innerHTML = "";
}

window.generateAlignment =
  generateAlignment;

window.rerollCard =
  rerollCard;

window.clearCards =
  clearCards;
