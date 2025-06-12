// Toggle mobile menu
document.querySelector('.menu-toggle')?.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('active');
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Lazy show elements on scroll
const revealOnScroll = () => {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll);

// Optional: Chatbot auto open on hover
const chatbot = document.querySelector('.chatbot');
if (chatbot) {
  chatbot.addEventListener('mouseenter', () => {
    chatbot.innerText = 'Start Chat';
  });
  chatbot.addEventListener('mouseleave', () => {
    chatbot.innerText = '💬 Chat';
  });
}
