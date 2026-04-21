const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    // Inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Error fields
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmError = document.getElementById("confirmError");

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";

    // Name validation
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        emailError.textContent = "Enter valid email";
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // Confirm password
    if (password !== confirmPassword) {
        confirmError.textContent = "Passwords do not match";
        isValid = false;
    }

    if (isValid) {
        alert("Signup Successful!");
        form.reset();
        document.getElementById("strengthText").textContent = "";
    }
});

// Password strength checker
document.getElementById("password").addEventListener("input", function() {
    const password = this.value;
    const strengthText = document.getElementById("strengthText");

    let strength = "";

    if (password.length < 6) {
        strength = "Weak";
        strengthText.style.color = "red";
    } else if (password.match(/[A-Z]/) && password.match(/[0-9]/)) {
        strength = "Strong";
        strengthText.style.color = "green";
    } else {
        strength = "Medium";
        strengthText.style.color = "orange";
    }

    strengthText.textContent = "Strength: " + strength;
});