// theme.js

// Check saved theme in localStorage
const savedTheme = localStorage.getItem("theme");
const htmlElement = document.documentElement;

if (savedTheme) {
  htmlElement.setAttribute("data-theme", savedTheme);
}

// Toggle theme when user clicks button
function toggleTheme() {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

// Optional: Attach to button with id="themeToggle"
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
});
