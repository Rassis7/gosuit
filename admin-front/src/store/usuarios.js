import { RESETAR_STATE_USUARIO, SET_STATE_USUARIO } from './mutationTypes'

const state = {
  administradores: [],
  atendentes: [],
  caixas: []
}

const getters = {
  getUsuariosAdministradores: state => state.administradores,
  getUsuariosAtendentes: state => state.atendentes,
  getUsuariosCaixas: state => state.caixas
}

const actions = {
  async loadUsuariosAction ({commit}) {
    let params = [{
      id: 1,
      nome: 'ROMULO',
      usuarioLogado: true,
      grupo: 'administradores'
    },
    {
      id: 4,
      nome: 'ZE',
      usuarioLogado: false,
      grupo: 'caixas'
    },
    {
      id: 2,
      nome: 'joao',
      usuarioLogado: false,
      grupo: 'caixas'
    },
    {
      id: 3,
      nome: 'noralvino',
      usuarioLogado: false,
      grupo: 'atendentes'
    }]

    commit('SET_STATE_USUARIO', params)
  }
}

const mutations = {
  [RESETAR_STATE_USUARIO] (state) {
    for (const prop of Object.getOwnPropertyNames(state)) {
      state[prop] = null
    }
  },
  [SET_STATE_USUARIO] (state, payload) {
    // Setar oq foi passao por parametro para a state
    payload.map(itm => {
      const { id, nome, grupo, usuarioLogado } = itm

      state[grupo].push({
        id: !isNaN(id) ? id : null,
        nome: nome || null,
        usuarioLogado: usuarioLogado || null
      })
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
