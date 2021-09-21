/*
  Theses states are stored when the user is creating a new layer.
  The states are saved to avoid the user lose his layer.
*/
const state = {
  layer: null
}

const mutations = {
  setLayer (state, layer) {
    state.layer = layer
  }
}

const actions = {
  setLayer ({commit}, layer) {
    commit('setLayer', layer)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
