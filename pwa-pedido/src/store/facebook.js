const state = {
  userFB: {
    nome: null,
    email: null,
    socialToken: null
  }
}

const getters = {
  getUserFB: state => state.userFB
}

const actions = {
  async signSuccesFB ({ commit }, response) {
    var user = { socialToken: response.authResponse.accessToken }
    /* eslint-disable */
    const fb = new Promise(function (resolve, reject) {
      FB.api('/me', { fields: 'name, email' }, dude => {

        user.nome = dude.name
        user.email = dude.email
        resolve(user)
      })
    })
    /* eslint-enable */

    await fb.then(user => {
      commit('ADD_USER_FB', user)
    })
  }
}

const mutations = {
  ADD_USER_FB (state, result) {
    state.userFB = result
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
