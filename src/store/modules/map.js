const state = {
  years: {
    first: 1868,
    last: 1940
  },
  layers: [],
  boxGeocoding: true,
  boxInfoLayer: false,
  boxNotifications: false,
  boxInfoVector: false
}

const mutations = {
  setYears (state, years) {
    state.years.first = years.first
    state.years.last = years.last
  },
  setBoxGeocoding (state, value) {
    state.boxGeocoding = value
  },
  setBoxInfoLayer (state, value) {
    state.boxInfoLayer = value
  },
  setBoxNotifications (state, value) {
    state.boxNotifications = value
  },
  setBoxInfoVector (state, value) {
    state.boxInfoVector = value
  },
  setNewLayers (state, value) {
    state.layers.push(value)
  },
  setRemoveLayers (state, value) {
    state.layers.splice(state.layers.indexOf(value), 1)
  }
}

const actions = {
  setYears ({commit}, years) {
    commit('setYears', years)
  },
  setBoxGeocoding({commit}, value) {
    commit('setBoxGeocoding', value)
  },
  setBoxInfoLayer({commit}, value) {
    commit('setBoxInfoLayer', value)
  },
  setBoxInfoVector({commit}, value) {
    commit('setBoxInfoVector', value)
  },
  setBoxNotifications({commit}, value) {
    commit('setBoxNotifications', value)
  },
  setNewLayers({commit}, value) {
    commit('setNewLayers', value)
  },
  setRemoveLayers({commit}, value) {
    commit('setRemoveLayers', value)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
