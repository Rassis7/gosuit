<template>
  <div>
    <q-page padding>
      <div class="row gutter-md">
        <!-- CARD -->
        <cards />
      </div>
    </q-page>

     <!--Float button-->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <float-button-componenet/>
    </q-page-sticky>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import FloatButtonComponenet from '../components/Categoria/FloatButton'
import Cards from '../components/Categoria/Cards'

export default {
  name: 'categoriaPage',
  components: {FloatButtonComponenet, Cards},
  data () {
    return {}
  },
  methods: {
    ...mapMutations(['UPDATE_TITLE_NAVBAR'])
  },
  created: function () {
    this.UPDATE_TITLE_NAVBAR({title: 'Categoria', subTitle: 'Gerencie as categorias dos produtos'})
  }
}
</script>

<style scoped>

</style>
