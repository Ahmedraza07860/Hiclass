// auth.js

// Utility: Show alerts with style
function showAlert(message, type = 'info') {
  const alertBox = document.createElement('div');
  alertBox.textContent = message;
  alertBox.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: ${type === 'error' ? '#e74c3c' : '#2ecc71'};
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-family: Poppins, sans-serif;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    z-index: 9999;
  `;
  document.body.appendChild(alertBox);
  setTimeout(() => alertBox.remove(), 3000);
}

// Signup Logic
function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const password = document.getElementById('password')?.value;

  if (!name || !email || password.length < 6) {
    showAlert('Please fill all fields correctly.', 'error');
    return;
  }

  const user = { name, email, password };
  localStorage.setItem('hiclassUser', JSON.stringify(user));
  showAlert('Signup successful! Redirecting...', 'success');

  setTimeout(() => window.location.href = 'login.html', 1500);
}

// Login Logic
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('email')?.value.trim();
  const password = document.getElementById('password')?.value;

  const savedUser = JSON.parse(localStorage.getItem('hiclassUser'));

  if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
    showAlert('Invalid email or password.', 'error');
    return;
  }

  localStorage.setItem('hiclassLoggedIn', 'true');
  showAlert('Login successful! Redirecting...', 'success');

  setTimeout(() => window.location.href = 'dashboard.html', 1500);
}

// Logout Function
function logoutUser() {
  localStorage.removeItem('hiclassLoggedIn');
  showAlert('You have been logged out.', 'success');
  setTimeout(() => window.location.href = 'login.html', 1000);
}

// Auth Guard for dashboard
function checkAuthGuard() {
  const isLoggedIn = localStorage.getItem('hiclassLoggedIn');
  if (!isLoggedIn) {
    showAlert('Please login to continue.', 'error');
    setTimeout(() => window.location.href = 'login.html', 1500);
  }
}

// Auto call on page load
document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  const loginForm = document.getElementById('loginForm');
  const logoutBtn = document.getElementById('logoutBtn');

  if (signupForm) signupForm.addEventListener('submit', handleSignup);
  if (loginForm) loginForm.addEventListener('submit', handleLogin);
  if (logoutBtn) logoutBtn.addEventListener('click', logoutUser);
});
