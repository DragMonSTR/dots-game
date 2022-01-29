<template>
  <div class="player">
    <div
      class="player__crown"
      :class="{'player__crown-hidden': player.place !== 1}"></div>
    <div
      class="player__place"
      :style="{'background-color': player.colors[3]}"
    >
      {{ player.place }}
    </div>
    <div
      class="player__name"
      :style="{'background-color': player.colors[3]}"
    >
      {{ player.name }}
    </div>
    <div class="player__score-wrapper">
      <div
        class="player__score-bar"
        :style="{
          'background-color': player.colors[0],
          'width': barWidthInPercent + '%'
        }">
        <p class="player__score-value"
           :class="{'player__score-value-separately': barWidthInPercent < 40}"
        >
          {{ player.countCellsNumber() }}
          <span class="player__score-parameter">
            {{getStringResource("cells")}}
            &nbsp;&nbsp;
          </span>
          {{ player.countDotsNumber() }}
          <span class="player__score-parameter">
            {{getStringResource("dots")}}
        </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import GameField from "@/assets/gameLogic/gameField"

export default {
  name: "Player",
  props: {
    player: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      getStringResource: "getStringResource"
    }),
    barWidthInPercent() {
      const playerCellsNumber = this.player.countCellsNumber()
      const maxPlayerCellsNumber = GameField.countMaxPlayerCellNumber()
      return playerCellsNumber / maxPlayerCellsNumber * 100
    }
  }
}
</script>

<style scoped>
.player {
  position: relative;
  padding: 0 30px;

  display: flex;
  align-items: center;
}


.player__crown {
  position: absolute;
  top: -30px;
  left: 15px;
  width: 60px;
  height: 60px;
  transform: rotate(-30deg);

  opacity: 1;
  background: url("../../public/img/crown.png") no-repeat center;
  background-size: contain;

  transition: opacity .2s ease;
}

.player__crown-hidden {
  opacity: 0;
}


.player__place {
  width: 70px;
  height: 70px;
  margin: 0 10px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 35px;
  font-weight: 500;

  color: #ffffff;
  border-radius: 70px;
}

.player__name {
  width: 300px;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 0;
  font-size: 35px;
  font-weight: 500;

  color: #ffffff;
  border-radius: 70px 0 0 70px;
  overflow: hidden;
}


.player__score-wrapper {
  flex: 1 1 auto;
}

.player__score-bar {
  position: relative;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #afa;
  border-radius: 0 70px 70px 0;

  transition: width .5s ease;
}


.player__score-value {
  font-size: 35px;
  font-weight: 500;

  color: #fff;
}

.player__score-value-separately {
  position: absolute;
  top: 50%;
  right: 0;
  width: 400px;
  transform: translate(110%, -50%);
  color: #333333;
}

.player__score-parameter {
  padding: .2em 0 0 0;

  font-weight: 300;
  font-size: .8em;
}
</style>