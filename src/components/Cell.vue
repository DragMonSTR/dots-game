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
        v-for="i in cell.dotsNumber"
        :key="i"
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
  width: 65%;
  height: 65%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  border-radius: 50%;

  transition: transform .2s ease,
  background-color .2s ease;
}

.cell__circle-hovered {
  cursor: pointer;
  transform: scale(1);
}


.cell__dot {
  width: 20%;
  height: 20%;
  margin-right: 20%;
  transform: translateX(50%);

  background-color: #fff;
  border-radius: 50%;
}
</style>