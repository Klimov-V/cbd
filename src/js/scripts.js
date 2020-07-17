
var header    = document.querySelector("header");
var headroom  = new Headroom(header, {
    tolerance: 10,
});
headroom.init();



let scrinWidth = window.screen.width;
let slidesValue;
let isCentered = scrinWidth < 992 ? false : true;

let checkWidth = () => {
    return scrinWidth < 578 ? 1 : scrinWidth < 992 ? 2 : 3;
}

slidesValue = checkWidth();

document.querySelector('body').addEventListener('resize', () => {
    console.log(slidesValue);
    checkWidth()
    console.log(slidesValue);
});

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
