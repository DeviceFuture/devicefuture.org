window.addEventListener("load", function() {
    function updateScroll() {
        document.querySelector("nav").classList[window.scrollY > 0 ? "add" : "remove"]("stuck");
    }

    updateScroll();

    document.addEventListener("scroll", function() {
        updateScroll();
    });
});