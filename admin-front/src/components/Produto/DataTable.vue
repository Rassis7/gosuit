<template>
  <div class="col-xs-12 col-lg-10 offset-lg-1">
    <q-table
      title="Listagem de produtos"
      :data="serverData"
      :columns="columns"
      row-key="mn"
      :loading="loading">

      <q-tr slot="header" slot-scope="props" :props="props">
        <q-th v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.label }}
        </q-th>
      </q-tr>

      <q-tr slot="body" slot-scope="props" :props="props">
        <q-td key="ativo">
          <q-toggle
            :value="props.row.ativo"
            :label="(props.row.ativo == true)?'SIM':'NÃO'"
            left-label
            @change="ativarInativarItem(props.row)"
          />
        </q-td>
        <q-td key="nome">{{props.row.nome}}</q-td>
        <q-td key="valor">{{ props.row.valor | formatReal }}</q-td>
        <q-td key="acoes">
          <q-btn size="md" round dense color="red" icon="remove" class="q-mr-sm" @click="deletarProduto(props)">
            <q-tooltip>Deletar</q-tooltip>
          </q-btn>
          <q-btn size="md" round dense color="warning" icon="edit" class="q-mr-sm" @click="editarProduto(props)">
            <q-tooltip>Editar</q-tooltip>
          </q-btn>
        </q-td>
      </q-tr>

    </q-table>
  </div>
</template>

<script>
import BaseDataTable from '../BaseDataTable.vue'
import {mapMutations} from 'vuex'

export default {
  name: 'DataTableProdutoComponent',
  extends: BaseDataTable,
  data () {
    return {
      columns: [
        {
          name: 'at',
          required: true,
          label: 'Ativo',
          align: 'left',
          field: 'ativo',
          sortable: true
        },
        {
          name: 'nm',
          required: true,
          label: 'Nome',
          align: 'left',
          field: 'nome',
          sortable: true
        },
        {
          name: 'vl',
          required: true,
          label: 'Valor',
          align: 'left',
          field: 'valor',
          sortable: true
        },
        {
          name: 'ac',
          required: false,
          label: 'Ações',
          align: 'left',
          field: 'acoes',
          sortable: false
        }
      ],
      serverData: []
    }
  },
  methods: {
    ...mapMutations(['SET_STATE_PRODUTO']),
    request ({ pagination, filter }) {
      const self = this

      self.loading = true
      // Chama um axios
      // no then chama: self.updateRowsTable (data, pagination)
      var data = {
        rows: [{
          id: 1,
          nome: 'Cerveja RED',
          valor: 10,
          ativo: true,
          descricao: null
        },
        {
          id: 1,
          nome: 'Hamburguer picanha',
          valor: 3000,
          ativo: false,
          descricao: 'Pão, ovo, bife 120g ...'
        }],
        rowsNumber: 1
      }

      setTimeout(function () {
        self.updateRowsTable(data, pagination)
        self.loading = false
      }, 1000)
    },
    editarProduto (props) {
      this.SET_STATE_PRODUTO(props.row)
      this.$emit('openModalEdicaoPai')
    },
    deletarProduto (prop) {
      this.$q.dialog({
        title: 'Atenção',
        message: 'Deseja realmente deletar esse produto?',
        cancel: 'NÃO',
        ok: 'SIM'
      }).then(() => {
        // faz o axios removendo a parada
        this.request({ pagination: this.serverPagination, filter: this.filter })
        this.$q.notify({message: 'Item deletado com sucesso', color: 'dark', icon: 'check_circle_outline', position: 'top-right'})
      })
    },
    ativarInativarItem (value) {
      // Mudar no front
      value.ativo = !value.ativo

      // chamar um axios para isso
    }
  }
}
</script>

<style scoped>

</style>
