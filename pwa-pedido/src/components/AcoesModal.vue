<template>
  <div>
    <q-action-sheet
    v-model="actionSheet"
    title="Ações"
    @hide="onHide"
    :actions="[
      {
        label: 'Infomações sobre o local',
        icon: 'info',
        color: 'blue',
        handler: infosLocal
      },
      {
        label: 'Avaliar',
        icon: 'star',
        color: 'warning',
        handler: infosLocal
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
    infosLocal () {
      //
    }
  }
}
</script>

<style scoped>

</style>
