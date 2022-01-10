export default class GameField {
  static width = 0
  static height = 0
  static matrix = [[]]

  static setSize(width, height) {
    this.width = width
    this.height = height

    this.matrix = new Array(this.height)
    for (let i = 0; i < this.height; i++) {
      this.matrix[i] = new Array(this.width)
    }
  }
}