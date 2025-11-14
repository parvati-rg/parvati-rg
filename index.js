// Simple scroll animation
document.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
});

// Initial fade/slide style
document.querySelectorAll("section").forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(20px)";
    sec.style.transition = "all 0.6s ease-out";
});
