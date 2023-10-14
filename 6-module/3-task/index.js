import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem = null;
  translate = 0;

  constructor(slides) {
    this.slides = slides;

    this.#render();
  }

  #render() {

    this.elem = createElement(`<div class="carousel">
    
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>

    <div class="carousel__inner">
      
        </div>
    </div>`);

    this.#template();
    this.#setEventListeners();
  }

  #setEventListeners() {
    this.buttonRight = this.elem.querySelector('.carousel__arrow_right');
    this.buttonLeft = this.elem.querySelector('.carousel__arrow_left');
    this.buttonLeft.style.display = 'none';

    this.buttonLeft.addEventListener('click', this.#moveCarousel);
    this.buttonRight.addEventListener('click', this.#moveCarousel);

    const addButtonsList = this.elem.querySelectorAll('.carousel__button');
    addButtonsList.forEach((addButton) => {

      addButton.addEventListener('click', this.#addButtonClick);
    });
  }

  #addButtonClick = (event) => {

    const idReturnedEvt = new CustomEvent('product-add', {
      detail: event.target.closest('.carousel__slide').dataset.id,
      bubbles: true,
    });

    event.target.dispatchEvent(idReturnedEvt);
  }

  #moveCarousel = (event) => {
    this.inner = this.elem.querySelector('.carousel__inner');
    this.slide = this.elem.querySelector('.carousel__slide');
    this.slideList = this.elem.querySelectorAll('.carousel__slide');

    if (event.target.closest('.carousel__arrow_right')) {

      if (this.buttonLeft.style.display = 'none') this.buttonLeft.style.display = '';

      this.translate -= this.slide.offsetWidth;
      this.inner.style.transform = `translateX(${this.translate}px)`;
      if (-this.translate >= (this.slideList.length - 1) * this.slide.offsetWidth) this.buttonRight.style.display = 'none';

    } else {

      if (this.buttonRight.style.display = 'none') this.buttonRight.style.display = '';

      this.translate += this.slide.offsetWidth;
      this.inner.style.transform = `translateX(${this.translate}px)`;

      if (this.translate == 0) this.buttonLeft.style.display = 'none';
    }
  }

  #template() {

    this.slides.forEach((slide) => {

      let card = createElement(`<div class="carousel__slide" data-id="${slide.id}">
     <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
     <div class="carousel__caption">
       <span class="carousel__price">€${slide.price.toFixed(2)}</span>
       <div class="carousel__title">${slide.name}</div>
       <button type="button" class="carousel__button">
         <img src="/assets/images/icons/plus-icon.svg" alt="icon">
       </button>
     </div>`);

      this.elem.querySelector('.carousel__inner').append(card);
    });
  }
}
