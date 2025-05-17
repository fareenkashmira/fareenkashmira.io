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
  <script>
document.getElementById('mc-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const name = encodeURIComponent(form.NAME.value.trim());
  const email = encodeURIComponent(form.EMAIL.value.trim());
  const feedback = encodeURIComponent(form.FEEDBACK.value.trim());

  if (!name || !email || !feedback) {
    document.getElementById('mc-response').textContent = 'Please fill in all fields.';
    return;
  }

  // Replace YOUR_U and YOUR_ID below with your actual Mailchimp values
  const u = "68495ad73394985325e320010";
  const id = "420ecd8c5c";
  const url = `https://fareenkashmira.us10.list-manage.com/subscribe/post-json?u=${u}&id=${id}&c=?`;

  const script = document.createElement('script');
  const params = `&EMAIL=${email}&NAME=${name}&FEEDBACK=${feedback}`;

  script.src = url + params;
  document.body.appendChild(script);

  window.callback = function (data) {
    const msg = document.getElementById('mc-response');
    if (data.result === "success") {
      msg.textContent = "Thank you! Your message was sent.";
      msg.style.color = "green";
      form.reset();
    } else {
      msg.textContent = data.msg || "Oops! Something went wrong.";
      msg.style.color = "red";
    }
  };
});


  /* --- Store Page View Toggle --- */
  const toggleBtn = document.getElementById('toggleView');
const productsContainer = document.getElementById('products');

if (toggleBtn && productsContainer) {
  // On load, set the view from localStorage
  const savedView = localStorage.getItem('viewMode');
  if (savedView === 'list') {
    productsContainer.classList.add('list-view');
    productsContainer.classList.remove('grid-view');
    toggleBtn.textContent = 'Grid View';
  } else {
    productsContainer.classList.add('grid-view');
    productsContainer.classList.remove('list-view');
    toggleBtn.textContent = 'List View';
  }

  // On button click, toggle classes and update localStorage + button text
  toggleBtn.addEventListener('click', () => {
    const isList = productsContainer.classList.toggle('list-view');
    productsContainer.classList.toggle('grid-view', !isList);

    toggleBtn.textContent = isList ? 'Grid View' : 'List View';
    localStorage.setItem('viewMode', isList ? 'list' : 'grid');
  });
      }


  /* --- View Work Toggle --- */
  function initViewToggle() {
  const toggleBtn = document.getElementById('toggleView');
  const contentSections = document.querySelectorAll('.content-category .grid-view');

  if (toggleBtn && contentSections.length > 0) {
    // On page load: apply saved state from localStorage
    const savedView = localStorage.getItem('viewMode');
    if (savedView) {
      const isGrid = savedView === 'grid';
      contentSections.forEach(section => {
        section.classList.toggle('grid-view', isGrid);
        section.classList.toggle('list-view', !isGrid);
      });
      toggleBtn.textContent = isGrid ? 'List View' : 'Grid View';
    }

    toggleBtn.addEventListener('click', () => {
      const isGrid = contentSections[0].classList.contains('grid-view');

      contentSections.forEach(section => {
        section.classList.toggle('grid-view', !isGrid);
        section.classList.toggle('list-view', isGrid);
      });

      toggleBtn.textContent = isGrid ? 'Grid View' : 'List View';

      // Save current view mode to localStorage
      localStorage.setItem('viewMode', isGrid ? 'list' : 'grid');
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
