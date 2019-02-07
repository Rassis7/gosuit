<template>
  <div class="col-10 offset-1">
    <q-list separator>
      <q-collapsible icon="search" label="Filtros" class="form">
        <div class="row gutter-md">

          <div class="col-xs-12 col-sm-4">
            <q-input v-model="praca" float-label="Qual o nome do produto?"/>
          </div>

          <div class="col-xs-12 col-sm-4">
            <q-input v-model.lazy="valor" v-money="money" float-label="Valor do produto"/>
          </div>

          <div class="col-4">
            <q-select
              v-model="ativo"
              float-label="Ativo?"
              radio
              :options="selectOptions"
            />
          </div>

        </div>
      </q-collapsible>
    </q-list>
  </div>
</template>

<script>
import { maskMoney } from '../../util/constants'

export default {
  name: 'FiltroProdutoComponent',
  data () {
    return {
      money: maskMoney,
      valor: null,
      ativo: true,
      praca: null,
      selectOptions: [
        {
          label: 'SIM',
          value: true
        },
        {
          label: 'NÃO',
          value: false
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
