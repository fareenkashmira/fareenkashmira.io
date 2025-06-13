document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  // --- Google Analytics Page Tracking ---
  const pages = {
    'home-page': ['Home', '/home'],
    'store-page': ['Store', '/store'],
    'ink-thoughts-page': ['Ink Thoughts', '/ink-thoughts'],
    'research-page': ['Research', '/research'],
    'TnC-page': ['Terms & Conditions', '/terms'],
    'privacypolicy-page': ['Privacy Policy', '/privacy']
  };

  for (const className in pages) {
    if (body.classList.contains(className)) {
      const [title, path] = pages[className];
      gtag('event', 'page_view', { page_title: title, page_path: path });
    }
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

  // --- CSV Content Loader ---
  (() => {
  const pageType = document.body.dataset.sheet;
  let sheetCSV = "";
  let containerId = "";

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
      const parseCSV = (csv) => {
        const rows = [];
        let insideQuote = false;
        let row = [], cell = '';
        for (let i = 0; i < csv.length; i++) {
          const char = csv[i];
          const next = csv[i + 1];
          if (char === '"' && insideQuote && next === '"') {
            cell += '"';
            i++;
          } else if (char === '"') {
            insideQuote = !insideQuote;
          } else if (char === ',' && !insideQuote) {
            row.push(cell);
            cell = '';
          } else if ((char === '\n' || char === '\r') && !insideQuote) {
            if (cell || row.length > 0) row.push(cell);
            if (row.length) rows.push(row);
            row = [];
            cell = '';
            if (char === '\r' && next === '\n') i++;
          } else {
            cell += char;
          }
        }
        if (cell || row.length > 0) row.push(cell);
        if (row.length) rows.push(row);
        return rows;
      };

      const rows = parseCSV(csv);
      const headers = rows.shift().map(h => h.trim().toLowerCase());

      rows.forEach(row => {
        if (row.length !== headers.length) return;
        const entry = Object.fromEntries(row.map((cell, i) => [headers[i], cell.trim()]));

        // Skip if required fields are empty
        if (!entry.title?.trim() || !entry.content?.trim()) return;

        const card = document.createElement("div");
        card.className = "card";

        const body = document.createElement("div");
        body.className = "card-body";

        const title = document.createElement("h3");
        title.className = "card-title";
        title.textContent = entry.title;

        const preview = document.createElement("p");
        preview.className = "card-text preview";
        preview.textContent = entry.preview || "";

        const fullText = document.createElement("p");
        fullText.className = "card-text full hidden";
        fullText.textContent = entry.content;

        const toggleBtn = document.createElement("button");
        toggleBtn.className = "card-toggle-btn";
        toggleBtn.textContent = entry.link_text || "Read more";

        toggleBtn.addEventListener("click", () => {
          const isHidden = fullText.classList.contains("hidden");
          fullText.classList.toggle("hidden");
          preview.classList.toggle("hidden");
          toggleBtn.textContent = isHidden ? "Show less" : (entry.link_text || "Read more");
        });

        body.appendChild(title);
        body.appendChild(preview);
        body.appendChild(fullText);
        body.appendChild(toggleBtn);
        card.appendChild(body);
        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Error fetching or processing CSV:", err);
    });
})();
  });
