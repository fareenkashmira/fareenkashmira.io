// Get elements from the DOM
const cookieConsent = document.getElementById('cookie-consent');
const closeBtn = document.querySelector('.close-btn');
const acceptAllBtn = document.querySelector('.accept-all');
const importantOnlyBtn = document.querySelector('.important-only');
const contactForm = document.getElementById('mc_embed_signup'); // Matches contact form modal in HTML
const privacyPolicy = document.getElementById('privacy-policy'); // Placeholder for privacy policy modal

// Function to hide the banner
function hideBanner() {
  cookieConsent.style.display = 'none';
}

// Event listeners for consent banner buttons
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    console.log('Rejected all cookies.');
    disablePhotoSlides(); // Disable slides on rejection
    hideBanner();
  });
}

if (acceptAllBtn) {
  acceptAllBtn.addEventListener('click', () => {
    console.log('Accepted all cookies.');
    initializePhotoSlides(); // Enable slides on acceptance
    hideBanner();
  });
}

if (importantOnlyBtn) {
  importantOnlyBtn.addEventListener('click', () => {
    console.log('Accepted only important cookies.');
    hideBanner();
  });
}

// Function to initialize photo slides when cookies are accepted
function initializePhotoSlides() {
  console.log('Photo slides initialized.');
  // Add photo slide initialization logic here
}

// Function to disable photo slides when cookies are rejected
function disablePhotoSlides() {
  console.log('Photo slides disabled.');
  // Add logic to disable photo slides here
}

// Function to show the contact form pop-up
function showContactForm() {
  if (contactForm) {
    contactForm.style.display = 'block';
    contactForm.style.opacity = '0';
    contactForm.style.transition = 'opacity 0.5s ease'; // Smooth transition
    setTimeout(() => {
      contactForm.style.opacity = '1'; // Fade-in effect
    }, 10); // Small delay for transition effect
  }
}

// Function to close the contact form pop-up
function closeContactModal() {
  if (contactForm) {
    contactForm.style.transition = 'opacity 0.5s ease'; // Smooth transition
    contactForm.style.opacity = '0';
    setTimeout(() => {
      contactForm.style.display = 'none'; // Hide after transition
    }, 500); // Wait for transition to complete before hiding
  }
}

// Function to handle form submission
document.querySelector('.submit-btn')?.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent page reload on submit
  const name = document.getElementById('mce-NAME').value;
  const email = document.getElementById('mce-EMAIL').value;
  const feedback = document.getElementById('mce-FEEDBACK').value;

  // Save the contact form data in local storage
  localStorage.setItem('contactFormData', JSON.stringify({ name, email, feedback }));
  alert('Thank you for reaching out!'); // Confirmation message

  // Clear the form
  document.getElementById('mce-NAME').value = '';
  document.getElementById('mce-EMAIL').value = '';
  document.getElementById('mce-FEEDBACK').value = '';
});

// Function to show the privacy policy
function showPrivacyPolicy() {
  if (privacyPolicy) {
    privacyPolicy.style.display = 'block';
    privacyPolicy.style.opacity = '0';
    privacyPolicy.style.transition = 'opacity 0.5s ease'; // Smooth transition
    setTimeout(() => {
      privacyPolicy.style.opacity = '1'; // Fade-in effect
    }, 10); // Small delay for transition effect
  }
}

// Function to close the privacy policy
function closePrivacyPolicy() {
  if (privacyPolicy) {
    privacyPolicy.style.transition = 'opacity 0.5s ease'; // Smooth transition
    privacyPolicy.style.opacity = '0';
    setTimeout(() => {
      privacyPolicy.style.display = 'none'; // Hide after transition
    }, 500); // Wait for transition to complete before hiding
  }
}

// Attach event listeners for contact form
document.getElementById('contactModal')?.addEventListener('click', showContactForm);
document.querySelector('.close-btn')?.addEventListener('click', closeContactModal);

// Smoothly show the contact form on landing
setTimeout(() => {
  showContactForm();
}, 1000); // Delay before showing the form
