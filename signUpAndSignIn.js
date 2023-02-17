
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const signUpForm = document.querySelector('.sign-up-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const usernameError = document.querySelector('#username-error');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');

function validateUsername() {
  if (usernameInput.value.length < 3 || usernameInput.value.length > 20) {
    usernameError.textContent = 'Username must be between 3 and 20 characters long.';
  } else {
    usernameError.textContent = '';
  }
}

function validateEmail() {
  if (emailInput.validity.typeMismatch) {
    emailError.textContent = 'Please enter a valid email address.';
  } else {
    emailError.textContent = '';
  }
}

function validatePassword() {
  if (passwordInput.value.length < 6 || passwordInput.value.length > 20) {
    passwordError.textContent = 'Password must be between 6 and 20 characters long.';
  } else {
    passwordError.textContent = '';
  }
}

usernameInput.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

signUpForm.addEventListener('submit', function(event) {
  if (!usernameInput.checkValidity() || !emailInput.checkValidity() || !passwordInput.checkValidity()) {
    event.preventDefault();
    validateUsername();
    validateEmail();
    validatePassword();
  }
});
