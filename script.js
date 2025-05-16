// --- Cookie Consent (Home Page) ---
document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-consent');
  const close = document.querySelector('.close-btn');
  const accept = document.querySelector('.accept-all');
  const important = document.querySelector('.important-only');

  if (!banner) return;
  
  const consent = localStorage.getItem('cookieConsent');
  if (!consent) {
    banner.style.display = 'flex';
    banner.style.opacity = '1';
  }

  const hideBanner = () => {
    banner.style.transition = 'opacity 0.5s ease';
    banner.style.opacity = '0';
    setTimeout(() => banner.style.display = 'none', 500);
  };

  const initializePhotoSlides = () => {
    console.log('Photo slides initialized.');
    // Add your animation init code here
  };

  const disablePhotoSlides = () => {
    console.log('Photo slides disabled.');
  };

  close?.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');
    disablePhotoSlides();
    hideBanner();
  });

  accept?.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    initializePhotoSlides();
    hideBanner();
  });

  important?.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'important-only');
    hideBanner();
  });
});
