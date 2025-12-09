// Register a new user
function registerUser() {
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    if (!email || !password) {
        alert('Please enter email and password.');
        return;
    }

    // Save user in localStorage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert(`Registered successfully!\nEmail: ${email}`);

    // Redirect to dashboard
    window.location.href = 'dashboard.html';
}

// Login an existing user
function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');

    if (!email || !password) {
        alert('Please enter email and password.');
        return;
    }

    if (email === savedEmail && password === savedPassword) {
        alert(`Logged in successfully!\nEmail: ${email}`);
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid email or password.');
    }
}

// Logout user
function logoutUser() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    window.location.href = 'index.html';
}
