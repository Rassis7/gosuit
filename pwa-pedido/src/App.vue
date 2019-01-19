<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>

import Vue from 'vue'
import load from './util/LoadItens'

load(Vue)

export default {
  name: 'App'
}
</script>

<style>
</style>
