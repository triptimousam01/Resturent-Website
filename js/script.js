// ===============================
// CART
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}


// Add food to cart
function addToCart(name, price) {

    const food = {
        id: Date.now(),
        name: name,
        price: price,
        quantity: 1
    };

    cart.push(food);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(name + " added to cart! 🛒");
}


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you! Your message has been sent. 😊");

        contactForm.reset();

    });

}


// ===============================
// PAGE LOAD
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    updateCartCount();

});