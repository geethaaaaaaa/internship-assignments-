let users = []; // simulate database

const message = document.getElementById("message");

// Simple hash simulation (NOT real security)
function fakeHash(password) {
    return btoa(password); // base64 encode (just for demo)
}

// Fake JWT generator
function generateToken(email) {
    return btoa(email + ":" + Date.now());
}

// Signup
function signup() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
        message.innerText = "All fields required";
        message.style.color = "red";
        return;
    }

    const hashedPassword = fakeHash(password);

    users.push({ email, password: hashedPassword });

    message.innerText = "Signup successful!";
    message.style.color = "green";
}

// Login
function login() {
    const email = document.getElementById("email").value.trim();
    const password = fakeHash(document.getElementById("password").value);

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        const token = generateToken(email);
        localStorage.setItem("token", token);

        message.innerText = "Login successful! Token stored.";
        message.style.color = "green";
    } else {
        message.innerText = "Invalid credentials";
        message.style.color = "red";
    }
}