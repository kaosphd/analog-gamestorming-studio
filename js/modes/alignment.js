function generateAlignment() {

  const pack = getPack();

  const area =
    document.getElementById("card-area");

  const sequence = [

    {
      type: "learning outcome",
      value: pick(pack.learningOutcomes)
    },

    {
      type: "concept",
      value: pick(pack.concepts)
    },

    {
      type: "mechanic bridge",
      value: pick(pack.bridges)
    },

    {
      type: "assessment",
      value: pick(pack.assessments)
    }

  ];

  sequence.forEach((item, index) => {

    const card =
      createCard(item.type, item.value);

    area.appendChild(card);

    // add connector except after last card
    if (index < sequence.length - 1) {

      const arrow =
        document.createElement("div");

      arrow.className =
        "alignment-arrow";

      arrow.innerText = "↓";

      area.appendChild(arrow);
    }

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
