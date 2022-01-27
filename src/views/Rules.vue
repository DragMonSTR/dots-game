<template>
  <div class="rules">
    <MyButton
      class="back-button"
      :text="getStringResource('mainMenu')"
      icon-name="back"
      @click="$router.push('/')"
    />

    <div class="rules__text">
      {{ getStringResource('rulesText') }}
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton"
import {mapGetters} from "vuex"

export default {
  name: "Rules",
  components: {MyButton},
  computed: {
    ...mapGetters({
      getStringResource: "getStringResource"
    })
  }
}
</script>

<style scoped>
.rules {
  width: 100vw;
  min-height: 100vh;
  padding: 100px 200px;

  background-color: #ffe;
}


.back-button {
  margin: 0 0 100px 0;
}


.rules__text {
  font-size: 40px;
  text-align: center;
  line-height: 1.5em;
}
</style>