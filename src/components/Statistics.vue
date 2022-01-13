<template>
  <div class="statistics">
    <div class="player-list">
      <Player
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
</style>