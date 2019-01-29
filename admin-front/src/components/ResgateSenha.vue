<template>
  <div>

    <q-alert
      :type="colorAlert"
      :icon="iconAlert"
      appear
      :actions="[{ label: 'Fechar', handler: () => { visibleAlert = false } }]"
      v-show="visibleAlert == true">
      {{textAlert}}
    </q-alert>

    <p class="q-display-1 text-weight-light text-white text-center titulo">
      <strong>Alterar senha</strong>
    </p>

    <br>

    <q-field
      icon="mail"
      helper="Insira seu email"
    >
      <q-input dark color="pink-8" v-model="text" />
    </q-field>

    <br>
    <br>

    <div class="text-center">
      <q-btn
        :loading="loading"
        color="pink-8"
        label="Confirmar alteração"
        @click="handler"
      >
        <q-spinner-oval slot="loading" />
      </q-btn>
    </div>

    <br>

    <p class="q-title text-center titulo">
      <a href="javascript:void(0)" class="text-weight-light text-white" @click="visibleLogin">Voltar para login</a>
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

<style scoped>
.titulo {
  margin-top: 40px;
  margin-bottom: 40px;
}
.titulo a {
  text-decoration:none
}
</style>
