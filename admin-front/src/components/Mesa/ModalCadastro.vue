<template>
  <div>
    <q-modal v-model="opendComputed" :content-css="{minWidth: '50vw', minHeight: '30vh'}" @hide="fecharModal">
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-toolbar-title>
            Cadastro de mesa
          </q-toolbar-title>
        </q-toolbar>

        <div class="modal-body">

          <div class="form row gutter-md">
            <div class="col-4">
              <q-input v-model="mesaComputed.praca" :max-height="45" float-label="Qual a praça da mesa?"/>
            </div>

            <div class="col-4">
              <q-input v-model="mesaComputed.apelido" float-label="Nome/Número da mesa"/>
            </div>

            <div class="col-4">
              <q-input v-model="mesaComputed.quantidadeLugares" float-label="Qual a quantidade de cadeiras?"/>
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
import BaseModal from '../BaseModal'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ModalCadastroMesaComponenet',
  extends: BaseModal,
  data () {
    return {
      acao: 'Cadastro',
      stateParams: {
        id: null,
        praca: null,
        numero: null,
        lugares: null
      }
    }
  },
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['getMesa']),
    openedComputed: {
      get: function () {
        return this.opened
      },
      set: function (opened) {
        return this.opened
      }
    },
    mesaComputed: function () {
      return this.getMesa
    }
  },
  methods: {
    ...mapMutations(['RESETAR_STATE_MESA']),
    fecharModal () {
      this.RESETAR_STATE_MESA()
      this.$emit('fecharModalPai')
    }
  }
}
</script>
