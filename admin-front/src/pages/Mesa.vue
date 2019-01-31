<template>
  <div class="row gutter-sm">
    <!-- DATATABLE -->
    <div class="col-10 offset-1">
      <data-table-component/>
    </div>

    <!--Float button-->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <float-button-component/>
    </q-page-sticky>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import FloatButtonComponent from '../components/Mesa/FloatButton'
import DataTableComponent from '../components/Mesa/DataTable'

export default {
  name: 'MesaPage',
  components: {
    FloatButtonComponent,
    DataTableComponent
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
