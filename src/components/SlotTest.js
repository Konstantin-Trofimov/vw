const template = document.createElement('template');

template.innerHTML = `
  <button id="dec">-</button>
  <slot name="data"></slot>
  <span id="count"></span>
  <button id="inc">+</button>
`;

class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    // this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true));
    // this.shadowRoot.getElementById('inc').onclick = () => this.inc();
    // this.shadowRoot.getElementById('dec').onclick = () => this.dec();
    // this.update(this.count);
  }

  inc() {
    this.update(++this.count);
  }

  dec() {
    this.update(--this.count);
  }

  update(count) {
    this.shadowRoot.getElementById('count').innerHTML = count;
  }
}

customElements.define('my-counter', MyCounter);