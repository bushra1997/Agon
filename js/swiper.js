var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
        // when window width is <= 499px
        575.98: {
            slidesPerView: 1,
            spaceBetweenSlides: 10
        },
        // when window width is <= 999px
        767.98: {
            slidesPerView: 2,
            spaceBetweenSlides: 10
        },
        991.98: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        }
    }    
});