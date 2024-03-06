var swiper = new Swiper(".mySwiper", {
    // Common settings for all screen sizes
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is <= 768px (mobile view)
        768: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        // when window width is > 768px (desktop view)
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
