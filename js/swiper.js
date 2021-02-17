var swiper = new Swiper(".swiper-container", {
  cssMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    575.98: {
      slidesPerView: 1,
      spaceBetweenSlides: 10,
    },
    767.98: {
      slidesPerView: 2,
      spaceBetweenSlides: 10,
    },
    991.98: {
      slidesPerView: 3,
      spaceBetweenSlides: 0,
    },
  },
});
