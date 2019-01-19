// const BASE_URL = ''

const state = {
  pedidoConcluido: false
}

const getters = {
  getPedidoConcluido: state => state.pedidoConcluido
}

const actions = {
  async enviarPedido ({ commit }, params) {
    const res = true
    commit('SET_PEDIDO_CONCLUIDO', res)
  }
}

const mutations = {
  SET_PEDIDO_CONCLUIDO (state, res) {
    state.pedidoConcluido = res
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
