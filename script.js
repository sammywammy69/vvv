// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name && email && message) {
        document.getElementById('formResponse').textContent = `Thank you, ${name}! Your message has been sent.`;
        this.reset();
    } else {
        document.getElementById('formResponse').textContent = 'Please fill in all fields.';
        document.getElementById('formResponse').style.color = '#dc3545';
    }
});

// Add scroll effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.transform = 'translateY(-10px)';
    } else {
        header.style.transform = 'translateY(0)';
    }
});
