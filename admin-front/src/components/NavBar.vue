<template>
  <div>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="toggle"
        aria-label="Menu"
      >
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
          {{getDescricaoNavBar.title}}
          <div v-if="getDescricaoNavBar.subTitle" slot="subtitle">{{getDescricaoNavBar.subTitle}}</div>
        </q-toolbar-title>
    </q-toolbar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'NavBarComponent',
  props: ['descricao'],
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['getDescricaoNavBar'])
  },
  methods: {
    toggle () {
      this.$emit('toogleMenuPai')
    }
  }
}
</script>

<style lang="scss">
</style>
