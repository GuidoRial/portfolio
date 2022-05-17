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
import storeStore from "../../assets/project-photos/store/store.png";

export const englishProjectsList = [
    {
        id: 1,
        name: "Instagram Clone",
        pictures: [
            instagramHome,
            instagramHome2,
            instagramProfile,
            instagramPhotoProfile,
            instagramLogin,
            instagramSignup,
        ],
        description:
            "This project has almost every bit of functionality any social media app should have. A demo user was implemented so people can login without creating an account (but they can do that, of course). Full list of features can be read on GitHub",
        livePreview: "https://instagram-clone-six-tau.vercel.app/",
        codeSource: "https://github.com/GuidoRial/instagram-clone",
        technologies: ["CSS", "JavaScript", "React", "Firebase"],
    },
    {
        id: 2,
        name: "Todo App",
        pictures: [todoDashboard, todoIndividualTodo, todoLogin, todoSignup],
        description:
            "My first full-stack project using the MERN Stack with TypeScript. I used MongoDB to store users and todos. Users can create, edit and delete todos.",
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
            "A small memory game with the RESTful PokeAPI. The game gives the user 21 Pokemons, they have to click once on each card without repeating. If the user clicks on a card twice, they will lose. Pokemons change place after every click",
        livePreview: "https://guidorial.github.io/pokemon-memory-game/",
        codeSource: "https://github.com/GuidoRial/pokemon-memory-game",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
    },

    {
        id: 4,
        name: "Fake Store",
        pictures: [storeCart, storeStore],
        description:
            "A Fake Store with a cart. You can add or delete items from it, modify the amount of items or empty the cart",
        livePreview: "https://fake-store-eta.vercel.app//",
        codeSource: "https://github.com/GuidoRial/fake-store",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
];
