document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const toLogin = document.getElementById('toLogin');
    const toRegister = document.getElementById('toRegister');
    
    toLogin.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.register-container').style.transform = 'translateX(-100%)';
        document.querySelector('.login-container').style.transform = 'translateX(0)';
    });

    toRegister.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.register-container').style.transform = 'translateX(0)';
        document.querySelector('.login-container').style.transform = 'translateX(100%)';
    });

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle registration logic here
        alert('Registered successfully');
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle login logic here
        alert('Logged in successfully');
    });
});