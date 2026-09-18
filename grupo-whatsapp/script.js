// Ricardo Murad - Grupo WhatsApp Script
document.addEventListener('DOMContentLoaded', () => {
  // Update year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
