import instagramPhoto from "../../assets/InstaClone.png";
import memoryGamePhoto from "../../assets/poke-game.png";
import todoListPhoto from "../../assets/todo-list.png";
import shoppingCartPhoto from "../../assets/shopping-cart.png";

export const spanishProjectsList = [
    {
        name: "Clon de Instagram hecho con React, React Router, MaterialUI y Firebase",
        picture: instagramPhoto,
        description:
            "Mi proyecto más completo hasta ahora. Tiene casi toda la funcionalidad que cualquier red social debería tener. Se implementó un usuario demo para que quienes quieran testear ésta aplicación puedan hacerlo sin necesidad de crear un usuario (aunque se puede hacer perfectamente). Una lista completa de las funcionalidades se encuentra en mi GitHub",
        livePreview: "https://instagram-clone-six-tau.vercel.app/",
        codeSource: "https://github.com/GuidoRial/instagram-clone",
        technologies: [
            {
                tech: "HTML",
            },
            {
                tech: "CSS",
            },
            {
                tech: "JavaScript",
            },
            {
                tech: "React",
            },
            {
                tech: "Firebase",
            },
        ],
    },
    {
        name: "Juego de memoria de Pokemon",
        picture: memoryGamePhoto,
        description:
            "Un pequeño juego hecho con la PokeAPI. Éste juego le da al usuario 21 pokemones y el usuario tiene que clickear una vez en cada uno sin repetir. Si repite, pierde. Los pokemones se mueven despues de cada click",
        livePreview: "https://guidorial.github.io/pokemon-memory-game/",
        codeSource: "https://github.com/GuidoRial/pokemon-memory-game",
        technologies: [
            {
                tech: "HTML",
            },
            {
                tech: "CSS",
            },
            {
                tech: "JavaScript",
            },
            {
                tech: "React",
            },
        ],
    },
    {
        name: "Todo List",
        picture: todoListPhoto,
        description:
            "Una pequeña aplicacion para crear, editar, marcar como completada o eliminar una tarea. Todos los cambios se guardan en Local Storage",
        livePreview: "https://guidorial.github.io/todo-list/",
        codeSource: "https://github.com/GuidoRial/todo-list",
        technologies: [
            {
                tech: "HTML",
            },
            {
                tech: "CSS",
            },
            {
                tech: "JavaScript",
            },
            {
                tech: "React",
            },
        ],
    },
    {
        name: "Tienda falsa",
        picture: shoppingCartPhoto,
        description:
            "Una tienda falsa con un carrito. El usuario puede agregar, eliminar o modificar la cantidad de items desde el carrito",
        livePreview: "https://fake-store-eta.vercel.app//",
        codeSource: "https://github.com/GuidoRial/fake-store",
        technologies: [
            {
                tech: "HTML",
            },
            {
                tech: "CSS",
            },
            {
                tech: "JavaScript",
            },
            {
                tech: "React",
            },
        ],
    },
];
