document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Initial Animations
    gsap.from('.reveal-text', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power4.out',
        stagger: 0.2
    });

    gsap.from('.fade-in', {
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out'
    });

    // Scroll Animations
    const revealUps = document.querySelectorAll('.reveal-up');
    revealUps.forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    const revealScales = document.querySelectorAll('.reveal-scale');
    revealScales.forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            ease: 'back.out(1.7)'
        });
    });

    // Section Title reveals
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach((title) => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Theme Toggle Logic
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark-theme';
    body.classList.add(savedTheme);

    toggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    });

    // stats counting animation
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach((stat) => {
        const value = parseInt(stat.innerText);
        gsap.from(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top 90%',
            },
            innerText: 0,
            duration: 2,
            snap: { innerText: 1 },
            ease: 'power2.out'
        });
    });
});
