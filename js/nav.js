document.addEventListener("DOMContentLoaded", () => {

  const nav = document.getElementById("nav");

  if (!nav) return;

  nav.innerHTML = `

    <div class="suite-header">

      <div class="suite-title">
        Analogue Gamestorming Studio
      </div>

      <div class="suite-subtitle">
        Game-Based Learning Brainstorming Suite
      </div>

    </div>

    <div class="nav-bar">

      <a class="nav-button" href="index.html">
        Home
      </a>

      <a class="nav-button" href="deck.html">
        Deck Engine
      </a>

      <a class="nav-button" href="reframe.html">
        Reframe
      </a>

      <a class="nav-button" href="alignment.html">
        Alignment
      </a>

      <a class="nav-button" href="full.html">
        Full Concept Generator
      </a>

      <a class="nav-button" href="prototype.html">
        Prototype
      </a>

      <a class="nav-button" href="iterate.html">
        Iterate
      </a>

    </div>

  `;
});
