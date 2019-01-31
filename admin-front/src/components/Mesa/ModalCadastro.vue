<template>
  <div>
  <q-modal v-model="opendComputed">
    <div class="modal-body">
      <h4>Basic Modal</h4>
      <q-btn
        color="primary"
        @click="resetarModal"
        label="Close"
      />
    </div>
  </q-modal>
  </div>
</template>

<script>
import BaseModal from '../BaseModal'

export default {
  name: 'ModalCadastroMesaComponenet',
  extends: BaseModal,
  data () {
    return {}
  },
  methods: {
    resetarModal () {
      this.$emit('fecharModalPai')
    }
  }
}
</script>

<style lang="scss">

</style>
