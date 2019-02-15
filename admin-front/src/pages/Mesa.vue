<template>
  <div>

    <q-page padding>
      <div class="row gutter-md">
        <!-- FILTROS -->
        <filtros-component/>
        <!-- DATATABLE -->
        <data-table-component @openModalEdicaoPai="openModalEdicao(1)"/>
      </div>
    </q-page>

    <!--Float button-->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <float-button-component
        @openModalCadastroPai="openModalEdicao(1)"
        @openModalCadastroMassaPai="openModalEdicao(2)"
      />
    </q-page-sticky>

    <modal-cadastro-component
      :opened="openedModalCadastroPai"
      @fecharModalPai="closeModal(1)"
    />

    <modal-cadastro-lote-component
      :opened="openedModalCadastroMassaPai"
      @fecharModalPai="closeModal(2)"
    />

  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import FloatButtonComponent from '../components/Mesa/FloatButton'
import DataTableComponent from '../components/Mesa/DataTable'
import ModalCadastroComponent from '../components/Mesa/ModalCadastro'
import ModalCadastroLoteComponent from '../components/Mesa/ModalCadastroLote'
import FiltrosComponent from '../components/Mesa/Filtros'

export default {
  name: 'MesaPage',
  components: {
    FloatButtonComponent,
    DataTableComponent,
    ModalCadastroComponent,
    ModalCadastroLoteComponent,
    FiltrosComponent
  },
  data () {
    return {
      openedModalCadastroPai: false,
      openedModalCadastroMassaPai: false
    }
  },
  methods: {
    ...mapMutations(['SET_STATE_MESA', 'RESETAR_STATE_MESA', 'UPDATE_TITLE_NAVBAR']),
    openModalEdicao (modal) {
      if (modal === 1) {
        this.openedModalCadastroPai = true
      } else {
        this.openedModalCadastroMassaPai = true
      }
    },
    closeModal (modal) {
      this.RESETAR_STATE_MESA()
      if (modal === 1) {
        this.openedModalCadastroPai = false
      } else {
        this.openedModalCadastroMassaPai = false
      }
    }
  },
  created: function () {
    this.UPDATE_TITLE_NAVBAR({title: 'Mesa', subTitle: 'Gerencie as mesas do seu estabelecimento'})
  }
}
</script>

<style scoped>

</style>
