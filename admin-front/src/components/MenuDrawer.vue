<template>
  <div>
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>
          <img src="../assets/quasar-logo-full.svg" alt="logo">
        </q-list-header>

        <q-item @click.native="$router.push('/mesa')">
          <q-item-side icon="developer_board" />
          <q-item-main label="Mesas" sublabel="Cadastro, edição e listagem" />
        </q-item>
      </q-list>
  </div>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MenuDrawerComponent',
  methods: {
    openURL
  }
}
</script>

<style scoped>
</style>
