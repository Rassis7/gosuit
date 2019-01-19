<template>
  <div>
    <q-modal minimized v-model="openedComputed" @hide="resetarOpened()" :content-css="{minWidth: '90vw', minHeight: '20vh'}" :no-backdrop-dismiss="true">
      <q-modal-layout>
        <q-toolbar slot="header" v-if="statusEnvioPedido === 1">
          <q-toolbar-title>
            Confirmar envio do pedido
          </q-toolbar-title>
        </q-toolbar>

        <div v-if="statusEnvioPedido == 1">
          <q-card class="text-center">
            <q-card-main>
              <p class="q-title">Aponte para o QrCode em sua mesa</p>
              <p class="text-faded">Esse passo é necessário, para que o estabelecimento saiba em qual mesa o pedido o pedido deve ser entregue</p>
              <p><qr-code-reader @onDecode="onDecodePai" :pausedParam="paused"/></p>
            </q-card-main>
          </q-card>
        </div>

        <q-card v-if="statusEnvioPedido !== 1" class="text-center">
          <q-card-main v-if="statusEnvioPedido === 2">
            <p class="q-title">O pedido está sendo enviado</p>
            <p class="text-faded">Aguarde até a confimação de sucesso</p>
            <p><q-spinner-dots color="primary" :size="60" /></p>
          </q-card-main>

            <q-card-main v-if="statusEnvioPedido === 3">
              <p class="q-title">Pedido enviado com sucesso</p>
              <p class="text-faded">Agora é só aguardar o preparo e a entrega!</p>
              <p><img src="~/assets/sad.svg" alt=""></p>
          </q-card-main>
        </q-card>

        <q-toolbar slot="footer" color="white" v-if="mostrarBtnFechar">
           <q-btn v-if="statusEnvioPedido == 1" class="full-width" color="primary" label="FECHAR" @click="resetarOpened()"/>
           <q-btn v-if="statusEnvioPedido === 3" class="full-width" color="primary" label="VOLTAR PARA O CARDAPIO" @click="$router.push('/cardapio')"/>
        </q-toolbar>

      </q-modal-layout>
    </q-modal>
  </div>
</template>

<script>
import qrCodeReader from './QrCodeReader'
import mixins from '../mixins'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'modalFinalizarPedidoComponent',
  components: {qrCodeReader},
  props: {
    opened: {
      type: Boolean,
      default: true
    },
    carrinho: {
      type: Array
    }
  },
  data () {
    return {
      paused: false,
      statusEnvioPedido: 1, // 1 => tem que ler o qrcode, 2 => esta enviando o pedido, 3 => enviou o pedido
      mostrarBtnFechar: true
    }
  },
  computed: {
    ...mapGetters(['getPedidoConcluido']),
    openedComputed: {
      get: function () {
        return this.opened
      },
      set: function (opened) {
        return opened
      }
    },
    carrinhoComputed: function () {
      return this.carrinho
    }
  },
  methods: {
    ...mapActions(['enviarPedido', 'limparCarrinho']),
    resetarOpened () {
      this.$emit('resetarPropModalReaderQrCode')
    },
    onDecodePai (mesa) {
      try {
        this.mostrarBtnFechar = false
        this.statusEnvioPedido = 2

        // Se não leu por algum motivo...
        if (mesa === null || mesa === undefined) {
          throw new Error('Não foi possivel ler o QrCode')
        }

        this.enviarPedido({mesa, itens: this.carrinhoComputed})
          .then(() => {
            if (this.getPedidoConcluido === true) {
              this.statusEnvioPedido = 3
              this.limparCarrinho()
              this.$emit('clearCardapio')
            } else {
              throw new Error('Houve um erro enviar o pedido, por favor, tente novamente')
            }
          })
          .catch(error => {
            this.statusEnvioPedido = 1
            this.resetarOpened()
            mixins.response(400, error.message)
          })

        // enviar o pedido
      } catch (error) {
        this.statusEnvioPedido = 1
        this.resetarOpened()
        mixins.response(400, error.message)
      } finally {
        this.mostrarBtnFechar = true
      }
    }
  }
}
</script>

<style scoped>

</style>
