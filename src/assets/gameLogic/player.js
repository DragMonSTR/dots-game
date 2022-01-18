import GameField from "@/assets/gameLogic/gameField";

export default class Player {
  constructor(id, name) {
    this.id = id
    this.name = name
    this.colors = []
  }


  setColors(colors) {
    this.colors = colors
  }


  countCellsNumber() {
    return GameField.countPlayerCellNumber(this.id)
  }

  countDotsNumber() {
    return GameField.countPlayerDotsNumber(this.id)
  }
}