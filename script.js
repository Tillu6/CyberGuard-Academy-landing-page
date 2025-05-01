document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for CTA
    const ctaButton = document.querySelector('.btn');
    if (ctaButton) {
        ctaButton.addEventListener('click', e => {
            e.preventDefault();
            const featuresSection = document.getElementById('features');
            if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Example: Fade in elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.card, blockquote').forEach(el => {
        observer.observe(el);
    });
});