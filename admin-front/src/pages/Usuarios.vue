<template>
  <div>
    <q-page padding>
      <section class="administrador">
        <div class="text-center">
          <h5>GRUPO ADMINISTRADOR</h5>
        </div>

        <div class="administrador-body">
          <draggable class="list-group" :list="grupoAdminComputed" group="usuarios">
            <card-component :usuarios="grupoAdminComputed"/>
          </draggable>
        </div>

      </section>

      <section class="atendente">
        <div class="text-center">
          <h5>GRUPO ATENDENTE</h5>
        </div>

        <div class="atendente-body">
          <draggable class="list-group" :list="grupoAtendentesComputed" group="usuarios">
            <card-component :usuarios="grupoAtendentesComputed"/>
          </draggable>
        </div>
      </section>

      <section class="caixa">
        <div class="text-center">
          <h5>GRUPO CAIXA</h5>
        </div>

        <div class="caixa-body">
          <draggable class="list-group" :list="grupoCaixasComputed" group="usuarios">
            <card-component :usuarios="grupoCaixasComputed"/>
          </draggable>
        </div>
      </section>

    </q-page>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <float-button-component/>
    </q-page-sticky>
  </div>
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'
import draggable from 'vuedraggable'
import FloatButtonComponent from '../components/Usuarios/FloatButton'
import CardComponent from '../components/Usuarios/Cards'

export default {
  name: 'usuariosPage',
  components: {FloatButtonComponent, CardComponent, draggable},
  methods: {
    ...mapMutations(['UPDATE_TITLE_NAVBAR']),
    ...mapActions(['loadUsuariosAction'])
  },
  computed: {
    ...mapGetters(['getUsuariosAdministradores', 'getUsuariosAtendentes', 'getUsuariosCaixas']),
    grupoAdminComputed: {
      get: function () {
        return this.getUsuariosAdministradores
      },
      set: function (getUsuariosAdministradores) {
        return this.getUsuariosAdministradores
      }
    },
    grupoAtendentesComputed: {
      get: function () {
        return this.getUsuariosAtendentes
      },
      set: function (getUsuariosAtendentes) {
        return this.getUsuariosAtendentes
      }
    },
    grupoCaixasComputed: {
      get: function () {
        return this.getUsuariosCaixas
      },
      set: function (getUsuariosCaixas) {
        return this.getUsuariosCaixas
      }
    }
  },
  created: function () {
    // Atualizar o navbar
    this.UPDATE_TITLE_NAVBAR({title: 'Usuários', subTitle: 'Gerencie os usuários e seus grupos'})

    // Pegar os usários do banco
    this.loadUsuariosAction()
  }
}
</script>

<style lang="scss">
@import '../css/vars';

.administrador, .atendente, .caixa {
  min-height: 20vh;
  margin-block-start: 5vh;
  background-color: $cinzaf3;
}
</style>
