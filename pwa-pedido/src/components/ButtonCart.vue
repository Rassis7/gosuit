<template>
  <q-btn round color="primary" class="fixed" icon="shopping_cart" size="20px"
  style="right: 25px; bottom: 25px" @click="$router.push('itensPedido')"/>
</template>

<script>

export default {
  name: 'buttonCartComponent',
  data () {
    return {}
  }
}
</script>
