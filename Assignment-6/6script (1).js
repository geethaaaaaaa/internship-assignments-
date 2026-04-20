document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let successMsg = document.getElementById("successMsg");

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    successMsg.innerHTML = "";

    let valid = true;

    let namePattern = /^[A-Za-z ]+$/;

    if (name === "") {
        nameError.innerHTML = "Enter name";
        valid = false;
    } else if (!name.match(namePattern)) {
        nameError.innerHTML = "Only letters allowed";
        valid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.innerHTML = "Enter valid email";
        valid = false;
    }

    if (password.length < 6) {
        passwordError.innerHTML = "Minimum 6 characters";
        valid = false;
    }

    if (valid) {
        successMsg.innerHTML = "Form submitted successfully!";
        document.getElementById("myForm").reset();
    }
});