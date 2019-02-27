<template>
  <div>
    <base-modal :opened="opened">
      <section slot="header">Cadastro em lote de mesas</section>

      <section slot="body">
        <div class="form row gutter-md">
          <div class="col-6">
            <q-input v-model="praca" float-label="Qual a praça da mesa?"/>
          </div>

          <div class="col-6">
            <q-input v-model="quantidadeCriadas" float-label="Deseja criar quantas mesas em lote?" type="number"/>
          </div>
        </div>
      </section>

      <section slot="footer">
        <div class="col-12 text-right">
          <q-btn color="faded" label="Fechar" class="q-mr-sm" @click="fecharModal"/>
          <q-btn color="primary" label="Salvar" class="q-mr-sm"/>
        </div>
      </section>
    </base-modal>

  </div>
</template>

<script>
import BaseModal from '../BaseModal.vue'

export default {
  name: 'ModalCadastroLoteComponent',
  // extends: BaseModal,
  components: {BaseModal},
  data () {
    return {
      praca: null,
      quantidadeCriadas: null
    }
  },
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    fecharModal () {
      this.$emit('fecharModalPai')
    }
  }
}
</script>

<style scoped>

</style>
