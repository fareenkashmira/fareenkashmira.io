// Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XMK04PPSV2');

// Consent Banner Logic
window.onload = function() {
  if (!localStorage.getItem("cookieConsent")) {
    document.getElementById("consent-banner").style.display = "block";
  }
};

function acceptCookies() {
  localStorage.setItem("cookieConsent", "true");
  document.getElementById("consent-banner").style.display = "none";
}
