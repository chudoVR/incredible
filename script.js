const burgerEl = document.querySelector('.burger');
const menuEl = document.querySelector('.menu');
burgerEl.addEventListener('click', function () {
    burgerEl.classList.toggle('active');
    menuEl.classList.toggle('active');
});


const menuLink = document.querySelector('.menu');
menuLink.addEventListener('click', function () {
    menuLink.classList.toggle('active');
    burgerEl.classList.toggle('active');
});