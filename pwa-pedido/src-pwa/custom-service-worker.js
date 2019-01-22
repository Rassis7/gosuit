/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
}

document.querySelector('#show').addEventListener('click', () => {
  const iconUrl = document.querySelector('select').selectedOptions[0].value
  let imgElement = document.createElement('img')
  imgElement.src = iconUrl
  document.querySelector('#container').appendChild(imgElement)
})

// Nomes dos dois caches usados nesta versão do service worker.
// Altera para v2, etc. quando você atualizar algum dos recursos locais, o que
// por sua vez aciona o evento de instalação novamente.
const PRECACHE = 'gosuit-v1'
const RUNTIME = 'runtime'

// Uma lista de recursos locais que sempre queremos que sejam armazenados em cache.
const PRECACHE_URLS = [
  'index.html',
  './', // Alias for index.html
  '.stylintrc',
  'src/assets/*',
  'src/static/*'
]

// O evento de instalação que cuida do precaching dos recursos que sempre precisamos.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  )
})

// O evento de ativação que cuida da limpeza de caches antigos.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME]
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName))
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete)
      }))
    }).then(() => self.clients.claim())
  )
})

// O evento de busca de recursos exibe respostas para recursos de mesma origem de um cache.
// Se nenhuma resposta for encontrada, ele preencherá o cache em tempo de execução com a resposta
// da rede antes de retornar para a página.
self.addEventListener('fetch', event => {
  // Ignora solicitações de origem cruzada, como as do Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse
        }
        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Coloque uma cópia da resposta no cache em tempo de execução.
            return cache.put(event.request, response.clone()).then(() => {
              return response
            })
          })
        })
      })
    )
  }
})

// Verificar se está on ou off
// Mostrar uma notificação para isso

// componentDidMount() {
//   window.addEventListener('online', () => this.setOnlineStatus(true));
//   window.addEventListener('offline', () => this.setOnlineStatus(false));
// }
// componentWillUnmount() {
//   window.removeEventListener('online');
//   window.removeEventListener('offline');
// }
// setOnlineStatus = isOnline => this.setState({ online: isOnline })
