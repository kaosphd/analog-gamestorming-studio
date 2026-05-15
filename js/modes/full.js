function generateFullConcept() {

  const pack = getPack();

  const area =
    document.getElementById("card-area");

  const sequence = [

    {
      type: "game type",
      value: pick(pack.gameTypes)
    },

    {
      type: "mechanic",
      value: pick(pack.mechanics)
    },

    {
      type: "setting",
      value: pick(pack.settings)
    },

    {
      type: "tone",
      value: pick(pack.tones)
    },

    {
      type: "wildcard",
      value: pick(pack.wildcards)
    },

    {
      type: "learning outcome",
      value: pick(pack.learningOutcomes)
    },

    {
      type: "concept",
      value: pick(pack.concepts)
    }

  ];

  sequence.forEach((item, index) => {

    const card =
      createCard(item.type, item.value);

    area.appendChild(card);

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

  if (type === "game type") {
    value = pick(pack.gameTypes);
  }

  else if (type === "mechanic") {
    value = pick(pack.mechanics);
  }

  else if (type === "setting") {
    value = pick(pack.settings);
  }

  else if (type === "tone") {
    value = pick(pack.tones);
  }

  else if (type === "wildcard") {
    value = pick(pack.wildcards);
  }

  else if (type === "learning outcome") {
    value = pick(pack.learningOutcomes);
  }

  else if (type === "concept") {
    value = pick(pack.concepts);
  }

  card.querySelector(".card-content")
    .innerText = value;
}

function clearCards() {
  document.getElementById("card-area").innerHTML = "";
}

window.generateFullConcept =
  generateFullConcept;

window.rerollCard =
  rerollCard;

window.clearCards =
  clearCards;
