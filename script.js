document.addEventListener('DOMContentLoaded', () => {

  /* --- Cookie Banner --- */
  function initCookieConsent() {
    const banner = document.getElementById('cookie-consent');
    const closeBtn = banner?.querySelector('.close-btn');
    const acceptAllBtn = banner?.querySelector('.accept-all');
    const importantOnlyBtn = banner?.querySelector('.important-only');

    if (!banner || !closeBtn || !acceptAllBtn || !importantOnlyBtn) return;

    // Hide banner
    function hideBanner() {
      banner.style.display = 'none';
    }

    // Set consent in localStorage
    function setConsent(type) {
      localStorage.setItem('cookieConsent', type);
      hideBanner();
    }

    // Event listeners
    closeBtn.addEventListener('click', hideBanner);
    acceptAllBtn.addEventListener('click', () => setConsent('all'));
    importantOnlyBtn.addEventListener('click', () => setConsent('important'));

    // Show banner only if consent not set
    const existingConsent = localStorage.getItem('cookieConsent');
    if (!existingConsent) {
      banner.style.display = 'block';
    }
  }

  initCookieConsent();


  /* --- Contact Form Handler --- */
  const form = document.getElementById('mc_embed_signup');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('input[name="NAME"]')?.value.trim();
      const email = form.querySelector('input[name="EMAIL"]')?.value.trim();

      if (!name || !email) return alert('Please fill in all required fields.');

      localStorage.setItem('contactName', name);
      localStorage.setItem('contactEmail', email);
      form.reset();
      alert('Thanks! Your message has been submitted.');
    });
  }


  /* --- Store Page View Toggle --- */
  const toggleBtn = document.getElementById('toggleView');
  const container = document.getElementById('product-container');
  if (toggleBtn && container) {
    toggleBtn.addEventListener('click', () => {
      container.classList.toggle('list-view');
      toggleBtn.textContent = container.classList.contains('list-view') ? 'Grid View' : 'List View';
    });
  }


  /* --- View Work Toggle --- */
  function initViewToggle() {
    const toggleBtn = document.getElementById('toggleView');
    const contentSections = document.querySelectorAll('.content-category .grid-view');

    if (toggleBtn && contentSections.length > 0) {
      toggleBtn.addEventListener('click', () => {
        const isGrid = contentSections[0].classList.contains('grid-view');

        contentSections.forEach(section => {
          section.classList.toggle('grid-view', !isGrid);
          section.classList.toggle('list-view', isGrid);
        });

        toggleBtn.textContent = isGrid ? 'Grid View' : 'List View';
      });
    }
  }

  initViewToggle();


  /* --- Blog Entries Rendering --- */
  const inkContainer = document.getElementById('ink-entries');
  if (inkContainer) {
    const entries = [
      { title: "First Post", desc: "Introductory thoughts.", link: "#" },
      { title: "Design Notes", desc: "Exploring creative flows.", link: "#" }
      // Add more entries here
    ];

    entries.forEach(entry => {
      const card = document.createElement('div');
      card.className = 'entry-card';
      card.innerHTML = `
        <h3>${entry.title}</h3>
        <p>${entry.desc}</p>
        <a href="${entry.link}">Read more</a>
      `;
      inkContainer.appendChild(card);
    });
  }

});
