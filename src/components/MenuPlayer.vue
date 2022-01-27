<template>
  <div class="menu-player">
    <button
      class="color-button"
      :style="{'background-color': player.colors[0]}"
    ></button>

    <input
      type="text"
      class="name-input"
      :value="player.name"
      :style="{
        color: player.colors[0],
        'border': `2px solid ${player.colors[0]}`
      }">
  </div>
</template>

<script>
export default {
  name: "MenuPlayer",
  props: {
    player: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.menu-player {
  position: relative;

  display: flex;
  align-items: flex-end;
}


.color-button {
  width: 80px;
  height: 80px;
  margin: 0 30px 0 0;

  border-radius: 5px;
}


.name-input {
  width: 500px;
  height: 80px;
  padding: 0 20px;

  font-size: 45px;
  font-weight: 500;

  background: none;
  border-radius: 5px;
}
</style>