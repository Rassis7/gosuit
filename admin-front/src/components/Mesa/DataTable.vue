<template>
  <div>
    <q-table
      title="Listagem de mesas"
      :data="serverData"
      :columns="columns"
      row-key="ms"
  />
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
          numero: '#A12',
          praca: 3,
          fat: 6.0,
          lugares: 4
        }],
        rowsNumber: 1
      }

      setTimeout(function () {
        self.updateRowsTable(data, pagination)
        self.loading = false
      }, 3000)
    }
  }
}
</script>

<style scoped>

</style>
