const state = {
  years: {
    first: 1868,
    last: 1940
  },
  boxGeocoding: true
}

const mutations = {
  setYears (state, years) {
    state.years.first = years.first
    state.years.last = years.last
  },
  setBoxGeocoding (state, value) {
    state.boxGeocoding = value
  }
}

const actions = {
  setYears ({commit}, years) {
    commit('setYears', years)
  },
  setBoxGeocoding({commit}, value) {
    commit('setBoxGeocoding', value)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
