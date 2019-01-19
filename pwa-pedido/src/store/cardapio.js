import axios from '../util/HttpAxios'

const BASE_URL = ''

const state = {
  itens: [],
  categorias: []
}

const getters = {
  getItensCardapio: state => state.itens,
  getCategorias: state => state.categorias
}

const actions = {
  async carregarCardapio ({commit}) {
    const res = await axios.get(`${BASE_URL}/carregarCardapio`)
    commit('CREATE_ITENS_CARDAPIO', res.data)
    commit('CREATE_ITENS_CATEGORIA', res.data)
  }
}

const mutations = {
  async CREATE_ITENS_CARDAPIO (state, res) {
    let itens = []

    await res.categorias.map(e => {
      // pegar os itens e filtrar pela categoria igual a atual
      let itemFiltradoPorCategoria = res.itensCardapio.filter(f => {
        return parseInt(f.categoria) === parseInt(e.id)
      })

      itens.push({
        'categoriaId': e.id,
        'categoria': e.nome,
        'produtos': itemFiltradoPorCategoria
      })
    })

    // irei enviar as categorias separadamente, por causa do filtro
    state.itens = itens
  },
  async CREATE_ITENS_CATEGORIA (state, res) {
    // Adicionar elementos a categoria
    const categoriaFormatada = res.categorias.map(cat => {
      cat.outline = true
      return cat
    })

    state.categorias = categoriaFormatada
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
