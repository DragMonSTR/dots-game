import GameField from "@/assets/gameLogic/gameField"
import Player from "@/assets/gameLogic/player";

export default class Game {
  static started = false

  static playerArray = []
  static playerWhoMovesIndex = 0

  static start(gameFieldSideSize = 10) {
    generatePlayers()
    GameField.setSize(gameFieldSideSize, gameFieldSideSize)
    GameField.giveStartCellsToPlayers()
    this.started = true

    function generatePlayers() {
      Game.playerArray.push(new Player("monkey", "#5a5"))
      //Game.playerArray.push(new Player("cat", "#55a"))
      //Game.playerArray.push(new Player("dog", "#a55"))
    }
  }

  static cellClicked(verticalIndex, horizontalIndex) {
    const clickedCell = GameField.getCellByPosition(verticalIndex, horizontalIndex)
    if (clickedCell.playerIndex !== this.playerWhoMovesIndex) {
      return
    }

    GameField.addDotToCell(verticalIndex, horizontalIndex)
    GameField.explodeCells()

    this.switchPlayerWhoMovesIndex()
  }

  static switchPlayerWhoMovesIndex() {
    this.playerWhoMovesIndex++
    if (this.playerWhoMovesIndex === this.playerArray.length) {
      this.playerWhoMovesIndex = 0
    }
  }
}