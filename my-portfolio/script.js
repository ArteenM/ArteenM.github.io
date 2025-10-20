// Highlight active nav link and simple contact form handling
document.addEventListener('DOMContentLoaded', function () {
    // set year in footers
    const year = new Date().getFullYear();
    document.querySelectorAll('#year, #year-projects, #year-contact').forEach(el => {
        if (el) el.textContent = year;
    });

    // active nav link
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(a => {
        const href = a.getAttribute('href');
        if (href === path || (href === 'index.html' && path === '')) {
            a.classList.add('active');
        }
    });

    // contact form submission (client-side only)
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const status = document.getElementById('form-status');
            status.textContent = 'Sending...';

            // simulate send
            setTimeout(() => {
                status.textContent = 'Message sent. Thank you — I will get back to you soon.';
                form.reset();
            }, 700);
        });
    }
});