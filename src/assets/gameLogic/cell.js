import GameField from "@/assets/gameLogic/gameField";
import Game from "@/assets/gameLogic/game";

export default class Cell {
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

  giveToPlayer(playerIndex, dotsNumber = 1) {
    this.playerIndex = playerIndex
    this.dotsNumber = dotsNumber
  }

  checkIfAvailableForClick() {
    if (!Game.moveAvailable) {
      return false
    }
    return this.playerIndex === Game.playerWhoMovesIndex;
  }

  addDot() {
    this.dotsNumber++
    this.componentContext.playAddDotAnimation()
  }

  checkIfNeedToExplode() {
    return this.dotsNumber >= 4;
  }

  explode() {
    this.dotsNumber = 1

    const neighbourCells = this.getNeighbourCells()
    for (let neighbourCell of neighbourCells) {
      if (neighbourCell.playerIndex === this.playerIndex) {
        neighbourCell.addDotAfterExplosionCycle()
        continue
      }
      neighbourCell.giveToPlayer(this.playerIndex)
    }
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
    this.dotsNumber += this.newDotsAfterExplosionCycle
    this.newDotsAfterExplosionCycle = 0
    if (this.dotsNumber > 4) {
      this.dotsNumber = 4
    }
  }
}