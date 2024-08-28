/* eslint-disable import/no-anonymous-default-export */

// Images Applications
import appCuisine from '../assets/images/pages/applications/app-cuisine.png';
import appToDo from '../assets/images/pages/applications/todo-list-react.png';

export default [
    {
        title: 'Applications',
        slug: 'applications',
        introduction: 'Applications Web Front-End',
        composition: [
            {
                id: 1,
                subtitle: 'API Cuisine',
                slug: 'https://api-cuisine-1.netlify.app',
                thumbnail: appCuisine,
                description: "Utilisation d'une API",
                technos: "HTML, CSS, JavaScript",
                source: "https://github.com/RichardBefayt/api-cuisine-1",
            },
            {
                id: 2,
                subtitle: 'To Do List',
                slug: 'https://first-todo-list-react.netlify.app/',
                thumbnail: appToDo,
                description: "CRUD",
                technos: "React",
                source: "https://github.com/RichardBefayt/todo-list-react",
            }
        ]
    }
]