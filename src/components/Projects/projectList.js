import PokeScreenShot from "../../assets/poke-game.png";
import TodoScreenShot from "../../assets/todo-list.png";
import InstaClone from "../../assets/InstaClone.png";
import { t } from "i18next";

export const projects = [
    {
        name: t("Instagram_name"),
        picture: InstaClone,
        description:
            "My biggest project yet. It has almost every bit of functionality any social media app should have. It has a demo user so people can login without creating an account (but they can do that, of course). Full list of features can be read on GitHub",
        livePreview: "https://instagram-clone-six-tau.vercel.app/",
        codeSource: "https://github.com/GuidoRial/instagram-clone",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
    },
    {
        name: "Pokemon Memory Game",
        picture: PokeScreenShot,
        description:
            "A small memory game with the RESTful PokeAPI. The game gives you 21 Pokemons, you have to click once on each card without repeating. If you repeat, you'll lose",
        livePreview: "https://guidorial.github.io/pokemon-memory-game/",
        codeSource: "https://github.com/GuidoRial/pokemon-memory-game",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
        name: "Todo List",
        picture: TodoScreenShot,
        description:
            "A Todo App where you can create, edit, mark as complete or delete a Todo",
        livePreview: "https://guidorial.github.io/todo-list/",
        codeSource: "https://github.com/GuidoRial/todo-list",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
];
