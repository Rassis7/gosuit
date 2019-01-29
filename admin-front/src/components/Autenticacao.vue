<template>
  <div>
    <p class="q-display-1 text-weight-light text-white text-center titulo">
      <strong>Faça seu login</strong>
    </p>

    <q-field
      icon="mail"
      helper="Insira seu email"
    >
      <q-input dark color="pink-8" v-model="text" />
    </q-field>

    <br>

    <q-field
      icon="lock"
      helper="Insira a senha"
    >
      <q-input dark color="pink-8" type="password" v-model="text" />
    </q-field>

    <br>

    <div class="text-center">
      <q-btn
        :loading="loading"
        color="pink-9"
        label="Acessar"
        @click="handler"
      >
        <q-spinner-oval slot="loading" />
      </q-btn>
    </div>

    <br>

    <p class="q-body-1 text-center titulo">
      <a href="javascript:void(0)" class="text-weight-light text-white" @click="visibleLogin">Esqueci minha senha</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'autenticacaoComponent',
  data () {
    return {
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
