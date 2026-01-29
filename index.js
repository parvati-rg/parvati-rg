// Smooth scroll for internal links (future-proof)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Simple welcome message
window.addEventListener('load', () => {
    console.log("Welcome to Parvati Ramesh Gundur's Portfolio 🚀");
});

// Highlight skills on hover (small UX touch)
const skills = document.querySelectorAll('.skills li');

skills.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.style.transform = 'scale(1.1)';
        skill.style.transition = '0.2s';
    });

    skill.addEventListener('mouseleave', () => {
        skill.style.transform = 'scale(1)';
    });
});

// Dynamic year in footer
const footer = document.querySelector('footer p');
const year = new Date().getFullYear();
footer.innerHTML = `© ${year} Parvati Ramesh Gundur`;

