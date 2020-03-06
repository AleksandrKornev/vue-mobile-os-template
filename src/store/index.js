import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentApp: null
  },
  mutations: {
    CHANGE_APP(state, app) {
      state.currentApp = app;
    }
  },
  actions: {}
});