<template>
  <div class="game">
    <Statistics class="game__statistics"/>
    <GameField class="game__game-field"/>
  </div>
</template>

<script>
import GameField from "@/components/GameField"
import Statistics from "@/components/Statistics";


export default {
  name: "Game",
  components: {Statistics, GameField}
}
</script>

<style scoped>
.game {
  height: 100vh;

  display: flex;
}


.game__statistics {
  flex: 1 1 auto;
}

.game__game-field {
  width: 100vh;
  height: 100vh;
}
</style>