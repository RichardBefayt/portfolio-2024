// Fonction pour charger les données JSON
async function loadProjectsData() {
    try {
        const response = await fetch('../data/projects.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
    }
}

// Fonction pour cloner et remplir une carte existante
function fillCard(cardTemplate, project) {
    const cardClone = cardTemplate.cloneNode(true);
    cardClone.style.display = "block"; // Rendre la carte visible

    // Remplir les éléments avec les données du projet
    cardClone.querySelector(".project-card__subtitle").textContent = project.subtitle;
    const imgElement = cardClone.querySelector(".project-card__img");
    imgElement.src = project.thumbnail;
    imgElement.alt = project.subtitle;
    
    const linkElement = cardClone.querySelector(".card-link");
    linkElement.href = project.slug;

    cardClone.querySelector(".span-description").textContent = project.description;
    cardClone.querySelector(".span-technos").textContent = project.technos;

    const slugLink = cardClone.querySelector(".project-card__footer-slug");
    slugLink.href = project.slug;
    slugLink.textContent = "Voir le projet";

    const sourceLink = cardClone.querySelector(".project-card__footer-source");
    if (project.source) {
        sourceLink.href = project.source;
        sourceLink.textContent = "Code source";
    } else {
        sourceLink.style.display = "none"; // Si pas de source, cacher le lien
    }

    return cardClone;
}

// Fonction pour vérifier l'existence de la catégorie
function getValidCategory(projectsData, category) {
    const categoryData = projectsData.find(cat => cat.category === category);
    if (!categoryData) {
        console.error(`Catégorie "${category}" non trouvée.`);
        return null;
    }
    return categoryData;
}

// Utilisation dans DOMContentLoaded
document.addEventListener("DOMContentLoaded", async () => {
    const projectsData = await loadProjectsData();
    if (projectsData) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category') || 'websites';

        const categoryData = getValidCategory(projectsData, category);
        if (categoryData) {
            fillProjectCards(categoryData);
        }
    }
});

// Fonction pour remplir les cartes dans le DOM
function fillProjectCards(categoryData) {
    const projectsContainer = document.querySelector(".projects-container");
    const cardTemplate = document.getElementById("card-template"); // Sélectionner le modèle de carte

    projectsContainer.textContent = ""; // Vider les cartes existantes

    // Pour chaque projet, cloner et remplir la carte
    categoryData.details.forEach(project => {
        const card = fillCard(cardTemplate, project);
        projectsContainer.appendChild(card);
    });
}