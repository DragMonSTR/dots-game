<template>
  <div class="cell">
    <div
      class="cell__main-circle"
      :style="{'background-color': getCellColor(cellInfo)}"
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
import Game from "@/assets/gameLogic/game";

export default {
  name: "Cell",
  props: {
    cellInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    getCellColor(cellInfo) {
      if (cellInfo.playerIndex === -1) {
        return "#fff"
      }
      const player = Game.playerArray[cellInfo.playerIndex]
      return player.color
    }
  }
}
</script>

<style scoped>
.cell__main-circle {
  width: 65%;
  height: 65%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  border-radius: 50%;

  transition: transform .2s ease;
  cursor: pointer;
}

.cell__main-circle:hover {
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