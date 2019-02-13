<template>
  <div>
    <q-page padding>
      <div class="row gutter-md">
        <!-- FILTROS -->
        <filtro />

        <!-- DATATABLE -->
        <data-table @openModalEdicaoPai="toogleModal"/>
      </div>
    </q-page>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <!-- FLOAT BUTTON -->
        <float-button @openedModal="openedModalPai = !openedModalPai"/>
    </q-page-sticky>

    <modal-cadastro
      :opened="openedModalPai"
      @fecharModalPai="toogleModal"
      :params="paramsModalCadastro"
      />

  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import FloatButton from '../components/Produto/FloatButton'
import ModalCadastro from '../components/Produto/ModalCadastro'
import Filtro from '../components/Produto/Filtro'
import DataTable from '../components/Produto/DataTable'

export default {
  name: 'ProdutoPage',
  components: {FloatButton, ModalCadastro, Filtro, DataTable},
  data () {
    return {
      openedModalPai: false,
      paramsModalCadastro: null
    }
  },
  methods: {
    ...mapMutations(['UPDATE_TITLE_NAVBAR']),
    toogleModal (params) {
      this.paramsModalCadastro = (params === null || params === undefined) ? null : params
      this.openedModalPai = !(params === null || params === undefined)
    }
  },
  created: function () {
    this.UPDATE_TITLE_NAVBAR({title: 'Produto', subTitle: 'Gerencie os produtos do seu estabelecimento'})
  }
}
</script>

<style scoped>

</style>
