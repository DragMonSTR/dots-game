import GameField from "@/assets/gameLogic/gameField";

export default class Player {
  constructor(playerIndex, name = "", color = "#f00") {
    this.playerIndex = playerIndex
    this.name = name
    this.color = color
  }


  countCellsNumber() {
    return GameField.countPlayerCellNumber(this.playerIndex)
  }
}