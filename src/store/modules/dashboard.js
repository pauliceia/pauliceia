// Importações
import { defineStore } from 'vuex';

// Estado inicial
const state = {
  myLayers: [],
  sharedLayers: [],
};

// Mutações
const mutations = {
  // Atualiza as camadas pessoais
  setPersonalLayers(state, layers) {
    state.myLayers = layers;
  },
  // Atualiza as camadas compartilhadas
  setSharedLayers(state, layers) {
    state.sharedLayers = layers;
  },
};

// Actions
const actions = {
  // Busca as camadas pessoais
  async fetchPersonalLayers({ commit }) {
    try {
      const response = await Api.get('/api/personal-layers');
      commit('setPersonalLayers', response.data);
    } catch (error) {
      console.error('Erro ao buscar camadas pessoais:', error);
    }
  },
  // Busca as camadas compartilhadas
  async fetchSharedLayers({ commit }) {
    try {
      const response = await Api.get('/api/shared-layers');
      commit('setSharedLayers', response.data);
    } catch (error) {
      console.error('Erro ao buscar camadas compartilhadas:', error);
    }
  },
};

// Exportação do store
export default defineStore('layers', {
  state,
  mutations,
  actions,
});