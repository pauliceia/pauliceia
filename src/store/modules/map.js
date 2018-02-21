const state = {
  years: {
    first: 1868,
    last: 1940
  }
}

const mutations = {
  setYears (state, years) {
    state.years.first = years.first
    state.years.last = years.last
  }
}

const actions = {
  setYears ({commit}, years) {
    commit('setYears', years)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
