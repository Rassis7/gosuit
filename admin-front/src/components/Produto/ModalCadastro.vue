<template>
  <div>
    <q-modal v-model="opendComputed" :content-css="{minWidth: '50vw', minHeight: '30vh'}" @hide="fecharModal">
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-toolbar-title>
            Cadastro de produtos
          </q-toolbar-title>
        </q-toolbar>

        <div class="modal-body">

          <div class="form row gutter-md">
          </div>

        </div>

        <q-toolbar slot="footer" color="white">
            <div class="col-12 text-right">
              <q-btn color="faded" label="Fechar" class="q-mr-sm" @click="fecharModal"/>
              <q-btn color="primary" label="Salvar" class="q-mr-sm"/>
            </div>
        </q-toolbar>

      </q-modal-layout>
    </q-modal>
  </div>
</template>

<script>
import BaseModal from '../BaseModal'

export default {
  name: 'ModalCadastroComponent',
  extends: BaseModal,
  data () {
    return {}
  },
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    openedComputed: {
      get: function () {
        return this.opened
      },
      set: function (opend) {
        return this.opend
      }
    }
  },
  methods: {
    fecharModal () {
      this.$emit('fecharModalPai')
    }
  }
}
</script>

<style scoped>

</style>
