const menu = document.getElementById('menu');
const hamburger = document.querySelector('.navbar-hamburger');
const barsIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-xmark');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');

    barsIcon.style.display = barsIcon.style.display === 'none' ? 'block' : 'none';
    closeIcon.style.display = closeIcon.style.display === 'none' ? 'block' : 'none';
});