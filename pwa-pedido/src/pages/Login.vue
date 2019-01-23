<template>
  <q-layout view="hHr LpR lFf">

    <q-page-container>
      <q-page>
        <div class="row gutter-sm">

          <div class="col-12 text-center">
            <img src="~assets/logo.png" style="width:100vw;max-width:300px;">
          </div>

          <div class="col-12 text-center">
            <login-facebook @atualizarUsuario="addUserItens"></login-facebook>
          </div>

          <!-- <div class="col-12 text-center">
            <login-google @atualizarUsuario="addUserItens"></login-google>
          </div> -->

        </div>
      </q-page>
    </q-page-container>

  </q-layout>

</template>

<script>
import loginGoogle from '../components/LoginGoogle'
import loginFacebook from '../components/LoginFacebook'
import { mapActions } from 'vuex'

export default {
  name: 'loginMesaPage',
  components: {
    loginGoogle,
    loginFacebook
  },
  data () {
    return {}
  },
  methods: {
    ...mapActions(['setLeadAPi']),
    addUserItens (itens, redeSocial) {
      try {
        if (itens.nome === null || itens.email === null || itens.socialToken === null) {
          throw new Error(`Erro ao buscar as credenciais no ${redeSocial}`)
        }
        // passou da validacao, salvo em local storage e seto a mesa nulo
        itens.redeSocial = redeSocial

        this.setLeadAPi(itens)
          .catch(e => console.error(e))

        this.$q.localStorage.set('userData', itens)

        // Agora que salvei o usuário e salvei o lead, redireciono para a página de leitura do QR Code
        this.$router.push('/lerQrCode')
      } catch (error) {
        this.$q.notify(error.message)
      }
    }
  },
  mounted: function () {
    this.$q.localStorage.clear()
  }
}
</script>

<style scoped>
.qrcode{
  border: 1px solid;
  border-color: #000
}
</style>
