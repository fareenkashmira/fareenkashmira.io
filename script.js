document.addEventListener('DOMContentLoaded', () => {
const body = document.body;

// === PAGE VIEW TRACKING ===
const pageMap = {
'home-page': ['Home', '/home'],
'store-page': ['Store', '/store'],
'ink-thoughts-page': ['Ink Thoughts', '/ink-thoughts'],
'work-page': ['Work', '/work'],
'research-page': ['Research', '/research'],
'TnC-page': ['Terms & Conditions', '/terms'],
'privacypolicy-page': ['Privacy Policy', '/privacy'],
};

for (const pageClass in pageMap) {
if (body.classList.contains(pageClass)) {
const [title, path] = pageMap[pageClass];
console.log(Visited: ${title} Page);
gtag('event', 'page_view', { page_title: title, page_path: path });
}
}

// === COOKIE CONSENT ===
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

// === DYNAMIC CONTENT FROM GOOGLE SHEETS ===
const sheetConfig = {
stories: '1UP_qUOUz2UWhjserokK1eKRrii4uXgckLIyPXgFf7J0', // Ink & Thoughts
research: '1PIP7aUqlpBLr7vfgtl4pdxyDwjnIh9tnKkZkFg5ygQw'  // Research
};

const sheetType = body.dataset.sheet;
const sheetID = sheetConfig[sheetType];

if (!sheetID) return;

Tabletop.init({
key: sheetID,
callback: data => renderData(data, sheetType),
simpleSheet: true
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
});

