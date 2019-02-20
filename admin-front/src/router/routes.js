
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/mesa', component: () => import('pages/Mesa.vue') },
      { path: '/produto', component: () => import('pages/Produto.vue') },
      { path: '/categoria', component: () => import('pages/Categoria.vue') },
      { path: '/meusDados', component: () => import('pages/MeusDados.vue') }
    ]
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
