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

// --- Google Sheet-based Content Loader ---
(() => {
  const pageType = document.body.dataset.sheet;
  let sheetCSV = "";
  let containerId = "";

  console.log("Detected page type:", pageType);

  // Assign correct CSV based on page type
  if (pageType === "research") {
    sheetCSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRIYaZylHHACUYVY8qzcBTsqvwqejXi1t-sWCUm348NyF7a2wBCamdCVgXYrPnwjYuRwl7mdFxYR1RF/pub?gid=0&single=true&output=csv";
    containerId = "research-cards";
  } else if (pageType === "ink-thoughts") {
    sheetCSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS5bnoJvrtUpM_jNa9aAjXrGKLsdCk1a6kdebjeKv0l85UtLmudxru4djc9TRPFTGPjqbYNoZ7Begeg/pub?gid=0&single=true&output=csv";
    containerId = "ink-card";
  } else {
    console.warn("No matching sheet found for this page.");
    return;
  }

  const container = document.getElementById(containerId);
  if (!container) {
    console.warn("Container not found on this page.");
    return;
  }

  fetch(sheetCSV)
    .then(res => res.text())
    .then(csv => {
      const rows = csv.trim().split("\n").map(row => row.split(","));
      const headers = rows.shift().map(h => h.trim().toLowerCase());

      const entries = rows.map(row => {
        const entry = {};
        row.forEach((cell, i) => {
          entry[headers[i]] = cell.trim();
        });
        return entry;
      });

      if (!entries.length) {
        container.innerHTML = `<p>No content available at the moment.</p>`;
        return;
      }

      entries.forEach(entry => {
        const title = entry.title || "Untitled";
        const preview = entry.preview || "No preview available.";
        const content = entry.content || "";
        const linkText = entry.link_text;

        // Skip entirely empty entries
        if (!title && !preview && !content && !linkText) return;

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <div class="card-body">
            <h3 class="card-title">${title}</h3>
            <p class="card-preview">${preview}</p>
            ${content ? `<p class="card-content">${content}</p>` : ""}
            ${linkText ? `<a href="${linkText}" class="card-link" target="_blank">Read More</a>` : ""}
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Error fetching or processing CSV:", err);
      container.innerHTML = `<p class="error">Failed to load content. Please try again later.</p>`;
    });
})();
