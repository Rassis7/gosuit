// const BASE_URL = ''

const state = {
  token: '',
  infoMesa: null
}

const getters = {
  getToken: state => state.token,
  getInfosMensa: state => state.infoMesa
}

const actions = {
  async autorizarMesa ({commit}, token) {
    // const res = await this.$axios.post(`${BASE_URL}/logarMesaQrCode`, {token})
    const res = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    commit('AUTORIZAR_MESA', res)
  },
  async listarInformacoesMesa ({commit}) {
    const infomacoesMesa = {
      apelido: 'MESA 1',
      status: 1
    }
    commit('ADD_INFORMACOES_DA_MESA', infomacoesMesa)
  }
}

const mutations = {
  AUTORIZAR_MESA (state, result) {
    state.token = result
  },
  ADD_INFORMACOES_DA_MESA (state, infoMesa) {
    state.infoMesa = infoMesa
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
