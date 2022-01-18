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

  static updatePlayersPlaces() {
    const playersArray = Game.playersArray.value
    let playersIndexes = getPlayersIndexes()
    const sortedPlayersIndexes = getSortedPlayersIndexes()
    givePlacesToPlayers()

    for (let player of Game.playersArray.value) {
      console.log(player)
    }
    console.log("--------------------------------")


    function getPlayersIndexes() {
      const playerIndexes = new Array(playersArray.length)

      for (let i in playersArray) {
        const player = playersArray[i]
        playerIndexes[i] = player.id
      }

      return playerIndexes
    }

    function getSortedPlayersIndexes() {
      const sortedPlayersIndexes = []

      while (playersIndexes.length) {
        const bestPlayerId = findBestPlayerId(playersIndexes)
        sortedPlayersIndexes.push(bestPlayerId)
        playersIndexes = playersIndexes.filter(playerId => {
          return playerId !== bestPlayerId
        })
      }

      return sortedPlayersIndexes
    }

    function findBestPlayerId(playersIndexes) {
      let bestPlayerId = playersIndexes[0]
      let bestPlayer = Game.getPlayer(bestPlayerId)

      for (let playerId of playersIndexes) {
        const player = Game.getPlayer(playerId)
        if (player.countCellsNumber() < bestPlayer.countCellsNumber()) {
          continue
        }

        if (player.countCellsNumber() > bestPlayer.countCellsNumber() ||
          player.countDotsNumber() > bestPlayer.countDotsNumber()) {
          bestPlayer = player
          bestPlayerId = playerId
        }
      }

      return bestPlayerId
    }

    function givePlacesToPlayers() {
      let place = 0
      let previousPlayer

      for (let playerId of sortedPlayersIndexes) {
        const player = Game.getPlayer(playerId)

        if (previousPlayer &&
          previousPlayer.countCellsNumber() === player.countCellsNumber() &&
          previousPlayer.countDotsNumber() === player.countDotsNumber()) {

        } else {
          place++
          if (previousPlayer) {
            console.log("Previous player: ",
              previousPlayer.countCellsNumber(),
              previousPlayer.countDotsNumber())
            console.log("Player: ",
              player.countCellsNumber(),
              player.countDotsNumber())
          }
        }

        player.place = place
        previousPlayer = player
      }
    }
  }
}