document.addEventListener("DOMContentLoaded", function() {
    // Toggle view functionality
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

    // Photo slider functionality
    const sliderImages = document.querySelectorAll(".photo-slider img");
    const leftArrow = document.querySelector(".photo-slider .arrow.left");
    const rightArrow = document.querySelector(".photo-slider .arrow.right");

    let currentSlide = 0;

    // Function to show the current slide
    function showSlide(index) {
        sliderImages.forEach((img, i) => {
            img.classList.remove("active");
            if (i === index) {
                img.classList.add("active");
            }
        });
    }

    // Event listeners for arrows
    leftArrow.addEventListener("click", function() {
        currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
        showSlide(currentSlide);
    });

    rightArrow.addEventListener("click", function() {
        currentSlide = (currentSlide + 1) % sliderImages.length;
        showSlide(currentSlide);
    });

    // Initialize the slider with the first slide
    showSlide(currentSlide);
});
