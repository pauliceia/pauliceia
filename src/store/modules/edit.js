const state = {
    layerId: null,
    typeGeometry: null,
    attr: null,
    featureSelected: null,
    changesetId: null,
    funcSelected: null,
    featuresWKT: null
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
    },
    setFeatureSelected (state, value) {
        state.featureSelected = value
    },
    setChangesetId (state, value) {
        state.changesetId = value
    },
    setFuncSelected (state, value) {
        state.funcSelected = value
    },
    setFeaturesWKT (state, value) {
        state.featuresWKT = value
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
    },
    setFeatureSelected ({commit}, value) {
        commit('setFeatureSelected', value)
    },
    setChangesetId ({commit}, value) {
        commit('setChangesetId', value)
    },
    setFuncSelected ({commit}, value) {
        commit('setFuncSelected', value)
    },
    setFeaturesWKT ({commit}, value) {
        commit('setFeaturesWKT', value)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
