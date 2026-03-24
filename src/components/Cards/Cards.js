const template = document.createElement("template");
template.innerHTML = `
  <style>
    .rps-cards {
        display: grid;
        grid-template-areas: ". content .";
        grid-template-columns: 1fr repeat(1, minmax(0, 1238px)) 1fr;
        .rps-cards__list{
            grid-area: content;
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 3rem;
            padding: 0;
            margin: 2rem;
        }
  </style>
  <div class="rps-cards">
    <ul class="rps-cards__list">
      <li class="rps-cards__list-item">
        <button class="rps-cards__button-rock">Rock</button>
      </li>
      <li class="rps-cards__list-item">
        <button class="rps-cards__button-paper">Paper</button>
      </li>
      <li class="rps-cards__list-item">
        <button class="rps-cards__button-scissors">Scissors</button>
      </li>
    </ul>
  </div>
`;

class Cards extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    let clone = template.content.cloneNode(true);
    this.shadowRoot.append(clone);
  }
}

customElements.define("rps-cards", Cards);

export default Cards;