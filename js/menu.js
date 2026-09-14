// ===============================
// CATEGORY FILTER
// ===============================

function filterFood(category, button) {

    const foods = document.querySelectorAll(".menu-food-card");
    const buttons = document.querySelectorAll(".category-btn");

    // Remove active class
    buttons.forEach(function (btn) {
        btn.classList.remove("active");
    });

    // Add active class
    button.classList.add("active");


    foods.forEach(function (food) {

        const foodCategory = food.dataset.category;

        if (category === "all" || foodCategory === category) {

            food.classList.remove("hidden");

        } else {

            food.classList.add("hidden");

        }

    });

}


// ===============================
// SEARCH
// ===============================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchValue =
            searchInput.value.toLowerCase();

        const foods =
            document.querySelectorAll(".menu-food-card");


        foods.forEach(function (food) {

            const foodName =
                food.querySelector("h3")
                    .textContent
                    .toLowerCase();

            if (foodName.includes(searchValue)) {

                food.classList.remove("hidden");

            } else {

                food.classList.add("hidden");

            }

        });

    });

}