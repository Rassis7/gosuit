import { RESETAR_STATE_PRODUTOS, SET_STATE_PRODUTO } from './mutationTypes'

const state = {
  id: null,
  nome: null,
  descricao: null,
  imagem: null,
  status: null,
  valor: null
}

const getters = {
  getProduto: state => state
}

const actions = {}

const mutations = {
  [RESETAR_STATE_PRODUTOS] (state) {
    for (const prop of Object.getOwnPropertyNames(state)) {
      state[prop] = null
    }
  },
  [SET_STATE_PRODUTO] (state, payload) {
    // Setar oq foi passao por parametro para a state
    const {id, nome, descricao, imagem, status, valor} = payload
    state.id = !isNaN(id) ? id : null
    state.valor = !isNaN(valor) ? parseFloat(valor) : null
    state.nome = nome || null
    state.descricao = descricao || null
    state.imagem = imagem || null
    state.status = status || null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
