import { writable } from "svelte/store";

export const cardStore = writable([
  {
    _id: 101,
    word: "Gato",
    options: ["Bag", "Apple", "Bread"],
    meaning: "Cat",
  },
  {
    _id: 102,
    word: "Verde",
    options: ["Glass", "Pot", "Van"],
    meaning: "Green",
  },
  {
    _id: 103,
    word: "Madre",
    options: ["Suitcase", "Building", "Grandmother"],
    meaning: "Mother",
  },
  {
    _id: 104,
    word: "Esposa",
    options: ["Airplane", "Sister", "White"],
    meaning: "Wife",
  },
  {
    _id: 105,
    word: "Paraguas",
    options: ["Parrot", "Teapot", "Doormat"],
    meaning: "Umbrella",
  },
  {
    _id: 106,
    word: "Cantar",
    options: ["To run", "To break", "To love"],
    meaning: "To sing",
  },
  {
    _id: 107,
    word: "Estrella",
    options: ["Umbrella", "Starters", "East"],
    meaning: "Star",
  },
  {
    _id: 108,
    word: "Ventana",
    options: ["Van", "Water", "Wings"],
    meaning: "Window",
  },
  {
    _id: 109,
    word: "Calle",
    options: ["Call", "Light", "Close"],
    meaning: "Street",
  },
  {
    _id: 110,
    word: "Dinero",
    options: ["Ticket", "Cycle", "Picture"],
    meaning: "Money",
  },
  {
    _id: 111,
    word: "!Bienvenida!",
    options: ["Goodbye!", "Thank you!", "Please!"],
    meaning: "Welcome!",
  },
  {
    _id: 112,
    word: "Biblioteca",
    options: ["Hospital", "Station", "Garden"],
    meaning: "Library",
  },
  {
    _id: 113,
    word: "Vestido",
    options: ["T-shirt", "Pajama", "Shirt"],
    meaning: "Dress",
  },
  {
    _id: 114,
    word: "Fiesta",
    options: ["Food", "Dinner", "Birthday"],
    meaning: "Party",
  },
  {
    _id: 115,
    word: "Siempre",
    options: ["Never", "Sometime", "Maybe"],
    meaning: "Always",
  },
]);

export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};
