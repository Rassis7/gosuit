<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <nav-bar @toogleMenuPai="leftDrawerOpenPai = !leftDrawerOpenPai"/>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpenPai"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <menu-drawer/>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import MenuDrawer from '../components/MenuDrawer'
import NavBar from '../components/NavBar'

export default {
  name: 'AdminLayout',
  components: {MenuDrawer, NavBar},
  data () {
    return {
      leftDrawerOpenPai: this.$q.platform.is.desktop
    }
  }
}
</script>

<style>
</style>
