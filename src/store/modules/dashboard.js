const state = {
  name: "",
  keywords: "",
  references: "",
  users: "",
  description: ""
}

const mutations = {
  setName (state, name) {
    state.name = name
  },
}

const actions = {
  setName ({commit}, name) {
    commit('setName', name)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
