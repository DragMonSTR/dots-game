<template>
  <div class="cell">
    <div
      class="cell__circle"
      :class="{'cell__circle-hovered': circleHovered}"
      ref="circle"
      :style="{'background-color': getCellColor(cellInfo)}"
      @mouseenter="mouseEntered"
      @mouseleave="circleHovered = false"
    >
      <div
        class="cell__dot"
        v-for="i in cellInfo.dotsNumber"
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

export default {
  name: "Cell",
  props: {
    cellInfo: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    animationDuration: {
      addDot: 1000
    },
    circleHovered: false
  }),
  methods: {
    getCellColor(cellInfo) {
      if (cellInfo.playerIndex === null) {
        return "#fff"
      }
      const player = Game.playerArray[cellInfo.playerIndex]
      return player.color
    },
    mouseEntered() {
      if (this.cellInfo.checkIfAvailableForClick()) {
        this.circleHovered = true
      }
    },
    playAddDotAnimation() {
      const animationParameters = new AnimationParameters()
      animationParameters.setDuration(this.animationDuration.addDot)
      animationParameters.setRenderFunction(value => {
        this.circle.style.transform = `scale(${value})`
      })
      animationParameters.setTimingFunction(MyAnimation.easeOutElastic)

      MyAnimation.animate(animationParameters)
      setTimeout(() => {
        this.circle.style.transform = ""
      }, this.animationDuration.addDot + 100)
    }
  },
  mounted() {
    this.cellInfo.setComponentContext(this)
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

  transition: transform .2s ease;
}

.cell__circle-hovered {
  cursor: pointer;
  transform: scale(1.1);
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