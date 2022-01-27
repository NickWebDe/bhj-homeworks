
const productControlInc = Array.from(document.getElementsByClassName('product__quantity-control product__quantity-control_inc'));
const productControlDec = Array.from(document.getElementsByClassName('product__quantity-control product__quantity-control_dec'));
const productAdd = Array.from(document.getElementsByClassName('product__add'));
const cartProducts = document.querySelector('.cart__products');
const productArr = document.getElementsByClassName('.cart__products');

let htmlBasket = `<div class="cart__product" data-id="1">
    <img class="cart__product-image" src="image.png">
    <div class="cart__product-count">20</div>
</div>`;


productControlDec.forEach( (e) => {
	e.addEventListener('click', (event) => {
		event.currentTarget.nextElementSibling.innerText <= 0 ? alert('Выберите колличетсво товара') 
		: event.currentTarget.nextElementSibling.innerText --;
	})
})



productControlInc.forEach( (e) => {
	e.addEventListener('click', (event) => {
		event.currentTarget.previousElementSibling.innerText ++;
	})
})

productAdd.forEach( (e) => {
	e.addEventListener('click', (event) => {
		cartProducts.insertAdjacentHTML('beforeEnd', htmlBasket);
		console.log(productArr);
		// cartProducts.querySelector('.cart__product-count').innerText = event.currentTarget.previousElementSibling.querySelector('.product__quantity-value').innerText;
		// // // console.log(document.querySelector('.cart__product'))
	})
})