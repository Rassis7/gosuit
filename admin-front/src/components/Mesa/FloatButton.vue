<template>
  <div>
    <q-fab icon="more_vert" direction="up" color="primary">

      <q-fab-action color="secondary" class="white" icon="add_box">
        <q-tooltip anchor="center left" self="center right" :offset="[10, 10]">
          Cadastrar mesa por mesa
        </q-tooltip>
      </q-fab-action>

      <q-fab-action color="secondary" class="white" icon="add_to_photos">
        <q-tooltip anchor="center left" self="center right" :offset="[10, 10]">
          Cadastrar mesas em lote
        </q-tooltip>
      </q-fab-action>

      </q-fab>
  </div>
</template>

<script>
export default {
  name: 'FloatButtonMesaComponent'
}
</script>

<style scoped>

</style>
