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

          <!--botão carrinho-->
          <button-cart v-if="showItemcarrinho"></button-cart>
        </q-page>

    </q-page-container>

  </q-layout>
</template>
<script>
import tabsComponent from '../components/Tabs'
import buttonCart from '../components/ButtonCart'
import itemListaProdutos from '../components/ItemListaProdutos'
import filtro from '../components/Filter'
import mixin from '../mixins'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    tabsComponent,
    buttonCart,
    itemListaProdutos,
    filtro
  },
  name: 'cardapioPage',
  data () {
    return {
      cardapio: {
        itens: [],
        categorias: []
      },
      infosMensa: null
    }
  },
  computed: {
    ...mapGetters([
      'getItensCardapio',
      'getExisteItemNoCarrinho',
      'getCategorias']),
    showItemcarrinho: {
      get: function () {
        return this.getExisteItemNoCarrinho
      },
      set: function (exibir) {
        return exibir
      }
    }
  },
  methods: {
    ...mapActions(['carregarCardapio']),
    ...mapMutations(['LOAD_CARRINHO']),
    mostrarBtnComponentCarrinho (exibirItem) {
      this.itemNoCarrinho = exibirItem
    },
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
        // fazer o load do carrinho
      this.LOAD_CARRINHO()
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
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.loadCardapio()
    })
  }
}
</script>
