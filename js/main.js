// main.js – Handles navigation, smooth scrolling, and simple form validation

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const navLinks = document.querySelector('.nav-links');
  const menuButton = document.createElement('button');
  menuButton.className = 'mobile-menu-toggle';
  menuButton.innerHTML = '&#9776;'; // hamburger icon
  menuButton.setAttribute('aria-label', 'Toggle navigation menu');
  document.querySelector('nav').prepend(menuButton);

  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Simple contact form validation (if form exists)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = contactForm.elements['name'].value.trim();
      const email = contactForm.elements['email'].value.trim();
      const message = contactForm.elements['message'].value.trim();
      if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
      }
      // Placeholder success handling – in real site, you'd POST to a backend.
      alert('Thank you! Your message has been sent.');
      contactForm.reset();
    });
  }
});
