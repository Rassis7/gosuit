<template>
  <div>
      <q-list
        no-border
        link
        inset-delimiter
      >

        <q-list-header>
          <img src="../assets/gosuit-logo-menu.svg" alt="logo">
        </q-list-header>

        <q-list-header>Gerenciar</q-list-header>

        <q-item @click.native="$router.push('/mesa')">
          <q-item-side icon="developer_board" />
          <q-item-main label="Mesas" sublabel="Cadastro, edição e listagem" />
        </q-item>

        <q-item @click.native="$router.push('/produto')">
          <q-item-side icon="fastfood"/>
          <q-item-main label="Produtos" sublabel="Cadastro, edição, listagem de produtos e cadastro de categorias" />
        </q-item>

        <q-item @click.native="$router.push('/categoria')">
          <q-item-side icon="ballot"/>
          <q-item-main label="Categorias" sublabel="Cadastro, edição, listagem de dos produtos" />
        </q-item>

        <q-item-separator inset />

        <q-list-header>Administratar</q-list-header>

        <q-item @click.native="$router.push('/meusDados')">
          <q-item-side icon="home"/>
          <q-item-main label="Meus dados" sublabel="Ediçåo dos dados pessoais, como Nome fantasia, Contato e etc" />
        </q-item>

        <q-item @click.native="$router.push('/categoria')">
          <q-item-side icon="supervised_user_circle"/>
          <q-item-main label="Usuários" sublabel="Editar/criar usuários, definir permissões e grupos" />
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
