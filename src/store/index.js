import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  plugins: [createPersistedState()],
  state: {
    authenticated: false,
  },
  mutations: {
    SET_AUTHENTICATED(state, authenticated) {
      state.authenticated = authenticated;
    },
  },
  actions: {
    authenticate({ commit }) {
      commit("SET_AUTHENTICATED", true);
    },
    unauthenticate({ commit }) {
      commit("SET_AUTHENTICATED", false);
    },
  },
  modules: {
  }
})
