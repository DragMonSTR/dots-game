import Game from "@/assets/gameLogic/game"
import Cell from "@/assets/gameLogic/cell"
import {ref} from "vue"
import MyAnimation from "@/assets/animation/myAnimation";

export default class GameField {
  static width = ref(0)
  static height = ref(0)
  static cellArray = ref([])


  static getSize() {
    return this.getWidth() * this.getHeight()
  }

  static getWidth() {
    return this.width.value
  }

  static getHeight() {
    return this.height.value
  }

  static getCellByPosition(verticalIndex, horizontalIndex) {
    if (verticalIndex < 0 || verticalIndex > this.getHeight() - 1) {
      return null
    }
    if (horizontalIndex < 0 || horizontalIndex > this.getWidth() - 1) {
      return null
    }

    const index = verticalIndex * this.width.value + horizontalIndex
    return this.getCellByIndex(index)
  }

  static getCellByIndex(index) {
    return this.cellArray.value[index]
  }


  static setSize(width, height) {
    this.width.value = width
    this.height.value = height
    this.fillCellArrayWithEmptyCells()
  }

  static giveStartCellsToPlayers() {
    const minHorizontalIndex = 0
    const minVerticalIndex = 0
    const maxHorizontalIndex = this.getWidth() - 1
    const maxVerticalIndex = this.getHeight() - 1

    const leftTopCell = this.getCellByPosition(minVerticalIndex, minHorizontalIndex)
    const rightTopCell = this.getCellByPosition(minVerticalIndex, maxHorizontalIndex)
    const rightBottomCell = this.getCellByPosition(maxVerticalIndex, maxHorizontalIndex)
    const leftBottomCell = this.getCellByPosition(maxVerticalIndex, minHorizontalIndex)

    const playersNumber = Game.playerArray.length
    switch (playersNumber) {
      case 1:
        leftTopCell.giveToPlayer(0, 1)
        this.getCellByIndex(1).giveToPlayer(0, 2)
        this.getCellByIndex(2).giveToPlayer(0, 3)
        this.getCellByIndex(3).giveToPlayer(0, 4)
        break
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

  static runExplosions() {
    const cellsToExplode = this.getCellsToExplode()
    this.explodeCells(cellsToExplode)
  }


  static explodeCells(cellsToExplode) {
    for (let cell of cellsToExplode) {
      cell.explode()
    }

    setTimeout(() => {
      this.summarizeDotsAfterExplosionCycle()

      cellsToExplode = this.getCellsToExplode()
      if (!cellsToExplode.length) {
        Game.moveAvailable = true
        return
      }

      setTimeout(() => {
        this.explodeCells(cellsToExplode)
      }, MyAnimation.durations.addingDot)
    }, MyAnimation.durations.cellBullets)
  }


  static fillCellArrayWithEmptyCells() {
    this.cellArray.value.length = this.getSize()
    for (let i = 0; i < this.getHeight(); i++) {
      for (let j = 0; j < this.getWidth(); j++) {
        const index = this.getWidth() * i + j
        this.cellArray.value[index] = new Cell(i, j)
      }
    }
  }

  static getCellsToExplode() {
    const cellsToExplode = []

    for (let i = 0; i < this.getSize(); i++) {
      const cell = this.getCellByIndex(i)
      if (cell.checkIfNeedToExplode()) {
        cellsToExplode.push(cell)
      }
    }

    return cellsToExplode
  }

  static summarizeDotsAfterExplosionCycle() {
    for (let i = 0; i < this.getSize(); i++) {
      const cell = this.getCellByIndex(i)
      cell.summarizeDotsAfterExplosionCycle()
    }
  }
}