<template>
  <div class="col-md-4 dark-box">
    <q-alert
      :type="colorAlert"
      :icon="iconAlert"
      appear
      :actions="[{ label: 'Fechar', handler: () => { visibleAlert = false } }]"
      v-show="visibleAlert == true">
      {{textAlert}}
    </q-alert>

    <p class="q-display-1 text-weight-light text-white text-center titulo">
      <img src="../statics/icons/ms-icon-144x144.png" alt="logo">
    </p>

    <br>

    <q-field
      icon="mail"
      helper="Insira seu email e lhe enviarems um novo acesso"
    >
      <q-input dark color="pink-8" v-model="text" />
    </q-field>

    <br>
    <br>

    <div class="text-center">
      <q-btn
        :loading="loading"
        outline
        color="secondary"
        label="Confirmar alteração"
        size="lg"
        @click="handler"
      >
        <q-spinner-oval slot="loading" />
      </q-btn>
    </div>

    <br>

    <p class="q-title text-center titulo">
      <a href="javascript:void(0)" class="text-weight-light text-white" @click="visibleLogin">Voltar para o login</a>
    </p>

  </div>
</template>

<script>
export default {
  name: 'resgateSenhaComponent',
  data () {
    return {
      visibleAlert: false,
      colorAlert: 'secondary',
      iconAlert: 'mood',
      textAlert: 'Foi enviado um email com a nova senha',
      loading: false
    }
  },
  methods: {
    handler () {
      this.loading = true
      // we simulate a delay here:
      setTimeout(() => {
        this.loading = false
      }, 3000)
    },
    visibleLogin () {
      this.$emit('visibleLoginPai')
    }
  }
}
</script>

<style lang="scss">
@import '../css/login.scss';
</style>
