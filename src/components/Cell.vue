<template>
  <div class="cell" :class="{'cell-disabled': disabledStatus}">
    <div class="cell__bullets"
         ref="bullets">
      <div
        v-if="cell.verticalIndex > 0"
        class="cell__bullet"
        :style="{
          'transform-origin': `center ${bulletOffset}%`,
          'transform': `translate(-50%, -${bulletOffset}%) rotate(0deg)`,
          'background-color': circleColor
      }"></div>
      <div
        v-if="cell.horizontalIndex < gameWidth - 1"
        class="cell__bullet"
        :style="{
          'transform-origin': `center ${bulletOffset}%`,
          'transform': `translate(-50%, -${bulletOffset}%) rotate(90deg)`,
          'background-color': circleColor
      }"></div>
      <div
        v-if="cell.verticalIndex < gameHeight - 1"
        class="cell__bullet"
        :style="{
          'transform-origin': `center ${bulletOffset}%`,
          'transform': `translate(-50%, -${bulletOffset}%) rotate(180deg)`,
          'background-color': circleColor
      }"></div>
      <div
        v-if="cell.horizontalIndex > 0"
        class="cell__bullet"
        :style="{
          'transform-origin': `center ${bulletOffset}%`,
          'transform': `translate(-50%, -${bulletOffset}%) rotate(270deg)`,
          'background-color': circleColor
      }"></div>
    </div>
    <div
      class="cell__circle"
      ref="circle"
      :class="{'cell__circle-hovered': circleHovered}"
      :style="{'background-color': circleColor}"
      @mousemove="mouseMoved"
      @mouseleave="circleHovered = false"
      @click="clicked"
    >
      <div
        class="cell__dot"
        v-for="(position, i) in dotsPosition"
        :key="i"
        :class="{'cell__dot-hidden': i >= cell.dotsNumber}"
        :style="{
          'top': position.top,
          'left': position.left
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue"
import Game from "@/assets/gameLogic/game"
import AnimationParameters from "@/assets/animation/animationParameters"
import MyAnimation from "@/assets/animation/myAnimation"
import GameField from "@/assets/gameLogic/gameField"

export default {
  name: "Cell",
  props: {
    index: {type: Number, required: true}
  },
  data: () => ({
    circleHovered: false,
    bulletOffset: 350
  }),
  computed: {
    cell() {
      return GameField.getCellByIndex(this.index)
    },
    gameWidth: () => GameField.getWidth(),
    gameHeight: () => GameField.getHeight(),
    circleColor() {
      const playerIndex = this.cell.playerIndex
      if (playerIndex === null) {
        return "#fff"
      }

      const player = Game.playerArray[playerIndex]
      return player.color
    },
    dotsPosition() {
      switch (this.cell.dotsNumber) {
        case 1:
          return [
            {left: '50%', top: '50%'},
            {left: '50%', top: '50%'},
            {left: '50%', top: '50%'},
            {left: '50%', top: '50%'},
            {left: '50%', top: '50%'}
          ]
        case 2:
          return [
            {left: '30%', top: '50%'},
            {left: '70%', top: '50%'},
            {left: '50%', top: '50%'},
            {left: '50%', top: '50%'},
            {left: '50%', top: '50%'}
          ]
        case 3:
          return [
            {left: '50%', top: '25%'},
            {left: '70%', top: '65%'},
            {left: '30%', top: '65%'},
            {left: '50%', top: '50%'},
            {left: '50%', top: '50%'}
          ]
        case 4:
          return [
            {left: '70%', top: '30%'},
            {left: '30%', top: '70%'},
            {left: '30%', top: '30%'},
            {left: '70%', top: '70%'},
            {left: '50%', top: '50%'}
          ]
        case 5:
          return [
            {left: '70%', top: '70%'},
            {left: '30%', top: '30%'},
            {left: '70%', top: '30%'},
            {left: '30%', top: '70%'},
            {left: '50%', top: '50%'}
          ]
        default:
          return [
            {left: '50%', top: '50%'},
            {left: '50%', top: '50%'},
            {left: '50%', top: '50%'},
            {left: '50%', top: '50%'},
            {left: '50%', top: '50%'}
          ]
      }
    },
    disabledStatus() {
      if (!Game.getMoveAvailable()) {
        return false
      }
      return !this.cell.checkIfAvailableForClick()
    }
  },
  methods: {
    mouseMoved() {
      if (this.cell.checkIfAvailableForClick()) {
        this.circleHovered = true
      }
    },
    clicked() {
      this.circleHovered = false
      this.cell.clicked()
    },
    playAddDotAnimation() {
      const animationParameters = new AnimationParameters()
      animationParameters.setDuration(MyAnimation.durations.addingDot)
      animationParameters.setRenderFunction(this.setCircleRadius)
      animationParameters.setTimingFunction(MyAnimation.easeOutElastic)
      MyAnimation.animate(animationParameters)
    },
    setCircleRadius(animationProgress) {
      const scaleValue = 1.4 - 0.4 * animationProgress
      this.circle.style.transform =
        `translate(-50%, -50%) scale(${scaleValue})`
    },
    playExplodeAnimation() {
      this.bullets.style.display = "block"

      const animationParameters = new AnimationParameters()
      animationParameters.setDuration(MyAnimation.durations.cellBullets)
      animationParameters.setRenderFunction(this.setBulletOffset)
      animationParameters.setTimingFunction(MyAnimation.easeInOut)
      MyAnimation.animate(animationParameters)

      setTimeout(() => {
        this.bullets.style.display = "none"
      }, MyAnimation.durations.cellBullets)
    },
    setBulletOffset(animationProgress) {
      const startValue = 300
      const finishValue = 650

      const difference = finishValue - startValue
      this.bulletOffset = startValue + animationProgress * difference
    }
  },
  mounted() {
    this.cell.setComponentContext(this)
  },
  setup() {
    const circle = ref(null)
    const bullets = ref(null)
    return {
      circle,
      bullets
    }
  }
}
</script>

<style scoped>
.cell {
  position: relative;

  height: 100%;
  flex: 1 1 auto;
  text-align: center;

  transition: background-color 2s ease;
}

.cell-disabled {
  background-color: #ffea84;
}


.cell__bullets {
  position: absolute;
  width: 100%;
  height: 100%;

  display: none;
}

.cell__bullet {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12%;
  height: 12%;

  background-color: red;
  border-radius: 50%;

  z-index: 0;
}


.cell__circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  height: 65%;

  border-radius: 50%;

  transition: background-color .2s ease,
  box-shadow .2s ease;

  z-index: 1;
}

.cell__circle-hovered {
  cursor: pointer;
  box-shadow: 0 0 .8vw .3vw #fff;
}


.cell__dot {
  position: absolute;
  top: 0;
  left: 0;
  width: 20%;
  height: 20%;
  transform: translate(-50%, -50%);

  background-color: #fff;
  border-radius: 50%;

  transition: top .2s ease,
  left .2s ease;
}

.cell__dot-hidden {
  width: 0;
  height: 0;
}
</style>