<template>
  <div class="cell">
    <div
      class="cell__circle"
      ref="circle"
      :class="{'cell__circle-hovered': circleHovered}"
      :style="{'background-color': circleColor}"
      @mouseenter="mouseEntered"
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
    animationDuration: {
      addDot: 1000
    },
    circleHovered: false
  }),
  computed: {
    cell() {
      return GameField.getCellByIndex(this.index)
    },
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
            {top: '50%', left: '50%'},
            {top: '50%', left: '50%'},
            {top: '50%', left: '50%'},
            {top: '50%', left: '50%'},
            {top: '50%', left: '50%'}
          ]
        case 2:
          return [
            {top: '50%', left: '30%'},
            {top: '50%', left: '70%'},
            {top: '50%', left: '50%'},
            {top: '50%', left: '50%'},
            {top: '50%', left: '50%'}
          ]
        case 3:
          return [
            {top: '25%', left: '50%'},
            {top: '65%', left: '30%'},
            {top: '65%', left: '70%'},
            {top: '50%', left: '50%'},
            {top: '50%', left: '50%'}
          ]
        case 4:
          return [
            {top: '30%', left: '30%'},
            {top: '30%', left: '70%'},
            {top: '70%', left: '30%'},
            {top: '70%', left: '70%'},
            {top: '50%', left: '50%'}
          ]
        case 5:
          return [
            {top: '30%', left: '30%'},
            {top: '30%', left: '70%'},
            {top: '70%', left: '30%'},
            {top: '70%', left: '70%'},
            {top: '50%', left: '50%'}
          ]
        default:
          return [
            {top: '50%', left: '50%'},
            {top: '50%', left: '50%'},
            {top: '50%', left: '50%'},
            {top: '50%', left: '50%'},
            {top: '50%', left: '50%'}
          ]
      }
    }
  },
  methods: {
    mouseEntered() {
      if (this.cell.checkIfAvailableForClick()) {
        this.circleHovered = true
      }
    },
    clicked() {
      this.cell.clicked()
    },
    playAddDotAnimation() {
      const animationParameters = new AnimationParameters()
      animationParameters.setDuration(this.animationDuration.addDot)
      animationParameters.setRenderFunction(value => {
        this.circle.style.transform = `scale(${2 - value})`
      })
      animationParameters.setTimingFunction(MyAnimation.easeOutElastic)

      MyAnimation.animate(animationParameters)
      setTimeout(() => {
        this.circle.style.transform = ""
      }, this.animationDuration.addDot + 100)
    }
  },
  mounted() {
    this.cell.setComponentContext(this)
  },
  setup() {
    const circle = ref(null)
    return {
      circle
    }
  }
}
</script>

<style scoped>
.cell__circle {
  position: relative;
  width: 65%;
  height: 65%;

  border-radius: 50%;

  transition: transform .2s ease,
  background-color .2s ease;
}

.cell__circle-hovered {
  cursor: pointer;
  transform: scale(1);
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

  transition: border-radius .2s ease,
  top .2s ease,
  left .2s ease;
}

.cell__dot-hidden {
  width: 0;
  height: 0;
}
</style>