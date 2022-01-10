import Game from "@/assets/gameLogic/game"
import Cell from "@/assets/gameLogic/cell"

export default class GameField {
  static width = 0
  static height = 0
  static matrix = [[]]

  static setSize(width, height) {
    this.width = width
    this.height = height
    this.fillMatrixWithEmptySlots()
  }

  static fillMatrixWithEmptySlots() {
    this.matrix = new Array(this.height)
    for (let i = 0; i < this.height; i++) {
      this.matrix[i] = new Array(this.width)
      for (let j = 0; j < this.width; j++) {
        this.matrix[i][j] = new Cell()
      }
    }
  }

  static giveStartCellsToPlayers() {
    const playersNumber = Game.playerArray.length
    switch(playersNumber) {
      case 2:
        this.matrix[0][0].setPlayerIndex(0)
        this.matrix[this.height - 1][this.width - 1].setPlayerIndex(1)
        break
      case 3:
        this.matrix[0][0].setPlayerIndex(0)
        this.matrix[0][this.width - 1].setPlayerIndex(1)
        this.matrix[this.height - 1][this.width - 1].setPlayerIndex(2)
        break
      case 4:
        this.matrix[0][0].setPlayerIndex(0)
        this.matrix[0][this.width - 1].setPlayerIndex(1)
        this.matrix[this.height - 1][this.width - 1].setPlayerIndex(2)
        this.matrix[this.height - 1][0].setPlayerIndex(3)
        break
      default:
        throw new Error("Players number must be from 2 to 4")
    }
  }
}