// ===============================
// REGISTER
// ===============================

const registerForm =
    document.getElementById("registerForm");


if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "registerName"
                ).value.trim();


            const email =
                document.getElementById(
                    "registerEmail"
                ).value.trim();


            const password =
                document.getElementById(
                    "registerPassword"
                ).value;


            const confirmPassword =
                document.getElementById(
                    "confirmPassword"
                ).value;


            // Check passwords

            if (password !== confirmPassword) {

                alert("Passwords do not match!");

                return;
            }


            // Temporary frontend user

            const user = {
                name: name,
                email: email
            };


            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );


            alert(
                "Account created successfully! 🎉"
            );


            window.location.href =
                "login.html";

        }
    );

}


// ===============================
// LOGIN
// ===============================

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "loginEmail"
                ).value.trim();


            const user =
                JSON.parse(
                    localStorage.getItem("user")
                );


            if (!user) {

                alert(
                    "No account found. Please register first."
                );

                return;
            }


            if (email !== user.email) {

                alert(
                    "Email not found!"
                );

                return;
            }


            localStorage.setItem(
                "loggedIn",
                "true"
            );


            alert(
                "Login successful! 🎉"
            );


            window.location.href =
                "index.html";

        }
    );

}