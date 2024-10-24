// Function to accept all cookies
function acceptAllCookies() {
    localStorage.setItem('cookiesAccepted', 'all');
    hideConsentBanner();
}

// Function to reject all cookies
function rejectCookies() {
    localStorage.setItem('cookiesAccepted', 'none');
    hideConsentBanner();
}

// Function to accept only important cookies
function acceptImportantCookies() {
    localStorage.setItem('cookiesAccepted', 'important');
    hideConsentBanner();
}

// Function to hide the consent banner
function hideConsentBanner() {
    document.getElementById('consent-banner').style.display = 'none';
}

// Check for previous cookie consent on page load
window.onload = function() {
    const consent = localStorage.getItem('cookiesAccepted');
    if (consent === 'all' || consent === 'important') {
        hideConsentBanner();
    }
};
