<template>
  <div >
    <qrcode-stream
      class="qrcodeArea"
      @decode="onDecode"
      @init="onInit"
      :paused="paused"
      :camera="{ height: { min: 420, ideal: 640, max: 1080 } }"
      />
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'
import mixins from '../mixins'

export default {
  name: 'loginMesaPage',
  components: {
    QrcodeStream
  },
  props: ['pausedParam'],
  computed: {
    paused: {
      get: function () {
        return this.pausedParam
      },
      set: function (p) {
        return p
      }
    }
  },
  methods: {
    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        let message
        switch (error.name) {
          case 'NotAllowedError':
            message = 'ERROR: Você precisa conceder permisson de acesso à câmera'
            break
          case 'NotFoundError':
            message = 'ERROR: Nenhuma câmera encontrada neste dispositivo'
            break
          case 'NotSupportedError':
            message = 'ERROR: Você não está acessando o site de forma segura (falta https no inicio da url)'
            break
          case 'NotReadableError':
            message = 'ERROR: Sua câmera já está em uso'
            break
          case 'OverconstrainedError':
            message = 'ERROR: Sua câmera não é suportada para essa aplicação'
            break
          case 'StreamApiNotSupportedError':
            message = 'ERROR: Seu navegador não suporta o uso de câmera'
            break
        }
        mixins.response(400, message)
      }
    },
    onDecode (param) {
      this.$emit('onDecode', param)
    }
  }
}
</script>

<style scoped>

</style>
