const state = {
  leadSalvo: false
}

const getters = {
  getLeadSalvo: state => state.leadSalvo
}

const actions = {
  async setLeadAPi ({commit}, payload) {
    const result = true
    commit('ADD_LEAD_SALVO', result)
  }
}

const mutations = {
  ADD_LEAD_SALVO (state, res) {
    this.leadSalvo = res
  },
  SAVE_TOKEN_USUARIO (state, googleUser) {
    //
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
