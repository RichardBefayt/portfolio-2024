class Carte {
    constructor(project, cardTemplate) {
        // Clone le template de carte
        this.cardElement = cardTemplate.cloneNode(true);
        this.cardElement.style.display = "flex";

        // Remplit les informations de la carte
        this.setSubtitle(project.subtitle);
        this.setImage(project.thumbnail, project.subtitle);
        this.setDescription(project.description);
        this.setTechnos(project.technos);
        this.setLinks(project.slug, project.source);
    }

    setSubtitle(subtitle) {
        this.cardElement.querySelector(".project-card__subtitle").textContent = subtitle;
    }

    setImage(thumbnail, subtitle) {
        const imgElement = this.cardElement.querySelector(".project-card__img");
        imgElement.src = thumbnail;
        imgElement.alt = subtitle;
    }

    setDescription(description) {
        this.cardElement.querySelector(".span-description").textContent = description;
    }

    setTechnos(technos) {
        this.cardElement.querySelector(".span-technos").textContent = technos;
    }

    setLinks(slug, source) {
        const slugLink = this.cardElement.querySelector(".project-card__footer-slug");
        slugLink.href = slug;
        slugLink.textContent = "Voir le projet";

        const sourceLink = this.cardElement.querySelector(".project-card__footer-source");
        if (source) {
            sourceLink.href = source;
            sourceLink.textContent = "Code source";
        } else {
            sourceLink.style.display = "none";
        }
    }

    // Méthode pour récupérer l'élément de la carte
    getCardElement() {
        return this.cardElement;
    }
}

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

// Fonction pour remplir les cartes dans le DOM
function fillProjectCards(categoryData) {
    const projectsContainer = document.querySelector(".projects-container");
    const cardTemplate = document.getElementById("card-template"); // Sélectionner le modèle de carte

    projectsContainer.textContent = ""; // Vider les cartes existantes

    categoryData.details.forEach(project => {
        // Crée une nouvelle carte avec la classe Carte
        const carte = new Carte(project, cardTemplate);
        projectsContainer.appendChild(carte.getCardElement());
    });
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
            const projectsTitle = document.querySelector('.projects-title');
            projectsTitle.textContent = categoryData.title;
        }
    }
});