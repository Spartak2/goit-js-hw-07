"use strict";

document.addEventListener('DOMContentLoaded', function () {
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');

    if (!emailInput.value.trim() && !passwordInput.value.trim()) {
        alert('All form fields must be filled in');
    } else {
    const formData = {
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
    };

    console.log(formData);

    loginForm.reset();
}
});
});
