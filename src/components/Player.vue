<template>
  <div class="player">
    <div class="player__name"
         :style="{'color': player.color}">
      {{ player.name }}
    </div>
    <div class="player__score-wrapper">
      <div class="player__score-bar"
           :style="{'background-color': player.color}">
        <div class="player__score">
          {{player.countCellsNumber()}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Player",
  props: {
    player: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log(this.player)
  }
}
</script>

<style scoped>
.player {
  padding: 0 0 0 5%;

  display: flex;
  align-items: center;
}


.player__name {
  width: 23%;
  margin: 0 2% 0 0;

  font-size: 40px;
  font-weight: 500;

  color: #333;
  overflow: hidden;
}


.player__score-wrapper {
  width: 60%;
}

.player__score-bar {
  position: relative;
  width: 50%;
  height: 10px;

  background-color: #afa;
  border-radius: 10px;
}

.player__score {
  position: absolute;
  top: 0;
  right: -1vw;
  transform: translate(100%, -40%);

  font-family: 'Cousine', monospace;
  font-size: 30px;

  color: #333;
}
</style>