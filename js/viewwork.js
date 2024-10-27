document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-view");
    const workGallery = document.getElementById("work-gallery");

    // Set initial view state (grid view by default)
    let isListView = false;

    toggleButton.addEventListener("click", function() {
        // Toggle the view state
        isListView = !isListView; 

        if (isListView) {
            workGallery.classList.remove("grid-view");
            workGallery.classList.add("list-view");
            toggleButton.textContent = "Switch to Grid View"; // Change button text
        } else {
            workGallery.classList.remove("list-view");
            workGallery.classList.add("grid-view");
            toggleButton.textContent = "Switch to List View"; // Change button text
        }
        
        // Toggle the active class on the button
        toggleButton.classList.toggle("active");
    });
});
