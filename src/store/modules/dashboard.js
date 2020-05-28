const state = {
  myLayers: [],
  sharedLayers: []
}

const mutations = {
  setMyLayers (state, myLayers) {
    state.myLayers = myLayers
  },
  setSharedLayers (state, sharedLayers) {
    state.sharedLayers = sharedLayers
  }
}

const actions = {
  setMyLayers ({commit}, myLayers) {
    commit('setMyLayers', myLayers)
  },
  setSharedLayers ({commit}, sharedLayers) {
    commit('setSharedLayers', sharedLayers)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
