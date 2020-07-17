// (() => {
//     'use strict'
// })();

let scrinWidth = window.screen.width;
let slidesValue = scrinWidth < 768 ? 1 : scrinWidth < 992 ? 2 : 3;
let isCentered = scrinWidth < 992 ? false : true;

var productsSlider = new Swiper('#productsSlider', {
    loop: true,
    slidesPerView: slidesValue,
    centeredSlides: isCentered,
    spaceBetween: 45,
    
    
    navigation: {
        nextEl: '.slider__arrow--right',
        prevEl: '.slider__arrow--left',
    },
})

