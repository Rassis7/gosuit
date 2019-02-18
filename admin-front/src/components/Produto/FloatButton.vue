<template>
  <div>
    <q-fab icon="more_vert" direction="up" color="primary">

      <q-fab-action color="secondary" class="white" icon="add_box" @click="abirModalCadastro">
        <q-tooltip anchor="center left" self="center right" :offset="[10, 10]">
          Cadastrar produtos
        </q-tooltip>
      </q-fab-action>

      <q-fab-action color="secondary" class="white" icon="ballot" @click="abirModalCategorias">
        <q-tooltip anchor="center left" self="center right" :offset="[10, 10]">
          Cadastrar categoria
        </q-tooltip>
      </q-fab-action>

      </q-fab>
  </div>
</template>

<script>
export default {
  name: 'FloatButtonProdutoComponent',
  methods: {
    abirModalCadastro () {
      this.$emit('openedModal')
    },
    abirModalCategorias () {
      this.$emit('abirModalCategoriasPai')
    }
  }
}
</script>

<style scoped>

</style>
