export default class MyAnimation {
  static animate(animationParameters) {
    const start = performance.now()

    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / animationParameters.duration
      if (timeFraction > 1) timeFraction = 1

      // вычисление текущего состояния анимации
      const progress = animationParameters.timingFunction(timeFraction)

      animationParameters.renderFunction(progress) // отрисовать её

      if (timeFraction < 1) {
        requestAnimationFrame(animate)
      }
    })
  }

  static linear(timeFraction) {
    return timeFraction
  }

  static easeInOut(timeFraction) {
    return -(Math.cos(Math.PI * timeFraction) - 1) / 2;
  }

  static easeOutElastic(timeFraction) {
    if (timeFraction === 0 || timeFraction === 1) {
      return timeFraction
    }

    const c4 = (2 * Math.PI) / 3
    return 2 ** (-10 * timeFraction) *
      Math.sin((timeFraction * 10 - 0.75) * c4) +
      1;
  }
}