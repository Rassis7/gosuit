<template>
  <div>
    <q-page padding>
      <div class="row">

        <div class="col-xs-12 col-lg-10 offset-lg-1">

          <div class="row gutter-md">

            <div class="col-12">
              <h3 class="text-center">Sobre o estabelecimento</h3>
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
              <h3 class="text-center">Endereço</h3>
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
              <h3 class="text-center">Contatos</h3>
            </div>

            <div class="col-xs-12">
             <q-input v-model="nomeContato" float-label="Nome para contato"/>
            </div>

            <div class="col-xs-6">
             <q-input v-model="email" float-label="Email"/>
            </div>

            <div class="col-xs-3">
             <q-input v-model="telefone1" float-label="Telefone 1"/>
            </div>

            <div class="col-xs-3">
             <q-input v-model="telefone2" float-label="Telefone 2"/>
            </div>
          </div>

          <div class="row gutter-md">

            <div class="col-12">
              <h3 class="text-center">Logo</h3>
            </div>

            <div class="col-12 footer">
             <uploader-component/>
            </div>

          </div>
        </div>

      </div>
    </q-page>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <float-button-component/>
    </q-page-sticky>

  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import FloatButtonComponent from '../components/MeusDados/FloatButton'
import UploaderComponent from '../components/Uploader'

export default {
  name: 'meusDadosPage',
  components: {FloatButtonComponent, UploaderComponent},
  methods: {
    ...mapMutations(['UPDATE_TITLE_NAVBAR'])
  },
  created: function () {
    this.UPDATE_TITLE_NAVBAR({title: 'Meus dados', subTitle: 'Gerencie seus dados, contatos e etc'})
  }
}
</script>

<style lang="scss">
.footer{
  margin-bottom: 50px;
}
</style>
