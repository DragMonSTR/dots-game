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
      Game.playerArray.push(new Player("cat", "#55a"))
    }
  }
}