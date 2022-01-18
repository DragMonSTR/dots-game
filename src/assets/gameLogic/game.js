import GameField from "@/assets/gameLogic/gameField"
import Player from "@/assets/gameLogic/player"
import colorData from "@/assets/gameLogic/colorData"
import {ref} from "vue"


export default class Game {
  static started = false
  static moveAvailable = ref(true)

  static playersArray = ref([])
  static playerWhoMovesIndex = 0

  static start(playersNumber = 2, gameFieldSideSize = 10) {
    this.generatePlayers(playersNumber)
    this.generateGameField(gameFieldSideSize)
    this.started = true
  }

  static generatePlayers(playersNumber) {
    const playerNames = getPlayerNames()
    fillPlayersArray(playerNames)
    setPlayersColors()

    function getPlayerNames() {
      const playerNames = [
        "monkey",
        "cat",
        "dog",
        "pig"
      ]

      return playerNames.slice(0, playersNumber)
    }

    function fillPlayersArray(playerNames) {
      for (let i = 0; i < playersNumber; i++) {
        const player = new Player(i, playerNames[i])
        Game.playersArray.value.push(player)
      }
    }

    function setPlayersColors() {
      const colors = colorData.playersColors.slice();

      for (let player of Game.playersArray.value) {
        const colorIndex = getRandomInt(0, colors.length)
        const playerColors = colors[colorIndex]
        player.setColors(playerColors)
        colors.splice(colorIndex, 1)
      }
    }


    function getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min
    }
  }

  static generateGameField(gameFieldSideSize) {
    GameField.setSize(gameFieldSideSize, gameFieldSideSize)
    GameField.giveStartCellsToPlayers()
  }


  static getPlayer(playerIndex) {
    return this.playersArray.value[playerIndex]
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
    if (this.playerWhoMovesIndex === this.playersArray.value.length) {
      this.playerWhoMovesIndex = 0
    }
  }
}