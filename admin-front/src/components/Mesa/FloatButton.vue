<template>
  <div>
    <q-fab icon="more_vert" direction="up" color="primary">

      <q-fab-action color="secondary" class="white" icon="add_box" @click="openModalCadastro">
        <q-tooltip anchor="center left" self="center right" :offset="[10, 10]">
          Cadastrar mesa por mesa
        </q-tooltip>
      </q-fab-action>

      <q-fab-action color="secondary" class="white" icon="add_to_photos" @click="openModalCadastroMassa">
        <q-tooltip anchor="center left" self="center right" :offset="[10, 10]">
          Cadastrar mesas em lote
        </q-tooltip>
      </q-fab-action>

      </q-fab>
  </div>
</template>

<script>
export default {
  name: 'FloatButtonMesaComponent',
  methods: {
    openModalCadastro () {
      this.$emit('openModalCadastroPai')
    },
    openModalCadastroMassa () {
      this.$emit('openModalCadastroMassaPai')
    }
  }
}
</script>

<style scoped>

</style>
