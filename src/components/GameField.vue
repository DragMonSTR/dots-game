<template>
  <div class="game-field">
    <div class="matrix">
      <div
        class="matrix__row"
        v-for="i in height"
        :key="i"
      >
        <Cell
          class="matrix__cell"
          v-for="j in width"
          :key="width * (i - 1) + j - 1"
          :index="width * (i - 1) + j - 1"
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
  }
}
</script>

<style scoped>
.game-field {
  background-color: #ffe25b;
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
</style>