import { LitElement, html, css } from 'lit-element';
import { getRandomCat } from './api/catClient';

// Extend the LitElement base class
class CatRandom extends LitElement {
  static get styles() {
    return [
      css`
        div {
          background: red;
          height: 100px;
          width: 100px;
        }
      `
    ];
  }
  set image(val) {
    let oldVal = this._image;
    this._image = val;
    this.requestUpdate('image', oldVal);
  }

  get image() {
    return this._image;
  }

  constructor() {
    super();
    this._image = null;
  }

  firstUpdated(changedProperties) {
    setInterval(async () => {
      let cat = await getRandomCat();
      this.image = cat[0].url;
    }, 5000);

    // return true;
  }

  render() {
    return this.image === null
      ? html`
          <span>Caricamento</span>
        `
      : html`
          <img src=${this.image} />
        `;
  }
}
// Register the new element with the browser.
customElements.define('cat-random', CatRandom);
