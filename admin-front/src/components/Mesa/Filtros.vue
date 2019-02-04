<template>
  <div>
    <q-list separator>
      <q-collapsible icon="search" label="Filtros" class="form">

        <div class="col-4">
          <q-input v-model="praca" float-label="Qual a praça da mesa?"/>
        </div>

        <div class="col-4">
          <q-input v-model="identificacao" float-label="Nome/Número da mesa"/>
        </div>

        <div class="col-4">
          <q-input v-model="qtdCadeiras" float-label="Qual a quantidade de cadeiras?"/>
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
      qtdCadeiras: null
    }
  }
}
</script>

<style scoped>

</style>
