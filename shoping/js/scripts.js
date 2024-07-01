document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: 29.99, image: 'images/product1.jpg' },
        { id: 2, name: 'Product 2', price: 19.99, image: 'images/product2.jpg' },
        { id: 3, name: 'Product 3', price: 39.99, image: 'images/product3.jpg' }
    ];

    let cart = [];

    const productContainer = document.getElementById('products');
    const cartCount = document.getElementById('cart-count');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });

    window.addToCart = function (id) {
        const product = products.find(p => p.id === id);
        cart.push(product);
        cartCount.textContent = cart.length;

        const cartButton = document.querySelector(`button[onclick="addToCart(${id})"]`);
        cartButton.textContent = "Added!";
        cartButton.style.backgroundColor = "#218838";

        setTimeout(() => {
            cartButton.textContent = "Add to Cart";
            cartButton.style.backgroundColor = "#28a745";
        }, 2000);

        alert(`${product.name} has been added to the cart.`);
    };
});