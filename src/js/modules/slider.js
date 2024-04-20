const CSS_CLASSES = {
  activeSlide: 'slide--active',
  activeBtn: 'product__btn--active',
};
const ROOT_SELECTOR = '.js-slider';
const CONTROLS_SELECTOR = '.js-slider-control';
const SLIDE_SELECTOR = '.js-slide';
const ID_ATTR = 'data-id';

const ROOT_EL = document.querySelector(ROOT_SELECTOR);
const CONTROLS = ROOT_EL.querySelectorAll(CONTROLS_SELECTOR);
const SLIDES = ROOT_EL.querySelectorAll(SLIDE_SELECTOR);

const swipeSlide = (id) => {
  SLIDES.forEach((slide) => {
    const slideId = slide.getAttribute(ID_ATTR);
    if (slideId === id) {
      slide.classList.add(CSS_CLASSES.activeSlide);
    } else {
      slide.classList.remove(CSS_CLASSES.activeSlide);
    }
  });
};

const controlClickHandler = (e) => {
  const { target } = e;
  const id = target.getAttribute(ID_ATTR);
  swipeSlide(id);

  CONTROLS.forEach((control) =>
    control.classList.remove(CSS_CLASSES.activeBtn),
  );
  target.classList.add(CSS_CLASSES.activeBtn);
};

const slider = () => {
  CONTROLS.forEach((control) => {
    control.addEventListener('click', controlClickHandler);
  });
};

export default slider;
