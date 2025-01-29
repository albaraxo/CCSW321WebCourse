document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a"); // Select all <a> elements
    const content = document.getElementById("content");

    links.forEach(link => {
        // When hovering over any link, fade out the content
        link.addEventListener("mouseover", function () {
            content.style.opacity = "0"; // Fades out smoothly
            content.style.transition = "opacity 1.5s ease"; // Smooth transition
        });

        // When the mouse leaves any link, fade the content back in
        link.addEventListener("mouseout", function () {
            content.style.opacity = "1"; // Fades back in smoothly
            content.style.transition = "opacity 2.5s ease"; // Smooth transition
        });
    });
});
