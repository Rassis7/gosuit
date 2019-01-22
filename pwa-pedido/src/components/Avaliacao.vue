<template>
  <div>
    <q-modal minimized v-model="openedAvaliacaoComputed" @hide="resetarOpenedAvaliacao" :content-css="{minWidth: '90vw', minHeight: '20vh'}">
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-toolbar-title>
            Deixe sua avaliação
          </q-toolbar-title>
        </q-toolbar>

          <q-card class="text-center" v-if="opened == true">

            <q-card-main>

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
          <q-btn
            class="full-width"
            color="positive"
            label="AVALIAR"
            @click="avaliar"
          />
        </q-toolbar>

      </q-modal-layout>
    </q-modal>

  </div>
</template>

<script>
import {mapActions} from 'vuex'
import mixin from '../mixins'

export default {
  name: 'avaliadorComponent',
  props: ['opened'],
  data () {
    return {
      atendimento: 0,
      appUtil: 0,
      sugestao: null
    }
  },
  computed: {
    openedAvaliacaoComputed: {
      get: function () {
        return this.opened
      },
      set: function (opened) {
        return this.opened
      }
    }
  },
  methods: {
    ...mapActions(['enviarAvaliacao']),
    resetarOpenedAvaliacao () {
      this.$emit('resetarPropModalAvaliacao')
    },
    avaliar () {
      const self = this

      const params = {
        'atendimento': self.atendimento,
        'util': self.appUtil,
        'sugestao': self.sugestao
      }

      // enviar
      self.enviarAvaliacao(params)
        .then(() => {
          mixin.response(200, 'Obrigado por nos avaliar')
        })
        .catch(e => {
          console.error(e)
          mixin.response(500, 'Opss... houve um erro ao fazer a avaliação')
        })
        .finally(function () {
          self.$emit('resetarPropModalAvaliacao')
        })
    }
  }
}
</script>

<style scoped>

</style>
