import GameField from "@/assets/gameLogic/gameField"
import Player from "@/assets/gameLogic/player"
import {ref} from "vue"

export default class Game {
  static started = false
  static moveAvailable = ref(true)

  static playerArray = ref([])
  static playerWhoMovesIndex = 0

  static start(gameFieldSideSize = 10) {
    generatePlayers()
    GameField.setSize(gameFieldSideSize, gameFieldSideSize)
    GameField.giveStartCellsToPlayers()
    this.started = true

    function generatePlayers() {
      Game.playerArray.value.push(new Player(0, "monkey", "#5a5"))
      Game.playerArray.value.push(new Player(1, "cat", "#55a"))
      //Game.playerArray.value.push(new Player(2, "dog", "#a55"))
    }
  }

  static getMoveAvailable() {
    return this.moveAvailable.value
  }

  static cellClicked() {
    this.moveAvailable.value = false
    GameField.runExplosions()
    this.switchPlayerWhoMovesIndex()
  }


  static switchPlayerWhoMovesIndex() {
    this.playerWhoMovesIndex++
    if (this.playerWhoMovesIndex === this.playerArray.value.length) {
      this.playerWhoMovesIndex = 0
    }
  }
}