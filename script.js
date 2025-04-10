--- Home ---

// === Cookie Consent Elements ===
const cookieConsent = document.getElementById('cookie-consent');
const closeBtn = document.querySelector('.close-btn');
const acceptAllBtn = document.querySelector('.accept-all');
const importantOnlyBtn = document.querySelector('.important-only');

// === Show Banner if No Consent Stored ===
document.addEventListener('DOMContentLoaded', () => {
  const consentStatus = localStorage.getItem('cookieConsent');

  if (!consentStatus && cookieConsent) {
    cookieConsent.style.display = 'flex'; // or 'block' based on your CSS
    cookieConsent.style.opacity = '1';
  }
});

// === Hide Cookie Banner ===
function hideCookieBanner() {
  cookieConsent.style.transition = 'opacity 0.5s ease';
  cookieConsent.style.opacity = '0';
  setTimeout(() => {
    cookieConsent.style.display = 'none';
  }, 500);
}

// === Cookie Button Listeners ===
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    console.log('Rejected all cookies.');
    localStorage.setItem('cookieConsent', 'rejected');
    disablePhotoSlides();
    hideCookieBanner();
  });
}

if (acceptAllBtn) {
  acceptAllBtn.addEventListener('click', () => {
    console.log('Accepted all cookies.');
    localStorage.setItem('cookieConsent', 'accepted');
    initializePhotoSlides();
    hideCookieBanner();
  });
}

if (importantOnlyBtn) {
  importantOnlyBtn.addEventListener('click', () => {
    console.log('Accepted only important cookies.');
    localStorage.setItem('cookieConsent', 'important-only');
    hideCookieBanner();
  });
}

// === Photo Slide Handlers ===
function initializePhotoSlides() {
  console.log('Photo slides initialized.');
  // Insert logic to activate gallery/slider animations here
}

function disablePhotoSlides() {
  console.log('Photo slides disabled.');
  // Insert logic to pause or prevent loading of visual components
}

// === Contact Form Display (Always Anchored, No Animation) ===
const contactForm = document.getElementById('mc_embed_signup');
if (contactForm) {
  contactForm.style.display = 'block';
}

// === Handle Contact Form Submission ===
const submitBtn = document.querySelector('.submit-btn');

if (submitBtn) {
  submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const name = document.getElementById('mce-NAME')?.value || '';
    const email = document.getElementById('mce-EMAIL')?.value || '';
    const feedback = document.getElementById('mce-FEEDBACK')?.value || '';

    localStorage.setItem('contactFormData', JSON.stringify({ name, email, feedback }));
    alert('Thank you for reaching out!');

    // Clear form fields
    ['mce-NAME', 'mce-EMAIL', 'mce-FEEDBACK'].forEach(id => {
      const input = document.getElementById(id);
      if (input) input.value = '';
    });
  });
}

// === Privacy Policy Modal Handling ===
function showPrivacyPolicy() {
  const policy = document.getElementById('privacy-policy');
  if (policy) {
    policy.style.display = 'block';
    policy.style.opacity = '0';
    policy.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      policy.style.opacity = '1';
    }, 10);
  }
}

function closePrivacyPolicy() {
  const policy = document.getElementById('privacy-policy');
  if (policy) {
    policy.style.transition = 'opacity 0.5s ease';
    policy.style.opacity = '0';
    setTimeout(() => {
      policy.style.display = 'none';
    }, 500);
  }
}


---Store---

const toggleButton = document.getElementById('toggleView'); // Corrected ID
const productContainer = document.getElementById('product-container');

toggleButton.addEventListener('click', function () {
  const isGrid = productContainer.classList.contains('grid-view');

  if (isGrid) {
    productContainer.classList.remove('grid-view');
    productContainer.classList.add('list-view');
    toggleButton.textContent = 'Grid View';
  } else {
    productContainer.classList.remove('list-view');
    productContainer.classList.add('grid-view');
    toggleButton.textContent = 'List View';
  }
});


--Ink& Thoughts----

document.addEventListener("DOMContentLoaded", () => {
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

  const container = document.getElementById("ink-entries");

  entries.forEach(entry => {
    const card = document.createElement("div");
    card.className = "entry-card";

    card.innerHTML = `
      <h3 class="entry-title">${entry.title}</h3>
      <div class="entry-meta">${entry.date}</div>
      <p class="entry-content">${entry.summary}</p>
    `;

    container.appendChild(card);
  });
});


---Research Studies---

document.addEventListener('DOMContentLoaded', function() {
  console.log('Research page loaded successfully.');
});



---- View Work ----

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-view");
    const workGallery = document.getElementById("view-wrapper"); // corrected ID

    let isListView = localStorage.getItem("isListView") === "true";

    function applyView() {
        workGallery.classList.add("fade-transition");

        if (isListView) {
            workGallery.classList.remove("grid-view");
            workGallery.classList.add("list-view");
            toggleButton.textContent = "Switch to Grid View";
        } else {
            workGallery.classList.remove("list-view");
            workGallery.classList.add("grid-view");
            toggleButton.textContent = "Switch to List View";
        }

        setTimeout(() => {
            workGallery.classList.remove("fade-transition");
        }, 300);
    }

    applyView();

    toggleButton.addEventListener("click", function () {
        isListView = !isListView;
        localStorage.setItem("isListView", isListView);
        applyView();
        toggleButton.classList.toggle("active");
    });

    // Handle each slider independently
    const sliders = document.querySelectorAll(".photo-slider");

    sliders.forEach((slider) => {
        const slides = slider.querySelectorAll("img");
        const prevBtn = slider.querySelector(".prev");
        const nextBtn = slider.querySelector(".next");
        let current = 0;

        function showSlide(index) {
            slides.forEach((img, i) => {
                img.classList.remove("active");
                if (i === index) img.classList.add("active");
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

        showSlide(current); // initialize
    });
});



--- Privacy Policy ---

// script.js

console.log("Privacy Policy JS loaded."); // Just a placeholder to indicate the script is running.



--- TnC ---

// script.js

console.log("TnC JS loaded."); // Just a placeholder to indicate the script is running.
