document.addEventListener('DOMContentLoaded', () => {
    const getStartedButton = document.querySelector('.hero-text button');
    getStartedButton.addEventListener('click', () => {
        alert('Get Started button clicked!');
    });

    const contactForm = document.querySelector('.contact form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted!');
    });
});
