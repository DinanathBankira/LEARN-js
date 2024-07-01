document.addEventListener('DOMContentLoaded', function() {
    let cart = [];

    // Example product data
    const products = [
        { id: 1, name: 'Product 1', price: 100, image: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: 200, image: 'product2.jpg' },
        { id: 3, name: 'Product 3', price: 150, image: 'product3.jpg' },
    ];

    const productContainer = document.getElementById('products');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button data-id="${product.id}">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });

    productContainer.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const productId = parseInt(event.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            cart.push(product);
            alert(`${product.name} has been added to your cart.`);
            updateCart();
        }
    });

    function updateCart() {
        console.log('Cart:', cart);
    }
});