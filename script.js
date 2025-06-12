document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  // --- Google Analytics Page Tracking ---
  if (body.classList.contains('home-page')) {
    gtag('event', 'page_view', { page_title: 'Home', page_path: '/home' });
  }
  if (body.classList.contains('store-page')) {
    gtag('event', 'page_view', { page_title: 'Store', page_path: '/store' });
  }
  if (body.classList.contains('ink-thoughts-page')) {
    gtag('event', 'page_view', { page_title: 'Ink Thoughts', page_path: '/ink-thoughts' });
  }
  if (body.classList.contains('research-page')) {
    gtag('event', 'page_view', { page_title: 'Research', page_path: '/research' });
  }
  if (body.classList.contains('TnC-page')) {
    gtag('event', 'page_view', { page_title: 'Terms & Conditions', page_path: '/terms' });
  }
  if (body.classList.contains('privacypolicy-page')) {
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



  (() => {
  const pageType = document.body.dataset.sheet;
  let sheetCSV = "";
  let containerId = "";

  if (pageType === "research") {
    sheetCSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSbe2cMrtZLdR-00gykCvOSQDLQS-Q-HNtOn6MiAyh2XIKxXRIEBjRtJOTCz6SA8dLK3MIhF1g8Vo7m/pub?gid=0&single=true&output=csv";
    containerId = "research-cards";
  } else if (pageType === "ink-thoughts") {
    sheetCSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTlsXoO_SfeMOoSnGH4pLlFwNN5WPPxKnVBzYN8dg0akmPOP9yjFs2dY6vRstJwOsiD6pgvyf1BMPtO/pub?gid=0&single=true&output=csv";
    containerId = "ink-card";
  } else {
    console.warn("No matching sheet found.");
    return;
  }

  const container = document.getElementById(containerId);
  if (!container) {
    console.warn("Missing container element.");
    return;
  }

  fetch(sheetCSV)
    .then(res => res.text())
    .then(csv => {
      const lines = csv.trim().split("\n");
      const headers = lines.shift().split(",").map(h => h.trim().toLowerCase());

      const entries = lines.map(line => {
        const values = line.split(",");
        const entry = {};
        headers.forEach((key, i) => {
          entry[key] = values[i]?.trim() || "";
        });
        return entry;
      });

      entries.forEach(entry => {
        let content = "";

        if (entry.title) content += `<h3 class="card-title">${entry.title}</h3>`;
        if (entry.preview) content += `<p class="card-preview">${entry.preview}</p>`;
        if (entry.content) content += `<p class="card-content">${entry.content}</p>`;
        if (entry.link_text) content += `<a href="${entry.link_text}" class="card-link" target="_blank">Read More</a>`;

        if (content) {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `<div class="card-body">${content}</div>`;
          container.appendChild(card);
        }
      });
    })
    .catch(err => {
      console.error("CSV fetch failed:", err);
    });
})();
