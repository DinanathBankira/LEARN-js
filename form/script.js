document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.querySelector('.register-container');
    const loginForm = document.querySelector('.login-container');
    const toLogin = document.getElementById('toLogin');
    const toRegister = document.getElementById('toRegister');

    function showLoginForm() {
        registerForm.style.transform = 'translateX(-100%)';
        registerForm.style.opacity = '0';
        loginForm.style.transform = 'translateX(0)';
        loginForm.style.opacity = '1';
    }

    function showRegisterForm() {
        registerForm.style.transform = 'translateX(0)';
        registerForm.style.opacity = '1';
        loginForm.style.transform = 'translateX(100%)';
        loginForm.style.opacity = '0';
    }

    toLogin.addEventListener('click', function(e) {
        e.preventDefault();
        showLoginForm();
    });

    toRegister.addEventListener('click', function(e) {
        e.preventDefault();
        showRegisterForm();
    });

    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle registration logic here
        alert('Registered successfully');
    });

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle login logic here
        alert('Logged in successfully');
    });
});