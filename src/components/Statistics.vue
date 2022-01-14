<template>
  <div class="statistics">
    <div class="player-list">
      <Player
        class="player-list__element"
        v-for="(player, i) in players"
        :key="i"
        :player="player"
      />
    </div>
  </div>
</template>

<script>
import Player from "@/components/Player"
import Game from "@/assets/gameLogic/game"

export default {
  name: "Statistics",
  components: {Player},
  computed: {
    players() {
      return Game.playerArray.value
    }
  }
}
</script>

<style scoped>
.statistics {
  display: flex;
  align-items: center;

  background-color: #ffe;
}


.player-list {
  width: 100%;
}

.player-list__element {
  margin: 0 0 80px 0;
}

.player-list__element:last-child {
  margin: 0;
}
</style>