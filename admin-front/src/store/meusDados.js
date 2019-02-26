import { RESETAR_STATE_MEUS_DADOS, SET_STATE_MEUS_DADOS } from './mutationTypes'

const state = {
  id: null,
  razaoSocial: null,
  cnpj: null,
  nomeFantasia: null,
  nomeContato: null,
  email: null,
  telefone1: null,
  telefone2: null,
  imagem: null
}

const getters = {
  getMeusDados: state => state
}

const actions = {}

const mutations = {
  [RESETAR_STATE_MEUS_DADOS] (state) {
    for (const prop of Object.getOwnPropertyNames(state)) {
      state[prop] = null
    }
  },
  [SET_STATE_MEUS_DADOS] (state, payload) {
    // Setar oq foi passado por parametro para a state
    const {
      id,
      razaoSocial,
      cnpj,
      nomeFantasia,
      cep,
      logradouro,
      uf,
      cidade,
      bairro,
      numero,
      complemento,
      nomeContato,
      email,
      telefone1,
      telefone2,
      imagem
    } = payload

    state.id = !isNaN(id) ? id : null

    state.razaoSocial = razaoSocial || null
    state.cnpj = cnpj || null
    state.nomeFantasia = nomeFantasia || null
    state.cep = cep || null
    state.logradouro = logradouro || null
    state.cidade = cidade || null
    state.bairro = bairro || null
    state.uf = uf || null
    state.numero = numero || null
    state.complemento = complemento || null
    state.nomeContato = nomeContato || null
    state.email = email || null
    state.telefone1 = telefone1 || null
    state.telefone2 = telefone2 || null
    state.imagem = imagem || null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
