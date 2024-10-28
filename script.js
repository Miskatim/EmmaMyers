let signUpLink = document.getElementById("signUpLink");
let loginLink = document.getElementById("loginLink")
let signUpForm = document.getElementById("signUpForm");
let loginForm = document.getElementById("loginForm");

signUpLink.addEventListener('click', signUpEqualLogin);
loginLink.addEventListener('click', loginEqualsignUp);

function signUpEqualLogin() {
    loginForm.style.display = "none";
    signUpForm.style.display = "flex";
    document.title = "Sign Up Form";
}

function loginEqualsignUp() {
    loginForm.style.display = "flex";
    signUpForm.style.display = "none";
    document.title = "Login Form";
}



function validateForm() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorContainer = document.getElementById("confirmPasswordErrorContainer");
    errorContainer.innerHTML = ""; 
    let isValid = true; 

    if (!password) {
        return false; 
    }

    if (password.length < 6) {
        displayError("Password must be at least 6 characters long.");
        isValid = false;
    }

    if (!/[A-Z]/.test(password)) {
        displayError("Password must contain at least one uppercase letter (A-Z).");
        isValid = false;
    }

    if (/[^a-zA-Z0-9]/.test(password)) {
        displayError("Password must not contain special symbols.");
        isValid = false;
    }

    if (password !== confirmPassword) {
        displayError("Passwords do not match!");
        isValid = false;
    }

    if (!isValid) return false; 

    window.location.href = "index.html";
    return false;
}

function displayError(errorMessage) {
    let errorContainer = document.getElementById("confirmPasswordErrorContainer");
    let errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = errorMessage;
    errorContainer.appendChild(errorDiv);
}

function Back() {
    window.location.href = 'index.html';
}
