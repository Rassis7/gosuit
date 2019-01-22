import Vue from 'vue'
import Vuex from 'vuex'

import mesa from './mesa'
import facebook from './facebook'
import google from './google'
import usuario from './usuario'
import cardapio from './cardapio'
import carrinho from './carrinho'
import comanda from './comanda'
import pedido from './pedido'
import avaliacao from './avaliacao'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      mesa,
      facebook,
      google,
      usuario,
      carrinho,
      comanda,
      avaliacao,
      pedido,
      cardapio
    }
  })

  return Store
}
