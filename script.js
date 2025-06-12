// ✅ Mobile menu toggle
const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// ✅ FAQ toggle logic
document.querySelectorAll(".faq-question").forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    const answer = faq.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// ✅ Scroll to top button
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.id = "scrollTopBtn";
scrollBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 20px;
  padding: 10px 15px;
  font-size: 18px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: none;
  z-index: 999;
`;
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ✅ Dynamic copyright year
const yearSpan = document.querySelector("#copyright-year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ✅ Light/Dark mode toggle (optional)
const themeToggle = document.querySelector("#theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
}
