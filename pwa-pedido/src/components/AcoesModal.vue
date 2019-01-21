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
        handler: avaliacaoModal
      },
      {},
      {
        label: 'Sair',
        icon: 'exit_to_app',
        color: 'red',
        handler: logout
      },
    ]"/>

    <avaliacao-component :opened="openedAvaliacaoPai" @resetarPropModalAvaliacao="openedAvaliacaoPai = false"/>
  </div>
</template>

<script>
import avaliacaoComponent from './Avaliacao'

export default {
  name: 'acoesModalComponent',
  components: {avaliacaoComponent},
  data () {
    return {
      openedAvaliacaoPai: false
    }
  },
  props: {
    toggleActionModal: {
      type: Boolean,
      default: false
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
    },
    avaliacaoModal () {
      this.openedAvaliacaoPai = true
    }
  }
}
</script>

<style scoped>

</style>
