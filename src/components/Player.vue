<template>
  <div class="player">
    <div
      class="player__crown"
      v-if="position === 1"></div>
    <div
      class="player__position"
      :style="{'background-color': player.color}"
    >
      {{ position }}
    </div>
    <div
      class="player__name"
      :style="{'background-color': player.color}"
    >
      {{ player.name }}
    </div>
    <div class="player__score-wrapper">
      <div
        class="player__score-bar"
        :style="{
          'background-color': player.color,
          'width': barWidthInPercent + '%'
        }">
        {{ player.countCellsNumber() }}
        <span class="player__score-parameter">&nbsp;cells</span>
      </div>
    </div>
  </div>
</template>

<script>
import GameField from "@/assets/gameLogic/gameField";

export default {
  name: "Player",
  props: {
    player: {
      type: Object,
      required: true
    },
    position: {
      type: Number,
      required: true
    }
  },
  computed: {
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
  transform: rotate(-30deg);

  width: 60px;
  height: 60px;
  background: url("../../public/img/crown.png") no-repeat center;
  background-size: contain;
}


.player__position {
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
  border-right: 1px solid #fff;
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

  font-size: 35px;
  font-weight: 500;

  color: #fff;
  background-color: #afa;
  border-radius: 0 70px 70px 0;

  transition: width .5s ease;
}

.player__score-parameter {
  padding: .2em 0 0 0;

  font-weight: 300;
  font-size: .8em;
}
</style>