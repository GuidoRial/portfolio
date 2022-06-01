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
        name: "Apollo e-commerce",
        pictures: [PLP, PDP, CartOverlay, CurrencySelector, Cart],
        description:
            "An e-commerce with all the functionality any e-commerce should have. Users can filter by category or change currencies. They have a cart overlay that display the products the user added to cart as well as its selected attributes, a carousel when a product have more than one picture and a quick-add-to-cart button for products with no attributes that are in stock. Products are fetched from a GraphQL server using Apollo GraphQL",
        livePreview: "https://apollo-ecommerce.vercel.app/",
        codeSource: "https://github.com/GuidoRial/apollo-ecommerce",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Apollo"],
    },
];
