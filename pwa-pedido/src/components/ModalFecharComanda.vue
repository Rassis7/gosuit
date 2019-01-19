<template>
  <div>
    <q-modal minimized v-model="openedComputed" @hide="resetarOpened()" :content-css="{minWidth: '90vw', minHeight: '20vh'}" :no-backdrop-dismiss="true">
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-toolbar-title class="text-center">
            Fechar comanda
          </q-toolbar-title>
        </q-toolbar>

        <div class="layout-padding text-center">
          <div class="row gutter-sm">

            <div class="col-12">
              <div class="q-title">Deseja adicionar uma taxa de 10% pelo nosso atendimento?</div>
            </div>

            <div class="col-12">
              <q-toggle v-model="addDezPorcento" :label="(addDezPorcento == true)? 'SIM' : 'NÃO'"/>
            </div>
          </div>
        </div>

        <div class="layout-padding text-center">
          <div class="col-6 text-center">TOTAL A PAGAR</div>
          <div class="col-6 text-center text-bold"><h3>{{ (addDezPorcento == true) ? valorComputed + (valorComputed * 0.1) : valorComputed | formatarReal }}</h3></div>
        </div>

        <q-toolbar color="positive" slot="footer">
          <q-btn flat class="full-width" label="CONFIRMAR" @click="confimarFechamentoComanda(addDezPorcento, valor)"/>
        </q-toolbar>

      </q-modal-layout>
    </q-modal>
  </div>
</template>

<script>
export default {
  name: 'ModalFecharComanda',
  data () {
    return {
      addDezPorcento: true
    }
  },
  props: {
    opened: {
      type: Boolean,
      default: true
    },
    valor: {
      type: Number,
      default: 0
    }
  },
  computed: {
    openedComputed: {
      get: function () {
        return this.opened
      },
      set: function (opened) {
        return opened
      }
    },
    valorComputed: function () {
      return this.valor
    }
  },
  methods: {
    resetarOpened () {
      this.$emit('resetarPropModalFecharComanda')
    },
    confimarFechamentoComanda (addDezPorcento, valor) {
      // chamar vuex
    }
  }
}
</script>

<style scoped>

</style>
