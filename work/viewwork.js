document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-view");
    const workGallery = document.getElementById("work-gallery");

    let isListView = localStorage.getItem("isListView") === "true";

    function applyView() {
        // Add fade class for smooth transition
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

        // Remove fade class after animation
        setTimeout(() => {
            workGallery.classList.remove("fade-transition");
        }, 300);
    }

    applyView(); // apply saved view on load

    toggleButton.addEventListener("click", function () {
        isListView = !isListView;
        localStorage.setItem("isListView", isListView);
        applyView();
        toggleButton.classList.toggle("active");
    });

    // Slider functionality
    const sliderImages = document.querySelectorAll(".photo-slider img");
    const leftArrow = document.querySelector(".photo-slider .arrow.left");
    const rightArrow = document.querySelector(".photo-slider .arrow.right");
    let currentSlide = 0;

    function showSlide(index) {
        sliderImages.forEach((img, i) => {
            img.classList.remove("active");
            if (i === index) {
                img.classList.add("active");
            }
        });
    }

    leftArrow.addEventListener("click", function () {
        currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
        showSlide(currentSlide);
    });

    rightArrow.addEventListener("click", function () {
        currentSlide = (currentSlide + 1) % sliderImages.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});
