/*
  Theses states are stored when the user is creating a new layer.
  The states are saved to avoid the user lose his layer.
*/
const state = {
  name: '',
  selectedKeywords: [],
  selectedCollaborators: [],
  description: '',
  selectedReferences: [],
  // file: {
  //   name: this.$t('dashboard.newLayer.chooseFile')
  // },
}

const mutations = {
  setName (state, name) {
    state.name = name
  },
  setKeywords (state, selectedKeywords) {
    state.selectedKeywords = selectedKeywords
  },
  setReferences (state, selectedReferences) {
    state.selectedReferences = selectedReferences
  },
  setCollaborators (state, selectedCollaborators) {
    state.selectedCollaborators = selectedCollaborators
  },
  setDescription (state, description) {
    state.description = description
  },
  // setFile (state, file) {
  //   state.file = file
  // }
}

const actions = {
  setName ({commit}, name) {
    commit('setName', name)
  },
  setKeywords ({commit}, selectedKeywords) {
    commit('setKeywords', selectedKeywords)
  },
  setReferences ({commit}, selectedReferences) {
    commit('setReferences', selectedReferences)
  },
  setCollaborators ({commit}, selectedCollaborators) {
    commit('setCollaborators', selectedCollaborators)
  },
  setDescription ({commit}, description) {
    commit('setDescription', description)
  },
  // setFile ({commit}, file) {
  //   commit('setFile', file)
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
