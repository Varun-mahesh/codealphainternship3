// Optional JS: Add toggle functionality for mobile nav or animation
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelector('.nav-links');
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = '☰';
  toggleBtn.classList.add('toggle-btn');
  document.querySelector('.navbar').appendChild(toggleBtn);

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
