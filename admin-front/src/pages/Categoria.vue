<template>
  <div>
    <q-page padding>
      <div class="row gutter-md">
        <!-- CARD -->
        <cards @openModalCadastroPai="openModalCadastro"/>
      </div>
    </q-page>

     <!--Float button-->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <float-button-componenet @openModalPai="openModalCadastro"/>
    </q-page-sticky>

    <modal-cadastro ref="modalCadastroCategoria"/>

  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import FloatButtonComponenet from '../components/Categoria/FloatButton'
import Cards from '../components/Categoria/Cards'
import ModalCadastro from '../components/Categoria/ModalCadastro'

export default {
  name: 'categoriaPage',
  components: {FloatButtonComponenet, Cards, ModalCadastro},
  data () {
    return {}
  },
  methods: {
    ...mapMutations(['UPDATE_TITLE_NAVBAR']),
    openModalCadastro () {
      this.$refs.modalCadastroCategoria.openModal()
    }
  },
  created: function () {
    this.UPDATE_TITLE_NAVBAR({title: 'Categoria', subTitle: 'Gerencie as categorias dos produtos'})
  }
}
</script>

<style scoped>

</style>
