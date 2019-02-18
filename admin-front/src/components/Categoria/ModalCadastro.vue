<template>
  <div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'modalCadastroCategoriaComponent',
  computed: {
    ...mapGetters(['getCategoria'])
  },
  methods: {
    ...mapMutations(['RESETAR_STATE_CATEGORIA']),
    openModal () {
      this.$q.dialog({
        title: 'Cadastro/edição',
        message: 'Insira o nome da catergoria que deseja cadastrar',
        prompt: {
          model: this.getCategoria.nome,
          type: 'text' // optional
        },
        color: 'primary',
        ok: 'Salvar',
        cancel: 'Cancelar'
      }).then(nome => {
        let categoria = this.getCategoria
        categoria.nome = nome

        // chama um vuex de cadastro passando a categoria
        this.RESETAR_STATE_CATEGORIA()
      }).catch(() => {
        this.RESETAR_STATE_CATEGORIA()
      })
    }
  }
}
</script>

<style scoped>

</style>
