const state = {
  name: "",
  key: [],
  ref: [],
  usersSaved: [],
  description: "",
  refId: []
}

const mutations = {
  setName (state, name) {
    state.name = name
  },
  setKeywords (state, key) {
    state.key = key
  },
  setReferences (state, ref) {
    state.ref = ref
  },
  setUsers (state, usersSaved) {
    state.usersSaved = usersSaved
  },
  setDescription (state, description) {
    state.description = description
  },
  setRefId (state, refId) {
    state.refId = refId
  },
}

const actions = {
  setName ({commit}, name) {
    commit('setName', name)
  },
  setKeywords ({commit}, key) {
    commit('setKeywords', key)
  },
  setReferences ({commit}, ref) {
    commit('setReferences', ref)
  },
  setUsers ({commit}, usersSaved) {
    commit('setUsers', usersSaved)
  },
  setDescription ({commit}, description) {
    commit('setDescription', description)
  },
  setRefId ({commit}, refId) {
    commit('setRefId', refId)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
