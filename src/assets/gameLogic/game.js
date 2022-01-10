import GameField from "@/assets/gameLogic/gameField"

export default class Game {
  static started = false

  static start(gameFieldSideSize = 10) {
    GameField.setSize(gameFieldSideSize, gameFieldSideSize)
    this.started = true
  }
}