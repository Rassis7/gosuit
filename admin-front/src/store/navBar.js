const state = {
  title: 'HOME',
  subTitle: null
}

const getters = {
  getDescricaoNavBar: state => state
}

const actions = {}

const mutations = {
  UPDATE_TITLE_NAVBAR (state, payload) {
    debugger
    state.title = payload.title || null
    state.subTitle = payload.subTitle || null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
