import GameField from "@/assets/gameLogic/gameField"
import Player from "@/assets/gameLogic/player"
import colorData from "@/assets/gameLogic/colorData"
import {ref} from "vue"


export default class Game {
  static started = false
  static moveAvailable = ref(true)

  static playersArray = ref([])
  static playerWhoMovesId


  static addPlayer(randomNames) {
    const id = getMaxPlayerId() + 1
    const name = generatePlayerName()
    const colors = generatePlayerColors()

    const player = new Player(id, name, colors)
    Game.playersArray.value.push(player)


    function getMaxPlayerId() {
      const playersArray = Game.getPlayersArray()
      if (!playersArray.length) {
        return 0
      }

      let maxPlayerId = playersArray[0].id
      for (let player of playersArray) {
        if (player.id > maxPlayerId) {
          maxPlayerId = player.id
        }
      }
      return maxPlayerId
    }

    function generatePlayerName() {
      const availableNames = randomNames

      for (let player of Game.getPlayersArray()) {
        const existingPlayerName = player.name
        const existingNameIndex = availableNames.indexOf(existingPlayerName)
        if (existingNameIndex === -1) {
          continue
        }
        availableNames.splice(existingNameIndex, 1)
      }

      return getRandomArrayElement(availableNames)
    }

    function generatePlayerColors() {
      const allColors = colorData.playersColors.slice()

      for (let player of Game.getPlayersArray()) {
        const existingPlayerColors = player.colors

        for (let i = 0; i < allColors.length; i++) {
          if (allColors[i][0] === existingPlayerColors[0]) {
            allColors.splice(i, 1)
          }
        }
      }

      return getRandomArrayElement(allColors)
    }

    function getRandomArrayElement(array) {
      const index = getRandomInt(0, array.length)
      return array[index]
    }

    function getRandomInt(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min
    }
  }

  static removePlayer(playerId) {
    const playersArray = this.getPlayersArray()

    for (let i = 0; i < playersArray.length; i++) {
      const player = playersArray[i]
      if (player.id !== playerId) {
        continue
      }
      playersArray.splice(i, 1)
      return
    }
  }


  static start() {
    this.playerWhoMovesId = this.getPlayersIdArray()[0]
    this.generateGameField(10)
    this.started = true
  }

  static generateGameField(gameFieldSideSize) {
    GameField.setSize(gameFieldSideSize, gameFieldSideSize)
    GameField.giveStartCellsToPlayers()
  }


  static getPlayersIdArray() {
    const players = Game.getPlayersArray()

    const idArray = []
    for (let player of players) {
      idArray.push(player.id)
    }
    return idArray
  }

  static getPlayersArray() {
    return this.playersArray.value
  }

  static getPlayer(playerId) {
    const playersArray = Game.getPlayersArray()
    for (let player of playersArray) {
      if (player.id === playerId) {
        return player
      }
    }
  }

  static getMoveAvailable() {
    return this.moveAvailable.value
  }

  static cellClicked() {
    this.moveAvailable.value = false
    GameField.runExplosions()
    this.switchPlayerWhoMovesId()
  }


  static switchPlayerWhoMovesId() {
    const idArray = this.getPlayersIdArray()

    let playerWhoMovesIndex = idArray.indexOf(this.playerWhoMovesId) + 1
    if (playerWhoMovesIndex === idArray.length) {
      playerWhoMovesIndex = 0
    }

    this.playerWhoMovesId = idArray[playerWhoMovesIndex]
  }


  static updatePlayersPlaces() {
    const playersArray = Game.playersArray.value
    let playersIndexes = getPlayersIndexes()
    const sortedPlayersIndexes = getSortedPlayersIndexes()
    givePlacesToPlayers()


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
        }

        player.place = place
        previousPlayer = player
      }
    }
  }
}