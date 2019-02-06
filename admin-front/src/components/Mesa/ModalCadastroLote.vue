<template>
  <div>
    <q-modal v-model="opendComputed" :content-css="{minWidth: '50vw', minHeight: '30vh'}" @hide="fecharModal">
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-toolbar-title>
            Cadastro em lote de mesas
          </q-toolbar-title>
        </q-toolbar>

        <div class="modal-body">

          <div class="form row gutter-md">
            <div class="col-6">
              <q-input v-model="praca" float-label="Qual a praça da mesa?"/>
            </div>

            <div class="col-6">
              <q-input v-model="quantidadeCriadas" float-label="Deseja criar quantas mesas em lote?" type="number"/>
            </div>
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
import BaseModal from '../BaseModal.vue'

export default {
  name: 'ModalCadastroLoteComponent',
  extends: BaseModal,
  data () {
    return {
      praca: null,
      quantidadeCriadas: null
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
