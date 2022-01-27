<template>
  <div class="set-game">
    <div class="back-button">
      <MyButton
        :text="getStringResource('mainMenu')"
        icon-name="back"
        @click="$router.push('/')"
      />
    </div>

    <div class="content">
      <div class="content__players players">
        <div class="players__title">
          {{getStringResource('players')}}
        </div>
        <div class="players__list">
          <MenuPlayer
            class="players__list-item"
            v-for="player in playersArray"
            :key="player.id"
            :player="player"
          />
        </div>
      </div>
    </div>

    <div class="start-game-button">
      <MyButton
        :text="getStringResource('startGame')"
        icon-name="play"
        @click="startGame"
      />
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton"
import {mapGetters} from "vuex"
import MenuPlayer from "@/components/MenuPlayer"
import Game from "@/assets/gameLogic/game"

export default {
  name: "SetGame",
  components: {MenuPlayer, MyButton},
  computed: {
    ...mapGetters({
      getStringResource: "getStringResource"
    }),
    playersArray() {
      return Game.getPlayersArray()
    }
  },
  methods: {
    startGame() {
      Game.generateGameField(10)
      Game.started = true
      this.$router.push('/game')
    }
  },
  mounted() {
    Game.generatePlayers(2)
  }
}
</script>

<style scoped>
.set-game {
  width: 100vw;
  min-height: 100vh;
  padding: 100px 200px;

  display: flex;
  flex-direction: column;

  background-color: #ffe;
}


.back-button {
  margin: 0 0 50px 0;
}


.content {
  flex: 1 1 auto;
}


.players__title {
  margin: 0 0 60px 0;

  font-size: 50px;
  font-weight: 500;
  text-align: center;
  text-transform: capitalize;

  color: #555;
}

.players__list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.players__list-item {
  margin: 0 0 50px 0;
}


.start-game-button {
  display: flex;
  justify-content: center;
}
</style>