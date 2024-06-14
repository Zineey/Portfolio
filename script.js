document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const options = {
        threshold: 0.6
    };

    let observer = new IntersectionObserver(navCheck, options);

    function navCheck(entries) {
        entries.forEach(entry => {
            const id = entry.target.id;
            const activeLink = document.querySelector(`.nav-menu a[href="#${id}"]`);

            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                activeLink.classList.add('active');
            }
        });
    }

    sections.forEach(section => {
        observer.observe(section);
    });

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
});
