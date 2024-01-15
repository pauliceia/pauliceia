const state = {
    layerId: null,
    geometryType: null, // Nome mais descritivo para typeGeometry
    attributes: null, // Plural para attr
    selectedFeature: null, // Nome mais descritivo para featureSelected
    changesetId: null,
    selectedFunction: null, // Nome mais descritivo para funcSelected
    featuresWKT: null,
  };
  
  const mutations = {
    setLayerId(state, id) {
      state.layerId = id;
    },
    setGeometryType(state, type) { // Nome mais descritivo para setTypeGeometry
      state.geometryType = type;
    },
    setAttributes(state, value) { // Plural para setAttr
      state.attributes = value;
    },
    setSelectedFeature(state, value) { // Nome mais descritivo para setFeatureSelected
      state.selectedFeature = value;
    },
    setChangesetId(state, value) {
      state.changesetId = value;
    },
    setSelectedFunction(state, value) { // Nome mais descritivo para setFuncSelected
      state.selectedFunction = value;
    },
    setFeaturesWKT(state, value) {
      state.featuresWKT = value;
    },
  };
  
  const actions = {
    // Actions com lógica adicional
    async setLayerId({ commit }, id) {
      // Validar ID da camada ou realizar outras ações antes de setar o estado
      await validateLayerId(id);
      commit('setLayerId', id);
    },
    // Aqui, pode-se adicionar mais actions de forma facilitada
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };