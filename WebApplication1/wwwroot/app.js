// REGISTER
function registerUser() {
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    if (!email || !password) {
        alert('Please enter email and password.');
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert(`Registered successfully: ${email}`);
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            alert(error.message);
        });
}

// LOGIN
function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        alert('Please enter email and password.');
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert(`Logged in as: ${email}`);
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            alert(error.message);
        });
}

// LOGOUT
function logoutUser() {
    auth.signOut().then(() => {
        window.location.href = 'index.html';
    });
}

// CHECK AUTH STATE
auth.onAuthStateChanged(user => {
    if (user && window.location.pathname.endsWith('dashboard.html')) {
        document.getElementById('userEmail').innerText = `You are logged in as: ${user.email}`;
    }
    else if (!user && window.location.pathname.endsWith('dashboard.html')) {
        window.location.href = 'index.html';
    }
});
