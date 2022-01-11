<template>
  <div class="game-field">
    <div
      class="matrix">
      <div
        class="matrix__row"
        v-for="i in height"
        :key="i"
      >
        <Cell
          class="matrix__cell"
          v-for="j in width"
          :key="j"
          :cell-info="getCellInfo(i - 1, j - 1)"
          @click="cellClicked(i - 1, j - 1)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Game from "@/assets/gameLogic/game"
import GameField from "@/assets/gameLogic/gameField"
import Cell from "@/components/Cell"

export default {
  name: "GameField",
  components: {Cell},
  computed: {
    width: () => GameField.getWidth(),
    height: () => GameField.getHeight()
  },
  methods: {
    getCellInfo(verticalIndex, horizontalIndex) {
      return GameField.getCellByPosition(verticalIndex, horizontalIndex)
    },
    cellClicked(verticalIndex, horizontalIndex) {
      Game.cellClicked(verticalIndex, horizontalIndex)
    }
  },
  mounted() {
    Game.start(10)
  }
}
</script>

<style scoped>
.game-field {
  background-color: #dcca71;
}


.matrix {
  height: 100%;

  display: flex;
  flex-direction: column;
}

.matrix__row {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
}

.matrix__cell {
  height: 100%;
  flex: 1 1 auto;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>