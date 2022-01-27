<template>
  <div class="statistics">
    <div class="player-list">
      <TransitionGroup name="players-list">
        <Player
          class="player-list__element"
          v-for="player in players"
          :key="player.id"
          :player="player"
        />
      </TransitionGroup>
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
      const playersArray = Game.getPlayersArray().slice()
      playersArray.sort((player1, player2) => {
        return player1.place - player2.place
      })
      return playersArray
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


.players-list-move {
  transition: transform .4s ease;
}
</style>