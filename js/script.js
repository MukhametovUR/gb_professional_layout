'use strict';
let headerMenuBtn = document.querySelector('.header__menu-btn'),
    headerNav = document.querySelector('.header__nav');
headerMenuBtn.addEventListener('click', function() {
    headerNav.style.display == 'none'? headerNav.style.display = 'block': headerNav.style.display = 'none'; 
});


let product = document.querySelectorAll('.products__item'),
    basket = document.querySelector('.basket'),
    addProduct = document.querySelector('.add__product'),
    table = document.querySelector('.table-insert'),
    count = 1,
    price = 0;

product.forEach(btn => {
    btn.addEventListener('click', headlerClick);
});

 function headlerClick(event) {
    addProducts(event);
    console.log('1');

}

function addProducts (event){
    count++;
    addProduct.textContent = `${count}`;
    price = event.path[2].querySelector('.products__item-price').textContent.slice(1);
    let product_name = event.path[2].querySelector('.products__item-title').textContent;
    table.insertAdjacentHTML('afterend',
    `   <td class="table-item item__name">${product_name}</td>></td>
        <td class="table-item item__count">${count}</td>
        <td class="table-item item__price">${price}</td>
        <td class="table-item item__total">${price*count}</td>
    `
    
    )

}

