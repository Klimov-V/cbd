
var header    = document.querySelector("header");
var headroom  = new Headroom(header, {
    tolerance: 10,
});
headroom.init();



let scrinWidth = window.screen.width,
    slidesValue = scrinWidth < 578 ? 1 : scrinWidth < 992 ? 2 : 3,
    isCentered = scrinWidth < 992 ? false : true;



var productsSlider = new Swiper('#productsSlider', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
        576: {
          slidesPerView: 2,
          centeredSlides: false,
        },
        992: {
          slidesPerView: 3,
        }
    },
    
    navigation: {
        nextEl: '.slider__arrow--right',
        prevEl: '.slider__arrow--left',
    },
})




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

function toggleMenu(e) {
    e.preventDefault();
    document.body.classList.toggle('menu-opened');
}
function toggleLogin(e) {
    e.preventDefault();
    document.body.classList.toggle('login-opened');
}