import * as flsFunctions from './modules/functions.js';
import partnersSlider from './modules/partners.js';

flsFunctions.isWebp()


// Partners
partnersSlider('.partners__slider', {
  loop: true,
  slidesPerView: 4.5,
  spaceBetween: 20,
  direction: 'horizontal',
  speed: 5000,
  autoplay: {
    enabled: true,
    delay: 1
  }
})