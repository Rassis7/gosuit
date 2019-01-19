<template>
  <div>
    <q-action-sheet
    v-model="actionSheet"
    title="Ações"
    @hide="onHide"
    :actions="[
      {
        label: 'Trocar de mesa',
        icon: 'cached',
        color: 'blue',
        handler: trocarMesa
      },
      {},
      {
        label: 'Sair',
        icon: 'exit_to_app',
        color: 'red',
        handler: logout
      },
    ]"/>
  </div>
</template>

<script>

export default {
  props: {
    toggleActionModal: {
      type: Boolean,
      default: false
    }
  },
  name: 'AcoesModalComponent',
  data () {
    return {
      openLeituraQrCode: false
    }
  },
  computed: {
    actionSheet: {
      get: function () {
        return this.toggleActionModal
      },
      set: function (opened) {
        return opened
      }
    }
  },
  methods: {
    onHide () {
      this.$emit('resetarPropAcoesModalFechar')
    },
    logout () {
      this.$router.push('/')
    },
    trocarMesa () {
      this.openLeituraQrCode = true
    }
  }
}
</script>

<style scoped>

</style>
