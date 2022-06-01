import memoryGamePhoto from "../../assets/project-photos/pokemon-game/poke-game.png";
import instagramHome from "../../assets/project-photos/instagram-clone/home.png";
import instagramHome2 from "../../assets/project-photos/instagram-clone/home2.png";
import instagramLogin from "../../assets/project-photos/instagram-clone/login.png";
import instagramPhotoProfile from "../../assets/project-photos/instagram-clone/photo-from-profile.png";
import instagramProfile from "../../assets/project-photos/instagram-clone/profile.png";
import instagramSignup from "../../assets/project-photos/instagram-clone/signup.png";
import todoDashboard from "../../assets/project-photos/todo-app/dashboard.png";
import todoIndividualTodo from "../../assets/project-photos/todo-app/individual-todo.png";
import todoLogin from "../../assets/project-photos/todo-app/login.png";
import todoSignup from "../../assets/project-photos/todo-app/signup.png";
import PDP from "../../assets/project-photos/ApolloEcommerce/PDP.png";
import PLP from "../../assets/project-photos/ApolloEcommerce/PLP.png";
import CurrencySelector from "../../assets/project-photos/ApolloEcommerce/CurrencySelector.png";
import CartOverlay from "../../assets/project-photos/ApolloEcommerce/CartOverlay.png";
import Cart from "../../assets/project-photos/ApolloEcommerce/Cart.png";

export const spanishProjectsList = [
    {
        id: 1,
        name: "Clon de Instagram",
        pictures: [
            instagramHome,
            instagramHome2,
            instagramProfile,
            instagramPhotoProfile,
            instagramLogin,
            instagramSignup,
        ],
        description:
            "Este proyecto tiene casi toda la funcionalidad que cualquier red social debería tener. Se implementó un usuario demo para que quienes quieran testear ésta aplicación puedan hacerlo sin necesidad de crear un usuario (aunque se puede hacer perfectamente). Una lista completa de las funcionalidades se encuentra en mi GitHub",
        livePreview: "https://instagram-clone-six-tau.vercel.app/",
        codeSource: "https://github.com/GuidoRial/instagram-clone",
        technologies: ["CSS", "JavaScript", "React", "Firebase"],
    },
    {
        id: 2,
        name: "Todo List",
        pictures: [todoDashboard, todoIndividualTodo, todoLogin, todoSignup],
        description:
            "Mi primer proyecto full-stack usando el stack MERN con TypeScript. Se implementó MongoDB para guardar usuarios y tareas, las cuales éstos pueden crear, editar o borrar.",
        livePreview: "https://todo-app-mern-guidorial.vercel.app/login",
        codeSource: "https://github.com/GuidoRial/todo-app-MERN",
        technologies: [
            "CSS",
            "JavaScript",
            "TypeScript",
            "MongoDB",
            "Express",
            "React",
            "NodeJS",
        ],
    },
    {
        id: 3,
        name: "Pokemon Memory Game",
        pictures: [memoryGamePhoto],
        description:
            "Un pequeño juego hecho con la PokeAPI. Éste juego le da al usuario 21 pokemones y el usuario tiene que clickear una vez en cada uno sin repetir. Si repite, pierde. Los pokemones cambian de lugar despues de cada click",
        livePreview: "https://guidorial.github.io/pokemon-memory-game/",
        codeSource: "https://github.com/GuidoRial/pokemon-memory-game",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
    },

    {
        id: 4,
        name: "Apollo e-commerce",
        pictures: [PLP, PDP, CartOverlay, CurrencySelector, Cart],
        description:
            "Un e-commerce con toda la funcionalidad que todo e-commerce debería tener. Los usuarios pueden filtrar por categoría o cambiar de divisa. Tienen un cart overlay donde pueden ver los productos agregados al carrito rapidamente con sus respectivos atributos seleccionados, un carousel cuando el producto tiene más de una foto y un boton de quick-add-to-cart para productos en stock que no tengan atributos. Los productos son importados de un servidor GraphQL usando Apollo GraphQL",
        livePreview: "https://apollo-ecommerce.vercel.app/",
        codeSource: "https://github.com/GuidoRial/apollo-ecommerce",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Apollo"],
    },
];
