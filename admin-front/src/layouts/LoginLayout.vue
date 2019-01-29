<template>
  <q-layout view="lHh Lpr lFf">
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
body {
  background-image: url("../assets/login.png");
  background-repeat: no-repeat, repeat;
}
</style>
