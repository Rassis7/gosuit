<template>
  <div class="col-xs-12 col-lg-10 offset-lg-1">
    <q-table
      title="Listagem de mesas"
      :data="serverData"
      :columns="columns"
      row-key="ms"
      :loading="loading">

      <q-tr slot="header" slot-scope="props" :props="props">
        <q-th v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.label }}
        </q-th>
      </q-tr>

      <q-tr slot="body" slot-scope="props" :props="props">
        <q-td key="ativo">
          <q-toggle
            :value="props.row.status"
            :label="(props.row.status == true)?'SIM':'NÃO'"
            left-label
            @change="ativarInativarItem(props.row)"
          />
        </q-td>
        <q-td key="numero">
          {{props.row.apelido}}
        </q-td>
        <q-td key="praca">
          {{ props.row.praca }}
        </q-td>
        <q-td key="lugares">
          {{ props.row.quantidadeLugares }}
        </q-td>
        <q-td key="acoes">
          <q-btn size="md" round dense color="red" icon="remove" class="q-mr-sm" @click="deletarMesa(props)">
            <q-tooltip>Deletar</q-tooltip>
          </q-btn>
          <q-btn size="md" round dense color="warning" icon="edit" class="q-mr-sm" @click="editarMesa(props)">
            <q-tooltip>Editar</q-tooltip>
          </q-btn>
          <q-btn size="md" round dense color="purple" icon="developer_mode" class="q-mr-sm">
            <q-tooltip>Gerar código da mesa</q-tooltip>
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
  name: 'DataTableMesaComponent',
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
    ...mapMutations(['SET_STATE_MESA']),
    request ({ pagination, filter }) {
      const self = this

      self.loading = true
      // Chama um axios
      // no then chama: self.updateRowsTable (data, pagination)
      var data = {
        rows: [{
          id: 1,
          apelido: '#A12',
          praca: 3,
          quantidadeLugares: 4,
          status: true
        },
        {
          id: 2,
          apelido: '#A10',
          praca: 3,
          quantidadeLugares: 6,
          status: false
        }],
        rowsNumber: 1
      }

      setTimeout(function () {
        self.updateRowsTable(data, pagination)
        self.loading = false
      }, 1000)
    },
    editarMesa (props) {
      this.SET_STATE_MESA(props.row)
      this.$emit('openModalEdicaoPai')
    },
    deletarMesa (props) {
      const self = this

      self.$q.dialog({
        title: 'Atenção',
        message: 'Deseja realmente deletar essa mesa?',
        cancel: 'NÃO',
        ok: 'SIM'
      }).then(() => {
        // faz o axios removendo a parada
        this.request({ pagination: this.serverPagination, filter: this.filter })
        self.$q.notify({message: 'Item deletado com sucesso', color: 'dark', icon: 'check_circle_outline', position: 'top-right'})
      })
    },
    ativarInativarItem (value) {
      // mudar no front-end
      value.status = !value.status

      // fazer um axios alterando o estado no backend
    }
  }
}
</script>

<style lang="scss">
@import '../../css/dataTable.scss';
</style>
