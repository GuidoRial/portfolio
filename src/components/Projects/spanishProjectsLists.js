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
import storeCart from "../../assets/project-photos/store/cart.png";
import storeHome from "../../assets/project-photos/store/home.png";
import storeStore from "../../assets/project-photos/store/store.png";

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
        name: "Juego de memoria de Pokemon",
        pictures: [memoryGamePhoto],
        description:
            "Un pequeño juego hecho con la PokeAPI. Éste juego le da al usuario 21 pokemones y el usuario tiene que clickear una vez en cada uno sin repetir. Si repite, pierde. Los pokemones cambian de lugar despues de cada click",
        livePreview: "https://guidorial.github.io/pokemon-memory-game/",
        codeSource: "https://github.com/GuidoRial/pokemon-memory-game",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
    },

    {
        id: 3,
        name: "Tienda falsa",
        pictures: [storeCart, storeStore],
        description:
            "Una tienda falsa con un carrito. El usuario puede agregar, eliminar o modificar la cantidad de items desde el carrito",
        livePreview: "https://fake-store-eta.vercel.app//",
        codeSource: "https://github.com/GuidoRial/fake-store",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
];
