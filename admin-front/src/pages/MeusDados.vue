<template>
  <div>
    <q-page padding>
      <div class="row">

        <div class="col-xs-12 col-lg-10 offset-lg-1">

          <div class="row gutter-md">

            <div class="col-12">
              <h2 class="text-center">Sobre o estabelecimento</h2>
            </div>

            <div class="col-xs-6">
              <q-input v-model="razaoSocial" disable="true" float-label="Razão sócial"/>
            </div>

            <div class="col-xs-6">
              <q-input v-model="cnpj" disable="true" float-label="CNPJ"/>
            </div>

            <div class="col-xs-6">
              <q-input v-model="nomeFantasia" float-label="Nome fantasia"/>
            </div>

          </div>

          <br>

          <div class="row gutter-md">

            <div class="col-12">
              <h2 class="text-center">Endereço</h2>
            </div>

            <div class="col-xs-4">
             <q-input v-model="cep" float-label="CEP"/>
            </div>

            <div class="col-xs-8">
             <q-input v-model="logradouro" float-label="Logradouro"/>
            </div>

            <div class="col-xs-6">
             <q-input v-model="uf" float-label="Estado"/>
            </div>

            <div class="col-xs-6">
             <q-input v-model="cidade" float-label="Cidade"/>
            </div>

            <div class="col-xs-6">
             <q-input v-model="Bairro" float-label="Bairro"/>
            </div>

            <div class="col-xs-3">
             <q-input type="number" v-model="numero" float-label="Número"/>
            </div>

            <div class="col-xs-3">
             <q-input v-model="complemento" float-label="Complemento"/>
            </div>

          </div>

          <br>

          <div class="row gutter-md">

            <div class="col-12">
              <h2 class="text-center">Contatos</h2>
            </div>

            <div class="col-xs-12">
             <q-input v-model="nomeContato" float-label="Nome para contato"/>
            </div>

            <div class="col-xs-6">
             <q-input v-model="email" float-label="Email"/>
            </div>

            <div class="col-xs-3">
             <q-input v-model="telefone1" float-label="Telefone"/>
            </div>

            <div class="col-xs-3">
             <q-input v-model="telefone2" float-label="Telefone"/>
            </div>
          </div>

        </div>

      </div>
    </q-page>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: 'meusDadosPage',
  methods: {
    ...mapMutations(['UPDATE_TITLE_NAVBAR'])
  },
  created: function () {
    this.UPDATE_TITLE_NAVBAR({title: 'Meus dados', subTitle: 'Gerencie seus dados, contatos e etc'})
  }
}
</script>

<style lang="scss">
.gutter-md{
  padding: 15px, 15px 15px !important;
}
</style>
