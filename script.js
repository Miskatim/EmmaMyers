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