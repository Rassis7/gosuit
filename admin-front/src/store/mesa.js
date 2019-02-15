import { RESETAR_STATE_MESA, SET_STATE_MESA } from './mutationTypes'

const state = {
  id: null,
  uuid: null,
  apelido: null,
  status: null,
  quantidadeLugares: null,
  praca: null
}

const getters = {
  getMesa: state => state
}

const actions = {}

const mutations = {
  [RESETAR_STATE_MESA] (state) {
    for (const prop of Object.getOwnPropertyNames(state)) {
      state[prop] = null
    }
  },
  [SET_STATE_MESA] (state, payload) {
    // Setar oq foi passado por parametro para a state
    const { id, uuid, apelido, status, quantidadeLugares, praca } = payload
    state.id = !isNaN(id) ? id : null
    state.uuid = uuid || null
    state.apelido = apelido || null
    state.quantidadeLugares = quantidadeLugares || null
    state.status = status || null
    state.praca = praca || null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
