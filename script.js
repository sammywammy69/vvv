// --- Smooth scrolling for navigation links ---
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if(target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// --- Contact form handler ---
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name && email && message) {
        formResponse.textContent = `Thank you, ${name}! Your message has been sent.`;
        formResponse.style.color = '#00ffff'; // neon-cyan for success
        contactForm.reset();
    } else {
        formResponse.textContent = 'Please fill in all fields.';
        formResponse.style.color = '#dc3545'; // red for error
    }
});

// --- Smooth scroll effect for header on scroll ---
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        header.style.transform = 'translateY(-10px)';
        header.style.transition = 'transform 0.3s ease-in-out';
        header.style.boxShadow = '0 4px 10px rgba(0,255,255,0.3)';
    } else {
        header.style.transform = 'translateY(0)';
        header.style.transition = 'transform 0.3s ease-in-out';
        header.style.boxShadow = 'none';
    }
});
