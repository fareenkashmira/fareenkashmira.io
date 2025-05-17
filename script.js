document.addEventListener('DOMContentLoaded', () => {

  /* --- Cookie Banner --- */
  function initCookieConsent() {
    const banner = document.getElementById('cookie-consent');
    const closeBtn = banner?.querySelector('.close-btn');
    const acceptAllBtn = banner?.querySelector('.accept-all');
    const importantOnlyBtn = banner?.querySelector('.important-only');

    if (!banner || !closeBtn || !acceptAllBtn || !importantOnlyBtn) return;

    function hideBanner() {
      banner.style.display = 'none';
    }
  
    function setConsent(type) {
      localStorage.setItem('cookieConsent', type);
      hideBanner();
    }

    
    closeBtn.addEventListener('click', hideBanner);
    acceptAllBtn.addEventListener('click', () => setConsent('all'));
    importantOnlyBtn.addEventListener('click', () => setConsent('important'));

    const existingConsent = localStorage.getItem('cookieConsent');
    if (!existingConsent) {
      banner.style.display = 'block';
    }
  }

  initCookieConsent();


  /* --- Contact Form Handler --- */
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


  /* --- View Toggle --- */
  const toggleButton = document.getElementById("toggleView");
  const productGrid = document.querySelector("#products") || document.querySelector(".content-category .grid-view").parentElement;

  // Detect initial state
  let isGrid = productGrid.classList.contains("grid-view");

  toggleButton.addEventListener("click", function () {
    isGrid = !isGrid;

    // Toggle classes
    productGrid.classList.toggle("grid-view", isGrid);
    productGrid.classList.toggle("list-view", !isGrid);

    // Update button text
    toggleButton.textContent = isGrid ? "List View" : "Grid View";
    toggleButton.classList.toggle("active", !isGrid);
  });
});


  /* --- Blog Entries Rendering --- */
  const inkContainer = document.getElementById('ink-entries');
  if (inkContainer) {
    const entries = [
      { title: "First Post", desc: "Introductory thoughts.", link: "#" },
      { title: "Design Notes", desc: "Exploring creative flows.", link: "#" }
      
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
