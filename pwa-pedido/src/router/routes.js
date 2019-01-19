import {LocalStorage} from 'quasar'

const existeLead = function (to, from, next) {
  const ls = LocalStorage.get.item('userData')
  if (ls === undefined || ls === null) {
    return next({ path: '/login' })
  } else {
    const { nome, email, socialToken } = ls
    return (nome !== undefined && email !== undefined && socialToken !== undefined) ? next() : next({ path: '/login' })
  }
}

const existeToken = function (to, from, next) {
  const token = LocalStorage.get.item('token')
  return (token) ? next() : next({ path: '/' })
}

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue')
  },
  {
    path: '/lerQrCode',
    component: () => import('pages/LeitorQrCode.vue'),
    beforeEnter: existeLead
  },
  {
    path: '/cardapio',
    component: () => import('pages/Cardapio.vue'),
    beforeEnter: existeToken
  },
  {
    path: '/comanda',
    component: () => import('pages/Comanda.vue'),
    beforeEnter: existeToken
  },
  {
    path: '/itensPedido',
    component: () => import('pages/ItensPedido.vue'),
    beforeEnter: existeToken
  },
  {
    path: '/pedidoFinalizado',
    component: () => import('pages/PedidoFinalizado.vue'),
    beforeEnter: existeToken
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
