export default class ProductCard {

  elem = null;

  constructor({ name, price, category, image, id }) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.image = image;
    this.id = id;

    this.#render();
  }

  #render() {
    const container = document.createElement('div');
    container.classList.add('card');
    container.innerHTML = this.#template();

    this.elem = container;
    this.#setCustomListener();
  }

  #setCustomListener() {

    const button = this.elem.querySelector('.card__button');
    button.addEventListener('click', this.#clickAddButton)
  }

  #clickAddButton = (event) => {
    const customEvt = new CustomEvent('product-add', {

      bubbles: true,
      detail: this.id,
    });

    event.target.dispatchEvent(customEvt);
  }

  #template() {

    return `<div class="card__top">
      <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
      <span class="card__price">€${this.price.toFixed(2)}</span>
  </div>
  <div class="card__body">
      <div class="card__title">${this.name}</div>
      <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
  </div>`;
  }
}