import MyAnimation from "@/assets/animation/myAnimation";

export default class AnimationParameters {
  constructor(duration = 1000, renderFunction = () => {}) {
    this.renderFunction = renderFunction
    this.duration = duration
    this.timingFunction = MyAnimation.linear
  }

  setRenderFunction(renderFunction) {
    this.renderFunction = renderFunction
  }

  setDuration(duration) {
    this.duration = duration
  }

  setTimingFunction(timingFunction) {
    this.timingFunction = timingFunction
  }
}