<template>
  <div>
    <q-toolbar class="q-py-none">
      <q-toolbar-title class="row">
            <span class="q-title text-justify">{{infosMensa | uppercase}}</span>
      </q-toolbar-title>

      <q-btn flat round dense icon="more_vert" @click="opened = true"/>

    </q-toolbar>

    <acoes-modal-component :toggle-action-modal="opened" @resetarPropAcoesModalFechar="opened = false"/>

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import AcoesModalComponent from './AcoesModal'

export default {
  name: 'tabComponent',
  components: {AcoesModalComponent},
  data () {
    return {
      infosMensa: null,
      opened: false
    }
  },
  methods: {
    ...mapActions(['listarInformacoesMesa'])
  },
  computed: {
    ...mapGetters(['getInfosMensa'])
  },
  mounted: function () {
    const self = this
    // Pegar as informações da mesa
    self.listarInformacoesMesa()
      .then(() => {
        self.infosMensa = this.getInfosMensa.apelido
      })
      .catch(e => {
        self.infosMensa = 'GoWaiter'
        console.error(e)
      })
  }
}
</script>

<style>
.infosMesa{
padding: 8px;
}
</style>
