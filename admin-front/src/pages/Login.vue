<template>
  <div>
      <div class="row container-box">
        <div class="col-4 dark-box">
          <autenticacao-component v-show="loginVisible == true" @visibleLoginPai="loginVisible = false"/>

          <resgate-senha-component v-show="loginVisible == false" @visibleLoginPai="loginVisible = true"/>
        </div>
      </div>
  </div>
</template>

<script>
import AutenticacaoComponent from '../components/Autenticacao'
import ResgateSenhaComponent from '../components/ResgateSenha'

export default {
  name: 'LoginPage',
  components: {AutenticacaoComponent, ResgateSenhaComponent},
  data () {
    return {
      loginVisible: true
    }
  }
}
</script>

<style scoped>
.dark-box {
  background-color: #000 !important;
  position:absolute;
  padding: 15px 15px 15px;
  min-width: 300px;
  min-height: 400px;
}
.container-box {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

</style>
