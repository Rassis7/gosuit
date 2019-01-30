<template>
  <q-layout view="hHr LpR lFf">

    <q-layout-header>
      <tabs-component></tabs-component>
    </q-layout-header>

    <q-page-container>
        <q-page>

          <!--filtro-->
          <filtro :itens-categoria="cardapio.categorias" @filtrarListaItensPai="filtrarListaItens"></filtro>

          <!-- Puxar e atualizar -->
          <q-pull-to-refresh
           pull-message="Puxe e solte para atualizar"
           release-message="Solte para atualizar"
           refresh-message="Carregando..."
           color="secondary"
           :handler="refresher">

            <!--lista-->
            <q-list highlight v-for="(item, index) in cardapio.itens" v-bind:key="index">
              <q-list-header>{{item.categoria | uppercase}}</q-list-header>
                <item-lista-produtos :itens-produtos="item.produtos"></item-lista-produtos>
            </q-list>

          </q-pull-to-refresh>

          <q-layout-footer :reveal="true" class="text-center">
            <div class="row">
              <q-toolbar color="positive" class="col-6">
                <q-btn flat label="CHAMAR GARÇOM" @click="chamarGarcom(1)"/>
            </q-toolbar>

            <q-toolbar color="faded" class="col-6">
              <q-btn flat label="FECHAR COMANDA" @click="chamarGarcom(2)"/>
            </q-toolbar>
            </div>
          </q-layout-footer>

        </q-page>

    </q-page-container>

    <modal-finalizar-pedido
      v-if="openedPai === true"
      :opened="openedPai"
      :tipoChamado="tipoChamadoPai"
      @resetarPropModalReaderQrCode="openedPai = false, tipoChamado = null"
      @chamarModalAvaliacao="abrirAvaliacao"
    />

    <avaliacao-component
      v-if="openedAvaliacaoPai == true"
      :opened="openedAvaliacaoPai"
      @resetarPropModalAvaliacao="openedAvaliacaoPai = false"
    />

  </q-layout>
</template>
<script>
import tabsComponent from '../components/Tabs'
import modalFinalizarPedido from '../components/ModalFinalizarPedido'
import itemListaProdutos from '../components/ItemListaProdutos'
import avaliacaoComponent from '../components/Avaliacao'
import filtro from '../components/Filter'
import mixin from '../mixins'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    tabsComponent,
    itemListaProdutos,
    filtro,
    modalFinalizarPedido,
    avaliacaoComponent
  },
  name: 'cardapioPage',
  data () {
    return {
      cardapio: {
        itens: [],
        categorias: []
      },
      infosMensa: null,
      openedPai: false,
      tipoChamadoPai: null,
      openedAvaliacaoPai: false
    }
  },
  computed: {
    ...mapGetters(['getItensCardapio', 'getCategorias'])
  },
  methods: {
    ...mapActions(['carregarCardapio']),
    filtrarListaItens (params) {
      try {
        this.$q.loading.show()

        if (params.categorias.length > 0) {
          let itens = this.getItensCardapio

          let itensFiltrados = []
          params.categorias.map(pr => {
            itensFiltrados.push(itens.filter(e => pr.id === e.categoriaId)[0])
          })
          this.cardapio.itens = itensFiltrados
        } else {
          this.cardapio.itens = this.getItensCardapio
        }
      } catch (error) {
        console.error(error)
        mixin.response(500, 'Erro ao filtrar o cardápio')
      } finally {
        this.$q.loading.hide()
      }
    },
    loadCardapio () {
      const self = this
      self.$q.loading.show()

      self.carregarCardapio()
        .then(() => {
          self.cardapio = {
            itens: self.getItensCardapio,
            categorias: self.getCategorias
          }
          self.$q.loading.hide()
        })
        .catch(e => {
          self.$q.loading.hide()
          mixin.response(500, 'Erro ao listar o cardápio')
        })
    },
    refresher (done) {
      const load = new Promise((resolve, reject) => {
        try {
          return resolve(this.loadCardapio())
        } catch (error) {
          reject(error)
        }
      })

      load
        .then(() => {
          done()
        })
        .catch(e => {
          console.error(e)
          done()
        })
    },
    chamarGarcom (tpChamado) {
      this.openedPai = true
      this.tipoChamadoPai = tpChamado
    },
    abrirAvaliacao () {
      this.openedAvaliacaoPai = true
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.loadCardapio()
    })
  }
}
</script>
