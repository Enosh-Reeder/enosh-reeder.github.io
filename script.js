document.addEventListener('DOMContentLoaded', () => {

    // --- Code for Theme Toggle ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            // Toggle the .dark-mode class on the body
            body.classList.toggle('dark-mode');

            // Optional: Change button text based on the theme
            if (body.classList.contains('dark-mode')) {
                themeToggleBtn.textContent = 'Toggle Light Mode';
            } else {
                themeToggleBtn.textContent = 'Toggle Dark Mode';
            }
        });
    }

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Toggle mobile menu
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Scroll-to-top button
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});