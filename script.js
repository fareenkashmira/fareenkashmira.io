// === Cookie Consent Elements ===
const cookieConsent = document.getElementById('cookie-consent');
const closeBtn = document.querySelector('.close-btn');
const acceptAllBtn = document.querySelector('.accept-all');
const importantOnlyBtn = document.querySelector('.important-only');

// === Show Banner if No Consent Stored ===
document.addEventListener('DOMContentLoaded', () => {
  const consentStatus = localStorage.getItem('cookieConsent');

  if (!consentStatus && cookieConsent) {
    cookieConsent.style.display = 'flex'; // or 'block' based on your CSS
    cookieConsent.style.opacity = '1';
  }
});

// === Hide Cookie Banner ===
function hideCookieBanner() {
  cookieConsent.style.transition = 'opacity 0.5s ease';
  cookieConsent.style.opacity = '0';
  setTimeout(() => {
    cookieConsent.style.display = 'none';
  }, 500);
}

// === Cookie Button Listeners ===
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    console.log('Rejected all cookies.');
    localStorage.setItem('cookieConsent', 'rejected');
    disablePhotoSlides();
    hideCookieBanner();
  });
}

if (acceptAllBtn) {
  acceptAllBtn.addEventListener('click', () => {
    console.log('Accepted all cookies.');
    localStorage.setItem('cookieConsent', 'accepted');
    initializePhotoSlides();
    hideCookieBanner();
  });
}

if (importantOnlyBtn) {
  importantOnlyBtn.addEventListener('click', () => {
    console.log('Accepted only important cookies.');
    localStorage.setItem('cookieConsent', 'important-only');
    hideCookieBanner();
  });
}

// === Photo Slide Handlers ===
function initializePhotoSlides() {
  console.log('Photo slides initialized.');
  // Insert logic to activate gallery/slider animations here
}

function disablePhotoSlides() {
  console.log('Photo slides disabled.');
  // Insert logic to pause or prevent loading of visual components
}

// === Contact Form Display (Always Anchored, No Animation) ===
const contactForm = document.getElementById('mc_embed_signup');
if (contactForm) {
  contactForm.style.display = 'block';
}

// === Handle Contact Form Submission ===
const submitBtn = document.querySelector('.submit-btn');

if (submitBtn) {
  submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const name = document.getElementById('mce-NAME')?.value || '';
    const email = document.getElementById('mce-EMAIL')?.value || '';
    const feedback = document.getElementById('mce-FEEDBACK')?.value || '';

    localStorage.setItem('contactFormData', JSON.stringify({ name, email, feedback }));
    alert('Thank you for reaching out!');

    // Clear form fields
    ['mce-NAME', 'mce-EMAIL', 'mce-FEEDBACK'].forEach(id => {
      const input = document.getElementById(id);
      if (input) input.value = '';
    });
  });
}

// === Privacy Policy Modal Handling ===
function showPrivacyPolicy() {
  const policy = document.getElementById('privacy-policy');
  if (policy) {
    policy.style.display = 'block';
    policy.style.opacity = '0';
    policy.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      policy.style.opacity = '1';
    }, 10);
  }
}

function closePrivacyPolicy() {
  const policy = document.getElementById('privacy-policy');
  if (policy) {
    policy.style.transition = 'opacity 0.5s ease';
    policy.style.opacity = '0';
    setTimeout(() => {
      policy.style.display = 'none';
    }, 500);
  }
}
