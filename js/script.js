// Function to accept all cookies
function acceptAllCookies() {
    localStorage.setItem('cookiesAccepted', 'all');
    hideConsentBanner();
    initializePhotoSlides(); // Initialize photo slides after accepting cookies
}

// Function to reject all cookies
function rejectCookies() {
    localStorage.setItem('cookiesAccepted', 'none');
    hideConsentBanner();
    disablePhotoSlides(); // Disable photo slides if cookies are rejected
}

// Function to accept only important cookies
function acceptImportantCookies() {
    localStorage.setItem('cookiesAccepted', 'important');
    hideConsentBanner();
    initializePhotoSlides(); // Initialize photo slides for important cookies
}

// Function to hide the consent banner
function hideConsentBanner() {
    document.getElementById('consent-banner').style.display = 'none';
}

// Check for previous cookie consent on page load
window.onload = function() {
    const consent = localStorage.getItem('cookiesAccepted');
    if (consent === 'all' || consent === 'important' || consent === 'none') {
        hideConsentBanner();
        if (consent === 'all' || consent === 'important') {
            initializePhotoSlides(); // Initialize if consent is given
        } else {
            disablePhotoSlides(); // Disable if cookies are rejected
        }
    } else {
        // Show the consent banner if no previous consent found
        document.getElementById('consent-banner').style.display = 'block';
    }

    // Show the contact form when the page loads
    showContactForm(); // Call the function to display the contact form
};

// Function to initialize photo slides when cookies are accepted
function initializePhotoSlides() {
    // Logic to initialize photo slides
    console.log('Photo slides initialized.');
}

// Function to disable photo slides when cookies are rejected
function disablePhotoSlides() {
    // Logic to disable photo slides
    console.log('Photo slides disabled.');
}

// Function to show the contact form pop-up
function showContactForm() {
    document.getElementById('contact-form').style.display = 'block';
}

// Function to close the contact form pop-up
function closeContactForm() {
    document.getElementById('contact-form').style.display = 'none';
}

// Function to show the privacy policy
function showPrivacyPolicy() {
    document.getElementById('privacy-policy').style.display = 'block';
}

// Function to close the privacy policy
function closePrivacyPolicy() {
    document.getElementById('privacy-policy').style.display = 'none';
}
