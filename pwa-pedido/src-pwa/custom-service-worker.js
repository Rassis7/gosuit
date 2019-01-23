/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

var CACHE_NAME = 'go-suit-cache-v1'
var urlsToCache = [
  '/',
  'index.html',
  'img/*',
  'statics/icon/*'
]

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
  )
})

/*
Se quisermos armazenar novas solicitações em cache de forma cumulativa, poderemos
fazê-lo tratando a resposta da solicitação de recuperação e adicionando-a ao cache, como mostrado a seguir.

1 Adicionar um retorno de chamada a .then() na solicitação fetch.

2 Após obter uma resposta, executar as seguintes verificações:

3 Verificar se a resposta é válida.

4 Verificar se o status da resposta é 200.

5 Verificar se o tipo de resposta é basic, o que indica que é uma solicitação de nossa origem. Isso significa
  que solicitações de ativos de terceiros não são armazenadas no cache.

6 Se todas as verificações forem bem-sucedidas, clonaremos a resposta. O motivo para isso é que, como a resposta
  é um Stream, o corpo poderá ser consumido apenas uma vez. Como queremos retornar a resposta para uso pelo navegador,
  bem como passá-la para uso pelo cache, precisamos cloná-la para podermos enviá-la ao navegador e ao cache.
*/

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone()

        return fetch(fetchRequest).then(
          function (response) {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone()

            caches.open(CACHE_NAME)
              .then(function (cache) {
                cache.put(event.request, responseToCache)
              })

            return response
          }
        )
      })
  )
})
