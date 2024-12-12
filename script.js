function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const themeToggle = document.getElementById('theme-toggle'); // Add a button for toggling
const currentTheme = localStorage.getItem('theme');

// Apply saved theme on load
if (currentTheme === 'dark') {
  document.documentElement.classList.add('dark-mode');
}

// Toggle theme on click
themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
  const theme = document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

