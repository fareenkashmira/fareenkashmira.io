// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      // Prevent default anchor behavior
      e.preventDefault();

      // Get the href value (the section ID)
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      // Scroll to the section smoothly
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
});

// Toggle background image section on click
document.addEventListener("DOMContentLoaded", function () {
  const backgroundImageSection = document.querySelector(".background-image-section");

  if (backgroundImageSection) {
    backgroundImageSection.addEventListener("click", function () {
      // Toggle visibility on click
      this.style.display = this.style.display === "none" ? "block" : "none";
    });
  }
});
