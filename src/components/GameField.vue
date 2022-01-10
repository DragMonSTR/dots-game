<template>
  <div class="game-field">
    <div
      class="matrix">
      <div
        class="matrix__row"
        v-for="(matrixRowInfo, i) in matrix"
        :key="i"
      >
        <div
          class="matrix__cell cell"
          v-for="(matrixInfo, j) in matrixRowInfo"
          :key="j"
        >
          <div class="cell__main-circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Game from "@/assets/gameLogic/game"
import GameField from "@/assets/gameLogic/gameField"

export default {
  name: "GameField",
  data: () => ({
    matrix: [[]]
  }),
  mounted() {
    Game.start(10)

    this.matrix = GameField.matrix
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


.cell__main-circle {
  width: 65%;
  height: 65%;

  background-color: #fff;
  border-radius: 50%;

  transition: transform .2s ease;
  cursor: pointer;
}

.cell__main-circle:hover {
  transform: scale(1.1);
}
</style>