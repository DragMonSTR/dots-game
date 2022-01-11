import GameField from "@/assets/gameLogic/gameField"
import Player from "@/assets/gameLogic/player";

export default class Game {
  static started = false
  static moveAvailable = true

  static playerArray = []
  static playerWhoMovesIndex = 0

  static start(gameFieldSideSize = 10) {
    generatePlayers()
    GameField.setSize(gameFieldSideSize, gameFieldSideSize)
    GameField.giveStartCellsToPlayers()
    this.started = true

    function generatePlayers() {
      Game.playerArray.push(new Player("monkey", "#5a5"))
      Game.playerArray.push(new Player("cat", "#55a"))
      //Game.playerArray.push(new Player("dog", "#a55"))
    }
  }

  static cellClicked(verticalIndex, horizontalIndex) {
    if (!this.moveAvailable) {
      return
    }
    const clickedCell =
      GameField.getCellByPosition(verticalIndex, horizontalIndex)
    if (clickedCell.playerIndex !== this.playerWhoMovesIndex) {
      return
    }

    this.moveAvailable = false
    clickedCell.addDot()
    GameField.runExplosions()

    this.switchPlayerWhoMovesIndex()
  }


  static switchPlayerWhoMovesIndex() {
    this.playerWhoMovesIndex++
    if (this.playerWhoMovesIndex === this.playerArray.length) {
      this.playerWhoMovesIndex = 0
    }
  }
}