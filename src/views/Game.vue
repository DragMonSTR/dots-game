<template>
  <div class="game">
    <GameField class="game__game-field"/>
  </div>
</template>

<script>
import GameField from "@/components/GameField";
export default {
  name: "Game",
  components: {GameField}
}
</script>

<style scoped>
.game {
  height: 100vh;

  display: flex;
  justify-content: center;
}


.game__game-field {
  width: 100vh;
  height: 100vh;
}
</style>