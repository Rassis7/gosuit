<template>
  <div class="col-xs-12 col-lg-10 offset-lg-1">
    <q-list separator>
      <q-collapsible icon="search" label="Filtros" class="form">

        <div class="row gutter-md">
          <div class="col-xs-12 col-sm-4">
            <q-input v-model="praca" float-label="Qual a praça?"/>
          </div>

          <div class="col-xs-12 col-sm-4">
            <q-input v-model="identificacao" float-label="Nome/Número"/>
          </div>

          <div class="col-xs-12 col-sm-4">
            <q-input v-model="qtdCadeiras" float-label="Quantas cadeiras?"/>
          </div>

          <div class="col-xs-12 col-sm-4">
            <q-select
              v-model="ativo"
              float-label="Ativo?"
              radio
              :options="selectOptions"
            />
          </div>

          <div class="col-12 text-right">
             <q-btn icon="filter_list" label="Filtrar" color="primary"/>
          </div>

        </div>

      </q-collapsible>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'filtrosMesaComponent',
  data () {
    return {
      praca: null,
      identificacao: null,
      qtdCadeiras: null,
      ativo: true,
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
