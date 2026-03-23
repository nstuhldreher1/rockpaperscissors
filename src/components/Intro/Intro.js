const template = document.createElement('template');
template.innerHTML = `
  <style>
    .rps-intro{
        display: grid;
        grid-template-areas: ". content .";
        grid-template-columns: 1fr repeat(1, minmax(0, 1238px)) 1fr;

        .rps-intro__content{
            grid-area: content;
            background-color: lightgray;
            padding: 2rem;
        }
        .rps-intro__button{
            display: inline-block;
            padding: 0.5rem 1rem;
            background-color: black;
            color: white;
            text-decoration: none;
            border-radius: 4px;
        }
    }
  </style>
  <div class="rps-intro">
    <div class="rps-intro__content">
        <h1>Rock Paper Scissors</h1>
        <p>
            A realtime WebSocket game — pick rock, paper, or scissors and play 
            against another player online. Start the game and send the oponent the link to play. The first player to win 3 rounds wins the game.
        </p>
        <a class="rps-intro__button" href="/game.html">Start Game</a>
    </div>
  </div>
`;
class Intro extends HTMLElement {
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

customElements.define('rps-intro', Intro);

export default Intro;