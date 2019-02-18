<template>
  <div>
    <q-fab icon="more_vert" direction="up" color="primary">

      <q-fab-action color="secondary" class="white" icon="add_box" @click="openModalCadastro">
        <q-tooltip anchor="center left" self="center right" :offset="[10, 10]">
          Cadastrar categorias
        </q-tooltip>
      </q-fab-action>

    </q-fab>
  </div>
</template>

<script>
export default {
  name: 'floatButtonCategoriaComponenet',
  methods: {
    openModalCadastro () {
      this.$emit('openModalPai')
    }
  }
}
</script>

<style scoped>

</style>
