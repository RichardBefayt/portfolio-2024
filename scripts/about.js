// Sélectionne toutes les boîtes et les éléments h3
const aboutBoxes = document.querySelectorAll(".about-box");
const aboutItems = document.querySelectorAll(".about-items");
const h3Titles = document.querySelectorAll(".about-box h3");

aboutBoxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        const currentItems = aboutItems[index];
        const currentTitle = h3Titles[index];

        const isClosed = currentItems.classList.contains("closed");

        // Toggle animation classes pour le titre
        currentTitle.classList.toggle("title-closed", !isClosed);
        currentTitle.classList.toggle("title-open", isClosed);

        // Toggle animation classes pour les items
        currentItems.classList.toggle("closed", !isClosed);
        currentItems.classList.toggle("open", isClosed);
    });
});