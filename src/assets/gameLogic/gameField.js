import Game from "@/assets/gameLogic/game"
import Cell from "@/assets/gameLogic/cell"
import {ref} from "vue"

export default class GameField {
  static width = 0
  static height = 0
  static matrix = ref([[]])


  static getMatrix() {
    return this.matrix.value
  }

  static getCell(verticalIndex, horizontalIndex) {
    return this.matrix.value[verticalIndex][horizontalIndex]
  }


  static setSize(width, height) {
    this.width = width
    this.height = height
    this.fillMatrixWithEmptySlots()
  }

  static giveStartCellsToPlayers() {
    const leftTopCell = this.matrix.value[0][0]
    const rightTopCell = this.matrix.value[0][this.width - 1]
    const rightBottomCell = this.matrix.value[this.height - 1][this.width - 1]
    const leftBottomCell = this.matrix.value[this.height - 1][0]

    const playersNumber = Game.playerArray.length
    switch (playersNumber) {
      case 2:
        leftTopCell.giveToPlayer(0)
        rightBottomCell.giveToPlayer(1)
        break
      case 3:
        leftTopCell.giveToPlayer(0)
        rightTopCell.giveToPlayer(1)
        rightBottomCell.giveToPlayer(2)
        break
      case 4:
        leftTopCell.giveToPlayer(0)
        rightTopCell.giveToPlayer(1)
        rightBottomCell.giveToPlayer(2)
        leftBottomCell.giveToPlayer(3)
        break
      default:
        throw new Error("Players number must be from 2 to 4")
    }
  }

  static addDotToCell(verticalIndex, horizontalIndex) {
    const cell = this.getCell(verticalIndex, horizontalIndex)
    cell.dotsNumber++
  }


  static fillMatrixWithEmptySlots() {
    this.matrix.value.length = this.height
    for (let i = 0; i < this.height; i++) {
      this.matrix.value[i] = new Array(this.width)
      for (let j = 0; j < this.width; j++) {
        this.matrix.value[i][j] = new Cell()
      }
    }
  }
}