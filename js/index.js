const menuIcon = document.getElementById('menu__icon');
const burger = document.getElementById('burger');
const burgerLink = document.getElementById('burger__link');

menuIcon.addEventListener('click', (e) => {
    burger.classList.add('active');
    menuIcon.classList.add('remove');
});
burgerLink.addEventListener('click', (e) => {
    burger.classList.remove('active');
    menuIcon.classList.remove('remove');
});