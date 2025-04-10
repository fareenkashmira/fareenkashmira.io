document.addEventListener('DOMContentLoaded', () => {
  // --- Cookie Consent (Home Page) ---
  const cookieConsent = document.getElementById('cookie-consent');
  const closeBtn = document.querySelector('.close-btn');
  const acceptAllBtn = document.querySelector('.accept-all');
  const importantOnlyBtn = document.querySelector('.important-only');

  if (cookieConsent) {
    const consentStatus = localStorage.getItem('cookieConsent');
    if (!consentStatus) {
      cookieConsent.style.display = 'flex';
      cookieConsent.style.opacity = '1';
    }

    function hideCookieBanner() {
      cookieConsent.style.transition = 'opacity 0.5s ease';
      cookieConsent.style.opacity = '0';
      setTimeout(() => {
        cookieConsent.style.display = 'none';
      }, 500);
    }

    closeBtn?.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'rejected');
      disablePhotoSlides();
      hideCookieBanner();
    });

    acceptAllBtn?.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'accepted');
      initializePhotoSlides();
      hideCookieBanner();
    });

    importantOnlyBtn?.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'important-only');
      hideCookieBanner();
    });

    function initializePhotoSlides() {
      console.log('Photo slides initialized.');
      // Add animation init code
    }

    function disablePhotoSlides() {
      console.log('Photo slides disabled.');
    }
  }

  // --- Contact Form ---
  const contactForm = document.getElementById('mc_embed_signup');
  if (contactForm) {
    contactForm.style.display = 'block';

    document.querySelector('.submit-btn')?.addEventListener('click', (event) => {
      event.preventDefault();
      const name = document.getElementById('mce-NAME')?.value || '';
      const email = document.getElementById('mce-EMAIL')?.value || '';
      const feedback = document.getElementById('mce-FEEDBACK')?.value || '';

      localStorage.setItem('contactFormData', JSON.stringify({ name, email, feedback }));
      alert('Thank you for reaching out!');
      ['mce-NAME', 'mce-EMAIL', 'mce-FEEDBACK'].forEach(id => {
        const input = document.getElementById(id);
        if (input) input.value = '';
      });
    });
  }

  // --- Store Page View Toggle ---
  const storeToggleBtn = document.getElementById('toggleView');
  const productContainer = document.getElementById('product-container');
  if (storeToggleBtn && productContainer) {
    storeToggleBtn.addEventListener('click', () => {
      const isGrid = productContainer.classList.contains('grid-view');
      productContainer.classList.toggle('grid-view', !isGrid);
      productContainer.classList.toggle('list-view', isGrid);
      storeToggleBtn.textContent = isGrid ? 'Grid View' : 'List View';
    });
  }

  // --- Ink & Thoughts Blog Entries ---
  const inkContainer = document.getElementById('ink-entries');
  if (inkContainer) {
    const entries = [
      {
        title: "Designing Calm",
        date: "April 8, 2025",
        summary: "Exploring how design can bring peace and simplicity into digital experiences.",
      },
      {
        title: "Mapping Emotions",
        date: "March 20, 2025",
        summary: "A dive into emotional journey mapping for more intuitive user experiences.",
      },
      {
        title: "Listening to Users",
        date: "February 15, 2025",
        summary: "What I learned from 20 user interviews about empathy in UX research.",
      }
    ];

    entries.forEach(entry => {
      const card = document.createElement("div");
      card.className = "entry-card";
      card.innerHTML = `
        <h3 class="entry-title">${entry.title}</h3>
        <div class="entry-meta">${entry.date}</div>
        <p class="entry-content">${entry.summary}</p>
      `;
      inkContainer.appendChild(card);
    });
  }

  // --- View Work Page Toggle + Slider ---
  const viewToggleBtn = document.getElementById("toggle-view");
  const workGallery = document.getElementById("view-wrapper");

  if (viewToggleBtn && workGallery) {
    let isListView = localStorage.getItem("isListView") === "true";

    function applyView() {
      workGallery.classList.add("fade-transition");
      workGallery.classList.toggle("grid-view", !isListView);
      workGallery.classList.toggle("list-view", isListView);
      viewToggleBtn.textContent = isListView ? "Switch to Grid View" : "Switch to List View";

      setTimeout(() => {
        workGallery.classList.remove("fade-transition");
      }, 300);
    }

    applyView();

    viewToggleBtn.addEventListener("click", () => {
      isListView = !isListView;
      localStorage.setItem("isListView", isListView);
      applyView();
      viewToggleBtn.classList.toggle("active");
    });
  }

  // --- View Work Sliders ---
  const sliders = document.querySelectorAll(".photo-slider");
  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll("img");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");

    if (slides.length && prevBtn && nextBtn) {
      let current = 0;

      function showSlide(index) {
        slides.forEach((img, i) => {
          img.classList.toggle("active", i === index);
        });
      }

      prevBtn.addEventListener("click", () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
      });

      nextBtn.addEventListener("click", () => {
        current = (current + 1) % slides.length;
        showSlide(current);
      });

      showSlide(current);
    }
  });

  // --- Research, Privacy, and TnC ---
  if (document.body.classList.contains("research-page")) {
    console.log("Research page loaded successfully.");
  }

  if (document.body.classList.contains("privacy-policy-page")) {
    console.log("Privacy Policy JS loaded.");
  }

  if (document.body.classList.contains("terms-page")) {
    console.log("TnC JS loaded.");
  }
});
