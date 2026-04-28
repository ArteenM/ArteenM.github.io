const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
  }
});

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', () => {
    const status = document.getElementById('form-status');
    if (status) {
      status.textContent = 'Sending your message...';
    }
  });
}
