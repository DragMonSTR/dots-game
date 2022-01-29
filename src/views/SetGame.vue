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
          {{ getStringResource('players') }}
        </div>
        <div class="players__list">
          <TransitionGroup name="menu-players-list">
            <MenuPlayer
              class="players__list-item"
              v-for="player in playersArray"
              :key="player.id"
              :player="player"
              :ability-to-remove-player="abilityToRemovePlayer"
            />
            <div
              :key="1000"
              class="players__add-button"
              :class="{
                'players__add-button-hidden': !abilityToAddPlayer
              }"
            >
              <MyButton
                :text="getStringResource('addPlayer')"
                :text-size="40"
                icon-name="plus"
                @click="addPlayer"
              />
            </div>
          </TransitionGroup>
        </div>
      </div>

      <div class="content__field field">
        <div class="field__title">
          {{ getStringResource('gameField') }}
        </div>
        <div class="field__buttons">
          <div class="field__button">
            <MyButton
              :text="getStringResource('small') + ' (7 x 7)'"
              :text-size="40"/>
          </div>
          <div class="field__button">
            <MyButton
              :text="getStringResource('middle') + ' (10 x 10)'"
              :text-size="40"
              :selected="true"/>
          </div>
          <div class="field__button">
            <MyButton
              :text="getStringResource('large') + ' (15 x 15)'"
              :text-size="40"/>
          </div>
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
    abilityToAddPlayer() {
      return this.playersArray.length < 4
    },
    abilityToRemovePlayer() {
      return this.playersArray.length > 2
    },
    playersArray() {
      return Game.getPlayersArray()
    }
  },
  methods: {
    addPlayer() {
      if (!this.abilityToAddPlayer) {
        return
      }
      const randomNames = this.getStringResource("randomNames")
      Game.addPlayer(randomNames)
    },
    startGame() {
      Game.start()
      this.$router.push('/game')
    }
  },
  mounted() {
    if (this.playersArray.length) {
      return
    }

    const randomNames = this.getStringResource("randomNames")
    Game.addPlayer(randomNames)
    Game.addPlayer(randomNames)
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


.content__players {
  height: 600px;
}

.players__title {
  margin: 0 0 50px 0;

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
  margin: 0 0 40px 0;
}


.menu-players-list-enter-active,
.menu-players-list-leave-active {
  transition: all .3s ease;
}

.menu-players-list-enter-from,
.menu-players-list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.menu-players-list-leave-active {
  position: absolute;
}

.menu-players-list-move {
  transition: transform .4s ease,
  opacity .3s ease;
}


.players__add-button {
  display: flex;
  justify-content: center;

  opacity: 1;
}

.players__add-button-hidden {
  opacity: 0;
}


.field__title {
  margin: 0 0 30px 0;

  font-size: 50px;
  font-weight: 500;
  text-align: center;
  text-transform: capitalize;

  color: #555;
}

.field__buttons {
  display: flex;
  justify-content: center;
}

.field__button {
  margin: 0 25px 0 0;
}

.field__button:last-child {
  margin: 0;
}


.start-game-button {
  display: flex;
  justify-content: center;
}
</style>