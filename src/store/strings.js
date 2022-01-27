export default {
  namespaced: true,
  state: () => ({
    startGame: {
      en: "start game",
      ru: "играть"
    },
    rules: {
      en: "rules",
      ru: "правила"
    },
    language: {
      en: "language",
      ru: "язык"
    },
    mainMenu: {
      en: "main menu",
      ru: "главное меню"
    },
    rulesText: {
      en: "This is a game for 2-4 people who take turns. Each player has his own color, in which his cells on the game field are painted. You can add one dot to any of your cells per turn. When there are more than 4 dots in a cell, it explodes, leaving 1 dot for itself, and giving each neighbor one. The goal of the game is to conquer all the cells of the opponents.",
      ru: "Это игра для 2-4 человек, которые ходят по-очереди. У каждого игрока есть свой цвет, в который окрашены его клетки на игровом поле. За ход можно добавить одну точку к любой своей клетке. Когда в клетке больше 4 точек - она взрывается, оставляя себе 1 точку, и дая всем соседним по одной. Цель игры - завоевать все клетки противников."
    },
    players: {
      en: "players",
      ru: "игроки"
    }
  })
}