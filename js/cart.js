// ===============================
// CART PAGE
// ===============================

let cartItems =
    JSON.parse(localStorage.getItem("cart")) || [];


// ===============================
// DISPLAY CART
// ===============================

function displayCart() {

    const container =
        document.getElementById("cart-container");

    const emptyCart =
        document.getElementById("empty-cart");

    const summary =
        document.getElementById("cart-summary");


    container.innerHTML = "";


    // Empty cart

    if (cartItems.length === 0) {

        emptyCart.classList.remove("hidden");
        summary.classList.add("hidden");

        updateCartCount();

        return;
    }


    emptyCart.classList.add("hidden");
    summary.classList.remove("hidden");


    // Display items

    cartItems.forEach(function (item, index) {

        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-image">
                🍽️
            </div>

            <div class="cart-item-info">

                <h3>${item.name}</h3>

                <p>₹${item.price}</p>

            </div>

            <div class="quantity">

                <button onclick="decreaseQuantity(${index})">
                    −
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button onclick="increaseQuantity(${index})">
                    +
                </button>

            </div>

            <button
                class="remove-btn"
                onclick="removeItem(${index})">

                🗑️

            </button>

        `;


        container.appendChild(cartItem);

    });


    calculateTotal();

    updateCartCount();

}


// ===============================
// INCREASE
// ===============================

function increaseQuantity(index) {

    cartItems[index].quantity++;

    saveCart();

    displayCart();
}


// ===============================
// DECREASE
// ===============================

function decreaseQuantity(index) {

    if (cartItems[index].quantity > 1) {

        cartItems[index].quantity--;

    } else {

        cartItems.splice(index, 1);

    }

    saveCart();

    displayCart();
}


// ===============================
// REMOVE
// ===============================

function removeItem(index) {

    cartItems.splice(index, 1);

    saveCart();

    displayCart();
}


// ===============================
// SAVE CART
// ===============================

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cartItems)
    );

}


// ===============================
// TOTAL
// ===============================

function calculateTotal() {

    let subtotal = 0;


    cartItems.forEach(function (item) {

        subtotal +=
            item.price * item.quantity;

    });


    const delivery =
        subtotal > 0 ? 40 : 0;

    const total =
        subtotal + delivery;


    document.getElementById("subtotal")
        .textContent = `₹${subtotal}`;

    document.getElementById("delivery")
        .textContent = `₹${delivery}`;

    document.getElementById("total")
        .textContent = `₹${total}`;

}


// ===============================
// CART COUNT
// ===============================

function updateCartCount() {

    const count =
        document.getElementById("cart-count");

    if (count) {

        let totalItems = 0;

        cartItems.forEach(function (item) {

            totalItems += item.quantity;

        });

        count.textContent = totalItems;

    }

}


// ===============================
// CHECKOUT
// ===============================

function checkout() {

    if (cartItems.length === 0) {

        alert("Your cart is empty!");

        return;
    }


    alert(
        "Checkout page will be added in the next step! 🛍️"
    );

}


// ===============================
// PAGE LOAD
// ===============================

document.addEventListener(
    "DOMContentLoaded",
    displayCart
);