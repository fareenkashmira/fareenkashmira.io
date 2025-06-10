document.addEventListener('DOMContentLoaded', () => {
const body = document.body;

if (body.classList.contains('home-page')) {
console.log('Visited: Home Page');
gtag('event', 'page_view', { page_title: 'Home', page_path: '/home' });
}

if (body.classList.contains('store-page')) {
console.log('Visited: Store Page');
gtag('event', 'page_view', { page_title: 'Store', page_path: '/store' });
}

if (body.classList.contains('ink-thoughts-page')) {
console.log('Visited: Ink Thoughts Page');
gtag('event', 'page_view', { page_title: 'Ink Thoughts', page_path: '/ink-thoughts' });
}

if (body.classList.contains('work-page')) {
console.log('Visited: Work Page');
gtag('event', 'page_view', { page_title: 'Work', page_path: '/work' });
}

if (body.classList.contains('research-page')) {
console.log('Visited: Research Page');
gtag('event', 'page_view', { page_title: 'Research', page_path: '/research' });
}

if (body.classList.contains('TnC-page')) {
console.log('Visited: Terms & Conditions Page');
gtag('event', 'page_view', { page_title: 'Terms & Conditions', page_path: '/terms' });
}

if (body.classList.contains('privacypolicy-page')) {
console.log('Visited: Privacy Policy Page');
gtag('event', 'page_view', { page_title: 'Privacy Policy', page_path: '/privacy' });
}

// --- Cookie Consent Banner ---
(() => {
const banner = document.getElementById('cookie-consent');
const closeBtn = banner?.querySelector('.close-btn');
const acceptAllBtn = banner?.querySelector('.accept-all');
const importantOnlyBtn = banner?.querySelector('.important-only');
if (!banner || !closeBtn || !acceptAllBtn || !importantOnlyBtn) return;

const hideBanner = () => banner.style.display = 'none';  
const setConsent = (type) => {  
  localStorage.setItem('cookieConsent', type);  
  hideBanner();  
};  

closeBtn.addEventListener('click', hideBanner);  
acceptAllBtn.addEventListener('click', () => setConsent('all'));  
importantOnlyBtn.addEventListener('click', () => setConsent('important'));  

if (!localStorage.getItem('cookieConsent')) banner.style.display = 'block';

})();


// --- Blog Entries Rendering ---
(() => {
const inkContainer = document.getElementById('ink-entries');
if (!inkContainer) return;

const entries = [  
  { title: "First Post", desc: "Introductory thoughts.", link: "#" },  
  { title: "Design Notes", desc: "Exploring creative flows.", link: "#" }  
];  

entries.forEach(entry => {  
  const card = document.createElement('div');  
  card.className = 'entry-card';  
  card.innerHTML = `<h3>${entry.title}</h3><p>${entry.desc}</p><a href="${entry.link}">Read more</a>`;  
  inkContainer.appendChild(card);  
});

 
