const state = {
    layerId: null,
    typeGeometry: null,
    attr: null
}

const mutations = {
    setLayerId (state, id) {
        state.layerId = id
    },
    setTypeGeometry (state, type) {
        state.typeGeometry = type
    },
    setAttr (state, value) {
        state.attr = value
    }
}

const actions = {
    setLayerId ({commit}, id) {
        commit('setLayerId', id)
    },
    setTypeGeometry ({commit}, type) {
        commit('setTypeGeometry', type)
    },
    setAttr ({commit}, value) {
        commit('setAttr', value)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
