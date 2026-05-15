function generatePrototype() {

  const pack = getPack();

  const area =
    document.getElementById("card-area");

  const sequence = [

    {
      type: "mvp prompt",
      value: pick(pack.prototype.mvp)
    },

    {
      type: "component prompt",
      value: pick(pack.prototype.components)
    },

    {
      type: "playtest focus",
      value: pick(pack.prototype.playtest)
    },

    {
      type: "constraint",
      value: pick(pack.prototype.constraints)
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

  if (type === "mvp prompt") {
    value = pick(pack.prototype.mvp);
  }

  else if (type === "component prompt") {
    value = pick(pack.prototype.components);
  }

  else if (type === "playtest focus") {
    value = pick(pack.prototype.playtest);
  }

  else if (type === "constraint") {
    value = pick(pack.prototype.constraints);
  }

  card.querySelector(".card-content")
    .innerText = value;
}

function clearCards() {
  document.getElementById("card-area").innerHTML = "";
}

window.generatePrototype =
  generatePrototype;

window.rerollCard =
  rerollCard;

window.clearCards =
  clearCards;
