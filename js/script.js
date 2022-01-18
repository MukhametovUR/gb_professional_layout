'use strict';
let headerMenuBtn = document.querySelector('.header__menu-btn'),
    headerNav = document.querySelector('.header__nav');
headerMenuBtn.addEventListener('click', function() {
    headerNav.style.display == 'none'? headerNav.style.display = 'block': headerNav.style.display = 'none'; 
});
