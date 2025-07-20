const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Optional: Close menu when a link is clicked (for better UX)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    }
  });
});