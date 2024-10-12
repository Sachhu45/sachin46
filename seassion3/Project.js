
let cart = [];
let total = 0;

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total');
const cartIcon = document.getElementById('cart-icon');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const cakeId = this.getAttribute('data-id');
        const cakeName = this.getAttribute('data-name');
        const cakePrice = parseFloat(this.getAttribute('data-price'));

        const cakeItem = {
            id: cakeId,
            name: cakeName,
            price: cakePrice,
        };

        cart.push(cakeItem);
        total += cakePrice;

        updateCartDisplay();
        updateCartIcon();
    });
});

function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - ${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(li);
    });
    totalPriceElement.textContent = total.toFixed(2);
}

function updateCartIcon() {
    cartIcon.textContent = `Cart ($${cart.length})`;
}

document.getElementById('checkout').addEventListener('click', function() {
    alert('Thank you for your purchase!');
    cart = [];
    total = 0;
    updateCartDisplay();
    updateCartIcon();
});