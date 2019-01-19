<template>
  <div>
    <q-modal minimized v-model="openedComputed" @hide="resetarOpenedAvaliacao()" :content-css="{minWidth: '90vw', minHeight: '20vh'}">
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-toolbar-title>
            Avalie-nos
          </q-toolbar-title>
        </q-toolbar>

          <q-card class="text-center" v-if="opened == true">

            <q-card-main>
              <p class="q-title">A sua avaliação é extremamente importante para sempre oferecermos um melhor atendimento!</p>

              <q-field class="q-subheading" label="Qual foi a qualidade do atendimento?">
                <q-rating size="2rem" v-model="atendimento" :max="5" color="warning"/>
              </q-field>

              <br>
              <br>

              <q-field class="q-subheading" label="O quão útil o GoSuit foi para você?">
                <q-rating size="2rem" v-model="appUtil" :max="5" color="warning"/>
              </q-field>

              <br>
              <br>

              <q-input
              rows="2"
              placeholder="Deixe alguma sugestão de melhoria para o GoSuit!"
              type="textarea"
              v-model="sugestao"
              :clearable="true"
              :upper-case="true"
              max-length="100"
              />
            </q-card-main>

          </q-card>

        <q-toolbar slot="footer" color="white">
          <q-btn class="full-width" color="positive" label="AVALIAR"/>
        </q-toolbar>

      </q-modal-layout>
    </q-modal>

  </div>
</template>

<script>
export default {
  name: 'avaliadorComponent',
  props: ['opened'],
  data () {
    return {
      atendimento: 5,
      appUtil: 5,
      sugestao: null
    }
  },
  computed: {
    openedComputed: {
      get: function () {
        return this.opened
      },
      set: function (opened) {
        return this.opened
      }
    }
  },
  methods: {
    resetarOpenedAvaliacao () {
      this.$emit('resetarPropModalAvaliacao')
    }
  }
}
</script>

<style scoped>

</style>
