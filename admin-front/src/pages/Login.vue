<template>
  <div>
      <div class="row container-box">
        <autenticacao-component v-show="loginVisible == true" @visibleLoginPai="loginVisible = false"/>
        <resgate-senha-component v-show="loginVisible == false" @visibleLoginPai="loginVisible = true"/>
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

<style lang="scss">
@import '../css/vars.scss';

.container-box {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

</style>
