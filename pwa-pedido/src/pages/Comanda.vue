<template>
  <q-layout view="hHr LpR lFf">

    <q-layout-header>
      <tabs-component></tabs-component>
    </q-layout-header>

    <q-page-container>
      <q-page>
        <item-comanda :produtos-comanda="comanda"></item-comanda>
      </q-page>
    </q-page-container>

    <q-layout-footer :reveal="true">
      <q-toolbar>
          <div class="col-6 text-center">TOTAL CONSUMIDO</div>
          <div class="col-6 text-center text-bold">{{totalComanda | formatarReal}}</div>
      </q-toolbar>

      <q-toolbar color="positive">
        <q-btn flat class="full-width" label="FECHAR COMANDA" @click="openedPai = true"/>
      </q-toolbar>
    </q-layout-footer>

    <modal-fechar-comanda :opened="openedPai" :valor="totalComanda"/>

  </q-layout>
</template>

<script>
import tabsComponent from '../components/Tabs'
import buttonCart from '../components/ButtonCart'
import itemComanda from '../components/ItemComanda'
import modalFecharComanda from '../components/ModalFecharComanda'
import {mapActions, mapGetters} from 'vuex'
import mixins from '../mixins/index'

export default {
  components: {tabsComponent, buttonCart, itemComanda, modalFecharComanda},
  name: 'comandaPage',
  data () {
    return {
      comanda: [],
      totalComanda: 0,
      openedPai: false
    }
  },
  computed: {
    ...mapGetters(['getItensComanda'])
  },
  methods: {
    ...mapActions(['listarItensComanda']),
    resetarPropModalFecharComanda () {
      this.openedPai = false
    }
  },
  mounted () {
    const self = this
    self.$q.loading.show()

    self.$nextTick(function () {
      self.listarItensComanda()
        .then(() => {
          self.comanda = self.getItensComanda
          // ordenar pelo id
          self.comanda.sort((a, b) => {
            return a.id > b.id
          })

          // listar o total da comanda
          self.comanda.map(cm => {
            self.totalComanda += parseInt(cm.quantidade) * parseFloat(cm.valor)
          })
        })
        .catch(e => {
          console.error(e)
          mixins.response(400, 'Erro ao listar os itens da comanda')
        })
        .finally(() => {
          self.$q.loading.hide()
        })
    })
  }
}
</script>
