import {createStore} from 'vuex'
import language from "@/store/language"
import strings from "@/store/strings"

export default createStore({
  getters: {
    getStringResource: (state, getters) => stringName => {
      const language = state.language.currentLanguage
      return state.strings[stringName][language]
    }
  },
  modules: {
    language,
    strings
  }
})
