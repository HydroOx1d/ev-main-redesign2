import * as flsFunctions from './modules/functions.js';
import partnersSlider from './modules/partners.js';
import languageDropdown from './modules/header.js';
import {getScripts, getLink} from './modules/includeScriptsAndLinks.js';

flsFunctions.isWebp()

// header

languageDropdown();

// Partners
// if(window.innerWidth > 576) {
//   window.addEventListener('scroll', () => {
//     const timeout = setTimeout(() => {
//       document.head.insertAdjacentHTML('beforeend', getLink('https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css'));
//       document.body.insertAdjacentHTML('beforeend', getScripts('https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js'));
//       partnersSlider('.partners__slider', {
//         loop: true,
//         slidesPerView: 4.5,
//         spaceBetween: 20,
//         direction: 'horizontal',
//         speed: 5000,
//         autoplay: {
//           enabled: true,
//           delay: 1
//         },
//         breakpoints: {
//           576: {
//             slidesPerView: 2.4,
//           },
//           767: {
//             slidesPerView: 3.4,
//           },
//           992: {
//             slidesPerView: 4.5,
//           }
//         }
//       })
//     }, 1000)
//   })
// }

partnersSlider('.partners__slider', {
  loop: true,
  slidesPerView: 4.5,
  spaceBetween: 20,
  direction: 'horizontal',
  speed: 5000,
  autoplay: {
    enabled: true,
    delay: 1
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    576: {
      slidesPerView: 2.4,
    },
    767: {
      slidesPerView: 3.4,
    },
    992: {
      slidesPerView: 4.5,
    }
  }
})