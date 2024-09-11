// Validation des champs
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const errors = document.querySelectorAll(".error");
    errors.forEach((error) => {
        error.style.display = "none";
    });

    const validateField = (value, errorElement, errorMessage) => {
        if (value.length < 3 || value.length > 8) {
            errorElement.textContent = errorMessage;
            errorElement.style.display = "block";
            return false;
        }
        return true;
    };

    const validateEmail = (email, errorElement) => {
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i;
        if (!regexEmail.test(email)) {
            emailOk = false;
            errorElement.textContent = "L'email est invalide";
            errorElement.style.display = "block";
        }
    };

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    let nameOk = true;
    let emailOk = true;

    nameOk = validateField(name, document.getElementById("nameError"), "Le nom doit contenir entre 3 et 8 caractères");
    validateEmail(email, document.getElementById("emailError"));

    if (nameOk && emailOk) {
        contactSubmitted();
    } else {
        document.getElementById("submitError").textContent = "Merci de remplir tous les champs";
        document.getElementById("submitError").style.display = "block";
    }
});

// Modale
function contactSubmitted() {
    document.getElementById('modal').style.display = 'block';
}

// Fermer la fenêtre modale lorsque l'utilisateur clique sur le bouton de fermeture
document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';

    // Réinitialiser les champs du formulaire
    form.reset();
});