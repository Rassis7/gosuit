<template>
  <div>
    <q-timeline class="timeline" responsive color="secondary">

      <q-timeline-entry :subtitle="item.dataHora | formatarDataHoraParaTexto" side="left" v-for="(item, index) in produtos" v-bind:key="index">
        <div class="col-12">{{item.nome}}</div>
        <div class="col-12"><span class="q-caption">QUANTIDADE: {{item.quantidade}}</span></div>
        <div class="col-12"><span class="q-caption">VALOR: {{item.valor | formatarReal}}</span></div>
        <div class="col-12 text-positive"><span class="q-subheading text-weight-bold">TOTAL: {{(item.valor * item.quantidade) | formatarReal}}</span></div>
      </q-timeline-entry>

    </q-timeline>
  </div>
</template>

<script>
export default {
  name: 'itemComanadaComponent',
  props: ['produtosComanda'],
  computed: {
    produtos () {
      return this.produtosComanda
    }
  }
}
</script>

<style scoped>
.timeline{
  padding: 15px !important
}
</style>
