const menuMobileButton = document.querySelector('.menu__button-mobile');
const menuMobileIcon = document.querySelector('.menu__button-mobile--icon');
const menuList = document.querySelector('.menu__list-js');

menuMobileButton.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--active');

    if (menuList.classList.contains('menu__list--active')) {
        menuMobileIcon.setAttribute('src', './assets/imgs/close.svg');
    } else {
        menuMobileIcon.setAttribute('src', './assets/imgs/menu-mobile.svg');
    }
});
