// $(function() {
//   console.log('Hello Bootstrap5');
// });
"use strict";
"use strict";

var fp = flatpickr("#confirmDate", {
  dateFormat: "Y-m-d",
  minDate: "today",
  maxDate: new Date().fp_incr(180),
  disableMobile: "true"
});
"use strict";

var swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  effect: "fade",
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
