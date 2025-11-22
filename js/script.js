document.addEventListener('DOMContentLoaded', () => {

    // --- Gestion du menu Hamburger ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // --- Gestion de l'accordéon FAQ ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        if (question && answer && icon) {
            question.addEventListener('click', () => {
                const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

                // Fermer tous les autres accordéons
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.querySelector('.faq-answer').style.maxHeight = '0px';
                        otherItem.querySelector('.faq-icon').textContent = '+';
                    }
                });

                // Ouvrir ou fermer l'accordéon cliqué
                if (isOpen) {
                    answer.style.maxHeight = '0px';
                    icon.textContent = '+';
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    icon.textContent = '-';
                }
            });
        }
    });
    
    // --- Animation douce à l'apparition au scroll ---
    const animatedElements = document.querySelectorAll('section, .reassurance-item, .service-card, .testimonial-card, .about-content > div');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

});
