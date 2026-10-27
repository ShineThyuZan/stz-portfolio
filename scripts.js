document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const nav = document.getElementById('nav');
    const toggle = document.getElementById('nav-toggle');
    const navLinks = nav.querySelectorAll('a[href^="#"]');

    // Mobile menu
    const setMenu = (open) => {
        nav.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
    navLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

    // Header shadow once the page scrolls
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Highlight the nav link for the section in view
    const sections = [...document.querySelectorAll('main section[id]')];
    const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navLinks.forEach((link) => {
                link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
            });
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((section) => spy.observe(section));

    // Fade elements in as they enter the viewport
    const reveal = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => reveal.observe(el));

    // Contact form opens the visitor's email app with the message filled in
    const form = document.getElementById('contact-form');
    const error = document.getElementById('form-error');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
            error.hidden = false;
            return;
        }
        error.hidden = true;
        const data = new FormData(form);
        const body = `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`;
        window.location.href = 'mailto:shinethyuzan2010@gmail.com'
            + `?subject=${encodeURIComponent(data.get('subject'))}`
            + `&body=${encodeURIComponent(body)}`;
    });

    document.getElementById('year').textContent = new Date().getFullYear();
});
