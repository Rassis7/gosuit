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

            <div class="col-xs-12 col-sm-6">
              <q-input v-model="produtoComputed.nome" float-label="Qual o nome do produto?" :max-height="80"/>
            </div>

            <div class="col-xs-12 col-sm-6">
              <q-input v-money="produtoComputed.valor" v-model="produtoComputed.valor" float-label="Valor do produto"/>
            </div>

            <div class="col-12">
              <q-input
                v-model="produtoComputed.descricao"
                type="textarea"
                float-label="Qual a descrição do produto?"
                :max-height="255"
                rows="2"
              />
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
import { maskMoney } from '../../util/constants'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ModalCadastroComponent',
  extends: BaseModal,
  data () {
    return {
      money: maskMoney
    }
  },
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['getProduto']),
    openedComputed: {
      get: function () {
        return this.opened
      },
      set: function (opend) {
        return this.opend
      }
    },
    produtoComputed: function () {
      return this.getProduto
    }
  },
  methods: {
    ...mapMutations(['RESETAR_STATE_PRODUTOS']),
    fecharModal () {
      this.RESETAR_STATE_PRODUTOS()
      this.$emit('fecharModalPai')
    }
  }
}
</script>

<style scoped>

</style>
