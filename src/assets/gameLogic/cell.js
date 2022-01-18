import GameField from "@/assets/gameLogic/gameField"
import Game from "@/assets/gameLogic/game"
import colorData from "@/assets/gameLogic/colorData"

export default class Cell {
  static maxDotsNumber = 4

  verticalIndex
  horizontalIndex
  playerIndex
  dotsNumber
  newDotsAfterExplosionCycle
  componentContext


  constructor(verticalIndex, horizontalIndex) {
    this.verticalIndex = verticalIndex
    this.horizontalIndex = horizontalIndex
    this.playerIndex = null
    this.dotsNumber = 0
    this.newDotsAfterExplosionCycle = 0
  }


  setComponentContext(context) {
    this.componentContext = context
  }

  getColor() {
    if (this.playerIndex === null) {
      return colorData.emptyCell
    }

    const player = Game.getPlayer(this.playerIndex)
    const colorIndex = Math.min(this.dotsNumber, Cell.maxDotsNumber)
    return player.colors[colorIndex - 1]
  }

  giveToPlayer(playerIndex, dotsNumber = 1) {
    this.playerIndex = playerIndex
    this.dotsNumber = dotsNumber
  }

  checkIfAvailableForClick() {
    if (!Game.getMoveAvailable()) {
      return false
    }
    return this.playerIndex === Game.playerWhoMovesIndex;
  }

  clicked() {
    if (!this.checkIfAvailableForClick()) {
      return
    }
    this.addDot()
    this.componentContext.playAddDotAnimation()
    Game.cellClicked()
  }

  checkIfNeedToExplode() {
    return this.dotsNumber >= 5;
  }

  explode() {
    this.dotsNumber = 1
    this.componentContext.playExplodeAnimation()

    const neighbourCells = this.getNeighbourCells()
    for (let neighbourCell of neighbourCells) {
      if (neighbourCell.playerIndex !== this.playerIndex) {
        neighbourCell.giveToPlayer(this.playerIndex, 0)
      }
      neighbourCell.addDotAfterExplosionCycle()
    }
  }


  addDot() {
    this.dotsNumber++
  }

  getNeighbourCells() {
    const neighbourCells = []

    const topNeighbour = GameField.getCellByPosition(
      this.verticalIndex - 1, this.horizontalIndex)
    const rightNeighbour = GameField.getCellByPosition(
      this.verticalIndex, this.horizontalIndex + 1)
    const bottomNeighbour = GameField.getCellByPosition(
      this.verticalIndex + 1, this.horizontalIndex)
    const leftNeighbour = GameField.getCellByPosition(
      this.verticalIndex, this.horizontalIndex - 1)

    if (topNeighbour) {
      neighbourCells.push(topNeighbour)
    }
    if (rightNeighbour) {
      neighbourCells.push(rightNeighbour)
    }
    if (bottomNeighbour) {
      neighbourCells.push(bottomNeighbour)
    }
    if (leftNeighbour) {
      neighbourCells.push(leftNeighbour)
    }

    return neighbourCells
  }

  addDotAfterExplosionCycle() {
    this.newDotsAfterExplosionCycle++
  }

  summarizeDotsAfterExplosionCycle() {
    if (this.newDotsAfterExplosionCycle === 0) {
      return
    }

    this.componentContext.playAddDotAnimation()
    this.dotsNumber += this.newDotsAfterExplosionCycle
    this.newDotsAfterExplosionCycle = 0
    if (this.dotsNumber > 5) {
      this.dotsNumber = 5
    }
  }
}