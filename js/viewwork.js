document.addEventListener("DOMContentLoaded", function() {
    const viewButtons = document.querySelectorAll('.view-options button'); // Select both buttons
    const workGallery = document.getElementById("work-gallery");

    viewButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Toggle the active class for buttons
            viewButtons.forEach(btn => btn.classList.remove("active")); // Remove active from all buttons
            this.classList.add("active"); // Add active to the clicked button

            // Switch between grid and list views
            if (this.id === "grid-view") {
                workGallery.classList.remove("list-view");
                workGallery.classList.add("grid-view");
            } else {
                workGallery.classList.remove("grid-view");
                workGallery.classList.add("list-view");
            }
        });
    });
});
