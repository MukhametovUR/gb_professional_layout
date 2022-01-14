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
    count = 0,
    price = 0,
    localEvent,
    quontityCount,
    basketCount = 0;

product.forEach(btn => {
    btn.addEventListener('click', headlerClick);
});

 function headlerClick(event) {
    addProducts(event);
    document.querySelector('.products-table').classList.add('table-active');
    

}

function addProducts (event){
    basketCount++;
    addProduct.textContent = `${basketCount}`;
    
    if (event.target == localEvent){
        let productCount = document.querySelector('.item__count').textContent,
            productPrice = document.querySelector('.item__price').textContent;
        quontityCount = parseFloat(document.querySelector('.item__count').textContent);
        quontityCount++;
        productCount = quontityCount;
        let priceTotal = productPrice * productCount;
        document.querySelector('.item__total').textContent = priceTotal;
        document.querySelector('.item__count').textContent = productCount;
    }else{        
        count++;
        price = event.path[2].querySelector('.products__item-price').textContent.slice(1);
        let product_name = event.path[2].querySelector('.products__item-title').textContent;
        table.insertAdjacentHTML('afterend',
        `   <td class="table-item item__name">${product_name}</td></td>
            <td class="table-item item__count">${count}</td>
            <td class="table-item item__price">${price}</td>
            <td class="table-item item__total">${price}</td>
        `    
        )
        count=0;
    }
    let totalPrice = document.querySelector('.total-price'),    
        sumTotal = document.querySelectorAll('.item__total'),
        countZ = 0;
    sumTotal.forEach((value) => 
        countZ += parseFloat(value.textContent)
        );
    totalPrice.textContent = countZ;
 
    localEvent = event.target;
}

