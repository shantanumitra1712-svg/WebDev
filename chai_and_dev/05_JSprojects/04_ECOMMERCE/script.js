document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: "Product 1", price: 29.99 },
        { id: 2, name: "Product 2", price: 19.99 },
        { id: 3, name: "Product 3", price: 59.99 },
    ];

    const cart = []

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessaage = document.getElementById("empty-cart")
    const cartTotalMessaage = document.getElementById("cart-total")
    const totalPriceDisplay = document.getElementById("total-price")
    const checkoutBtn = document.getElementById("checkout-btn")

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product')

        productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add to cart</button>
        `;

        productList.appendChild(productDiv);
    });

    productList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            // console.log("clicked");

            const productId = parseInt(e.target.getAttribute('data-id'))
            const product = products.find(p => p.id === productId)
            console.log(product);

            addToCart(product);
        }

    })

    function addToCart(product) {
        cart.push(product);
        // console.log(cart);
        renderCart();
    }

    function renderCart() {
        cartItems.innerHTML = "";
        let totalPrice = 0;

        if (cart.length > 0) {
            emptyCartMessaage.classList.add("hidden");
            cartTotalMessaage.classList.remove("hidden");

            cart.forEach((item, index) => {
                totalPrice += item.price;
                const cartItem = document.createElement('div');
                cartItem.innerHTML = `
                    ${item.name} - $${item.price.toFixed(2)}
                `
                cartItems.appendChild(cartItem);

                totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`
            })
        }
        else {
            emptyCartMessaage.classList.remove("hidden");
        }
    }

    checkoutBtn.addEventListener('click', () => {
        cart.length = 0;
        alert("Checkout Successful")
        renderCart();
        totalPriceDisplay.textContent = `$0.00`
    })

});