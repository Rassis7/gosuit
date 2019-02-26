<template>
  <div>
    <q-page padding>
      <div class="row">

        <div class="col-xs-9 offset-xs-1 col-lg-10 offset-lg-1">

          <div class="row gutter-md">

            <div class="col-12">
              <h3 class="text-center">Sobre o estabelecimento</h3>
            </div>

            <div class="col-xs-12 col-sm-6">
              <q-input v-model="meusDadosComputed.razaoSocial" :disable="true" float-label="Razão sócial"/>
            </div>

            <div class="col-xs-12 col-sm-6">
              <q-input v-model="meusDadosComputed.cnpj" :disable="true" float-label="CNPJ" v-mask="'##.###.###/####-##'"/>
            </div>

            <div class="col-xs-12 col-sm-6">
              <q-input v-model="meusDadosComputed.nomeFantasia" float-label="Nome fantasia"/>
            </div>

          </div>

          <br>

          <div class="row gutter-md">

            <div class="col-12">
              <h3 class="text-center">Endereço</h3>
            </div>

            <div class="col-xs-12 col-sm-4">
             <q-input
                v-model="dadosEnderecoComputed.cep"
                float-label="CEP"
                @keyup="buscarCep(dadosEnderecoComputed.cep)"
                v-mask="'#####-###'"
              />
            </div>

            <div class="col-xs-12 col-sm-8">
             <q-input v-model="dadosEnderecoComputed.logradouro" float-label="Logradouro"/>
            </div>

            <div class="col-xs-12 col-sm-6">
             <q-select
                v-model="dadosEnderecoComputed.uf"
                float-label="Estado"
                radio
                :options="getUfList"
              />
            </div>

            <div class="col-xs-12 col-sm-6">
             <q-input v-model="dadosEnderecoComputed.cidade" float-label="Cidade"/>
            </div>

            <div class="col-xs-12 col-sm-">
             <q-input v-model="dadosEnderecoComputed.bairro" float-label="Bairro"/>
            </div>

            <div class="col-xs-6 col-sm-3">
             <q-input type="number" v-model="dadosEnderecoComputed.numero" float-label="Número"/>
            </div>

            <div class="col-xs-6 col-sm-">
             <q-input v-model="dadosEnderecoComputed.complemento" float-label="Complemento"/>
            </div>

          </div>

          <br>

          <div class="row gutter-md">

            <div class="col-12">
              <h3 class="text-center">Contatos</h3>
            </div>

            <div class="col-xs-12">
             <q-input v-model="meusDadosComputed.nomeContato" float-label="Nome para contato"/>
            </div>

            <div class="col-xs-12 col-sm-6">
             <q-input v-model="meusDadosComputed.email" float-label="Email"/>
            </div>

            <div class="col-xs-6 col-sm-3">
             <q-input v-model="meusDadosComputed.telefone1" float-label="Telefone 1" v-mask="['(##) #####-####', '(##) ####-####']"/>
            </div>

            <div class="col-xs-6 col-sm-3">
             <q-input v-model="meusDadosComputed.telefone2" float-label="Telefone 2" v-mask="['(##) #####-####', '(##) ####-####']"/>
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
import {mapMutations, mapGetters, mapActions} from 'vuex'
import FloatButtonComponent from '../components/MeusDados/FloatButton'
import UploaderComponent from '../components/Uploader'

export default {
  name: 'meusDadosPage',
  components: {FloatButtonComponent, UploaderComponent},
  computed: {
    ...mapGetters(['getUfList', 'getMeusDados', 'getDadosEndereco']),
    meusDadosComputed: {
      get: function () {
        return this.getMeusDados
      },
      set: function (getMeusDados) {
        return this.getMeusDados
      }
    },
    dadosCepComputed: function () {
      return this.getDadosCEP
    },
    dadosEnderecoComputed: {
      get: function () {
        return this.getDadosEndereco
      },
      set: function (getDadosEndereco) {
        return this.getDadosEndereco
      }
    }
  },
  methods: {
    ...mapMutations(['UPDATE_TITLE_NAVBAR']),
    ...mapActions(['buscarEnderecoCepAction']),
    buscarCep: function (cep) {
      const self = this

      if (/^[0-9]{5}-[0-9]{3}$/.test(cep)) {
        // CHAMAR A BUSCA DO CEP
        self.buscarEnderecoCepAction(cep)
          .catch(er => {
            return true
          })
      }
    }
  },
  created: function () {
    this.UPDATE_TITLE_NAVBAR({title: 'Meus dados', subTitle: 'Gerencie seus dados, contatos e etc'})
  }
}
</script>

<style lang="scss">
.footer{
  margin-bottom: 100px;
}
</style>
