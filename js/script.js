document.addEventListener("DOMContentLoaded", function() {
    const themeSelect = document.getElementById("themeSelect");
    const sortSelect = document.getElementById("sortSelect");
    const categorySelect = document.getElementById("categorySelect");
    const listings = document.querySelectorAll(".listing");

    // Theme selection
    themeSelect.addEventListener("change", function() {
        document.body.className = this.value;
    });

    // Filtering
    categorySelect.addEventListener("change", function() {
        const selectedCategory = this.value;
        listings.forEach(listing => {
            if (selectedCategory === "all" || listing.dataset.category === selectedCategory) {
                listing.style.display = "block";
            } else {
                listing.style.display = "none";
            }
        });
    });

    // Sorting
    sortSelect.addEventListener("change", function() {
        const sortedListings = Array.from(listings);
        if (this.value === "alphabetical") {
            sortedListings.sort((a, b) => a.querySelector("h3").textContent.localeCompare(b.querySelector("h3").textContent));
        } else if (this.value === "category") {
            sortedListings.sort((a, b) => a.dataset.category.localeCompare(b.dataset.category));
        }
        const listingsContainer = document.getElementById("listings");
        listingsContainer.innerHTML = "";
        sortedListings.forEach(listing => listingsContainer.appendChild(listing));
    });
});
