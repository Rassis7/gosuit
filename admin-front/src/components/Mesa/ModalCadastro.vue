<template>
  <div>
    <q-modal v-model="opendComputed" :content-css="{minWidth: '50vw', minHeight: '30vh'}">
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-toolbar-title>
            Cadastro de mesa
          </q-toolbar-title>
        </q-toolbar>

        <div class="modal-body">

          <div class="form row gutter-md">
            <div class="col-4">
              <q-input v-model="praca" float-label="Qual a praça da mesa?"/>
            </div>

            <div class="col-4">
              <q-input v-model="identificacao" float-label="Nome/Número da mesa"/>
            </div>

            <div class="col-4">
              <q-input v-model="qtdCadeiras" float-label="Qual a quantidade de cadeiras?"/>
            </div>
          </div>

        </div>

        <q-toolbar slot="footer" color="white">
            <q-btn color="faded" label="Fechar" class="float-right on-right" @click="resetarModal"/>
            <q-btn color="primary" label="Salvar" class="float-right"/>
        </q-toolbar>

      </q-modal-layout>
    </q-modal>
  </div>
</template>

<script>
import BaseModal from '../BaseModal'

export default {
  name: 'ModalCadastroMesaComponenet',
  extends: BaseModal,
  data () {
    return {
      praca: null,
      identificacao: null,
      qtdCadeiras: null
    }
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
