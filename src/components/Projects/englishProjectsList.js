import instagramPhoto from "../../assets/InstaClone.png";
import memoryGamePhoto from "../../assets/poke-game.png";
import todoListPhoto from "../../assets/todo-list.png";
import shoppingCartPhoto from "../../assets/shopping-cart.png";

export const englishProjectsList = [
    {
        name: "Instagram Clone made with React, React Router, MaterialUI and Firebase",
        picture: instagramPhoto,
        description:
            "My biggest project yet. It has almost every bit of functionality any social media app should have. A demo user was implemented so people can login without creating an account (but they can do that, of course). Full list of features can be read on GitHub",
        livePreview: "https://instagram-clone-six-tau.vercel.app/",
        codeSource: "https://github.com/GuidoRial/instagram-clone",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
    },
    {
        name: "Pokemon Memory Game",
        picture: memoryGamePhoto,
        description:
            "A small memory game with the RESTful PokeAPI. The game gives the user 21 Pokemons, they have to click once on each card without repeating. If the user click on a card twice, they will lose. Pokemons change place after every click",
        livePreview: "https://guidorial.github.io/pokemon-memory-game/",
        codeSource: "https://github.com/GuidoRial/pokemon-memory-game",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
        name: "Todo List",
        picture: todoListPhoto,
        description:
            "A Todo App where you can create, edit, mark as complete or delete a Todo. Changes will be stored in Local Storage",
        livePreview: "https://guidorial.github.io/todo-list/",
        codeSource: "https://github.com/GuidoRial/todo-list",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
        name: "Shopping Cart",
        picture: shoppingCartPhoto,
        description:
            "A Fake Store with a cart. You can add or delete items from it, modify the amount of items or empty the cart",
        livePreview: "https://guidorial.github.io/shopping-cart/",
        codeSource: "https://github.com/GuidoRial/shopping-cart",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
];
