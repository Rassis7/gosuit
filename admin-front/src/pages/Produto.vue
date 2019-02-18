<template>
  <div>
    <q-page padding>
      <div class="row gutter-md">
        <!-- FILTROS -->
        <filtro />

        <!-- DATATABLE -->
        <data-table @openModalEdicaoPai="openedModalPai = true"/>
      </div>
    </q-page>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <!-- FLOAT BUTTON -->
        <float-button
          @openedModal="openedModalPai = !openedModalPai"
          @abirModalCategoriasPai="abirModalCategorias"
          />
    </q-page-sticky>

    <modal-cadastro
      :opened="openedModalPai"
      @fecharModalPai="openedModalPai = false"
    />

    <modal-categoria ref="modalCadastroCategoria" />

  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import FloatButton from '../components/Produto/FloatButton'
import ModalCadastro from '../components/Produto/ModalCadastro'
import Filtro from '../components/Produto/Filtro'
import DataTable from '../components/Produto/DataTable'
import ModalCategoria from '../components/Categoria/ModalCadastro'

export default {
  name: 'ProdutoPage',
  components: {FloatButton, ModalCadastro, Filtro, DataTable, ModalCategoria},
  data () {
    return {
      openedModalPai: false
    }
  },
  methods: {
    ...mapMutations(['UPDATE_TITLE_NAVBAR']),
    abirModalCategorias () {
      this.$refs.modalCadastroCategoria.openModal()
    }
  },
  created: function () {
    this.UPDATE_TITLE_NAVBAR({title: 'Produto', subTitle: 'Gerencie os produtos do seu estabelecimento'})
  }
}
</script>

<style scoped>

</style>
