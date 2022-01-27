export default {
  namespaced: true,
  state: () => ({
    availableLanguages: ["en", "ru"],
    currentLanguage: "en"
  }),
  mutations: {
    setLanguage(state, language) {
      if (state.availableLanguages.indexOf(language) === -1) {
        return
      }

      state.currentLanguage = language
    }
  }
}