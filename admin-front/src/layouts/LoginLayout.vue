<template>
  <q-layout view="lHh Lpr lFf" class="layout-login">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LoginLayout',
  data () {
    return {}
  }
}
</script>

<style>
.layout-login {
  background-image: url("../assets/login.png");
  background-repeat: no-repeat, repeat;
}
</style>
