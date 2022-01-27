<template>
  <div class="home">
    <div class="buttons">
      <Button
        class="buttons__button"
        :text="getStringResource('startGame')"
        icon-name="play"
        @click="$router.push('/setGame')"
      />
      <Button
        class="buttons__button"
        :text="getStringResource('rules')"
        icon-name="rules"
        @click="$router.push('/rules')"
      />
      <Button
        class="buttons__button"
        :text="getStringResource('language')"
        icon-name="language"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button"
import {mapGetters} from "vuex"

export default {
  name: "Home",
  components: {Button},
  computed: {
    ...mapGetters({
      getStringResource: "getStringResource"
    })
  }
}
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffe;
}


.buttons {
  display: flex;
  flex-direction: column;
}

.buttons__button {
  margin: 0 0 50px 0;
}
</style>