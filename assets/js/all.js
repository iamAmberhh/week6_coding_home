"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
"use strict";

var swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  controller: {
    inverse: true
  }
});
//# sourceMappingURL=all.js.map
