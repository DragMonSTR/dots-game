<template>
  <div class="player">
    Player
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
  background-color: #aaa;
}
</style>