document.addEventListener("DOMContentLoaded", function () {
  // Track page view
  const pagePath = window.location.pathname;
  const pages = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
    "/view-work": "View Work",
  };
  const pageName = pages[pagePath] || "Unknown Page";
  gtag("event", "page_view", { page_path: pagePath, page_title: pageName });

  // Cookie consent banner
  (function () {
    const consent = localStorage.getItem("cookieConsent");
    const banner = document.getElementById("cookie-consent-banner");
    if (!consent) {
      banner.style.display = "block";
    }
    document.getElementById("accept-cookies").onclick = function () {
      localStorage.setItem("cookieConsent", "true");
      banner.style.display = "none";
    };
    document.getElementById("decline-cookies").onclick = function () {
      localStorage.setItem("cookieConsent", "false");
      banner.style.display = "none";
    };
  })();

  // Load CSV data and populate cards
  function loadCSV(url, callback) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const rows = data.split("\n").map((row) => row.split(","));
        callback(rows);
      });
  }

  const workGrid = document.querySelector(".grid-view");
  if (workGrid) {
    loadCSV(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTUajBI5HlUNoJeSTjSxeuL8A9Ejz5e03UhMgv-CmG8Yfkhz93v1kxiEBB0lACf4h59AXwGVEH2itne/pub?gid=0&single=true&output=csv",
      function (rows) {
        rows.slice(1).forEach((row) => {
          const card = document.createElement("div");
          card.className = "card";
          const img = document.createElement("img");
          img.src = row[1];
          img.alt = row[0];
          img.className = "card-img-top";
          card.appendChild(img);

          // ✅ fixed: renamed "body" to "cardBody"
          const cardBody = document.createElement("div");
          cardBody.className = "card-body";
          const title = document.createElement("h5");
          title.className = "card-title";
          title.textContent = row[0];
          cardBody.appendChild(title);

          const desc = document.createElement("p");
          desc.className = "card-text";
          const shortDesc = row[2].slice(0, 100) + "...";
          desc.textContent = shortDesc;

          const readMore = document.createElement("a");
          readMore.href = "#";
          readMore.textContent = "read more";
          readMore.onclick = function (e) {
            e.preventDefault();
            desc.textContent = row[2];
          };
          cardBody.appendChild(desc);
          cardBody.appendChild(readMore);

          card.appendChild(cardBody);
          workGrid.appendChild(card);
        });
      }
    );
  }

  // Lightbox functionality
document.querySelectorAll('#photos .card img').forEach(img => {
  img.addEventListener('click', function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    lightbox.style.display = 'flex';
    lightboxImg.src = this.src;
  });
});

// Optional: close lightbox on ESC key
document.addEventListener('keydown', function (e) {
  if (e.key === "Escape") {
    document.getElementById('lightbox').style.display = 'none';
  }
});
});
