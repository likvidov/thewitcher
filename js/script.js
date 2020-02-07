var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow'
    },
    breakpoints: {
        640: {
          slidesPerView: 2
        }
    }
});

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header');

menuButton.addEventListener('click', (event) => {
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('header-active');
});