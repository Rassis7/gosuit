
import { LocalStorage } from 'quasar'

const state = {
  existeItensNoCarrinho: false,
  itensCarrinho: []
}

const getters = {
  getExisteItemNoCarrinho: state => state.existeItensNoCarrinho,
  getItensCarrinho: state => state.itensCarrinho
}

const actions = {
  async addItemCarrinhoAction ({ commit }, pedido) {
    var carrinho = LocalStorage.get.item('carrinho')

    if (carrinho === null || carrinho === undefined) {
      carrinho = Array(pedido)
    } else {
      // 1 -> se não existir já um item no carrinho tenho que adc nele
      // 2 -> se existir e a descrição for diferente, então não adc apenas, será outro item
      let itemExistenteCarrinho = carrinho.map(c => {
        if (pedido !== null && c.id === pedido.id && c.observacao === pedido.observacao) {
          c.quantidade += pedido.quantidade
          pedido = null
        }
        return c
      })

      if (pedido !== null) {
        itemExistenteCarrinho.push(pedido)
      }

      carrinho = itemExistenteCarrinho
    }

    await commit('CREATE_ITEM_CARRINHO', carrinho)
  },
  async removerItemAction ({commit}, produto) {
    var carrinho = LocalStorage.get.item('carrinho')

    carrinho.map((m, i) => {
      if (m.id === produto.id) {
        delete carrinho[i]
      }
    })
    await commit('UPDATE_ITEM_CARRINHO', carrinho)
  },
  listItensCarrinhoAction ({commit}) {
    return LocalStorage.get.item('carrinho')
  },
  limparCarrinho ({commit}) {
    this.itensCarrinho = []
    this.existeItensNoCarrinho = false
    return LocalStorage.remove('carrinho')
  }
}

const mutations = {
  CREATE_ITEM_CARRINHO (state, itens) {
    state.existeItensNoCarrinho = true

    state.itensCarrinho = itens
    LocalStorage.set('carrinho', state.itensCarrinho)
  },
  UPDATE_ITEM_CARRINHO (state, itens) {
    state.itensCarrinho = itens.filter(e => e.id !== undefined)
    LocalStorage.set('carrinho', state.itensCarrinho)
  },
  LOAD_CARRINHO (state) {
    const carrinho = LocalStorage.get.item('carrinho')
    if (carrinho !== undefined && carrinho !== null && carrinho.length > 0) {
      state.existeItensNoCarrinho = true
      state.itensCarrinho = carrinho
    } else {
      state.existeItensNoCarrinho = false
      state.itensCarrinho = []
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
