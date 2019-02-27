import Vue from 'vue'
import Vuex from 'vuex'

import navBar from './navBar'
import produto from './produto'
import mesa from './mesa'
import categoria from './categoria'
import endereco from './endereco'
import meusDados from './meusDados'
import usuarios from './usuarios'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      navBar,
      produto,
      mesa,
      categoria,
      endereco,
      meusDados,
      usuarios
    }
  })

  return Store
}
