<template>
  <div class="game-field">
    <div
      class="matrix">
      <div
        class="matrix__row"
        v-for="(matrixRowInfo, i) in matrix"
        :key="i"
      >
        <Cell
          class="matrix__cell"
          v-for="(cellInfo, j) in matrixRowInfo"
          :key="j"
          :cell-info="cellInfo"
          @click="cellClicked(i, j)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Game from "@/assets/gameLogic/game"
import GameField from "@/assets/gameLogic/gameField"
import Cell from "@/components/Cell"
import {ref} from "vue"

export default {
  name: "GameField",
  components: {Cell},
  computed: {
    matrix() {
      return GameField.getMatrix()
    }
  },
  methods: {
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