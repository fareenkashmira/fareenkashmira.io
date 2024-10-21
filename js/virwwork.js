document.addEventListener("DOMContentLoaded", function() {
    const gridViewButton = document.getElementById("grid-view");
    const listViewButton = document.getElementById("list-view");
    const workGallery = document.getElementById("work-gallery");

    gridViewButton.addEventListener("click", function() {
        workGallery.classList.remove("list-view");
        workGallery.classList.add("grid-view");
        gridViewButton.classList.add("active");
        listViewButton.classList.remove("active");
    });

    listViewButton.addEventListener("click", function() {
        workGallery.classList.remove("grid-view");
        workGallery.classList.add("list-view");
        listViewButton.classList.add("active");
        gridViewButton.classList.remove("active");
    });
});
