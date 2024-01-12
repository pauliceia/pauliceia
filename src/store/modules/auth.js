const state = {
    token: null,
    user: null,
    isUserLoggedIn: false
}

const mutations = {
  setToken (state, token) {
    state.token = token
    state.isUserLoggedIn = token ? true : false;
  },  
  setUser (state, user) {
    state.user = user
  },
  logoff (state) {
    state.token = null
    state.user = null
    state.isUserLoggedIn = false
  }
}

const actions = {
  setToken ({commit}, token) {
    commit('setToken', token)
  },
  setUser ({commit}, user) {
    commit('setUser', user)
  },
  logoff ({commit}){
    commit('logoff')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}