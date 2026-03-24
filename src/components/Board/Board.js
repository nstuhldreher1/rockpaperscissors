const template = document.createElement("template");
template.innerHTML = `
    <style>
        .sr-only {
            position: absolute;   
            width: 1px;           
            height: 1px;          
            padding: 0;
            margin: -1px;         
            overflow: hidden;     
            clip: rect(0, 0, 0, 0); 
            clip-path: inset(50%); 
            white-space: nowrap;   
            border: 0;
        }
        .rps-boards {
            display: grid;
            grid-template-areas: ". content .";
            grid-template-columns: 1fr repeat(1, minmax(0, 1238px)) 1fr;
            .rps-boards__player-board{
                grid-area: content;
                display: grid;
                grid-template-columns: 1fr 1fr;
                list-style: none;
                padding: 0;
                margin: 1rem;
                column-gap: 2rem;
            }
            .rps-boards__player-board-item{
                justify-self: start;
                font-size: 2rem;
                color: blue;
            }
            .rps-boards__enemy-board-item{
                justify-self: end;
                font-size: 2rem;
                color: red;
            }
        }
    </style>
    <div class="rps-boards">
        <ul class="rps-boards__player-board">
            <li class="rps-boards__player-board-item"><span class="sr-only">Player Picked</span>Paper</li>
            <li class="rps-boards__enemy-board-item"><span class="sr-only">Enemy Picked</span>Rock</li>
        </ul>
    </div>
  `;

class Boards extends HTMLElement {
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

customElements.define("rps-boards", Boards);

export default Boards;