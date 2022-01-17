'use strict';
let headerMenuBtn = document.querySelector('.header__menu-btn'),
    headerNav = document.querySelector('.header__nav'),

    filterBtn = document.querySelector('.filter__main'),
    // filterSecBtn = document.querySelector('.filter__main-second'),
    mainFilter = document.querySelector('.filter__nav');

headerMenuBtn.addEventListener('click', function() {
    headerNav.style.display == 'none'? headerNav.style.display = 'block': headerNav.style.display = 'none'; 
});

filterBtn.addEventListener('click', function() {
    mainFilter.style.display == 'none'? mainFilter.style.display = 'block': mainFilter.style.display = 'none'; 
    // filterBtn.style.display == 'block'? mainFilter.style.display = 'none': mainFilter.style.display = 'block'; 
    console.log('click');
});


