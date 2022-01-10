export default class Cell {
  playerIndex = -1
  dotsNumber = 0

  constructor(playerIndex = -1, dotsNumber = 0) {
    this.playerIndex = playerIndex
    this.dotsNumber = dotsNumber
  }

  setPlayerIndex(playerIndex) {
    this.playerIndex = playerIndex
  }
}