<template>
  <div class="home">
    <div class="buttons">
      <MyButton
        class="buttons__button"
        :text="getStringResource('startGame')"
        icon-name="play"
        @click="$router.push('/setGame')"
      />
      <MyButton
        class="buttons__button"
        :text="getStringResource('rules')"
        icon-name="rules"
        @click="$router.push('/rules')"
      />
      <MyButton
        class="buttons__button"
        :class="{'buttons__button-hidden': showLanguageFlags}"
        :text="getStringResource('language')"
        icon-name="language"
        @click="showLanguageFlags = !showLanguageFlags"
      />
    </div>
    <div class="flags"
         :class="{'flags-hidden': !showLanguageFlags}">
      <img class="flags__flag"
           src="../assets/img/flags/en.svg"
           alt=""
           @click="selectLanguage('en')"/>
      <img class="flags__flag"
           src="../assets/img/flags/ru.svg"
           alt=""
           @click="selectLanguage('ru')"/>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton"
import {mapGetters, mapMutations} from "vuex"

export default {
  name: "Home",
  components: {MyButton},
  data: () => ({
    showLanguageFlags: false
  }),
  computed: {
    ...mapGetters({
      getStringResource: "getStringResource"
    })
  },
  methods: {
    ...mapMutations({
      setLanguage: "language/setLanguage"
    }),
    selectLanguage(language) {
      this.setLanguage(language)
      this.showLanguageFlags = false
    }
  }
}
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
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

  opacity: 1;
  transition: background-color .2s ease,
  opacity .2s ease;
}

.buttons__button-hidden {
  opacity: 0;
}

.buttons__button:last-child {
  margin: 0;
}


.flags {
  width: 350px;
  margin: -100px 0 0 0;

  display: flex;
  justify-content: space-between;
}

.flags-hidden {
  display: none;
}

.flags__flag {
  height: 100px;

  border: 2px solid #aaa;
  border-radius: 6px;
  opacity: .7;

  cursor: pointer;
  transition: opacity .3s ease;
}

.flags__flag:hover {
  opacity: 1;
}
</style>