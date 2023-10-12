function initCarousel() {
  const buttonRight = document.querySelector('.carousel__arrow_right');
  const buttonLeft = document.querySelector('.carousel__arrow_left');
  const inner = document.querySelector('.carousel__inner');
  const slide = document.querySelector('.carousel__slide');
  const slideList = document.querySelectorAll('.carousel__slide');
  let translate = 0;

  buttonLeft.style.display = 'none';

  function moveCarousel(event) {

    if (event.target.closest('.carousel__arrow_right')) {

      if (buttonLeft.style.display = 'none') buttonLeft.style.display = '';

      translate -= slide.offsetWidth;
      inner.style.transform = `translateX(${translate}px)`;
      if (-translate >= (slideList.length - 1) * slide.offsetWidth) buttonRight.style.display = 'none';

    } else {

      if (buttonRight.style.display = 'none') buttonRight.style.display = '';

      translate += slide.offsetWidth;
      inner.style.transform = `translateX(${translate}px)`;

      if (translate == 0) buttonLeft.style.display = 'none';
    }
  }

  buttonLeft.addEventListener('click', moveCarousel);
  buttonRight.addEventListener('click', moveCarousel);
}