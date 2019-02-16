import { RESETAR_STATE_CATEGORIA, SET_STATE_CATEGORIA } from './mutationTypes'

const state = {
  id: null,
  nome: null,
  status: null
}

const getters = {
  getCategoria: state => state
}

const actions = {}

const mutations = {
  [RESETAR_STATE_CATEGORIA] (state) {
    for (const prop of Object.getOwnPropertyNames(state)) {
      state[prop] = null
    }
  },
  [SET_STATE_CATEGORIA] (state, payload) {
    // Setar oq foi passado por parametro para a state
    const { id, nome, status } = payload
    state.id = !isNaN(id) ? id : null
    state.status = status || null
    state.nome = nome || null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
