<template>
  <q-layout class="scroll">

    <q-layout-header>
      <q-toolbar class="text-center">
            <q-toolbar-title>
              Escanear código
            </q-toolbar-title>
      </q-toolbar>

      <q-card>
        <q-card-title class="text-center">
          Aponte para o código QR e aguarde a leitura
        </q-card-title>
      </q-card>

    </q-layout-header>

    <q-page-container v-if="paused == false">
      <qr-code-reader @onDecode="onDecodePai" :pausedParam="paused"/>
    </q-page-container>

</q-layout>
</template>

<script>
import qrCodeReader from '../components/QrCodeReader'
import mixins from '../mixins'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {qrCodeReader},
  name: 'leitorQrCodePage',
  data () {
    return {
      paused: false
    }
  },
  computed: {
    ...mapGetters(['getToken'])
  },
  methods: {
    ...mapActions(['autorizarMesa']),
    onDecodePai (mesa) {
      try {
        this.paused = true

        const params = this.$q.localStorage.get.item('userData')
        params.mesa = mesa

        this.autorizarMesa(params)
          .then(() => {
            this.$q.localStorage.set('token', this.getToken)
            this.$q.localStorage.remove('userData')
            this.$router.push('/cardapio')
          })
          .catch(e => {
            this.paused = false
            mixins.response(400, 'Não foi possível autenticar essa mesa')
            // this.$q.notify({message: '', type: 'negative', icon: 'error_outline'})
          })
      } catch (error) {
        mixins.response(400, 'Não foi possível autenticar essa mesa')
        this.paused = false
      }
    }

  }
}
</script>

<style scoped>

</style>
