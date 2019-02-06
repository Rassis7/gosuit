<template>
  <div>
    <q-page padding>
      <div class="row gutter-md">
        <!-- FILTROS -->
        <filtro />
      </div>
    </q-page>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <!-- FLOAT BUTTON -->
        <float-button @openedModal="openedModalPai = !openedModalPai"/>
    </q-page-sticky>

    <modal-cadastro :opened="openedModalPai" @fecharModalPai="openedModalPai = false"/>

  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import FloatButton from '../components/Produto/FloatButton'
import ModalCadastro from '../components/Produto/ModalCadastro'
import Filtro from '../components/Produto/Filtro'

export default {
  name: 'ProdutoPage',
  components: {FloatButton, ModalCadastro, Filtro},
  data () {
    return {
      openedModalPai: false
    }
  },
  methods: {
    ...mapMutations(['UPDATE_TITLE_NAVBAR'])
  },
  created: function () {
    this.UPDATE_TITLE_NAVBAR({title: 'Produto', subTitle: 'Gerencie os produtos do seu estabelecimento'})
  }
}
</script>

<style scoped>

</style>
