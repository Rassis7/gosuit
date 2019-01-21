<template>
  <div>
    <q-modal minimized v-model="openedComputed" @hide="resetarOpened()" :content-css="{minWidth: '90vw', minHeight: '20vh'}">
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-toolbar-title>
            Confirmar chamado
          </q-toolbar-title>
        </q-toolbar>

          <q-card class="text-center" v-if="opened == true">

            <q-card-main>
              <p class="q-title">Aponte para o QrCode em sua mesa</p>
              <p class="text-faded">Esse passo é necessário, para que o garçom saiba qual mesa ele deve atender</p>
              <p><qr-code-reader @onDecode="onDecodePai" :pausedParam="paused"/></p>
            </q-card-main>

          </q-card>

        <q-toolbar slot="footer" color="white">
           <q-btn class="full-width" color="primary" label="FECHAR" @click="resetarOpened()"/>
        </q-toolbar>

      </q-modal-layout>
    </q-modal>

  </div>
</template>

<script>
import qrCodeReader from './QrCodeReader'
import mixins from '../mixins'

export default {
  name: 'modalFinalizarPedidoComponent',
  components: {qrCodeReader},
  data () {
    return {
      paused: false
    }
  },
  props: {
    opened: {
      type: Boolean,
      default: true
    },
    tipoChamado: {
      type: Number,
      default: null
    }
  },
  computed: {
    openedComputed: {
      get: function () {
        return this.opened
      },
      set: function (opened) {
        return opened
      }
    }
  },
  methods: {
    resetarOpened () {
      this.$emit('resetarPropModalReaderQrCode')
    },
    onDecodePai (mesa) {
      try {
        this.paused = false

        // Se não leu por algum motivo...
        if (mesa === null || mesa === undefined) {
          throw new Error('Não foi possivel ler o QrCode')
        }

        // metodo para chamar o garçom
        // this.tipoChamado //parametro que informa se é pedido ou fechar comanda
        if (this.tipoChamado === 2) {
          // Chamo a modal de avaliação de pedidos
          this.$emit('chamarModalAvaliacao')
        }
        mixins.response(200, 'Chamado enviado com sucesso!')

        // enviar o pedido
      } catch (error) {
        mixins.response(400, error.message)
      } finally {
        this.resetarOpened()
      }
    }
  }
}
</script>

<style scoped>

</style>
