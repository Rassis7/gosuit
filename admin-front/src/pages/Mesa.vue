<template>
  <div>
    <q-page padding>
      <div class="row gutter-sm">
        <!-- DATATABLE -->
        <div class="col-10 offset-1">
          <data-table-component/>
        </div>
      </div>
    </q-page>

    <!--Float button-->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <float-button-component
        @openModalCadastroPai="openedModalCadastroPai = !openedModalCadastroPai"
        @openModalCadastroMassaPai="openedModalCadastroMassaPai = !openedModalCadastroMassaPai"
      />
    </q-page-sticky>

    <modal-cadastro-component :opened="openedModalCadastroPai" @fecharModalPai="openedModalCadastroPai = false"/>
    <modal-cadastro-lote-component :opened="openedModalCadastroMassaPai" @fecharModalPai="openedModalCadastroMassaPai = false"/>

  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import FloatButtonComponent from '../components/Mesa/FloatButton'
import DataTableComponent from '../components/Mesa/DataTable'
import ModalCadastroComponent from '../components/Mesa/ModalCadastro'
import ModalCadastroLoteComponent from '../components/Mesa/ModalCadastroLote'

export default {
  name: 'MesaPage',
  components: {
    FloatButtonComponent,
    DataTableComponent,
    ModalCadastroComponent,
    ModalCadastroLoteComponent
  },
  data () {
    return {
      openedModalCadastroPai: false,
      openedModalCadastroMassaPai: false
    }
  },
  methods: {
    ...mapMutations(['UPDATE_TITLE_NAVBAR'])
  },
  created: function () {
    this.UPDATE_TITLE_NAVBAR({title: 'Mesa', subTitle: 'Gerencie as mesas do seu estabelecimento'})
  }
}
</script>

<style scoped>

</style>
