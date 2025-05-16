// --- Cookie Consent Banner ---
document.addEventListener('DOMContentLoaded', () => {
  const b = document.getElementById('cookie-consent');
  if (!b || localStorage.getItem('cookieConsent')) return b.style.display = 'none';
  const h = () => { b.style.opacity = '0'; setTimeout(() => b.style.display = 'none', 500); };
  b.querySelector('.close-btn')?.addEventListener('click', () => { localStorage.setItem('cookieConsent', 'rejected'); h(); });
  b.querySelector('.accept-all')?.addEventListener('click', () => { localStorage.setItem('cookieConsent', 'accepted'); h(); });
  b.querySelector('.important-only')?.addEventListener('click', () => { localStorage.setItem('cookieConsent', 'important-only'); h(); });
});

