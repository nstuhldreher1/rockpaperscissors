const template = document.createElement("template");
template.innerHTML = `
  <style>
    .sr-only {
        position: absolute;   /* Take it out of normal flow */
        width: 1px;           /* Very small width */
        height: 1px;          /* Very small height */
        padding: 0;
        margin: -1px;         /* Hide it visually */
        overflow: hidden;     /* Clip content */
        clip: rect(0, 0, 0, 0); /* Old browsers */
        clip-path: inset(50%); /* Modern browsers */
        white-space: nowrap;   /* Prevent wrapping */
        border: 0;
    }
    .rps-score {
        display: grid;
        grid-template-areas: ". content .";
        grid-template-columns: 1fr repeat(1, minmax(0, 1238px)) 1fr;
        .rps-score__content{
            grid-area: content;
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .rps-score__player-score{
            justify-self: start;
            font-size: 3rem;
            color: blue;
        }
        .rps-score__enemy-score{
            justify-self: end;
            font-size: 3rem;
            color: red;
        }
    }
  </style>
  <div class="rps-score">
    <div class="rps-score__content">
      <p class="rps-score__player-score">
        <span class="sr-only">Player Score:</span>
        0
      </p>
        <p class="rps-score__enemy-score">
          <span class="sr-only">Enemy Score:</span>
          0
        </p>
    </div>
  </div>
`;

class Score extends HTMLElement {
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

customElements.define('rps-score', Score);

export default Score;