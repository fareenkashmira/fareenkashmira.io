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
