<template>

  <div class="container-filter">
    <q-btn class="full-width" color="secondary" icon-right="filter_list" @click="opened = true" label="Filtro"/>

    <q-modal v-model="opened" position="top" @hide="aplicarFiltro ()">
      <div class="modal-header">
        <div class="row">
          <div class="col-6">
            <q-btn flat icon="clear" @click="opened = false"/>
          </div>
          <div class="col-6 text-right">
            <q-btn flat label="LIMPAR" @click="limparFiltros()"/>
          </div>
        </div>
      </div>

      <div class="modal-body">
        <q-tabs color="white" underline-color="primary">
          <!-- Tabs - notice slot="title" -->
          <q-tab default :alert="existeCategoriaSelecionada" slot="title" name="tab-categorias" color="dark" label="Categorias" @click="abaSelecionada = 1"/>
          <!-- <q-tab slot="title" :alert="existeOrdenacaoSelecionada" name="tab-ordenacao" color="dark" label="Ordenar" @click="abaSelecionada = 2"/> -->

          <!-- Categorias -->
          <q-tab-pane name="tab-categorias" class="row gutter-sm">
            <div class="col-4" v-for="(v, i) in categorias" v-bind:key="i">
              <q-btn color="primary" :label="v.nome" :outline="v.outline" @click="tratarCategoriaFiltro(v)"/>
            </div>
          </q-tab-pane>

          <!-- Outros -->
          <q-tab-pane name="tab-ordenacao">Tab Three</q-tab-pane>
        </q-tabs>
      </div>

      <div class="modal-footer text-center">
        <hr>
        <q-btn flat label="APLICAR" class="full-width btnAplicar" @click="aplicarFiltro()"/>
      </div>

    </q-modal>
  </div>

</template>

<script>
export default {
  name: 'filterComponent',
  props: ['itensCategoria'],
  data () {
    return {
      opened: false,
      existeCategoriaSelecionada: false,
      existeOrdenacaoSelecionada: false,
      abaSelecionada: 1
    }
  },
  computed: {
    categorias: {
      get: function () {
        return this.itensCategoria
      },
      set: function (item) {
        return item
      }
    }
  },
  methods: {
    tratarCategoriaFiltro (categoria) {
      // informo se tem que mostrar o outline ou não
      categoria.outline = !categoria.outline

      // se está selecionado, tenho que marcar o titulo
      if (categoria.outline === false) {
        this.existeCategoriaSelecionada = true
      } else {
        // se não, tenho que ver se todos estão desabilitados
        const desmarcados = this.categorias.filter(f => f.outline === false)
        if (desmarcados.length === 0) this.existeCategoriaSelecionada = false
      }
    },
    limparFiltros () {
      if (this.abaSelecionada === 1) {
        this.existeCategoriaSelecionada = false
        this.categorias.map(e => {
          e.outline = true
        })
      }
    },
    aplicarFiltro () {
      const params = {}

      // Primeiro pega as categorias
      params.categorias = this.categorias.filter(e => e.outline === false)
      // fechar
      this.opened = false
      // chamar o metodo do pai
      this.$emit('filtrarListaItensPai', params)
    }
  }
}
</script>

<style>
  .container-filter {
    padding: 10px 10px 10px;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .modal-body {
    padding: 10px 10px 15px
  }
  .btnAplicar {
    margin-bottom: 7px
  }
</style>
