import { SET_ENDERECO_BUSCADO_POR_CEP, RESETAR_STATE_ENDERECO } from './mutationTypes'
import axios from 'axios'

const state = {
  ufList: [
    { label: 'Acre', value: 'AC' },
    { label: 'Alagoas', value: 'AL' },
    { label: 'Amapá', value: 'AP' },
    { label: 'Amazonas', value: 'AM' },
    { label: 'Bahia', value: 'BA' },
    { label: 'Ceará', value: 'CE' },
    { label: 'Distrito Federal', value: 'DF' },
    { label: 'Espírito Santo', value: 'ES' },
    { label: 'Goiás', value: 'GO' },
    { label: 'Maranhão', value: 'MA' },
    { label: 'Mato Grosso', value: 'MT' },
    { label: 'Mato Grosso do Sul', value: 'MS' },
    { label: 'Minas Gerais', value: 'MG' },
    { label: 'Pará', value: 'PA' },
    { label: 'Paraíba', value: 'PB' },
    { label: 'Paraná', value: 'PR' },
    { label: 'Pernambuco', value: 'PE' },
    { label: 'Piauí', value: 'PI' },
    { label: 'Rio de Janeiro', value: 'RJ' },
    { label: 'Rio Grande do Norte', value: 'RN' },
    { label: 'Rio Grande do Sul', value: 'RS' },
    { label: 'Rondônia', value: 'RO' },
    { label: 'Roraima', value: 'RR' },
    { label: 'Santa Catarina', value: 'SC' },
    { label: 'São Paulo', value: 'SP' },
    { label: 'Sergipe', value: 'SE' },
    { label: 'Tocantins', value: 'TO' }
  ],
  dadosEndereco: {
    logradouro: null,
    uf: null,
    cidade: null,
    cep: null,
    bairro: null,
    numero: null,
    complemento: null
  }
}

const getters = {
  getDadosEndereco: state => state.dadosEndereco,
  getUfList: state => state.ufList
}

const actions = {
  async buscarEnderecoCepAction ({commit}, cep) {
    await axios.get(`http://viacep.com.br/ws/${cep}/json/`)
      .then(e => commit('SET_ENDERECO_BUSCADO_POR_CEP', e.data))
      .catch(e => console.error(e))
  }
}

const mutations = {
  [RESETAR_STATE_ENDERECO] (state) {
    for (const prop of Object.getOwnPropertyNames(state)) {
      state[prop] = null
    }
  },
  [SET_ENDERECO_BUSCADO_POR_CEP] (state, dados) {
    let { logradouro, uf, localidade, bairro, cep } = dados

    if (logradouro) {
      state.dadosEndereco.logradouro = logradouro
    }

    if (uf) {
      state.dadosEndereco.uf = uf
    }

    if (localidade) {
      state.dadosEndereco.cidade = localidade
    }

    if (bairro) {
      state.dadosEndereco.bairro = bairro
    }

    if (cep) {
      state.dadosEndereco.cep = cep
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
