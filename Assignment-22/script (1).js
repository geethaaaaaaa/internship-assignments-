let currentUser = null;

const message = document.getElementById("message");

// Login with selected role
function login() {
    const role = document.getElementById("roleSelect").value;

    currentUser = {
        role: role
    };

    message.innerText = "Logged in as " + role;
    message.style.color = "green";
}

// User page (accessible to all logged users)
function accessUserPage() {
    if (!currentUser) {
        message.innerText = "Please login first";
        message.style.color = "red";
        return;
    }

    message.innerText = "Welcome to User Page";
    message.style.color = "blue";
}

// Admin page (restricted)
function accessAdminPage() {
    if (!currentUser) {
        message.innerText = "Please login first";
        message.style.color = "red";
        return;
    }

    if (currentUser.role !== "admin") {
        message.innerText = "Access Denied: Admins only";
        message.style.color = "red";
        return;
    }

    message.innerText = "Welcome to Admin Page";
    message.style.color = "green";
}