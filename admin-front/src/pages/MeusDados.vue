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
              <q-input v-model="meusDadosComputed.cnpj" :disable="true" float-label="CNPJ"/>
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
             <q-input v-model="meusDadosComputed.cep" float-label="CEP" @keyup="buscarCep"/>
            </div>

            <div class="col-xs-12 col-sm-8">
             <q-input v-model="meusDadosComputed.logradouro" float-label="Logradouro"/>
            </div>

            <div class="col-xs-12 col-sm-6">
             <q-select
                v-model="meusDadosComputed.uf"
                float-label="Estado"
                radio
                :options="getUfList"
              />
            </div>

            <div class="col-xs-12 col-sm-6">
             <q-input v-model="meusDadosComputed.cidade" float-label="Cidade"/>
            </div>

            <div class="col-xs-12 col-sm-">
             <q-input v-model="meusDadosComputed.Bairro" float-label="Bairro"/>
            </div>

            <div class="col-xs-6 col-sm-3">
             <q-input type="number" v-model="meusDadosComputed.numero" float-label="Número"/>
            </div>

            <div class="col-xs-6 col-sm-">
             <q-input v-model="meusDadosComputed.complemento" float-label="Complemento"/>
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
             <q-input v-model="meusDadosComputed.telefone1" float-label="Telefone 1"/>
            </div>

            <div class="col-xs-6 col-sm-3">
             <q-input v-model="meusDadosComputed.telefone2" float-label="Telefone 2"/>
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
    ...mapGetters(['getUfList', 'getMeusDados', 'getDadosCEP']),
    meusDadosComputed: {
      get: function () {
        return this.getMeusDados
      },
      set: function (e) {
        return this.e
      }
    },
    dadosCepComputed: function () {
      return this.getDadosCEP
    }
  },
  methods: {
    ...mapMutations(['UPDATE_TITLE_NAVBAR', 'RESETAR_STATE_ENDERECO']),
    ...mapActions(['buscarEnderecoCepAction']),
    buscarCep: function () {
      const cep = this.meusDadosComputed.cep

      if (/^[0-9]{5}-[0-9]{3}$/.test(cep)) {
        // Resetar a state global
        this.RESETAR_STATE_ENDERECO()

        // CHAMAR A BUSCA DO CEP
        this.buscarEnderecoCepAction(cep)
          .then(() => {
            debugger
            var { logradouro, uf, cidade } = this.dadosCepComputed

            if (logradouro !== null) {
              this.meusDadosComputed.logradouro = logradouro
            }

            if (uf !== null) {
              this.meusDadosComputed.uf = uf
            }

            if (cidade !== null) {
              this.meusDadosComputed.cidade = cidade
            }
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
