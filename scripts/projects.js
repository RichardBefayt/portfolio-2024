// Fonction pour charger les données JSON (inchangée)
async function loadProjectsData() {
    try {
        const response = await fetch('../data/projects.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
    }
}

// Fonction pour remplir les cartes avec les données
function fillProjectCards(projectsData, category) {
    const projectsTitle = document.querySelector(".projects-title");
    const projectsContainer = document.querySelector(".projects-container");
    const projectCardTemplate = document.querySelector(".project-card__container");

    // Trouver la catégorie correspondante
    const categoryData = projectsData.find(cat => cat.category === category);

    if (!categoryData) {
        console.error(`Catégorie "${category}" non trouvée dans les données.`);
        return;
    }

    // Définir le titre de la section
    projectsTitle.textContent = categoryData.title;

    // Vider le conteneur des projets existants
    projectsContainer.textContent = "";

    // Remplir les cartes avec les données
    categoryData.details.forEach((project, index) => {
        let card;
        if (index === 0) {
            // Utiliser la carte existante pour le premier projet
            card = projectCardTemplate;
        } else {
            // Créer de nouvelles cartes pour les projets suivants
            card = projectCardTemplate.cloneNode(true);
        }

        // Remplir les données de la carte
        card.querySelector(".project-card__subtitle").textContent = project.subtitle;
        card.querySelector(".card-link").href = project.slug;
        card.querySelector(".project-card__img").src = project.thumbnail;
        card.querySelector(".project-card__img").alt = project.subtitle;
        card.querySelector(".span-description").textContent = project.description;
        card.querySelector(".span-technos").textContent = project.technos;
        card.querySelector(".project-card__footer-slug").href = project.slug;
        card.querySelector(".project-card__footer-slug").textContent = "Voir le projet";
        card.querySelector(".project-card__footer-source").href = project.source;
        card.querySelector(".project-card__footer-source").textContent = "Code source";

        projectsContainer.appendChild(card);
    });
}

// Événement pour charger les données et remplir les cartes au chargement du DOM
document.addEventListener("DOMContentLoaded", async () => {
    const projectsData = await loadProjectsData();
    if (projectsData) {
        // Obtenir la catégorie depuis les paramètres de l'URL
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category') || 'websites'; // Par défaut 'websites'
        
        // Vérification du nom de la catégorie
        console.log("Catégorie actuelle:", category);

        // Remplir les cartes avec la catégorie correcte
        fillProjectCards(projectsData, category);
    }
});