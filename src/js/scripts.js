
var header    = document.querySelector("header");
var headroom  = new Headroom(header, {
    tolerance: 10,
});
headroom.init();



let scrinWidth = window.screen.width,
    slidesValue = scrinWidth < 578 ? 1 : scrinWidth < 992 ? 2 : 3,
    isCentered = scrinWidth < 992 ? false : true,
    html = document.querySelector('body');



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

//  Этот закоментированный код должен динамически менять значение slidesPerView в слайдере
//     и, соответственно, менять к-во отображаемых единовременно слайдов. Значение меняется, 
//     но изменения в отображении слайдера появляются только после перезагрузки, а это и так происходит без данного кода.

// window.addEventListener('scroll', () => {
//     scrinWidth = window.screen.width;
//     slidesValue = scrinWidth < 578 ? 1 : scrinWidth < 992 ? 2 : 3;
//     console.log(slidesValue);
//     console.log(scrinWidth);
//     productsSlider.slidesPerView = slidesValue;
//     console.log(`slidesPerView - ${productsSlider.slidesPerView}`);
// });


window.addEventListener('scroll', () => {
    let activeLink = document.querySelector(".navigation__link--active");
    activeLink && activeLink.classList.remove("navigation__link--active");
    let counter, sections = document.querySelectorAll("section");
    for (counter = 0; counter < sections.length; counter++) {
      let section = sections[counter];
      if (section.getBoundingClientRect().top > 1) break;
      
    }
    if (--counter >= 0) {
        
      let index = sections[counter] && sections[counter].getAttribute("id"),
          link = document.querySelector('a[href="#' + index + '"]');

      index && link && link.classList.add("navigation__link--active");
    }
});
