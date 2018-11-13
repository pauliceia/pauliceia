const state = {
  years: {
    first: 1868,
    last: 1940
  },
  layers: [],
  boxGeocoding: true,
  boxInfoLayer: false,
  boxNotifications: false,
  boxInfoVector: false,
  boxSubtitle: false,
  boxAlert: true,
  //informação do layer
  idInfoLayer: null,
  //id da layer que está ativa a funaçã INFO FEATURE
  idInfoFeatureLayer: null,
  sidebar: null
}

const mutations = {
  setYears (state, years) {
    state.years.first = years.first
    state.years.last = years.last
  },
  setBoxGeocoding (state, value) {
    state.boxGeocoding = value
  },
  setBoxSubtitle (state, value) {
    state.boxSubtitle = value
  },
  setBoxAlert (state, value) {
    state.boxAlert = value
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
  },
  setIdInfoLayer (state, value) {
    state.idInfoLayer = value
  },
  setIdInfoFeatureLayer (state, value) {
    state.idInfoFeatureLayer = value
  },
  setSidebar (state, value) {
    state.sidebar = value
  }
}

const actions = {
  setYears ({commit}, years) {
    commit('setYears', years)
  },
  setBoxGeocoding({commit}, value) {
    commit('setBoxGeocoding', value)
  },
  setBoxSubtitle({commit}, value) {
    commit('setBoxSubtitle', value)
  },
  setBoxAlert({commit}, value) {
    commit('setBoxAlert', value)
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
  },
  setIdInfoLayer ({commit}, value) {
    commit('setIdInfoLayer', value)
  },
  setIdInfoFeatureLayer ({commit}, value) {
    commit('setIdInfoFeatureLayer', value)
  },
  setSidebar ({commit}, value) {
    commit('setSidebar', value)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
