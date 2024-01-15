// Nomes de propriedades: Os nomes de algumas propriedades foram alterados para serem mais descritivos, como isGeocodingEnabled em vez de boxGeocoding.
// Types: As propriedades do estado foram definidas usando anotações de tipo no JavaScript. Isso ajuda a garantir que o código seja usado corretamente e a evitar erros.


const state = {
  years: {
    first: 1868,
    last: 1940,
  },
  layers: [],
  isGeocodingEnabled: true,
  isBoxSubtitleVisible: false,
  isBoxAlertVisible: true,
  isBoxInfoLayerVisible: false,
  isBoxNotificationsVisible: false,
  isBoxInfoVectorVisible: false,
  idInfoLayer: null,
  idInfoFeatureLayer: null,
  sidebar: null,
};

const mutations = {
  setYears (state, years) {
    state.years.first = years.first;
    state.years.last = years.last;
  },
  setBoxGeocoding (state, value) {
    state.isGeocodingEnabled = value;
  },
  setBoxSubtitle (state, value) {
    state.isBoxSubtitleVisible = value;
  },
  setBoxAlert (state, value) {
    state.isBoxAlertVisible = value;
  },
  setBoxInfoLayer (state, value) {
    state.isBoxInfoLayerVisible = value;
  },
  setBoxInfoVector (state, value) {
    state.isBoxInfoVectorVisible = value;
  },
  setBoxNotifications (state, value) {
    state.isBoxNotificationsVisible = value;
  },
  setNewLayers (state, value) {
    state.layers.push(value);
  },
  setRemoveLayers (state, value) {
    state.layers.splice(state.layers.indexOf(value), 1);
  },
  setIdInfoLayer (state, value) {
    state.idInfoLayer = value;
  },
  setIdInfoFeatureLayer (state, value) {
    state.idInfoFeatureLayer = value;
  },
  setSidebar (state, value) {
    state.sidebar = value;
  },
};

const actions = {
  setYears ({commit}, years) {
    commit('setYears', years);
  },
  setBoxGeocoding({commit}, value) {
    commit('setBoxGeocoding', value);
  },
  setBoxSubtitle({commit}, value) {
    commit('setBoxSubtitle', value);
  },
  setBoxAlert({commit}, value) {
    commit('setBoxAlert', value);
  },
  setBoxInfoLayer({commit}, value) {
    commit('setBoxInfoLayer', value);
  },
  setBoxInfoVector({commit}, value) {
    commit('setBoxInfoVector', value);
  },
  setBoxNotifications({commit}, value) {
    commit('setBoxNotifications', value);
  },
  setNewLayers({commit}, value) {
    commit('setNewLayers', value);
  },
  setRemoveLayers({commit}, value) {
    commit('setRemoveLayers', value);
  },
  setIdInfoLayer ({commit}, value) {
    commit('setIdInfoLayer', value);
  },
  setIdInfoFeatureLayer ({commit}, value) {
    commit('setIdInfoFeatureLayer', value);
  },
  setSidebar ({commit}, value) {
    commit('setSidebar', value);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};