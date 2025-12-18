// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form submission (replace with backend integration)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! We\'ll get back to you soon.');
});