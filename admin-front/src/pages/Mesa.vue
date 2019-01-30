<template>
  <div>

  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: 'MesaPage',
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
