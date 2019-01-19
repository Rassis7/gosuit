<template>
  <div>
    <q-layout view="hHr LpR lFf">

      <q-layout-header>
        <q-toolbar class="text-center">
          <div class="col-1">
            <q-icon name="arrow_back" size="2rem" @click.native="$router.push('/cardapio')"/>
          </div>
          <div class="col-10">
              <q-toolbar-title>ITENS DO PEDIDO</q-toolbar-title>
          </div>
        </q-toolbar>

        <q-toolbar class="text-right">
          <div class="col-6 offset-6">
            <span class="q-body-1">TOTAL</span>
            <br>
            <span class="q-title text-weight-bolder">{{valorCarrinho|formatarReal}}</span>
          </div>
        </q-toolbar>
      </q-layout-header>

      <!-- conteudo da pagina -->
      <q-page-container>
        <q-page>
          <q-list highlight v-if="cardapio.length > 0">
              <item-lista-produtos :itens-produtos="cardapio" :tela-carrinho="true" @updateViewPai='updateView'/>
          </q-list>

          <q-alert
            v-else
            color="secondary"
            icon="mood_bad">
            Nenhum item no carrinho, você deve adicionar algum item antes
          </q-alert>

        </q-page>
      </q-page-container>

      <q-layout-footer :reveal="true">
        <q-toolbar color="positive">
          <q-btn flat class="full-width" label="FINALIZAR PEDIDO" @click="openModalQrCodePai()" v-if="cardapio.length > 0"/>
          <q-btn flat class="full-width" label="FINALIZAR PEDIDO" disabled v-if="cardapio.length == 0"/>
        </q-toolbar>
      </q-layout-footer>

    </q-layout>
    <div v-if="openedPai == true">
      <modal-finalizar-pedido :opened="openedPai" :carrinho="cardapio" @resetarPropModalReaderQrCode="openedPai = false" @clearCardapio="car = []"/>
    </div>
  </div>

</template>
<script>
import itemListaProdutos from '../components/ItemListaProdutos'
import ModalFinalizarPedido from '../components/ModalFinalizarPedido'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'itensPedidoPage',
  components: {
    itemListaProdutos,
    ModalFinalizarPedido
  },
  data () {
    return {
      car: [],
      valorCarrinho: 0,
      openedPai: false
    }
  },
  computed: {
    ...mapGetters(['getItensCarrinho']),
    cardapio: {
      get: function () {
        return this.car
      },
      set: function (c) {
        this.car = c
      }
    }
  },
  methods: {
    ...mapActions(['listItensCarrinhoAction']),
    updateView: function (cardap) {
      this.$q.loading.show()
      if (cardap === null || cardap === undefined) {
        cardap = this.getItensCarrinho
      }

      let valorTotalCompra = 0

      if (cardap && cardap.length > 0) {
        cardap.map(c => {
          valorTotalCompra += parseFloat(c.valor) * parseInt(c.quantidade)
        })
      }

      this.cardapio = cardap
      this.valorCarrinho = valorTotalCompra || 0

      this.$q.loading.hide()
    },
    openModalQrCodePai () {
      this.openedPai = true
    }
  },
  mounted: function () {
    const self = this
    this.$nextTick(() => {
      this.listItensCarrinhoAction()
        .then(its => {
          return self.updateView(its)
        })
    })
  }
}
</script>

<style>
.q-item{
  margin-top: 5px
}
</style>
