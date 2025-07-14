// Masonry Initialization with imagesLoaded
document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector(".grid");
    if (grid) {
        var msnry = new Masonry(grid, {
            itemSelector: ".grid-item",
            columnWidth: ".grid-item",
            percentPosition: true
        });

        // Ensure layout only after all images are loaded
        imagesLoaded(grid, function () {
            msnry.layout();
        });
    }
});

// Scroll to top on page load
window.addEventListener("load", function () {
    history.replaceState(null, null, window.location.pathname);
    window.scrollTo({ top: 0, behavior: "auto" });
});

function toggleNavbar() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.getElementById("navLinks");
  const links = navLinks.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      // Only collapse if in mobile view
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
      }
    });
  });
});