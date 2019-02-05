<template>
  <div>
    <q-table
      title="Listagem de mesas"
      :data="serverData"
      :columns="columns"
      row-key="ms"
      :loading="loading">

      <q-tr slot="body" slot-scope="props" :props="props">
        <q-td key="numero" class="text-center">{{props.row.numero}}</q-td>
        <q-td key="praca" class="text-center">{{ props.row.praca }}</q-td>
        <q-td key="lugares" class="text-center">{{ props.row.lugares }}</q-td>
        <q-td key="ativo" class="text-center">{{ props.row.ativo }}</q-td>
        <q-td key="acoes" class="text-center">
          <q-btn size="sm" round dense color="red" icon="remove" class="q-mr-xs">
            <q-tooltip>Remover</q-tooltip>
          </q-btn>
          <q-btn size="sm" round dense color="warning" icon="edit" class="q-mr-xs" @click="editarMesa(props)">
            <q-tooltip>Editar</q-tooltip>
          </q-btn>
          <q-btn size="sm" round dense color="purple" icon="developer_mode" class="q-mr-xs">
            <q-tooltip>Gerar código da mesa</q-tooltip>
          </q-btn>
        </q-td>
      </q-tr>

    </q-table>
  </div>
</template>

<script>
import BaseDataTable from '../BaseDataTable.vue'
export default {
  name: 'DataTableMesaComponent',
  extends: BaseDataTable,
  data () {
    return {
      columns: [
        {
          name: 'ms',
          required: true,
          label: 'Mesa/Número',
          align: 'left',
          field: 'numero',
          sortable: true
        },
        {
          name: 'pc',
          required: true,
          label: 'Praça',
          align: 'left',
          field: 'praca',
          sortable: true
        },
        {
          name: 'lg',
          required: true,
          label: 'Quantidade de lugares',
          align: 'left',
          field: 'lugares',
          sortable: true
        },
        {
          name: 'at',
          required: true,
          label: 'Ativo',
          align: 'left',
          field: 'ativo',
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
    request ({ pagination, filter }) {
      const self = this

      self.loading = true
      // Chama um axios
      // no then chama: self.updateRowsTable (data, pagination)
      var data = {
        rows: [{
          id: 1,
          numero: '#A12',
          praca: 3,
          lugares: 4,
          ativo: 'SIM'
        }],
        rowsNumber: 1
      }

      setTimeout(function () {
        self.updateRowsTable(data, pagination)
        self.loading = false
      }, 1000)
    },
    editarMesa (props) {
      this.$emit('openModalEdicaoPai', props.row)
    }
  }
}
</script>

<style scoped>

</style>
