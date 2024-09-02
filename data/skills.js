// Images HTML
import imgHtmlCard from "../../assets/images/technos/html/illustrationHtml.jpg";
import titlesImg from "../../assets/images/technos/html/Titres.png";
import linksImg from "../../assets/images/technos/html/Images.png";
import listsImg from "../../assets/images/technos/html/Listes.png";
import arraysHtmlImg from "../../assets/images/technos/html/Tableaux.png";
import formsImg from "../../assets/images/technos/html/Formulaires.png";

// Images Css
import imgCssCard from "../../assets/images/technos/css/illustrationCss.jpg";
import positionsImg from "../../assets/images/technos/css/Positions.png";
import flexboxImg from "../../assets/images/technos/css/Flexbox.png";
import gridImg from "../../assets/images/technos/css/Grid.png";
import animationsImg from "../../assets/images/technos/css/Animations.png";
import mediaQueriesImg from "../../assets/images/technos/css/MediaQueries.png";

// Images Javascript
import imgJsCard from "../../assets/images/technos/js/illustrationJs.jpg";
import functionsImg from "../../assets/images/technos/js/Fonctions.png";
import loopsImg from "../../assets/images/technos/js/Boucles.png";
import conditionsImg from "../../assets/images/technos/js/Conditions.png";
import objectsImg from "../../assets/images/technos/js/Objets.png";
import arraysJsImg from "../../assets/images/technos/js/Tableaux.png";
import domImg from "../../assets/images/technos/js/DOM.png";
import promisesImg from "../../assets/images/technos/js/Promesses.png";

// Images React/Redux
import imgReactCard from "../../assets/images/technos/react/illustrationReact.jpg";
import componentsImg from "../../assets/images/technos/react/Composants.png";
import hooksImg from "../../assets/images/technos/react/Hooks.png";
import propsImg from "../../assets/images/technos/react/Props.png";
import renderingConditionalImg from "../../assets/images/technos/react/AffichageConditionnel.png";
import controlledFieldsImg from "../../assets/images/technos/react/ChampsContrôlés.png";
import storeImg from "../../assets/images/technos/react/Store.png";
import actionsImg from "../../assets/images/technos/react/Actions.png";

// Images NodeJS
import imgNodeCard from "../../assets/images/technos/nodejs/illustrationNodeJs.jpg";
import expressImg from "../../assets/images/technos/nodejs/Express.png";
import roadsImg from "../../assets/images/technos/nodejs/Routes.png";
import dotenvImg from "../../assets/images/technos/nodejs/Dotenv.png";
import ejsImg from "../../assets/images/technos/nodejs/Ejs.png";

// Images SQL
import imgSqlCard from "../../assets/images/technos/sql/illustrationSql.jpg";
import diagramImg from "../../assets/images/technos/sql/Diagrams.png";
import crudImg from "../../assets/images/technos/sql/Crud.png";

// Images Git
import imgGitCard from "../../assets/images/technos/git/illustrationGit.png";
import commitImg from "../../assets/images/technos/git/Commit.png";
import branchsImg from "../../assets/images/technos/git/Branches.png";

// Autres
import imgIA from "../../assets/images/technos/ia/ia.jpg"

export default [
    {
        id: 1,
        slug: "html",
        title: 'HTML',
        definition: 'Langage statique',
        picture: imgHtmlCard,
        elements: [
            {
                id: 1.1,
                name: 'Titres',
                thumbnail: titlesImg,
                description: "Il y a 6 niveaux de titres. A noter qu'il ne peut y avoir qu'un seul h1 par page.",
            },
            {
                id: 1.2,
                name: 'Liens & Images',
                thumbnail: linksImg,
                description: `Grâce à l'attribut "target='_blank'", le lien s'ouvre dans un nouvel onglet.`,
            },
            {
                id: 1.3,
                name: 'Listes',
                thumbnail: listsImg,
                description: "Listes.",
            },
            {
                id: 1.4,
                name: 'Tableaux',
                thumbnail: arraysHtmlImg,
                description: "Tableaux.",
            },
            {
                id: 1.5,
                name: 'Formulaires',
                thumbnail: formsImg,
                description: "Formulaires.",
            },
        ],
    },

    {
        id: 2,
        slug: "css",
        title: 'CSS',
        definition: 'Style/Mise en page',
        picture: imgCssCard,
        elements: [
            {
                id: 2.1,
                name: 'Positions',
                thumbnail: positionsImg,
                description: "",
            },
            {
                id: 2.2,
                name: 'Flexbox',
                thumbnail: flexboxImg,
                description: "",
            },
            {
                id: 2.3,
                name: 'Grid',
                thumbnail: gridImg,
                description: "",
            },
            {
                id: 2.4,
                name: 'Animations',
                thumbnail: animationsImg,
                description: "",
            },
            {
                id: 2.5,
                name: 'Media Queries',
                thumbnail: mediaQueriesImg,
                description: "",
            },
        ],
    },

    {
        id: 3,
        slug: "javascript",
        title: 'Javascript',
        definition: 'Logique',
        picture: imgJsCard,
        elements: [
            {
                id: 3.1,
                name: 'Fonctions & Méthodes',
                thumbnail: functionsImg,
                description: "",
            },
            {
                id: 3.2,
                name: 'Boucles',
                thumbnail: loopsImg,
                description: "",
            },
            {
                id: 3.3,
                name: 'Conditions',
                thumbnail: conditionsImg,
                description: "",
            },
            {
                id: 3.4,
                name: 'Objets',
                thumbnail: objectsImg,
                description: "",
            },
            {
                id: 3.5,
                name: 'Tableaux',
                thumbnail: arraysJsImg,
                description: "",
            },
            {
                id: 3.6,
                name: 'DOM',
                thumbnail: domImg,
                description: "",
            },
            
            {
                id: 3.7,
                name: 'Promesses',
                thumbnail: promisesImg,
                description: "",
            },
        ],
    },
    
    {
        id: 4,
        slug: "react",
        title: 'React',
        definition: 'Single Page Application',
        picture: imgReactCard,
        elements: [
            {
                id: 4.1,
                name: 'Composants',
                thumbnail: componentsImg,
                description: "",
            },
            {
                id: 4.2,
                name: 'Hooks',
                thumbnail: hooksImg,
                description: "",
            },
            {
                id: 4.3,
                name: 'Props',
                thumbnail: propsImg,
                description: "",
            },
            {
                id: 4.4,
                name: 'Rendu conditionnel',
                thumbnail: renderingConditionalImg,
                description: "",
            },
            {
                id: 4.5,
                name: 'Champs contrôlés',
                thumbnail: controlledFieldsImg,
                description: "",
            },
            {
                id: 4.6,
                name: 'Store & Reducers',
                thumbnail: storeImg,
                description: "",
            },
            {
                id: 4.7,
                name: 'Action Types & Action Creator',
                thumbnail: actionsImg,
                description: "",
            },
        ],
    },

    {
        id: 5,
        slug: "nodejs",
        title: 'NodeJS',
        definition: 'Back',
        picture: imgNodeCard,
        elements: [
            {
                id: 5.1,
                name: 'Express',
                thumbnail: expressImg,
                description: "",
            },
            {
                id: 5.2,
                name: 'Routes',
                thumbnail: roadsImg,
                description: "",
            },
            {
                id: 5.3,
                name: 'Dotenv',
                thumbnail: dotenvImg,
                description: "",
            },
            {
                id: 5.4,
                name: 'EJS',
                thumbnail: ejsImg,
                description: "",
            },
        ],
    },

    {
        id: 6,
        slug: "sql",
        title: 'SQL',
        definition: 'Back',
        picture: imgSqlCard,
        elements: [
            {
                id: 6.1,
                name: 'MCD & MLD',
                thumbnail: diagramImg,
                description: "",
            },
            {
                id: 6.2,
                name: 'CRUD',
                thumbnail: crudImg,
                description: "",
            },
        ],
    },
    
    {
        id: 7,
        slug: "git",
        title: 'Git',
        definition: 'Back',
        picture: imgGitCard,
        elements: [
            {
                id: 7.1,
                name: 'Commit',
                thumbnail: commitImg,
                description: "",
            },
            {
                id: 7.2,
                name: 'Branches',
                thumbnail: branchsImg,
                description: "",
            },
        ],
    },
    {
        id: 8,
        slug: "next",
        title: 'Intelligence Artificielle',
        definition: 'ChatGPT, Midjourney...',
        picture: imgIA
,
        elements: [
            {
                id: 8.1,
                name: '',
                thumbnail: "",
                description: "",
            },
            {
                id: 8.2,
                name: '',
                thumbnail: "",
                description: "",
            },
        ],
    },
]