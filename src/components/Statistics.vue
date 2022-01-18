<template>
  <div class="statistics">
    <div class="player-list">
      <Player
        class="player-list__element"
        v-for="(player, i) in players"
        :key="i"
        :player="player"
        :position="i + 1"
      />
    </div>
  </div>
</template>

<script>
import Player from "@/components/Player"
import Game from "@/assets/gameLogic/game"
import GameField from "@/assets/gameLogic/gameField";

export default {
  name: "Statistics",
  components: {Player},
  computed: {
    players() {
      return Game.playersArray.value
    }
  }
}
</script>

<style scoped>
.statistics {
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffe;
}


.player-list {
  margin: 100px 0 0 0;
  width: 100%;
}

.player-list__element {
  margin: 0 0 50px 0;
}

.player-list__element:last-child {
  margin: 0;
}
</style>