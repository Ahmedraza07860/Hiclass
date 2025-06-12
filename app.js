// Toggle mobile menu
document.querySelector('.menu-toggle')?.addEventListener('click', () => {
  const nav = document.querySelector('nav');
  nav?.classList.toggle('active');
});

// Auto-close mobile nav on link click
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('nav')?.classList.remove('active');
  });
});

// Smooth scrolling for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Reveal animations using IntersectionObserver
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(el => revealObserver.observe(el));
} else {
  // Fallback for older browsers
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  document.addEventListener('DOMContentLoaded', revealOnScroll);
}

// Chatbot hover interaction
const chatbot = document.querySelector('.chatbot');
if (chatbot) {
  chatbot.addEventListener('mouseenter', () => {
    chatbot.innerText = 'Start Chat';
  });
  chatbot.addEventListener('mouseleave', () => {
    chatbot.innerText = '💬 Chat';
  });
}

// Optional: Scroll to top button (future use)
const scrollTopBtn = document.querySelector('.scroll-top');
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
