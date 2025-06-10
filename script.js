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

})();
});

/* Research and Quotes entries */
document.addEventListener('DOMContentLoaded', () => {
  const sheetConfig = {
    stories: '1UP_qUOUz2UWhjserokK1eKRrii4uXgckLIyPXgFf7J0', // Ink & Thoughts
    research: '1PIP7aUqlpBLr7vfgtl4pdxyDwjnIh9tnKkZkFg5ygQw'  // Research Studies
  };

  const sheetType = document.body.dataset.sheet;
  const sheetID = sheetConfig[sheetType];

  if (!sheetID) {
    console.warn("No matching Google Sheet ID found for this page.");
    return;
  }

  Tabletop.init({
    key: sheetID,
    callback: data => renderData(data, sheetType),
    simpleSheet: true
  });
});

function renderData(data, type) {
  const container = document.getElementById('ink-entries') || document.getElementById('research-entries');
  if (!container) return;

  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';

    if (type === 'stories') {
      card.innerHTML = `
        <div class="card-body">
          <h2 class="card-title">${item.Title || 'Untitled'}</h2>
          <p class="card-text">${item.Content || 'No content available.'}</p>
          ${item.Author ? `<p class="card-text author">— ${item.Author}</p>` : ''}
        </div>
      `;
    }

    if (type === 'research') {
      card.innerHTML = `
        ${item.Image ? `<img src="${item.Image}" alt="${item.Title}" class="card-img" />` : ''}
        <div class="card-body">
          <h2 class="card-title">${item.Title || 'Untitled'}</h2>
          <p class="card-text">${item.Description || 'No description provided.'}</p>
          ${item.Link ? `<a href="${item.Link}" class="card-link" target="_blank">Read More</a>` : ''}
        </div>
      `;
    }

    container.appendChild(card);
  });
}
