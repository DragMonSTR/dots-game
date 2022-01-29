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

    <button
      class="remove-button"
      :class="{'remove-button-hidden': !abilityToRemovePlayer}">
    </button>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton"

export default {
  name: "MenuPlayer",
  components: {MyButton},
  props: {
    player: {
      type: Object,
      required: true
    },
    abilityToRemovePlayer: {
      type: Boolean,
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
  margin: 0 25px 0 0;

  border-radius: 5px;
}

.name-input {
  margin: 0 50px 0 0;
  width: 500px;
  height: 80px;
  padding: 0 20px;

  font-size: 45px;
  font-weight: 500;

  background: none;
  border-radius: 5px;
}

.remove-button {
  width: 80px;
  height: 80px;

  background: url("../assets/img/icons/minus.svg") center no-repeat;
  background-size: contain;

  border: 2px solid #aaa;
  border-radius: 5px;
  opacity: 1;

  transition: background-color .2s ease,
  opacity .3s ease;
  cursor: pointer;
}

.remove-button:hover {
  background-color: #e3e3c9;
}

.remove-button-hidden {
  opacity: 0;
}
</style>