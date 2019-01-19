const state = {
  userG: {
    nome: null,
    email: null,
    socialToken: null
  },
  googleSignInParams: {
    client_id: '811980763298-rmicblor7hkpqiiqu7u1iq3jb8bi3dnj.apps.googleusercontent.com'
  }
}

const getters = {
  getUserG: state => state.userG
}

const actions = {
  async signSuccesG ({ commit }, googleUser) {
    const userG = {
      nome: googleUser.getBasicProfile().ig,
      email: googleUser.getBasicProfile().U3,
      socialToken: googleUser.Zi.access_token
    }
    await commit('ADD_USER_G', userG)
  }
}

const mutations = {
  ADD_USER_G (state, userG) {
    state.userG = userG
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
