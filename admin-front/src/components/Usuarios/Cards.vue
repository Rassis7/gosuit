<template>
  <div>
    <div v-if="usuarios.length == 0">
      <q-alert
        class="full-width"
        color="orange"
        icon="warning"
        message="OPSSS...Nenhum usuário cadastrado para esse grupo!"
        />
    </div>
      <q-card v-for="u in usuarios" :key="u.id" inline class="text-center q-ma-sm">
          <q-card-title>
            {{u.nome | capitalize}}
          </q-card-title>

          <q-card-separator />

          <q-card-actions>
            <q-btn flat color="warning" label="editar" class="q-mr-sm" @click="editar(u)"/>
            <q-btn flat color="primary" label="remover" class="q-mr-sm" @click="remover(u)"/>
          </q-card-actions>
        </q-card>
  </div>
</template>

<script>

export default {
  name: 'cardsUsuariosComponent',
  props: {
    usuarios: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss">
@import '../../css/vars';

.q-card {
  background-color: $branco;
}
</style>
