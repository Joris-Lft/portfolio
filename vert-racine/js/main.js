document.addEventListener('DOMContentLoaded', () => {

    // --- MOBILE MENU TOGGLE ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('header nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // --- STICKY HEADER ON SCROLL ---
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- FAQ ACCORDION ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const activeHeader = document.querySelector('.accordion-header.active');
            if (activeHeader && activeHeader !== header) {
                activeHeader.classList.remove('active');
                activeHeader.nextElementSibling.style.maxHeight = 0;
                activeHeader.nextElementSibling.style.padding = '0 1rem';
            }

            header.classList.toggle('active');
            const content = header.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = '0 1rem';
            } else {
                content.style.padding = '0 1rem 1.5rem';
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // --- SCROLL-IN ANIMATIONS ---
    const scrollElements = document.querySelectorAll('section > .container > *, .services-grid > *, .portfolio-grid > *, .review-carousel > *');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.setAttribute('data-scroll', 'in');
    };

    const hideScrollElement = (element) => {
        element.setAttribute('data-scroll', 'out');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                // Optional: hide element when it's out of view
                // hideScrollElement(el); 
            }
        });
    };

    // Initialize elements that are already in view
    handleScrollAnimation();
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Initialize all sections to be out of view at first, except for the hero content
     scrollElements.forEach((el) => {
        if (!el.closest('#hero')) {
             el.setAttribute('data-scroll', 'out');
        }
    });
    handleScrollAnimation(); // Run once on load to show what's visible


});
