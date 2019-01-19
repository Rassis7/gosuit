<template>
   <q-layout class="scroll">

    <q-layout-header>
      <q-toolbar class="text-center">
            <q-toolbar-title>
              PEDIDO FINALIZADO
            </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <q-page>
        <div class="row">
          <div class="col-12">
            <q-card class="text-center">
              <q-card-title>
                Para confirmar o envio do pedido, aponte para o QrCode de sua mesa.
              </q-card-title>
              <q-card-main>
                <p class="text-faded">Esse passo é necessário, para que o estabelecimento saiba de qual mesa o pedido foi feito</p>
              </q-card-main>
            </q-card>
          </div>

          <div class="col-12 text-center qrDiv">
            <qr-code-reader @onDecoded="onDecodePai" @paused="pausedPai"/>
          </div>
        </div>
      </q-page>
    </q-page-container>

    <q-layout-footer :reveal="true">
      <q-toolbar color="primary">
        <q-btn flat class="full-width" label="VOLTAR AO CARDÁPIO" @click="$router.push('/cardapio')"/>
      </q-toolbar>
    </q-layout-footer>

   </q-layout>
</template>

<script>
import QrCodeReader from '../components/QrCodeReader'

export default {
  name: 'pedidoFinalizadoPage',
  components: {QrCodeReader},
  data () {
    return {
      pausedPai: false
    }
  },
  methods: {
    onDecodePai () {
      //
    }
  }
}
</script>

<style scoped>
.qrDiv {
  height: 30vh;
}
</style>
