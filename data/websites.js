import pizza from '../assets/images/pages/sites-web/bs-pizza.jpg';
import restaurant from '../assets/images/pages/sites-web/restaurant.jpg';
import VR from '../assets/images/pages/sites-web/VR.png';
// import moto from '../assets/images/pages/sites-web/moto.jpg';
// import cinema from '../assets/images/pages/sites-web/cinema.jpg';

export default [
    {
        title: 'Sites Web',
        slug: 'sites-web',
        introduction: 'Sites Web Front-End',
        composition: [
            {
                id: 1,
                subtitle: 'Bs Pizza (client IRL)',
                slug: 'https://bs-pizza.netlify.app/',
                thumbnail: pizza,
                description: "Site vitrine",
                technos: "HTML, CSS, JavaScript",
                source: "https://github.com/RichardBefayt/Bs-Pizza",
            },
            {
                id: 2,
                subtitle: "L'Art Culinaire",
                slug: 'https://lartculinaire.netlify.app/',
                thumbnail: restaurant,
                description: "Animations, formulaire et dates en JS.",
                technos: "HTML, CSS, JavaScript",
                source: "https://github.com/RichardBefayt/l-art-culinaire",
            },
            {
                id: 3,
                subtitle: 'VIRTUALX',
                slug: 'https://virtualx.netlify.app/',
                thumbnail: VR,
                description: "Animations, Panier, Favoris, Login...",
                technos: "HTML, CSS, JavaScript, Stripe",
                source: "https://github.com/RichardBefayt/VirtualX",
            },
            // {
            //     id: 4,
            //     subtitle: 'Blog (maquette en cours)',
            //     slug: '',
            //     thumbnail: blog,
            //     description: 'Souvenirs de voyages',
            //     technos: "HTML, CSS, JavaScript",
            //     source: "",
            // },
            // {
            //     id: 5,
            //     subtitle: 'Ride On (code en développement)',
            //     // slug: '',
            //     thumbnail: moto,
            //     description: "Envie d'une balade en 2 roues ? Ne cherchez plus, vous l'avez trouvé.",
            //     technos: "HTML, CSS, JavaScript",
            //     source: "",
            // },
            // {
            //     id: 6,
            //     slug: "https://monappcine.netlify.app/",
            //     subtitle: 'Salle de Cinéma (code en développement)',
            //     thumbnail: cinema,
            //     description: "Sorties ciné en temps réel",
            //     technos: "HTML, CSS, JavaScript",
            //     source: "",
            // },
        ]
    }
]