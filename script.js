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
