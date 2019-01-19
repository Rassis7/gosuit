import axios from '../util/HttpAxios'

const BASE_URL = ''

const state = {
  itensComanda: []
}

const getters = {
  getItensComanda: state => state.itensComanda
}

const actions = {
  async listarItensComanda ({commit}) {
    const itens = await axios.get(`${BASE_URL}/listarPedidos`)
    commit('ADD_ITENS_COMANDA', itens.data)
  },
  async finalizarPedido ({commit}, params) {
    return axios.post(`${BASE_URL}/finalizarPedido`)
  }
}

const mutations = {
  ADD_ITENS_COMANDA (state, itens) {
    state.itensComanda = itens
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
