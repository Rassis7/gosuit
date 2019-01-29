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
          Quasar App
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
    </q-toolbar>
  </div>
</template>

<script>
export default {
  name: 'NavBarComponent',
  data () {
    return {}
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
