<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue'
import filter from './util/filters'
import directives from './util/directives'
import VueTheMask from 'vue-the-mask'

Vue.use(VueTheMask)

filter(Vue)
directives(Vue)

export default {
  name: 'App'
}
</script>

<style>
</style>
