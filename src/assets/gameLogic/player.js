import GameField from "@/assets/gameLogic/gameField";

export default class Player {
  constructor(index, name = "", color = "#f00") {
    this.index = index
    this.name = name
    this.color = color
  }


  countCellsNumber() {
    return GameField.countPlayerCellNumber(this.index)
  }
}