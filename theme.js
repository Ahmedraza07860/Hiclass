// theme.js

const htmlElement = document.documentElement;
const themeToggleBtn = document.getElementById("themeToggle");

function setTheme(theme) {
  htmlElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
  }
}

function toggleTheme() {
  const currentTheme = htmlElement.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
}

document.addEventListener("DOMContentLoaded", () => {
  // Auto-detect system preference if not already set
  let savedTheme = localStorage.getItem("theme");
  if (!savedTheme) {
    savedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }
});
